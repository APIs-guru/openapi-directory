# openapi-client
The Snyk API is available to customers on [Business and Enterprise plans](https://snyk.io/plans) and allows you to programatically integrate with Snyk.

## REST API

We are in the process of building a new, improved API (`https://api.snyk.io/rest`) built using the OpenAPI and JSON API standards. We welcome you to try it out as we shape and release endpoints until it, ultimately, becomes a full replacement for our current API.

Looking for our REST API docs? Please head over to [https://apidocs.snyk.io](https://apidocs.snyk.io)

## API vs CLI vs Snyk integration

The API detailed below has the ability to test a package for issues, as they are defined by Snyk. It is important to note that for many package managers, using this API will be less accurate than running the [Snyk CLI](https://snyk.io/docs/using-snyk) as part of your build pipe, or just using it locally on your package. The reason for this is that more than one package version fit the requirements given in manifest files. Running the CLI locally tests the actual deployed code, and has an accurate snapshot of the dependency versions in use, while the API can only infer it, with inferior accuracy. It should be noted that the Snyk CLI has the ability to output machine-readable JSON output (with the `--json` flag to `snyk test`).

A third option, is to allow Snyk access to your development flow via the existing [Snyk integrations](https://snyk.io/docs/). The advantage to this approach is having Snyk monitor every new pull request, and suggest fixes by opening new pull requests. This can be achieved either by integrating Snyk directly to your source code management (SCM) tool, or via a broker to allow greater security and auditability.

If those are not viable options, this API is your best choice.

## API url

The base URL for all API endpoints is https://api.snyk.io/v1/

## Authorization

To use this API, you must get your token from Snyk. It can be seen on https://snyk.io/account/ after you register with Snyk and login.

The token should be supplied in an `Authorization` header with the token, preceded by `token`:

```http
Authorization: token API_KEY
```

Otherwise, a 401 \"Unauthorized\" response will be returned.

```http
HTTP/1.1 401 Unauthorized

        {
            \"code\": 401,
            \"error\": \"Not authorised\",
            \"message\": \"Not authorised\"
        }
```

## Overview and entities

The API is a REST API. It has the following entities:

### Test result

The test result is the object returned from the API giving the results of testing a package for issues. It has the following fields:

| Property        | Type    | Description                                           | Example                                                         |
|----------------:|---------|-------------------------------------------------------|-----------------------------------------------------------------|
| ok              | boolean | Does this package have one or more issues?             | false                                                           |
| issues          | object  | The issues found. See below for details.              | See below                                                       |
| dependencyCount | number  | The number of dependencies the package has.           | 9                                                               |
| org             | object  | The organization this test was carried out for.       | {\"name\": \"anOrg\", \"id\": \"5d7013d9-2a57-4c89-993c-0304d960193c\"} |
| licensesPolicy  | object  | The organization's licenses policy used for this test | See in the examples                                             |
| packageManager  | string  | The package manager for this package                  | \"maven\"                                                         |
|                 |         |                                                       |                                                                 |

### Issue

An issue is either a vulnerability or a license issue, according to the organization's policy. It has the following fields:

| Property       | Type          | Description                                                                                                                | Example                                |
|---------------:|---------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| id             | string        | The issue ID                                                                                                               | \"SNYK-JS-BACKBONE-10054\"               |
| url            | string        | A link to the issue details on snyk.io                                                                                     | \"https://snyk.io/vuln/SNYK-JS-BACKBONE-10054 |
| title          | string        | The issue title                                                                                                            | \"Cross Site Scripting\"                 |
| type           | string        | The issue type: \"license\" or \"vulnerability\".                                                                              | \"license\"                              |
| paths          | array         | The paths to the dependencies which have an issue, and their corresponding upgrade path (if an upgrade is available). [More information about from and upgrade paths](#introduction/overview-and-entities/from-and-upgrade-paths) | [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;\"from\": [\"a@1.0.0\", \"b@4.8.1\"],<br>&nbsp;&nbsp;&nbsp;&nbsp;\"upgrade\": [false, \"b@4.8.2\"]<br>&nbsp;&nbsp;}<br>] |
| package        | string        | The package identifier according to its package manager                                                                    | \"backbone\", \"org.apache.flex.blazeds:blazeds\"|
| version        | string        | The package version this issue is applicable to.                                                                           | \"0.4.0\"                                |
| severity       | string        | The Snyk defined severity level: \"critical\", \"high\", \"medium\" or \"low\".                                                    | \"high\"                                 |
| language       | string        | The package's programming language                                                                                         | \"js\"                                   |
| packageManager | string        | The package manager                                                                                                        | \"npm\"                                  |
| semver         | array[string] OR map[string]array[string] | One or more [semver](https://semver.org) ranges this issue is applicable to. The format varies according to package manager. | [\"<0.5.0, >=0.4.0\", \"<0.3.8, >=0.3.6\"] OR { \"vulnerable\": [\"[2.0.0, 3.0.0)\"], \"unaffected\": [\"[1, 2)\", \"[3, )\"] } |

### Vulnerability

A vulnerability in a package. In addition to all the fields present in an issue, a vulnerability also has these fields:

Property        | Type    | Description                                                                                                                                                                                                                      | Example                                        |
----------------:|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
 publicationTime | Date    | The vulnerability publication time                                                                                                                                                                                               | \"2016-02-11T07:16:18.857Z\"                     |
 disclosureTime  | Date    | The time this vulnerability was originally disclosed to the package maintainers                                                                                                                                                   | \"2016-02-11T07:16:18.857Z\"                     |
 isUpgradable    | boolean | Is this vulnerability fixable by upgrading a dependency?                                                                                                                                                                         | true                                           |
 description     | string  | The detailed description of the vulnerability, why and how it is exploitable. Provided in markdown format. | \"## Overview\\n[`org.apache.logging.log4j:log4j-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22log4j-core%22)\\nIn Apache Log4j 2.x before 2.8.2, when using the TCP socket server or UDP socket server to receive serialized log events from another application, a specially crafted binary payload can be sent that, when deserialized, can execute arbitrary code.\\n\\n# Details\\nSerialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.\\n\\n_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution. \\n\\nJava deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.\\n\\nAn attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.\\n\\n> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).\\n- Apache Blog\\n\\n\\n## References\\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5645)\\n- [jira issue](https://issues.apache.org/jira/browse/LOG4J2-1863)\\n\" |
 isPatchable     | boolean | Is this vulnerability fixable by using a Snyk supplied patch?                                                                                                                                                                    | true                                           |
 isPinnable      | boolean | Is this vulnerability fixable by pinning a transitive dependency                                                                                                                                                                 | true                                           |
 identifiers     | object  | Additional vulnerability identifiers                                                                                                                                                                                             | {\"CWE\": [], \"CVE\": [\"CVE-2016-2402]}           |
 credit          | string  | The reporter of the vulnerability                                                                                                                                                                                                | \"Snyk Security Team\"                           |
 CVSSv3          | string  | Common Vulnerability Scoring System (CVSS) provides a way to capture the principal characteristics of a vulnerability, and produce a numerical score reflecting its severity, as well as a textual representation of that score. | \"CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N\" |
 cvssScore       | number  | CVSS Score                                                                                                                                                                                                                       | 5.3                                            |
 patches         | array   | Patches to fix this issue, by snyk                                                                                                                                                                                               | see \"Patch\" below.                             |
 upgradePath     | object  | The path to upgrade this issue, if applicable                                                                                                                                                                                    | see below                                      |
 isPatched       | boolean | Is this vulnerability patched?                                                                                                                                                                                                   | false                                          |
 exploitMaturity | string  | The snyk exploit maturity level

#### Patch

A patch is an object like this one:

```json
{
  \"urls\": [
    \"https://snyk-patches.s3.amazonaws.com/npm/backbone/20110701/backbone_20110701_0_0_0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch\"
  ],
  \"version\": \"<0.5.0 >=0.3.3\",
  \"modificationTime\": \"2015-11-06T02:09:36.180Z\",
  \"comments\": [
    \"https://github.com/jashkenas/backbone/commit/0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch\"
  ],
  \"id\": \"patch:npm:backbone:20110701:0\"
}
```

### From and upgrade paths

Both from and upgrade paths are arrays, where each item within the array is a package `name@version`.

Take the following `from` path:

```
[
  \"my-project@1.0.0\",
  \"actionpack@4.2.5\",
  \"rack@1.6.4\"
]
```

Assuming this was returned as a result of a test, then we know:

- The package that was tested was `my-project@1.0.0`

- The dependency with an issue was included in the tested package via the direct dependency `actionpack@4.2.5`

- The dependency with an issue was [rack@1.6.4](https://snyk.io/vuln/rubygems:rack@1.6.4)

Take the following `upgrade` path:

```
[
  false,
  \"actionpack@5.0.0\",
  \"rack@2.0.1\"
]
```

Assuming this was returned as a result of a test, then we know:

- The package that was tested is not upgradable (`false`)

- The direct dependency `actionpack` should be upgraded to at least version `5.0.0` in order to fix the issue

- Upgrading `actionpack` to version `5.0.0` will cause `rack` to be installed at version `2.0.1`

If the `upgrade` path comes back as an empty array (`[]`) then this means that there is no upgrade path available which would fix the issue.

### License issue

A license issue has no additional fields other than the ones in \"Issue\".

### Snyk organization

The organization in Snyk this request is applicable to. The organization determines the access rights, licenses policy and is the unit of billing for private projects.

A Snyk organization has these fields:

Property    | Type   | Description                   | Example                                |
-----------:| ------ | ----------------------------- | -------------------------------------- |
name        | string | The organization display name | \"deelmaker\"                            |
id          | string | The ID of the organization    | \"3ab0f8d3-b17d-4953-ab6d-e1cbfe1df385\" |

## Errors

This is a beta release of this API. Therefore, despite our efforts, errors might occur. In the unlikely event of such an error, it will have the following structure as JSON in the body:

Property    | Type   | Description                   | Example                                |
-----------:| ------ | ----------------------------- | -------------------------------------- |
message     | string | Error message with reference  | Error calling Snyk api (reference: 39db46b1-ad57-47e6-a87d-e34f6968030b) |
errorRef    | V4 uuid | An error ref to contact Snyk with | 39db46b1-ad57-47e6-a87d-e34f6968030b |

The error reference will also be supplied in the `x-error-reference` header in the server reply.

Example response:

```http
HTTP/1.1 500 Internal Server Error
x-error-reference: a45ec9c1-065b-4f7b-baf8-dbd1552ffc9f
Content-Type: application/json; charset=utf-8
Content-Length: 1848
Vary: Accept-Encoding
Date: Sun, 10 Sep 2017 06:48:40 GMT
```

## Rate Limiting

To ensure resilience against increasing request rates, we are starting to introduce rate-limiting.
We are monitoring the rate-limiting system to ensure minimal impact on users while ensuring system stability.
The limit is up to 2000 requests per minute, per user, subject to change. As such, we recommend calls to the API are throttled regardless of the current limit.
All requests above the limit will get a response with status code `429` - `Too many requests` until requests stop for the duration of the rate-limiting interval (currently a minute).

## Consuming Webhooks

Webhooks are delivered with a `Content-Type` of `application/json`, with the event payload as JSON in the request body. We also send the following headers:

- `X-Snyk-Event` - the name of the event

- `X-Snyk-Transport-ID` - a GUID to identify this delivery

- `X-Snyk-Timestamp` - an ISO 8601 timestamp for when the event occurred, for example: `2020-09-25T15:27:53Z`

- `X-Hub-Signature` - the HMAC hex digest of the request body, used to secure your webhooks and ensure the request did indeed come from Snyk

- `User-Agent` - identifies the origin of the request, for example: `Snyk-Webhooks/XXX`

---

After your server is configured to receive payloads, it listens for any payload sent to the endpoint you configured. For security reasons, you should limit requests to those coming from Snyk.

### Validating payloads

All transports sent to your webhooks have a `X-Hub-Signature` header, which contains the hash signature for the transport. The signature is a HMAC hexdigest of the request body, generated using sha256 and your `secret` as the HMAC key.

You could use a function in Node.JS such as the following to validate these signatures on incoming requests from Snyk:

```javascript
import * as crypto from 'crypto';

function verifySignature(request, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const buffer = JSON.stringify(request.body);
  hmac.update(buffer, 'utf8');

  const signature = `sha256=${hmac.digest('hex')}`;

  return signature === request.headers['x-hub-signature'];
}
```

### Payload versioning

Payloads may evolve over time, and so are versioned. Payload versions are supplied as a suffix to the `X-Snyk-Event` header. For example, `project_snapshot/v0` indicates that the payload is `v0` of the `project_snapshot` event.

Version numbers only increment when a breaking change is made; for example, removing a field that used to exist, or changing the name of a field. Version numbers do not increment when making an additive change, such as adding a new field that never existed before.

**Note:** During the BETA phase, the structure of webhook payloads may change at any time, so we  recommend you check the payload version.

### Event types

While consuming a webhook event, `X-Snyk-Event` header must be checked, as an end-point may receive multiple event types.

#### ping

The ping event happens after a new webhook is created, and can also be manually triggered using the ping webhook API. This is useful to test that your webhook receives data from Snyk correctly.

The `ping` event makes the following request:

```jsx
POST /webhook-handler/snyk123 HTTP/1.1
Host: my.app.com
X-Snyk-Event: ping/v0
X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a
X-Snyk-Timestamp: 2020-09-25T15:27:53Z
X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6
User-Agent: Snyk-Webhooks/044aadd
Content-Type: application/json
{
  \"webhookId\": \"d3cf26b3-2d77-497b-bce2-23b33cc15362\"
}
```

#### project_snapshot

This event is triggered every time an existing project is tested and a new snapshot is created. It is triggered on every test of a project, whether or not there are new issues. This event is not triggered when a new project is created or imported. Currently supported targets/scan types are Open Source and container.

```jsx
POST /webhook-handler/snyk123 HTTP/1.1
Host: my.app.com
X-Snyk-Event: project_snapshot/v0
X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a
X-Snyk-Timestamp: 2020-09-25T15:27:53Z
X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6
User-Agent: Snyk-Webhooks/044aadd
Content-Type: application/json
{
  \"project\": { ... }, // project object matching API responses
  \"org\": { ... }, // organization object matching API responses
  \"group\": { ... }, // group object matching API responses
  \"newIssues\": [], // array of issues object matching API responses
  \"removedIssues\": [], // array of issues object matching API responses
}
```

####  Detailed example of a payload

##### project

see: [https://snyk.docs.apiary.io/#reference/projects](https://snyk.docs.apiary.io/#reference/projects)

```tsx
\"project\": {
  \"name\": \"snyk/goof\",
  \"id\": \"af137b96-6966-46c1-826b-2e79ac49bbd9\",
  \"created\": \"2018-10-29T09:50:54.014Z\",
  \"origin\": \"github\",
  \"type\": \"maven\",
  \"readOnly\": false,
  \"testFrequency\": \"daily\",
  \"totalDependencies\": 42,
  \"issueCountsBySeverity\": {
    \"low\": 13,
    \"medium\": 8,
    \"high\": 4,
    \"critical\": 5
  },
  \"imageId\": \"sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019\",
  \"imageTag\": \"latest\",
  \"imageBaseImage\": \"alpine:3\",
  \"imagePlatform\": \"linux/arm64\",
  \"imageCluster\": \"Production\",
  \"hostname\": null,
  \"remoteRepoUrl\": \"https://github.com/snyk/goof.git\",
  \"lastTestedDate\": \"2019-02-05T08:54:07.704Z\",
  \"browseUrl\": \"https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9\",
  \"importingUser\": {
    \"id\": \"e713cf94-bb02-4ea0-89d9-613cce0caed2\",
    \"name\": \"example-user@snyk.io\",
    \"username\": \"exampleUser\",
    \"email\": \"example-user@snyk.io\"
  },
  \"isMonitored\": false,
  \"branch\": null,
  \"targetReference\": null,
  \"tags\": [
    {
      \"key\": \"example-tag-key\",
      \"value\": \"example-tag-value\"
    }
  ],
  \"attributes\": {
    \"criticality\": [
      \"high\"
    ],
    \"environment\": [
      \"backend\"
    ],
    \"lifecycle\": [
      \"development\"
    ]
  },
  \"remediation\": {
    \"upgrade\": {},
    \"patch\": {},
    \"pin\": {}
  }
}
```

##### org

see: [https://snyk.docs.apiary.io/#reference/organizations](https://snyk.docs.apiary.io/#reference/organizations)

```tsx
\"org\": {
  \"name\": \"My Org\",
  \"id\": \"a04d9cbd-ae6e-44af-b573-0556b0ad4bd2\",
  \"slug\": \"my-org\",
  \"url\": \"https://api.snyk.io/org/my-org\",
  \"created\": \"2020-11-18T10:39:00.983Z\"
}
```

##### group

see: [https://snyk.docs.apiary.io/#reference/groups](https://snyk.docs.apiary.io/#reference/groups)

```tsx
\"group\": {
  \"name\": \"ACME Inc.\",
   \"id\": \"a060a49f-636e-480f-9e14-38e773b2a97f\"
}
```

##### issue

see: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/list-all-aggregated-issues

```tsx
{
  \"id\": \"npm:ms:20170412\",
  \"issueType\": \"vuln\",
  \"pkgName\": \"ms\",
  \"pkgVersions\": [
    \"1.0.0\"
  ],
  \"issueData\": {
    \"id\": \"npm:ms:20170412\",
    \"title\": \"Regular Expression Denial of Service (ReDoS)\",
    \"severity\": \"low\",
    \"url\": \"https://snyk.io/vuln/npm:ms:20170412\",
    \"description\": \"Lorem ipsum\",
    \"identifiers\": {
      \"CVE\": [],
      \"CWE\": [
        \"CWE-400\"
      ],
      \"ALTERNATIVE\": [
        \"SNYK-JS-MS-10509\"
      ]
    },
    \"credit\": [
      \"Snyk Security Research Team\"
    ],
    \"exploitMaturity\": \"no-known-exploit\",
    \"semver\": {
      \"vulnerable\": [
        \">=0.7.1 <2.0.0\"
      ]
    },
    \"publicationTime\": \"2017-05-15T06:02:45Z\",
    \"disclosureTime\": \"2017-04-11T21:00:00Z\",
    \"CVSSv3\": \"CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L\",
    \"cvssScore\": 3.7,
    \"language\": \"js\",
    \"patches\": [
      {
        \"id\": \"patch:npm:ms:20170412:2\",
        \"urls\": [
          \"https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_071.patch\"
        ],
        \"version\": \"=0.7.1\",
        \"comments\": [],
        \"modificationTime\": \"2019-12-03T11:40:45.866206Z\"
      }
    ],
    \"nearestFixedInVersion\": \"2.0.0\"
  },
  \"isPatched\": false,
  \"isIgnored\": false,
  \"fixInfo\": {
    \"isUpgradable\": false,
    \"isPinnable\": false,
    \"isPatchable\": true,
    \"nearestFixedInVersion\": \"2.0.0\"
  },
  \"priority\": {
    \"score\": 399,
    \"factors\": [
      {
        \"name\": \"isFixable\",
        \"description\": \"Has a fix available\"
      },
      {
        \"name\": \"cvssScore\",
        \"description\": \"CVSS 3.7\"
      }
    ]
  }
}
```

This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AuditLogsApi(api_client)
    group_id = '4a18d42f-0706-4ad0-b127-24078731fbea' # str | The group ID. The `API_KEY` must have access to this group.
    var_from = '2019-07-01' # str | The date you wish to fetch results from, in the format YYYY-MM-DD. Default is 3 months ago. Please note that logs are only available for past 3 months. (optional)
    to = '2019-07-07' # str | The date you wish to fetch results until, in the format YYYY-MM-DD. Default is today. Please note that logs are only available for past 3 months. (optional)
    page = 1 # float | The page of results to request. Audit logs are returned in page sizes of 100 (optional)
    sort_order = 'ASC' # str | The sort order of the returned audit logs by date. Values: `ASC`, `DESC`. Default: `DESC`. (optional)
    get_group_level_audit_logs_request = openapi_client.GetGroupLevelAuditLogsRequest() # GetGroupLevelAuditLogsRequest |  (optional)

    try:
        # Get group level audit logs
        api_instance.get_group_level_audit_logs(group_id, var_from=var_from, to=to, page=page, sort_order=sort_order, get_group_level_audit_logs_request=get_group_level_audit_logs_request)
    except ApiException as e:
        print("Exception when calling AuditLogsApi->get_group_level_audit_logs: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.snyk.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuditLogsApi* | [**get_group_level_audit_logs**](docs/AuditLogsApi.md#get_group_level_audit_logs) | **POST** /group/{groupId}/audit | Get group level audit logs
*AuditLogsApi* | [**get_organization_level_audit_logs**](docs/AuditLogsApi.md#get_organization_level_audit_logs) | **POST** /org/{orgId}/audit | Get organization level audit logs
*DependenciesApi* | [**list_all_dependencies**](docs/DependenciesApi.md#list_all_dependencies) | **POST** /org/{orgId}/dependencies | List all dependencies
*EntitlementsApi* | [**get_an_organizations_entitlement_value**](docs/EntitlementsApi.md#get_an_organizations_entitlement_value) | **GET** /org/{orgId}/entitlement/{entitlementKey} | Get an organization&#39;s entitlement value
*EntitlementsApi* | [**list_all_entitlements**](docs/EntitlementsApi.md#list_all_entitlements) | **GET** /org/{orgId}/entitlements | List all entitlements
*GroupsApi* | [**add_a_member_to_an_organization_within_a_group**](docs/GroupsApi.md#add_a_member_to_an_organization_within_a_group) | **POST** /group/{groupId}/org/{orgId}/members | Add a member to an organization within a group
*GroupsApi* | [**delete_tag_from_group**](docs/GroupsApi.md#delete_tag_from_group) | **POST** /group/{groupId}/tags/delete | Delete tag from group
*GroupsApi* | [**list_all_members_in_a_group**](docs/GroupsApi.md#list_all_members_in_a_group) | **GET** /group/{groupId}/members | List all members in a group
*GroupsApi* | [**list_all_organizations_in_a_group**](docs/GroupsApi.md#list_all_organizations_in_a_group) | **GET** /group/{groupId}/orgs | List all organizations in a group
*GroupsApi* | [**list_all_roles_in_a_group**](docs/GroupsApi.md#list_all_roles_in_a_group) | **GET** /group/{groupId}/roles | List all roles in a group
*GroupsApi* | [**list_all_tags_in_a_group**](docs/GroupsApi.md#list_all_tags_in_a_group) | **GET** /group/{groupId}/tags | List all tags in a group
*GroupsApi* | [**update_group_settings**](docs/GroupsApi.md#update_group_settings) | **PUT** /group/{groupId}/settings | Update group settings
*GroupsApi* | [**view_group_settings**](docs/GroupsApi.md#view_group_settings) | **GET** /group/{groupId}/settings | View group settings
*ImportProjectsApi* | [**get_import_job_details**](docs/ImportProjectsApi.md#get_import_job_details) | **GET** /org/{orgId}/integrations/{integrationId}/import/{jobId} | Get import job details
*ImportProjectsApi* | [**import_targets**](docs/ImportProjectsApi.md#import_targets) | **POST** /org/{orgId}/integrations/{integrationId}/import | Import targets
*IntegrationsApi* | [**add_new_integration**](docs/IntegrationsApi.md#add_new_integration) | **POST** /org/{orgId}/integrations | Add new integration
*IntegrationsApi* | [**clone_an_integration__with_settings_and_credentials**](docs/IntegrationsApi.md#clone_an_integration__with_settings_and_credentials) | **POST** /org/{orgId}/integrations/{integrationId}/clone | Clone an integration (with settings and credentials)
*IntegrationsApi* | [**delete_credentials**](docs/IntegrationsApi.md#delete_credentials) | **DELETE** /org/{orgId}/integrations/{integrationId}/authentication | Delete credentials
*IntegrationsApi* | [**get_existing_integration_by_type**](docs/IntegrationsApi.md#get_existing_integration_by_type) | **GET** /org/{orgId}/integrations/{type} | Get existing integration by type
*IntegrationsApi* | [**list**](docs/IntegrationsApi.md#list) | **GET** /org/{orgId}/integrations | List
*IntegrationsApi* | [**provision_new_broker_token**](docs/IntegrationsApi.md#provision_new_broker_token) | **POST** /org/{orgId}/integrations/{integrationId}/authentication/provision-token | Provision new broker token
*IntegrationsApi* | [**retrieve**](docs/IntegrationsApi.md#retrieve) | **GET** /org/{orgId}/integrations/{integrationId}/settings | Retrieve
*IntegrationsApi* | [**switch_between_broker_tokens**](docs/IntegrationsApi.md#switch_between_broker_tokens) | **POST** /org/{orgId}/integrations/{integrationId}/authentication/switch-token | Switch between broker tokens
*IntegrationsApi* | [**update**](docs/IntegrationsApi.md#update) | **PUT** /org/{orgId}/integrations/{integrationId}/settings | Update
*IntegrationsApi* | [**update_existing_integration**](docs/IntegrationsApi.md#update_existing_integration) | **PUT** /org/{orgId}/integrations/{integrationId} | Update existing integration
*LicensesApi* | [**list_all_licenses**](docs/LicensesApi.md#list_all_licenses) | **POST** /org/{orgId}/licenses | List all licenses
*MonitorApi* | [**monitor_dep_graph**](docs/MonitorApi.md#monitor_dep_graph) | **POST** /monitor/dep-graph | Monitor Dep Graph
*OrganizationsApi* | [**create_a_new_organization**](docs/OrganizationsApi.md#create_a_new_organization) | **POST** /org | Create a new organization
*OrganizationsApi* | [**delete_pending_user_provision**](docs/OrganizationsApi.md#delete_pending_user_provision) | **DELETE** /org/{orgId}/provision | Delete pending user provision
*OrganizationsApi* | [**invite_users**](docs/OrganizationsApi.md#invite_users) | **POST** /org/{orgId}/invite | Invite users
*OrganizationsApi* | [**list_all_the_organizations_a_user_belongs_to**](docs/OrganizationsApi.md#list_all_the_organizations_a_user_belongs_to) | **GET** /orgs | List all the organizations a user belongs to
*OrganizationsApi* | [**list_members**](docs/OrganizationsApi.md#list_members) | **GET** /org/{orgId}/members | List Members
*OrganizationsApi* | [**list_pending_user_provisions**](docs/OrganizationsApi.md#list_pending_user_provisions) | **GET** /org/{orgId}/provision | List pending user provisions
*OrganizationsApi* | [**org_org_id_notification_settings_get**](docs/OrganizationsApi.md#org_org_id_notification_settings_get) | **GET** /org/{orgId}/notification-settings | Get organization notification settings
*OrganizationsApi* | [**provision_a_user_to_the_organization**](docs/OrganizationsApi.md#provision_a_user_to_the_organization) | **POST** /org/{orgId}/provision | Provision a user to the organization
*OrganizationsApi* | [**remove_a_member_from_the_organization**](docs/OrganizationsApi.md#remove_a_member_from_the_organization) | **DELETE** /org/{orgId}/members/{userId} | Remove a member from the organization
*OrganizationsApi* | [**remove_organization**](docs/OrganizationsApi.md#remove_organization) | **DELETE** /org/{orgId} | Remove organization
*OrganizationsApi* | [**set_notification_settings**](docs/OrganizationsApi.md#set_notification_settings) | **PUT** /org/{orgId}/notification-settings | Set notification settings
*OrganizationsApi* | [**update_a_member_in_the_organization**](docs/OrganizationsApi.md#update_a_member_in_the_organization) | **PUT** /org/{orgId}/members/{userId} | Update a member in the organization
*OrganizationsApi* | [**update_a_members_role_in_the_organization**](docs/OrganizationsApi.md#update_a_members_role_in_the_organization) | **PUT** /org/{orgId}/members/update/{userId} | Update a member&#39;s role in the organization
*OrganizationsApi* | [**update_organization_settings**](docs/OrganizationsApi.md#update_organization_settings) | **PUT** /org/{orgId}/settings | Update organization settings
*OrganizationsApi* | [**view_organization_settings**](docs/OrganizationsApi.md#view_organization_settings) | **GET** /org/{orgId}/settings | View organization settings
*ProjectsApi* | [**activate**](docs/ProjectsApi.md#activate) | **POST** /org/{orgId}/project/{projectId}/activate | Activate
*ProjectsApi* | [**add_a_tag_to_a_project**](docs/ProjectsApi.md#add_a_tag_to_a_project) | **POST** /org/{orgId}/project/{projectId}/tags | Add a tag to a project
*ProjectsApi* | [**add_ignore**](docs/ProjectsApi.md#add_ignore) | **POST** /org/{orgId}/project/{projectId}/ignore/{issueId} | Add ignore
*ProjectsApi* | [**applying_attributes**](docs/ProjectsApi.md#applying_attributes) | **POST** /org/{orgId}/project/{projectId}/attributes | Applying attributes
*ProjectsApi* | [**create_jira_issue**](docs/ProjectsApi.md#create_jira_issue) | **POST** /org/{orgId}/project/{projectId}/issue/{issueId}/jira-issue | Create jira issue
*ProjectsApi* | [**deactivate**](docs/ProjectsApi.md#deactivate) | **POST** /org/{orgId}/project/{projectId}/deactivate | Deactivate
*ProjectsApi* | [**delete_a_project**](docs/ProjectsApi.md#delete_a_project) | **DELETE** /org/{orgId}/project/{projectId} | Delete a project
*ProjectsApi* | [**delete_ignores**](docs/ProjectsApi.md#delete_ignores) | **DELETE** /org/{orgId}/project/{projectId}/ignore/{issueId} | Delete ignores
*ProjectsApi* | [**delete_project_settings**](docs/ProjectsApi.md#delete_project_settings) | **DELETE** /org/{orgId}/project/{projectId}/settings | Delete project settings
*ProjectsApi* | [**get_project_dependency_graph**](docs/ProjectsApi.md#get_project_dependency_graph) | **GET** /org/{orgId}/project/{projectId}/dep-graph | Get Project dependency graph
*ProjectsApi* | [**list_all_aggregated_issues**](docs/ProjectsApi.md#list_all_aggregated_issues) | **POST** /org/{orgId}/project/{projectId}/aggregated-issues | List all Aggregated issues
*ProjectsApi* | [**list_all_ignores**](docs/ProjectsApi.md#list_all_ignores) | **GET** /org/{orgId}/project/{projectId}/ignores | List all ignores
*ProjectsApi* | [**list_all_jira_issues**](docs/ProjectsApi.md#list_all_jira_issues) | **GET** /org/{orgId}/project/{projectId}/jira-issues | List all jira issues
*ProjectsApi* | [**list_all_project_issue_paths**](docs/ProjectsApi.md#list_all_project_issue_paths) | **GET** /org/{orgId}/project/{projectId}/issue/{issueId}/paths | List all project issue paths
*ProjectsApi* | [**list_all_project_snapshot_aggregated_issues**](docs/ProjectsApi.md#list_all_project_snapshot_aggregated_issues) | **POST** /org/{orgId}/project/{projectId}/history/{snapshotId}/aggregated-issues | List all project snapshot aggregated issues
*ProjectsApi* | [**list_all_project_snapshot_issue_paths**](docs/ProjectsApi.md#list_all_project_snapshot_issue_paths) | **GET** /org/{orgId}/project/{projectId}/history/{snapshotId}/issue/{issueId}/paths | List all project snapshot issue paths
*ProjectsApi* | [**list_all_project_snapshots**](docs/ProjectsApi.md#list_all_project_snapshots) | **POST** /org/{orgId}/project/{projectId}/history | List all project snapshots
*ProjectsApi* | [**list_all_projects**](docs/ProjectsApi.md#list_all_projects) | **POST** /org/{orgId}/projects | List all projects
*ProjectsApi* | [**list_project_settings**](docs/ProjectsApi.md#list_project_settings) | **GET** /org/{orgId}/project/{projectId}/settings | List project settings
*ProjectsApi* | [**move_project_to_a_different_organization**](docs/ProjectsApi.md#move_project_to_a_different_organization) | **PUT** /org/{orgId}/project/{projectId}/move | Move project to a different organization
*ProjectsApi* | [**remove_a_tag_from_a_project**](docs/ProjectsApi.md#remove_a_tag_from_a_project) | **POST** /org/{orgId}/project/{projectId}/tags/remove | Remove a tag from a project
*ProjectsApi* | [**replace_ignores**](docs/ProjectsApi.md#replace_ignores) | **PUT** /org/{orgId}/project/{projectId}/ignore/{issueId} | Replace ignores
*ProjectsApi* | [**retrieve_a_single_project**](docs/ProjectsApi.md#retrieve_a_single_project) | **GET** /org/{orgId}/project/{projectId} | Retrieve a single project
*ProjectsApi* | [**retrieve_ignore**](docs/ProjectsApi.md#retrieve_ignore) | **GET** /org/{orgId}/project/{projectId}/ignore/{issueId} | Retrieve ignore
*ProjectsApi* | [**update_a_project**](docs/ProjectsApi.md#update_a_project) | **PUT** /org/{orgId}/project/{projectId} | Update a project
*ProjectsApi* | [**update_project_settings**](docs/ProjectsApi.md#update_project_settings) | **PUT** /org/{orgId}/project/{projectId}/settings | Update project settings
*ReportingAPIApi* | [**get_issue_counts**](docs/ReportingAPIApi.md#get_issue_counts) | **POST** /reporting/counts/issues | Get issue counts
*ReportingAPIApi* | [**get_latest_issue_counts**](docs/ReportingAPIApi.md#get_latest_issue_counts) | **POST** /reporting/counts/issues/latest | Get latest issue counts
*ReportingAPIApi* | [**get_latest_project_counts**](docs/ReportingAPIApi.md#get_latest_project_counts) | **POST** /reporting/counts/projects/latest | Get latest project counts
*ReportingAPIApi* | [**get_list_of_issues**](docs/ReportingAPIApi.md#get_list_of_issues) | **POST** /reporting/issues/ | Get list of issues
*ReportingAPIApi* | [**get_list_of_latest_issues**](docs/ReportingAPIApi.md#get_list_of_latest_issues) | **POST** /reporting/issues/latest | Get list of latest issues
*ReportingAPIApi* | [**get_project_counts**](docs/ReportingAPIApi.md#get_project_counts) | **POST** /reporting/counts/projects | Get project counts
*ReportingAPIApi* | [**get_test_counts**](docs/ReportingAPIApi.md#get_test_counts) | **POST** /reporting/counts/tests | Get test counts
*TestApi* | [**test_composer_json__composer_lock_file**](docs/TestApi.md#test_composer_json__composer_lock_file) | **POST** /test/composer | Test composer.json &amp; composer.lock file
*TestApi* | [**test_dep_graph**](docs/TestApi.md#test_dep_graph) | **POST** /test/dep-graph | Test Dep Graph
*TestApi* | [**test_for_issues_in_a_public_gem_by_name_and_version**](docs/TestApi.md#test_for_issues_in_a_public_gem_by_name_and_version) | **GET** /test/rubygems/{gemName}/{version} | Test for issues in a public gem by name and version
*TestApi* | [**test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version**](docs/TestApi.md#test_for_issues_in_a_public_package_by_group_id_artifact_id_and_version) | **GET** /test/maven/{groupId}/{artifactId}/{version} | Test for issues in a public package by group id, artifact id and version
*TestApi* | [**test_for_issues_in_a_public_package_by_group_name_and_version**](docs/TestApi.md#test_for_issues_in_a_public_package_by_group_name_and_version) | **GET** /test/gradle/{group}/{name}/{version} | Test for issues in a public package by group, name and version
*TestApi* | [**test_for_issues_in_a_public_package_by_name_and_version**](docs/TestApi.md#test_for_issues_in_a_public_package_by_name_and_version) | **GET** /test/npm/{packageName}/{version} | Test for issues in a public package by name and version
*TestApi* | [**test_gemfile_lock_file**](docs/TestApi.md#test_gemfile_lock_file) | **POST** /test/rubygems | Test gemfile.lock file
*TestApi* | [**test_gopkg_toml__gopkg_lock_file**](docs/TestApi.md#test_gopkg_toml__gopkg_lock_file) | **POST** /test/golangdep | Test Gopkg.toml &amp; Gopkg.lock File
*TestApi* | [**test_gradle_file**](docs/TestApi.md#test_gradle_file) | **POST** /test/gradle | Test gradle file
*TestApi* | [**test_maven_file**](docs/TestApi.md#test_maven_file) | **POST** /test/maven | Test maven file
*TestApi* | [**test_package_json__package_lock_json_file**](docs/TestApi.md#test_package_json__package_lock_json_file) | **POST** /test/npm | Test package.json &amp; package-lock.json File
*TestApi* | [**test_package_json__yarn_lock_file**](docs/TestApi.md#test_package_json__yarn_lock_file) | **POST** /test/yarn | Test package.json &amp; yarn.lock File
*TestApi* | [**test_pip_package_name_version_get**](docs/TestApi.md#test_pip_package_name_version_get) | **GET** /test/pip/{packageName}/{version} | Test for issues in a public package by name and version
*TestApi* | [**test_requirements_txt_file**](docs/TestApi.md#test_requirements_txt_file) | **POST** /test/pip | Test requirements.txt file
*TestApi* | [**test_sbt_file**](docs/TestApi.md#test_sbt_file) | **POST** /test/sbt | Test sbt file
*TestApi* | [**test_sbt_group_id_artifact_id_version_get**](docs/TestApi.md#test_sbt_group_id_artifact_id_version_get) | **GET** /test/sbt/{groupId}/{artifactId}/{version} | Test for issues in a public package by group id, artifact id and version
*TestApi* | [**test_vendor_json_file**](docs/TestApi.md#test_vendor_json_file) | **POST** /test/govendor | Test vendor.json File
*UsersApi* | [**get_my_details**](docs/UsersApi.md#get_my_details) | **GET** /user/me | Get My Details
*UsersApi* | [**get_organization_notification_settings**](docs/UsersApi.md#get_organization_notification_settings) | **GET** /user/me/notification-settings/org/{orgId} | Get organization notification settings
*UsersApi* | [**get_project_notification_settings**](docs/UsersApi.md#get_project_notification_settings) | **GET** /user/me/notification-settings/org/{orgId}/project/{projectId} | Get project notification settings
*UsersApi* | [**get_user_details**](docs/UsersApi.md#get_user_details) | **GET** /user/{userId} | Get User Details
*UsersApi* | [**modify_organization_notification_settings**](docs/UsersApi.md#modify_organization_notification_settings) | **PUT** /user/me/notification-settings/org/{orgId} | Modify organization notification settings
*UsersApi* | [**modify_project_notification_settings**](docs/UsersApi.md#modify_project_notification_settings) | **PUT** /user/me/notification-settings/org/{orgId}/project/{projectId} | Modify project notification settings
*WebhooksApi* | [**create_a_webhook**](docs/WebhooksApi.md#create_a_webhook) | **POST** /org/{orgId}/webhooks | Create a webhook
*WebhooksApi* | [**delete_a_webhook**](docs/WebhooksApi.md#delete_a_webhook) | **DELETE** /org/{orgId}/webhooks/{webhookId} | Delete a webhook
*WebhooksApi* | [**list_webhooks**](docs/WebhooksApi.md#list_webhooks) | **GET** /org/{orgId}/webhooks | List webhooks
*WebhooksApi* | [**ping_a_webhook**](docs/WebhooksApi.md#ping_a_webhook) | **POST** /org/{orgId}/webhooks/{webhookId}/ping | Ping a webhook
*WebhooksApi* | [**retrieve_a_webhook**](docs/WebhooksApi.md#retrieve_a_webhook) | **GET** /org/{orgId}/webhooks/{webhookId} | Retrieve a webhook


## Documentation For Models

 - [AddAMemberToAnOrganizationWithinAGroupRequest](docs/AddAMemberToAnOrganizationWithinAGroupRequest.md)
 - [AddATagToAProject200Response](docs/AddATagToAProject200Response.md)
 - [AddATagToAProjectRequest](docs/AddATagToAProjectRequest.md)
 - [AddIgnoreRequest](docs/AddIgnoreRequest.md)
 - [AddMemberBody](docs/AddMemberBody.md)
 - [AddNewIntegrationRequest](docs/AddNewIntegrationRequest.md)
 - [AddNewIntegrationRequestAnyOf](docs/AddNewIntegrationRequestAnyOf.md)
 - [AddNewIntegrationRequestAnyOf1](docs/AddNewIntegrationRequestAnyOf1.md)
 - [AddNewIntegrationRequestAnyOf1Broker](docs/AddNewIntegrationRequestAnyOf1Broker.md)
 - [AddNewIntegrationRequestAnyOfCredentials](docs/AddNewIntegrationRequestAnyOfCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf1](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf1.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf10](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf10.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf10GitHubCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf10GitHubCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf11](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf11.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf11GitHubEnterpriseCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf11GitHubEnterpriseCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf12](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf12.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf12GitLabCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf12GitLabCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf13](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf13.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf13GitLabCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf13GitLabCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf14](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf14.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf14GoogleArtifactCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf14GoogleArtifactCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf15](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf15.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf15HarborCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf15HarborCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf16](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf16.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf16NexusCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf16NexusCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf17](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf17.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf17QuayCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf17QuayCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf1ArtifactoryCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf1ArtifactoryCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf2](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf2.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf2AzureReposCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf2AzureReposCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf3](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf3.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf3BitbucketCloudCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf3BitbucketCloudCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf4](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf4.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf4BitbucketServerCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf4BitbucketServerCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf5](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf5.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf5DigitalOceanCrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf5DigitalOceanCrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf6](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf6.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf6DockerHubCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf6DockerHubCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf7](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf7.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf7EcrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf7EcrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf8](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf8.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf8GcrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf8GcrCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf9](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf9.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOf9GitHubCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOf9GitHubCredentials.md)
 - [AddNewIntegrationRequestAnyOfCredentialsOneOfAcrCredentials](docs/AddNewIntegrationRequestAnyOfCredentialsOneOfAcrCredentials.md)
 - [AggregatedProjectIssues](docs/AggregatedProjectIssues.md)
 - [AggregatedProjectIssuesFilters](docs/AggregatedProjectIssuesFilters.md)
 - [AggregatedProjectIssuesIssuesInner](docs/AggregatedProjectIssuesIssuesInner.md)
 - [AggregatedProjectIssuesIssuesInnerIssueData](docs/AggregatedProjectIssuesIssuesInnerIssueData.md)
 - [AllIgnores](docs/AllIgnores.md)
 - [AllJiraIssues](docs/AllJiraIssues.md)
 - [ApplyingAttributes200Response](docs/ApplyingAttributes200Response.md)
 - [ApplyingAttributes200ResponseAttributes](docs/ApplyingAttributes200ResponseAttributes.md)
 - [ApplyingAttributesRequest](docs/ApplyingAttributesRequest.md)
 - [AssignmentType](docs/AssignmentType.md)
 - [AutoRemediationPrs](docs/AutoRemediationPrs.md)
 - [BrokerSettings](docs/BrokerSettings.md)
 - [CloneAnIntegrationWithSettingsAndCredentialsRequest](docs/CloneAnIntegrationWithSettingsAndCredentialsRequest.md)
 - [ComposerLock](docs/ComposerLock.md)
 - [ComposerRequestPayload](docs/ComposerRequestPayload.md)
 - [CreateANewOrganization400Response](docs/CreateANewOrganization400Response.md)
 - [CreateANewOrganizationRequest](docs/CreateANewOrganizationRequest.md)
 - [CreateAWebhookRequest](docs/CreateAWebhookRequest.md)
 - [CreateJiraIssue200Response](docs/CreateJiraIssue200Response.md)
 - [CreateJiraIssue200ResponseJiraIssue](docs/CreateJiraIssue200ResponseJiraIssue.md)
 - [CreateJiraIssueRequest](docs/CreateJiraIssueRequest.md)
 - [CreateJiraIssueRequestFields](docs/CreateJiraIssueRequestFields.md)
 - [CreateOrganizationsBody](docs/CreateOrganizationsBody.md)
 - [DeletePendingUserProvision200Response](docs/DeletePendingUserProvision200Response.md)
 - [DeleteTagBody](docs/DeleteTagBody.md)
 - [DeleteTagFromGroup200Response](docs/DeleteTagFromGroup200Response.md)
 - [DeleteTagFromGroupRequest](docs/DeleteTagFromGroupRequest.md)
 - [DepGraphData](docs/DepGraphData.md)
 - [Dependencies](docs/Dependencies.md)
 - [DependenciesFilters](docs/DependenciesFilters.md)
 - [DependenciesFiltersFilters](docs/DependenciesFiltersFilters.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [Function](docs/Function.md)
 - [FunctionId](docs/FunctionId.md)
 - [GetExistingIntegrationByType200Response](docs/GetExistingIntegrationByType200Response.md)
 - [GetGroupLevelAuditLogsRequest](docs/GetGroupLevelAuditLogsRequest.md)
 - [GetGroupLevelAuditLogsRequestFilters](docs/GetGroupLevelAuditLogsRequestFilters.md)
 - [GetImportJobDetails200Response](docs/GetImportJobDetails200Response.md)
 - [GetIssueCounts200Response](docs/GetIssueCounts200Response.md)
 - [GetIssueCounts200ResponseResultsInner](docs/GetIssueCounts200ResponseResultsInner.md)
 - [GetIssueCounts200ResponseResultsInnerFixable](docs/GetIssueCounts200ResponseResultsInnerFixable.md)
 - [GetIssueCounts200ResponseResultsInnerSeverity](docs/GetIssueCounts200ResponseResultsInnerSeverity.md)
 - [GetIssueCounts400Response](docs/GetIssueCounts400Response.md)
 - [GetIssueCounts400ResponseError](docs/GetIssueCounts400ResponseError.md)
 - [GetIssueCountsRequest](docs/GetIssueCountsRequest.md)
 - [GetIssueCountsRequestFilters](docs/GetIssueCountsRequestFilters.md)
 - [GetIssueCountsRequestFiltersPriorityScore](docs/GetIssueCountsRequestFiltersPriorityScore.md)
 - [GetListOfIssues200Response](docs/GetListOfIssues200Response.md)
 - [GetListOfIssues200ResponseResultsInner](docs/GetListOfIssues200ResponseResultsInner.md)
 - [GetListOfIssues200ResponseResultsInnerIssue](docs/GetListOfIssues200ResponseResultsInnerIssue.md)
 - [GetListOfIssues200ResponseResultsInnerIssueIdentifiers](docs/GetListOfIssues200ResponseResultsInnerIssueIdentifiers.md)
 - [GetListOfIssues200ResponseResultsInnerIssueSemver](docs/GetListOfIssues200ResponseResultsInnerIssueSemver.md)
 - [GetListOfIssues200ResponseResultsInnerOneOf](docs/GetListOfIssues200ResponseResultsInnerOneOf.md)
 - [GetListOfIssues200ResponseResultsInnerOneOf1](docs/GetListOfIssues200ResponseResultsInnerOneOf1.md)
 - [GetListOfIssues200ResponseResultsInnerOneOf1Project](docs/GetListOfIssues200ResponseResultsInnerOneOf1Project.md)
 - [GetListOfIssuesRequest](docs/GetListOfIssuesRequest.md)
 - [GetListOfIssuesRequestFilters](docs/GetListOfIssuesRequestFilters.md)
 - [GetMyDetails200Response](docs/GetMyDetails200Response.md)
 - [GetOrganizationLevelAuditLogsRequest](docs/GetOrganizationLevelAuditLogsRequest.md)
 - [GetOrganizationLevelAuditLogsRequestFilters](docs/GetOrganizationLevelAuditLogsRequestFilters.md)
 - [GetProjectCounts200Response](docs/GetProjectCounts200Response.md)
 - [GetProjectCounts200ResponseResultsInner](docs/GetProjectCounts200ResponseResultsInner.md)
 - [GetProjectCountsRequest](docs/GetProjectCountsRequest.md)
 - [GetProjectCountsRequestFilters](docs/GetProjectCountsRequestFilters.md)
 - [GetProjectDependencyGraph200Response](docs/GetProjectDependencyGraph200Response.md)
 - [GetProjectDependencyGraph200ResponseDepGraph](docs/GetProjectDependencyGraph200ResponseDepGraph.md)
 - [GetProjectDependencyGraph200ResponseDepGraphGraph](docs/GetProjectDependencyGraph200ResponseDepGraphGraph.md)
 - [GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner](docs/GetProjectDependencyGraph200ResponseDepGraphGraphNodesInner.md)
 - [GetProjectDependencyGraph200ResponseDepGraphGraphNodesInnerDepsInner](docs/GetProjectDependencyGraph200ResponseDepGraphGraphNodesInnerDepsInner.md)
 - [GetProjectDependencyGraph200ResponseDepGraphPkgManager](docs/GetProjectDependencyGraph200ResponseDepGraphPkgManager.md)
 - [GetProjectDependencyGraph200ResponseDepGraphPkgManagerRepositoriesInner](docs/GetProjectDependencyGraph200ResponseDepGraphPkgManagerRepositoriesInner.md)
 - [GetProjectDependencyGraph200ResponseDepGraphPkgsInner](docs/GetProjectDependencyGraph200ResponseDepGraphPkgsInner.md)
 - [GetProjectDependencyGraph200ResponseDepGraphPkgsInnerInfo](docs/GetProjectDependencyGraph200ResponseDepGraphPkgsInnerInfo.md)
 - [GetTestCounts200Response](docs/GetTestCounts200Response.md)
 - [GetTestCounts200ResponseResultsInner](docs/GetTestCounts200ResponseResultsInner.md)
 - [GetTestCounts200ResponseResultsInnerIsPrivate](docs/GetTestCounts200ResponseResultsInnerIsPrivate.md)
 - [GetTestCounts200ResponseResultsInnerIssuesPrevented](docs/GetTestCounts200ResponseResultsInnerIssuesPrevented.md)
 - [GetTestCountsRequest](docs/GetTestCountsRequest.md)
 - [GetTestCountsRequestFilters](docs/GetTestCountsRequestFilters.md)
 - [GetUserDetails200Response](docs/GetUserDetails200Response.md)
 - [GoPkgLock](docs/GoPkgLock.md)
 - [GolangdepRequestPayload](docs/GolangdepRequestPayload.md)
 - [GovendorRequestPayload](docs/GovendorRequestPayload.md)
 - [GradleFile](docs/GradleFile.md)
 - [GradleRequestPayload](docs/GradleRequestPayload.md)
 - [GradleRequestPayloadFiles](docs/GradleRequestPayloadFiles.md)
 - [Graph](docs/Graph.md)
 - [GraphDependency](docs/GraphDependency.md)
 - [GraphRequestPayload](docs/GraphRequestPayload.md)
 - [GroupSettings](docs/GroupSettings.md)
 - [GroupsAuditLogsFilters](docs/GroupsAuditLogsFilters.md)
 - [Ignore](docs/Ignore.md)
 - [IgnoreIgnorePath](docs/IgnoreIgnorePath.md)
 - [IgnoreIgnorePathIgnoredBy](docs/IgnoreIgnorePathIgnoredBy.md)
 - [IgnoreRule](docs/IgnoreRule.md)
 - [ImportTargetsRequest](docs/ImportTargetsRequest.md)
 - [ImportTargetsRequestAnyOf](docs/ImportTargetsRequestAnyOf.md)
 - [ImportTargetsRequestAnyOf1](docs/ImportTargetsRequestAnyOf1.md)
 - [ImportTargetsRequestAnyOf1Target](docs/ImportTargetsRequestAnyOf1Target.md)
 - [ImportTargetsRequestAnyOf2](docs/ImportTargetsRequestAnyOf2.md)
 - [ImportTargetsRequestAnyOf2Target](docs/ImportTargetsRequestAnyOf2Target.md)
 - [ImportTargetsRequestAnyOf3](docs/ImportTargetsRequestAnyOf3.md)
 - [ImportTargetsRequestAnyOf3Target](docs/ImportTargetsRequestAnyOf3Target.md)
 - [ImportTargetsRequestAnyOf4](docs/ImportTargetsRequestAnyOf4.md)
 - [ImportTargetsRequestAnyOf4Target](docs/ImportTargetsRequestAnyOf4Target.md)
 - [ImportTargetsRequestAnyOf5](docs/ImportTargetsRequestAnyOf5.md)
 - [ImportTargetsRequestAnyOf5Target](docs/ImportTargetsRequestAnyOf5Target.md)
 - [ImportTargetsRequestAnyOf6](docs/ImportTargetsRequestAnyOf6.md)
 - [ImportTargetsRequestAnyOf6Target](docs/ImportTargetsRequestAnyOf6Target.md)
 - [ImportTargetsRequestAnyOf7](docs/ImportTargetsRequestAnyOf7.md)
 - [ImportTargetsRequestAnyOf7Target](docs/ImportTargetsRequestAnyOf7Target.md)
 - [ImportTargetsRequestAnyOf8](docs/ImportTargetsRequestAnyOf8.md)
 - [ImportTargetsRequestAnyOf8Target](docs/ImportTargetsRequestAnyOf8Target.md)
 - [ImportTargetsRequestAnyOf9](docs/ImportTargetsRequestAnyOf9.md)
 - [ImportTargetsRequestAnyOf9Target](docs/ImportTargetsRequestAnyOf9Target.md)
 - [ImportTargetsRequestAnyOfTarget](docs/ImportTargetsRequestAnyOfTarget.md)
 - [IntegrationSettings](docs/IntegrationSettings.md)
 - [IntegrationType](docs/IntegrationType.md)
 - [Integrations](docs/Integrations.md)
 - [InviteUsersRequest](docs/InviteUsersRequest.md)
 - [IssueCounts](docs/IssueCounts.md)
 - [IssueCountsFilters](docs/IssueCountsFilters.md)
 - [IssueCountsFiltersFilters](docs/IssueCountsFiltersFilters.md)
 - [IssuePaths](docs/IssuePaths.md)
 - [Issues](docs/Issues.md)
 - [IssuesFilters](docs/IssuesFilters.md)
 - [IssuesFiltersFilters](docs/IssuesFiltersFilters.md)
 - [IssuesResultsInner](docs/IssuesResultsInner.md)
 - [JiraIssue](docs/JiraIssue.md)
 - [JiraIssueRequest](docs/JiraIssueRequest.md)
 - [Licenses](docs/Licenses.md)
 - [LicensesFilters](docs/LicensesFilters.md)
 - [LicensesFiltersFilters](docs/LicensesFiltersFilters.md)
 - [ListAllAggregatedIssues200Response](docs/ListAllAggregatedIssues200Response.md)
 - [ListAllAggregatedIssues200ResponseIssuesInner](docs/ListAllAggregatedIssues200ResponseIssuesInner.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerFixInfo](docs/ListAllAggregatedIssues200ResponseIssuesInnerFixInfo.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerIssueData](docs/ListAllAggregatedIssues200ResponseIssuesInnerIssueData.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers](docs/ListAllAggregatedIssues200ResponseIssuesInnerIssueDataIdentifiers.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver](docs/ListAllAggregatedIssues200ResponseIssuesInnerIssueDataSemver.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerLinks](docs/ListAllAggregatedIssues200ResponseIssuesInnerLinks.md)
 - [ListAllAggregatedIssues200ResponseIssuesInnerPriority](docs/ListAllAggregatedIssues200ResponseIssuesInnerPriority.md)
 - [ListAllAggregatedIssuesRequest](docs/ListAllAggregatedIssuesRequest.md)
 - [ListAllAggregatedIssuesRequestFilters](docs/ListAllAggregatedIssuesRequestFilters.md)
 - [ListAllAggregatedIssuesRequestFiltersPriority](docs/ListAllAggregatedIssuesRequestFiltersPriority.md)
 - [ListAllAggregatedIssuesRequestFiltersPriorityScore](docs/ListAllAggregatedIssuesRequestFiltersPriorityScore.md)
 - [ListAllDependencies200Response](docs/ListAllDependencies200Response.md)
 - [ListAllDependencies200ResponseResultsInner](docs/ListAllDependencies200ResponseResultsInner.md)
 - [ListAllDependencies200ResponseResultsInnerLicensesInner](docs/ListAllDependencies200ResponseResultsInnerLicensesInner.md)
 - [ListAllDependencies200ResponseResultsInnerProjectsInner](docs/ListAllDependencies200ResponseResultsInnerProjectsInner.md)
 - [ListAllDependenciesRequest](docs/ListAllDependenciesRequest.md)
 - [ListAllDependenciesRequestFilters](docs/ListAllDependenciesRequestFilters.md)
 - [ListAllLicenses200Response](docs/ListAllLicenses200Response.md)
 - [ListAllLicenses200ResponseResultsInner](docs/ListAllLicenses200ResponseResultsInner.md)
 - [ListAllLicenses200ResponseResultsInnerDependenciesInner](docs/ListAllLicenses200ResponseResultsInnerDependenciesInner.md)
 - [ListAllLicensesRequest](docs/ListAllLicensesRequest.md)
 - [ListAllLicensesRequestFilters](docs/ListAllLicensesRequestFilters.md)
 - [ListAllProjectSnapshotIssuePaths200Response](docs/ListAllProjectSnapshotIssuePaths200Response.md)
 - [ListAllProjectSnapshotIssuePaths200ResponseLinks](docs/ListAllProjectSnapshotIssuePaths200ResponseLinks.md)
 - [ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner](docs/ListAllProjectSnapshotIssuePaths200ResponsePathsInnerInner.md)
 - [ListAllProjectSnapshots200Response](docs/ListAllProjectSnapshots200Response.md)
 - [ListAllProjectSnapshots200ResponseSnapshotsInner](docs/ListAllProjectSnapshots200ResponseSnapshotsInner.md)
 - [ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts](docs/ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCounts.md)
 - [ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense](docs/ListAllProjectSnapshots200ResponseSnapshotsInnerIssueCountsLicense.md)
 - [ListAllProjectSnapshotsRequest](docs/ListAllProjectSnapshotsRequest.md)
 - [ListAllProjectSnapshotsRequestFilters](docs/ListAllProjectSnapshotsRequestFilters.md)
 - [ListAllProjects](docs/ListAllProjects.md)
 - [ListAllProjects200Response](docs/ListAllProjects200Response.md)
 - [ListAllProjects200ResponseOrg](docs/ListAllProjects200ResponseOrg.md)
 - [ListAllProjects200ResponseProjectsInner](docs/ListAllProjects200ResponseProjectsInner.md)
 - [ListAllProjectsRequest](docs/ListAllProjectsRequest.md)
 - [ListAllProjectsRequestFilters](docs/ListAllProjectsRequestFilters.md)
 - [ListAllProjectsRequestFiltersAttributes](docs/ListAllProjectsRequestFiltersAttributes.md)
 - [ListAllProjectsRequestFiltersTags](docs/ListAllProjectsRequestFiltersTags.md)
 - [ListAllTagsInAGroup200Response](docs/ListAllTagsInAGroup200Response.md)
 - [ListProjectSettings200Response](docs/ListProjectSettings200Response.md)
 - [ListProjectSettings200ResponseAutoRemediationPrs](docs/ListProjectSettings200ResponseAutoRemediationPrs.md)
 - [MavenAdditionalFile](docs/MavenAdditionalFile.md)
 - [MavenFile](docs/MavenFile.md)
 - [MavenRequestPayload](docs/MavenRequestPayload.md)
 - [MavenRequestPayloadFiles](docs/MavenRequestPayloadFiles.md)
 - [ModifyProjectNotificationSettingsRequest](docs/ModifyProjectNotificationSettingsRequest.md)
 - [MonitorDepGraphData](docs/MonitorDepGraphData.md)
 - [MonitorDepGraphRequest](docs/MonitorDepGraphRequest.md)
 - [MonitorDepGraphRequestDepGraph](docs/MonitorDepGraphRequestDepGraph.md)
 - [MonitorDepGraphRequestDepGraphGraph](docs/MonitorDepGraphRequestDepGraphGraph.md)
 - [MonitorDepGraphRequestDepGraphPkgManager](docs/MonitorDepGraphRequestDepGraphPkgManager.md)
 - [MonitorDepGraphRequestMeta](docs/MonitorDepGraphRequestMeta.md)
 - [MonitorGraph](docs/MonitorGraph.md)
 - [MonitorGraphDependency](docs/MonitorGraphDependency.md)
 - [MonitorGraphPayload](docs/MonitorGraphPayload.md)
 - [MonitorMetaData](docs/MonitorMetaData.md)
 - [MonitorNode](docs/MonitorNode.md)
 - [MonitorPackage](docs/MonitorPackage.md)
 - [MonitorPackageInfo](docs/MonitorPackageInfo.md)
 - [MonitorPkgManager](docs/MonitorPkgManager.md)
 - [MonitorRepository](docs/MonitorRepository.md)
 - [MoveProjectToADifferentOrganizationRequest](docs/MoveProjectToADifferentOrganizationRequest.md)
 - [NewIssuesNotificationSettingRequest](docs/NewIssuesNotificationSettingRequest.md)
 - [Node](docs/Node.md)
 - [NotificationSettingResponse](docs/NotificationSettingResponse.md)
 - [NotificationSettingsRequest](docs/NotificationSettingsRequest.md)
 - [NotificationSettingsResponse](docs/NotificationSettingsResponse.md)
 - [NpmRequestPayload](docs/NpmRequestPayload.md)
 - [OrgAuditLogsFilters](docs/OrgAuditLogsFilters.md)
 - [OrgOrgIdNotificationSettingsGet200Response](docs/OrgOrgIdNotificationSettingsGet200Response.md)
 - [OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations](docs/OrgOrgIdNotificationSettingsGet200ResponseNewIssuesRemediations.md)
 - [OrgOrgIdNotificationSettingsGet200ResponseProjectImported](docs/OrgOrgIdNotificationSettingsGet200ResponseProjectImported.md)
 - [OrgSettingsRequest](docs/OrgSettingsRequest.md)
 - [OrgSettingsResponse](docs/OrgSettingsResponse.md)
 - [Package](docs/Package.md)
 - [PackageInfo](docs/PackageInfo.md)
 - [PackageLockJsonFile](docs/PackageLockJsonFile.md)
 - [Patch](docs/Patch.md)
 - [PipRequestPayload](docs/PipRequestPayload.md)
 - [PkgManager](docs/PkgManager.md)
 - [PriorityScore](docs/PriorityScore.md)
 - [Project](docs/Project.md)
 - [ProjectAttributes](docs/ProjectAttributes.md)
 - [ProjectCounts](docs/ProjectCounts.md)
 - [ProjectCountsFilters](docs/ProjectCountsFilters.md)
 - [ProjectCountsFiltersFilters](docs/ProjectCountsFiltersFilters.md)
 - [ProjectDependencyGraph](docs/ProjectDependencyGraph.md)
 - [ProjectIssuesFilters](docs/ProjectIssuesFilters.md)
 - [ProjectIssuesFiltersFilters](docs/ProjectIssuesFiltersFilters.md)
 - [ProjectIssuesFiltersFiltersPriorityScore](docs/ProjectIssuesFiltersFiltersPriorityScore.md)
 - [ProjectMove](docs/ProjectMove.md)
 - [ProjectSettings](docs/ProjectSettings.md)
 - [ProjectSnapshots](docs/ProjectSnapshots.md)
 - [ProjectSnapshotsFilters](docs/ProjectSnapshotsFilters.md)
 - [ProjectWithoutRemediation](docs/ProjectWithoutRemediation.md)
 - [ProjectsFilters](docs/ProjectsFilters.md)
 - [ProjectsFiltersFilters](docs/ProjectsFiltersFilters.md)
 - [ProvisionAUserToTheOrganization200Response](docs/ProvisionAUserToTheOrganization200Response.md)
 - [ProvisionAUserToTheOrganizationRequest](docs/ProvisionAUserToTheOrganizationRequest.md)
 - [PullRequestAssignment](docs/PullRequestAssignment.md)
 - [Repository](docs/Repository.md)
 - [Retrieve200Response](docs/Retrieve200Response.md)
 - [Retrieve200ResponseAutoRemediationPrs](docs/Retrieve200ResponseAutoRemediationPrs.md)
 - [Retrieve200ResponseManualRemediationPrs](docs/Retrieve200ResponseManualRemediationPrs.md)
 - [Retrieve200ResponsePullRequestAssignment](docs/Retrieve200ResponsePullRequestAssignment.md)
 - [RetrieveASingleProject200Response](docs/RetrieveASingleProject200Response.md)
 - [RetrieveASingleProject200ResponseAttributes](docs/RetrieveASingleProject200ResponseAttributes.md)
 - [RetrieveASingleProject200ResponseImportingUser](docs/RetrieveASingleProject200ResponseImportingUser.md)
 - [RetrieveASingleProject200ResponseIssueCountsBySeverity](docs/RetrieveASingleProject200ResponseIssueCountsBySeverity.md)
 - [RetrieveASingleProject200ResponseRemediation](docs/RetrieveASingleProject200ResponseRemediation.md)
 - [RubygemsRequestPayload](docs/RubygemsRequestPayload.md)
 - [SBTFile](docs/SBTFile.md)
 - [SbtRequestPayload](docs/SbtRequestPayload.md)
 - [SbtRequestPayloadFiles](docs/SbtRequestPayloadFiles.md)
 - [SemverObject](docs/SemverObject.md)
 - [SetNotificationSettingsRequest](docs/SetNotificationSettingsRequest.md)
 - [SetNotificationSettingsRequestNewIssuesRemediations](docs/SetNotificationSettingsRequestNewIssuesRemediations.md)
 - [SetNotificationSettingsRequestProjectImported](docs/SetNotificationSettingsRequestProjectImported.md)
 - [SimpleNotificationSettingRequest](docs/SimpleNotificationSettingRequest.md)
 - [SimpleNotificationSettingResponse](docs/SimpleNotificationSettingResponse.md)
 - [Tag](docs/Tag.md)
 - [TagBody](docs/TagBody.md)
 - [TestComposerJsonComposerLockFileRequest](docs/TestComposerJsonComposerLockFileRequest.md)
 - [TestComposerJsonComposerLockFileRequestFiles](docs/TestComposerJsonComposerLockFileRequestFiles.md)
 - [TestComposerJsonComposerLockFileRequestFilesTarget](docs/TestComposerJsonComposerLockFileRequestFilesTarget.md)
 - [TestDepGraphRequest](docs/TestDepGraphRequest.md)
 - [TestDepGraphRequestDepGraph](docs/TestDepGraphRequestDepGraph.md)
 - [TestDepGraphRequestDepGraphGraph](docs/TestDepGraphRequestDepGraphGraph.md)
 - [TestGemfileLockFileRequest](docs/TestGemfileLockFileRequest.md)
 - [TestGemfileLockFileRequestFiles](docs/TestGemfileLockFileRequestFiles.md)
 - [TestGemfileLockFileRequestFilesTarget](docs/TestGemfileLockFileRequestFilesTarget.md)
 - [TestGopkgTomlGopkgLockFileRequest](docs/TestGopkgTomlGopkgLockFileRequest.md)
 - [TestGopkgTomlGopkgLockFileRequestFiles](docs/TestGopkgTomlGopkgLockFileRequestFiles.md)
 - [TestGopkgTomlGopkgLockFileRequestFilesTarget](docs/TestGopkgTomlGopkgLockFileRequestFilesTarget.md)
 - [TestGradleFileRequest](docs/TestGradleFileRequest.md)
 - [TestGradleFileRequestFiles](docs/TestGradleFileRequestFiles.md)
 - [TestGradleFileRequestFilesTarget](docs/TestGradleFileRequestFilesTarget.md)
 - [TestMavenFileRequest](docs/TestMavenFileRequest.md)
 - [TestMavenFileRequestFiles](docs/TestMavenFileRequestFiles.md)
 - [TestMavenFileRequestFilesTarget](docs/TestMavenFileRequestFilesTarget.md)
 - [TestPackageJsonPackageLockJsonFileRequest](docs/TestPackageJsonPackageLockJsonFileRequest.md)
 - [TestPackageJsonPackageLockJsonFileRequestFiles](docs/TestPackageJsonPackageLockJsonFileRequestFiles.md)
 - [TestPackageJsonPackageLockJsonFileRequestFilesTarget](docs/TestPackageJsonPackageLockJsonFileRequestFilesTarget.md)
 - [TestPackageJsonYarnLockFileRequest](docs/TestPackageJsonYarnLockFileRequest.md)
 - [TestRequirementsTxtFileRequest](docs/TestRequirementsTxtFileRequest.md)
 - [TestRequirementsTxtFileRequestFiles](docs/TestRequirementsTxtFileRequestFiles.md)
 - [TestRequirementsTxtFileRequestFilesTarget](docs/TestRequirementsTxtFileRequestFilesTarget.md)
 - [TestSbtFileRequest](docs/TestSbtFileRequest.md)
 - [TestVendorJsonFileRequest](docs/TestVendorJsonFileRequest.md)
 - [TestVendorJsonFileRequestFiles](docs/TestVendorJsonFileRequestFiles.md)
 - [TestVendorJsonFileRequestFilesTarget](docs/TestVendorJsonFileRequestFilesTarget.md)
 - [TestsFilters](docs/TestsFilters.md)
 - [TestsFiltersFilters](docs/TestsFiltersFilters.md)
 - [UpdateAMemberInTheOrganizationRequest](docs/UpdateAMemberInTheOrganizationRequest.md)
 - [UpdateAMemberSRoleInTheOrganizationRequest](docs/UpdateAMemberSRoleInTheOrganizationRequest.md)
 - [UpdateAProjectRequest](docs/UpdateAProjectRequest.md)
 - [UpdateAProjectRequestOwner](docs/UpdateAProjectRequestOwner.md)
 - [UpdateExistingIntegrationRequest](docs/UpdateExistingIntegrationRequest.md)
 - [UpdateExistingIntegrationRequestAnyOf](docs/UpdateExistingIntegrationRequestAnyOf.md)
 - [UpdateExistingIntegrationRequestAnyOf1](docs/UpdateExistingIntegrationRequestAnyOf1.md)
 - [UpdateExistingIntegrationRequestAnyOf2](docs/UpdateExistingIntegrationRequestAnyOf2.md)
 - [UpdateOrganizationSettingsRequest](docs/UpdateOrganizationSettingsRequest.md)
 - [UpdateOrganizationSettingsRequestRequestAccess](docs/UpdateOrganizationSettingsRequestRequestAccess.md)
 - [UpdateProjectSettingsRequest](docs/UpdateProjectSettingsRequest.md)
 - [UpdateRequest](docs/UpdateRequest.md)
 - [ViewGroupSettings200Response](docs/ViewGroupSettings200Response.md)
 - [ViewGroupSettings200ResponseRequestAccess](docs/ViewGroupSettings200ResponseRequestAccess.md)
 - [ViewOrganizationSettings200Response](docs/ViewOrganizationSettings200Response.md)
 - [ViewOrganizationSettings200ResponseRequestAccess](docs/ViewOrganizationSettings200ResponseRequestAccess.md)
 - [Vulnerability](docs/Vulnerability.md)
 - [YarnLockFile](docs/YarnLockFile.md)
 - [YarnRequestPayload](docs/YarnRequestPayload.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author




