# coding: utf-8

"""
    Snyk API

    The Snyk API is available to customers on [Business and Enterprise plans](https://snyk.io/plans) and allows you to programatically integrate with Snyk.  ## REST API  We are in the process of building a new, improved API (`https://api.snyk.io/rest`) built using the OpenAPI and JSON API standards. We welcome you to try it out as we shape and release endpoints until it, ultimately, becomes a full replacement for our current API.  Looking for our REST API docs? Please head over to [https://apidocs.snyk.io](https://apidocs.snyk.io)  ## API vs CLI vs Snyk integration  The API detailed below has the ability to test a package for issues, as they are defined by Snyk. It is important to note that for many package managers, using this API will be less accurate than running the [Snyk CLI](https://snyk.io/docs/using-snyk) as part of your build pipe, or just using it locally on your package. The reason for this is that more than one package version fit the requirements given in manifest files. Running the CLI locally tests the actual deployed code, and has an accurate snapshot of the dependency versions in use, while the API can only infer it, with inferior accuracy. It should be noted that the Snyk CLI has the ability to output machine-readable JSON output (with the `--json` flag to `snyk test`).  A third option, is to allow Snyk access to your development flow via the existing [Snyk integrations](https://snyk.io/docs/). The advantage to this approach is having Snyk monitor every new pull request, and suggest fixes by opening new pull requests. This can be achieved either by integrating Snyk directly to your source code management (SCM) tool, or via a broker to allow greater security and auditability.  If those are not viable options, this API is your best choice.  ## API url  The base URL for all API endpoints is https://api.snyk.io/v1/  ## Authorization  To use this API, you must get your token from Snyk. It can be seen on https://snyk.io/account/ after you register with Snyk and login.  The token should be supplied in an `Authorization` header with the token, preceded by `token`:  ```http Authorization: token API_KEY ```  Otherwise, a 401 \"Unauthorized\" response will be returned.  ```http HTTP/1.1 401 Unauthorized          {             \"code\": 401,             \"error\": \"Not authorised\",             \"message\": \"Not authorised\"         } ```  ## Overview and entities  The API is a REST API. It has the following entities:  ### Test result  The test result is the object returned from the API giving the results of testing a package for issues. It has the following fields:  | Property        | Type    | Description                                           | Example                                                         | |----------------:|---------|-------------------------------------------------------|-----------------------------------------------------------------| | ok              | boolean | Does this package have one or more issues?             | false                                                           | | issues          | object  | The issues found. See below for details.              | See below                                                       | | dependencyCount | number  | The number of dependencies the package has.           | 9                                                               | | org             | object  | The organization this test was carried out for.       | {\"name\": \"anOrg\", \"id\": \"5d7013d9-2a57-4c89-993c-0304d960193c\"} | | licensesPolicy  | object  | The organization's licenses policy used for this test | See in the examples                                             | | packageManager  | string  | The package manager for this package                  | \"maven\"                                                         | |                 |         |                                                       |                                                                 |  ### Issue  An issue is either a vulnerability or a license issue, according to the organization's policy. It has the following fields:  | Property       | Type          | Description                                                                                                                | Example                                | |---------------:|---------------|----------------------------------------------------------------------------------------------------------------------------|----------------------------------------| | id             | string        | The issue ID                                                                                                               | \"SNYK-JS-BACKBONE-10054\"               | | url            | string        | A link to the issue details on snyk.io                                                                                     | \"https://snyk.io/vuln/SNYK-JS-BACKBONE-10054 | | title          | string        | The issue title                                                                                                            | \"Cross Site Scripting\"                 | | type           | string        | The issue type: \"license\" or \"vulnerability\".                                                                              | \"license\"                              | | paths          | array         | The paths to the dependencies which have an issue, and their corresponding upgrade path (if an upgrade is available). [More information about from and upgrade paths](#introduction/overview-and-entities/from-and-upgrade-paths) | [<br>&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;\"from\": [\"a@1.0.0\", \"b@4.8.1\"],<br>&nbsp;&nbsp;&nbsp;&nbsp;\"upgrade\": [false, \"b@4.8.2\"]<br>&nbsp;&nbsp;}<br>] | | package        | string        | The package identifier according to its package manager                                                                    | \"backbone\", \"org.apache.flex.blazeds:blazeds\"| | version        | string        | The package version this issue is applicable to.                                                                           | \"0.4.0\"                                | | severity       | string        | The Snyk defined severity level: \"critical\", \"high\", \"medium\" or \"low\".                                                    | \"high\"                                 | | language       | string        | The package's programming language                                                                                         | \"js\"                                   | | packageManager | string        | The package manager                                                                                                        | \"npm\"                                  | | semver         | array[string] OR map[string]array[string] | One or more [semver](https://semver.org) ranges this issue is applicable to. The format varies according to package manager. | [\"<0.5.0, >=0.4.0\", \"<0.3.8, >=0.3.6\"] OR { \"vulnerable\": [\"[2.0.0, 3.0.0)\"], \"unaffected\": [\"[1, 2)\", \"[3, )\"] } |  ### Vulnerability  A vulnerability in a package. In addition to all the fields present in an issue, a vulnerability also has these fields:  Property        | Type    | Description                                                                                                                                                                                                                      | Example                                        | ----------------:|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|  publicationTime | Date    | The vulnerability publication time                                                                                                                                                                                               | \"2016-02-11T07:16:18.857Z\"                     |  disclosureTime  | Date    | The time this vulnerability was originally disclosed to the package maintainers                                                                                                                                                   | \"2016-02-11T07:16:18.857Z\"                     |  isUpgradable    | boolean | Is this vulnerability fixable by upgrading a dependency?                                                                                                                                                                         | true                                           |  description     | string  | The detailed description of the vulnerability, why and how it is exploitable. Provided in markdown format. | \"## Overview\\n[`org.apache.logging.log4j:log4j-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22log4j-core%22)\\nIn Apache Log4j 2.x before 2.8.2, when using the TCP socket server or UDP socket server to receive serialized log events from another application, a specially crafted binary payload can be sent that, when deserialized, can execute arbitrary code.\\n\\n# Details\\nSerialization is a process of converting an object into a sequence of bytes which can be persisted to a disk or database or can be sent through streams. The reverse process of creating object from sequence of bytes is called deserialization. Serialization is commonly used for communication (sharing objects between multiple hosts) and persistence (store the object state in a file or a database). It is an integral part of popular protocols like _Remote Method Invocation (RMI)_, _Java Management Extension (JMX)_, _Java Messaging System (JMS)_, _Action Message Format (AMF)_, _Java Server Faces (JSF) ViewState_, etc.\\n\\n_Deserialization of untrusted data_ ([CWE-502](https://cwe.mitre.org/data/definitions/502.html)), is when the application deserializes untrusted data without sufficiently verifying that the resulting data will be valid, letting the attacker to control the state or the flow of the execution. \\n\\nJava deserialization issues have been known for years. However, interest in the issue intensified greatly in 2015, when classes that could be abused to achieve remote code execution were found in a [popular library (Apache Commons Collection)](https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078). These classes were used in zero-days affecting IBM WebSphere, Oracle WebLogic and many other products.\\n\\nAn attacker just needs to identify a piece of software that has both a vulnerable class on its path, and performs deserialization on untrusted data. Then all they need to do is send the payload into the deserializer, getting the command executed.\\n\\n> Developers put too much trust in Java Object Serialization. Some even de-serialize objects pre-authentication. When deserializing an Object in Java you typically cast it to an expected type, and therefore Java's strict type system will ensure you only get valid object trees. Unfortunately, by the time the type checking happens, platform code has already created and executed significant logic. So, before the final type is checked a lot of code is executed from the readObject() methods of various objects, all of which is out of the developer's control. By combining the readObject() methods of various classes which are available on the classpath of the vulnerable application an attacker can execute functions (including calling Runtime.exec() to execute local OS commands).\\n- Apache Blog\\n\\n\\n## References\\n- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5645)\\n- [jira issue](https://issues.apache.org/jira/browse/LOG4J2-1863)\\n\" |  isPatchable     | boolean | Is this vulnerability fixable by using a Snyk supplied patch?                                                                                                                                                                    | true                                           |  isPinnable      | boolean | Is this vulnerability fixable by pinning a transitive dependency                                                                                                                                                                 | true                                           |  identifiers     | object  | Additional vulnerability identifiers                                                                                                                                                                                             | {\"CWE\": [], \"CVE\": [\"CVE-2016-2402]}           |  credit          | string  | The reporter of the vulnerability                                                                                                                                                                                                | \"Snyk Security Team\"                           |  CVSSv3          | string  | Common Vulnerability Scoring System (CVSS) provides a way to capture the principal characteristics of a vulnerability, and produce a numerical score reflecting its severity, as well as a textual representation of that score. | \"CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:N/A:N\" |  cvssScore       | number  | CVSS Score                                                                                                                                                                                                                       | 5.3                                            |  patches         | array   | Patches to fix this issue, by snyk                                                                                                                                                                                               | see \"Patch\" below.                             |  upgradePath     | object  | The path to upgrade this issue, if applicable                                                                                                                                                                                    | see below                                      |  isPatched       | boolean | Is this vulnerability patched?                                                                                                                                                                                                   | false                                          |  exploitMaturity | string  | The snyk exploit maturity level  #### Patch  A patch is an object like this one:  ```json {   \"urls\": [     \"https://snyk-patches.s3.amazonaws.com/npm/backbone/20110701/backbone_20110701_0_0_0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch\"   ],   \"version\": \"<0.5.0 >=0.3.3\",   \"modificationTime\": \"2015-11-06T02:09:36.180Z\",   \"comments\": [     \"https://github.com/jashkenas/backbone/commit/0cdc525961d3fa98e810ffae6bcc8e3838e36d93.patch\"   ],   \"id\": \"patch:npm:backbone:20110701:0\" } ```  ### From and upgrade paths  Both from and upgrade paths are arrays, where each item within the array is a package `name@version`.  Take the following `from` path:  ``` [   \"my-project@1.0.0\",   \"actionpack@4.2.5\",   \"rack@1.6.4\" ] ```  Assuming this was returned as a result of a test, then we know:  - The package that was tested was `my-project@1.0.0`  - The dependency with an issue was included in the tested package via the direct dependency `actionpack@4.2.5`  - The dependency with an issue was [rack@1.6.4](https://snyk.io/vuln/rubygems:rack@1.6.4)  Take the following `upgrade` path:  ``` [   false,   \"actionpack@5.0.0\",   \"rack@2.0.1\" ] ```  Assuming this was returned as a result of a test, then we know:  - The package that was tested is not upgradable (`false`)  - The direct dependency `actionpack` should be upgraded to at least version `5.0.0` in order to fix the issue  - Upgrading `actionpack` to version `5.0.0` will cause `rack` to be installed at version `2.0.1`  If the `upgrade` path comes back as an empty array (`[]`) then this means that there is no upgrade path available which would fix the issue.  ### License issue  A license issue has no additional fields other than the ones in \"Issue\".  ### Snyk organization  The organization in Snyk this request is applicable to. The organization determines the access rights, licenses policy and is the unit of billing for private projects.  A Snyk organization has these fields:  Property    | Type   | Description                   | Example                                | -----------:| ------ | ----------------------------- | -------------------------------------- | name        | string | The organization display name | \"deelmaker\"                            | id          | string | The ID of the organization    | \"3ab0f8d3-b17d-4953-ab6d-e1cbfe1df385\" |  ## Errors  This is a beta release of this API. Therefore, despite our efforts, errors might occur. In the unlikely event of such an error, it will have the following structure as JSON in the body:  Property    | Type   | Description                   | Example                                | -----------:| ------ | ----------------------------- | -------------------------------------- | message     | string | Error message with reference  | Error calling Snyk api (reference: 39db46b1-ad57-47e6-a87d-e34f6968030b) | errorRef    | V4 uuid | An error ref to contact Snyk with | 39db46b1-ad57-47e6-a87d-e34f6968030b |  The error reference will also be supplied in the `x-error-reference` header in the server reply.  Example response:  ```http HTTP/1.1 500 Internal Server Error x-error-reference: a45ec9c1-065b-4f7b-baf8-dbd1552ffc9f Content-Type: application/json; charset=utf-8 Content-Length: 1848 Vary: Accept-Encoding Date: Sun, 10 Sep 2017 06:48:40 GMT ```  ## Rate Limiting  To ensure resilience against increasing request rates, we are starting to introduce rate-limiting. We are monitoring the rate-limiting system to ensure minimal impact on users while ensuring system stability. The limit is up to 2000 requests per minute, per user, subject to change. As such, we recommend calls to the API are throttled regardless of the current limit. All requests above the limit will get a response with status code `429` - `Too many requests` until requests stop for the duration of the rate-limiting interval (currently a minute).  ## Consuming Webhooks  Webhooks are delivered with a `Content-Type` of `application/json`, with the event payload as JSON in the request body. We also send the following headers:  - `X-Snyk-Event` - the name of the event  - `X-Snyk-Transport-ID` - a GUID to identify this delivery  - `X-Snyk-Timestamp` - an ISO 8601 timestamp for when the event occurred, for example: `2020-09-25T15:27:53Z`  - `X-Hub-Signature` - the HMAC hex digest of the request body, used to secure your webhooks and ensure the request did indeed come from Snyk  - `User-Agent` - identifies the origin of the request, for example: `Snyk-Webhooks/XXX`  ---  After your server is configured to receive payloads, it listens for any payload sent to the endpoint you configured. For security reasons, you should limit requests to those coming from Snyk.  ### Validating payloads  All transports sent to your webhooks have a `X-Hub-Signature` header, which contains the hash signature for the transport. The signature is a HMAC hexdigest of the request body, generated using sha256 and your `secret` as the HMAC key.  You could use a function in Node.JS such as the following to validate these signatures on incoming requests from Snyk:  ```javascript import * as crypto from 'crypto';  function verifySignature(request, secret) {   const hmac = crypto.createHmac('sha256', secret);   const buffer = JSON.stringify(request.body);   hmac.update(buffer, 'utf8');    const signature = `sha256=${hmac.digest('hex')}`;    return signature === request.headers['x-hub-signature']; } ```  ### Payload versioning  Payloads may evolve over time, and so are versioned. Payload versions are supplied as a suffix to the `X-Snyk-Event` header. For example, `project_snapshot/v0` indicates that the payload is `v0` of the `project_snapshot` event.  Version numbers only increment when a breaking change is made; for example, removing a field that used to exist, or changing the name of a field. Version numbers do not increment when making an additive change, such as adding a new field that never existed before.  **Note:** During the BETA phase, the structure of webhook payloads may change at any time, so we  recommend you check the payload version.  ### Event types  While consuming a webhook event, `X-Snyk-Event` header must be checked, as an end-point may receive multiple event types.  #### ping  The ping event happens after a new webhook is created, and can also be manually triggered using the ping webhook API. This is useful to test that your webhook receives data from Snyk correctly.  The `ping` event makes the following request:  ```jsx POST /webhook-handler/snyk123 HTTP/1.1 Host: my.app.com X-Snyk-Event: ping/v0 X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a X-Snyk-Timestamp: 2020-09-25T15:27:53Z X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6 User-Agent: Snyk-Webhooks/044aadd Content-Type: application/json {   \"webhookId\": \"d3cf26b3-2d77-497b-bce2-23b33cc15362\" } ```  #### project_snapshot  This event is triggered every time an existing project is tested and a new snapshot is created. It is triggered on every test of a project, whether or not there are new issues. This event is not triggered when a new project is created or imported. Currently supported targets/scan types are Open Source and container.  ```jsx POST /webhook-handler/snyk123 HTTP/1.1 Host: my.app.com X-Snyk-Event: project_snapshot/v0 X-Snyk-Transport-ID: 998fe884-18a0-45db-8ae0-e379eea3bc0a X-Snyk-Timestamp: 2020-09-25T15:27:53Z X-Hub-Signature: sha256=7d38cdd689735b008b3c702edd92eea23791c5f6 User-Agent: Snyk-Webhooks/044aadd Content-Type: application/json {   \"project\": { ... }, // project object matching API responses   \"org\": { ... }, // organization object matching API responses   \"group\": { ... }, // group object matching API responses   \"newIssues\": [], // array of issues object matching API responses   \"removedIssues\": [], // array of issues object matching API responses } ```  ####  Detailed example of a payload  ##### project  see: [https://snyk.docs.apiary.io/#reference/projects](https://snyk.docs.apiary.io/#reference/projects)  ```tsx \"project\": {   \"name\": \"snyk/goof\",   \"id\": \"af137b96-6966-46c1-826b-2e79ac49bbd9\",   \"created\": \"2018-10-29T09:50:54.014Z\",   \"origin\": \"github\",   \"type\": \"maven\",   \"readOnly\": false,   \"testFrequency\": \"daily\",   \"totalDependencies\": 42,   \"issueCountsBySeverity\": {     \"low\": 13,     \"medium\": 8,     \"high\": 4,     \"critical\": 5   },   \"imageId\": \"sha256:caf27325b298a6730837023a8a342699c8b7b388b8d878966b064a1320043019\",   \"imageTag\": \"latest\",   \"imageBaseImage\": \"alpine:3\",   \"imagePlatform\": \"linux/arm64\",   \"imageCluster\": \"Production\",   \"hostname\": null,   \"remoteRepoUrl\": \"https://github.com/snyk/goof.git\",   \"lastTestedDate\": \"2019-02-05T08:54:07.704Z\",   \"browseUrl\": \"https://app.snyk.io/org/4a18d42f-0706-4ad0-b127-24078731fbed/project/af137b96-6966-46c1-826b-2e79ac49bbd9\",   \"importingUser\": {     \"id\": \"e713cf94-bb02-4ea0-89d9-613cce0caed2\",     \"name\": \"example-user@snyk.io\",     \"username\": \"exampleUser\",     \"email\": \"example-user@snyk.io\"   },   \"isMonitored\": false,   \"branch\": null,   \"targetReference\": null,   \"tags\": [     {       \"key\": \"example-tag-key\",       \"value\": \"example-tag-value\"     }   ],   \"attributes\": {     \"criticality\": [       \"high\"     ],     \"environment\": [       \"backend\"     ],     \"lifecycle\": [       \"development\"     ]   },   \"remediation\": {     \"upgrade\": {},     \"patch\": {},     \"pin\": {}   } } ```  ##### org  see: [https://snyk.docs.apiary.io/#reference/organizations](https://snyk.docs.apiary.io/#reference/organizations)  ```tsx \"org\": {   \"name\": \"My Org\",   \"id\": \"a04d9cbd-ae6e-44af-b573-0556b0ad4bd2\",   \"slug\": \"my-org\",   \"url\": \"https://api.snyk.io/org/my-org\",   \"created\": \"2020-11-18T10:39:00.983Z\" } ```  ##### group  see: [https://snyk.docs.apiary.io/#reference/groups](https://snyk.docs.apiary.io/#reference/groups)  ```tsx \"group\": {   \"name\": \"ACME Inc.\",    \"id\": \"a060a49f-636e-480f-9e14-38e773b2a97f\" } ```  ##### issue  see: https://snyk.docs.apiary.io/#reference/users/user-organization-notification-settings/list-all-aggregated-issues  ```tsx {   \"id\": \"npm:ms:20170412\",   \"issueType\": \"vuln\",   \"pkgName\": \"ms\",   \"pkgVersions\": [     \"1.0.0\"   ],   \"issueData\": {     \"id\": \"npm:ms:20170412\",     \"title\": \"Regular Expression Denial of Service (ReDoS)\",     \"severity\": \"low\",     \"url\": \"https://snyk.io/vuln/npm:ms:20170412\",     \"description\": \"Lorem ipsum\",     \"identifiers\": {       \"CVE\": [],       \"CWE\": [         \"CWE-400\"       ],       \"ALTERNATIVE\": [         \"SNYK-JS-MS-10509\"       ]     },     \"credit\": [       \"Snyk Security Research Team\"     ],     \"exploitMaturity\": \"no-known-exploit\",     \"semver\": {       \"vulnerable\": [         \">=0.7.1 <2.0.0\"       ]     },     \"publicationTime\": \"2017-05-15T06:02:45Z\",     \"disclosureTime\": \"2017-04-11T21:00:00Z\",     \"CVSSv3\": \"CVSS:3.0/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L\",     \"cvssScore\": 3.7,     \"language\": \"js\",     \"patches\": [       {         \"id\": \"patch:npm:ms:20170412:2\",         \"urls\": [           \"https://snyk-patches.s3.amazonaws.com/npm/ms/20170412/ms_071.patch\"         ],         \"version\": \"=0.7.1\",         \"comments\": [],         \"modificationTime\": \"2019-12-03T11:40:45.866206Z\"       }     ],     \"nearestFixedInVersion\": \"2.0.0\"   },   \"isPatched\": false,   \"isIgnored\": false,   \"fixInfo\": {     \"isUpgradable\": false,     \"isPinnable\": false,     \"isPatchable\": true,     \"nearestFixedInVersion\": \"2.0.0\"   },   \"priority\": {     \"score\": 399,     \"factors\": [       {         \"name\": \"isFixable\",         \"description\": \"Has a fix available\"       },       {         \"name\": \"cvssScore\",         \"description\": \"CVSS 3.7\"       }     ]   } } ```

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import datetime
from dateutil.parser import parse
from enum import Enum
import decimal
import json
import mimetypes
import os
import re
import tempfile

from urllib.parse import quote
from typing import Tuple, Optional, List, Dict, Union
from pydantic import SecretStr

from openapi_client.configuration import Configuration
from openapi_client.api_response import ApiResponse, T as ApiResponseT
import openapi_client.models
from openapi_client import rest
from openapi_client.exceptions import (
    ApiValueError,
    ApiException,
    BadRequestException,
    UnauthorizedException,
    ForbiddenException,
    NotFoundException,
    ServiceException
)

RequestSerialized = Tuple[str, str, Dict[str, str], Optional[str], List[str]]

class ApiClient:
    """Generic API client for OpenAPI client library builds.

    OpenAPI generic API client. This client handles the client-
    server communication, and is invariant across implementations. Specifics of
    the methods and models for each application are generated from the OpenAPI
    templates.

    :param configuration: .Configuration object for this client
    :param header_name: a header to pass when making calls to the API.
    :param header_value: a header value to pass when making calls to
        the API.
    :param cookie: a cookie to include in the header when making calls
        to the API
    """

    PRIMITIVE_TYPES = (float, bool, bytes, str, int)
    NATIVE_TYPES_MAPPING = {
        'int': int,
        'long': int, # TODO remove as only py3 is supported?
        'float': float,
        'str': str,
        'bool': bool,
        'date': datetime.date,
        'datetime': datetime.datetime,
        'decimal': decimal.Decimal,
        'object': object,
    }
    _pool = None

    def __init__(
        self,
        configuration=None,
        header_name=None,
        header_value=None,
        cookie=None
    ) -> None:
        # use default configuration if none is provided
        if configuration is None:
            configuration = Configuration.get_default()
        self.configuration = configuration

        self.rest_client = rest.RESTClientObject(configuration)
        self.default_headers = {}
        if header_name is not None:
            self.default_headers[header_name] = header_value
        self.cookie = cookie
        # Set default User-Agent.
        self.user_agent = 'OpenAPI-Generator/1.0.0/python'
        self.client_side_validation = configuration.client_side_validation

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        pass

    @property
    def user_agent(self):
        """User agent for this API client"""
        return self.default_headers['User-Agent']

    @user_agent.setter
    def user_agent(self, value):
        self.default_headers['User-Agent'] = value

    def set_default_header(self, header_name, header_value):
        self.default_headers[header_name] = header_value


    _default = None

    @classmethod
    def get_default(cls):
        """Return new instance of ApiClient.

        This method returns newly created, based on default constructor,
        object of ApiClient class or returns a copy of default
        ApiClient.

        :return: The ApiClient object.
        """
        if cls._default is None:
            cls._default = ApiClient()
        return cls._default

    @classmethod
    def set_default(cls, default):
        """Set default instance of ApiClient.

        It stores default ApiClient.

        :param default: object of ApiClient.
        """
        cls._default = default

    def param_serialize(
        self,
        method,
        resource_path,
        path_params=None,
        query_params=None,
        header_params=None,
        body=None,
        post_params=None,
        files=None, auth_settings=None,
        collection_formats=None,
        _host=None,
        _request_auth=None
    ) -> RequestSerialized:

        """Builds the HTTP request params needed by the request.
        :param method: Method to call.
        :param resource_path: Path to method endpoint.
        :param path_params: Path parameters in the url.
        :param query_params: Query parameters in the url.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param auth_settings list: Auth Settings names for the request.
        :param files dict: key -> filename, value -> filepath,
            for `multipart/form-data`.
        :param collection_formats: dict of collection formats for path, query,
            header, and post parameters.
        :param _request_auth: set to override the auth_settings for an a single
                              request; this effectively ignores the authentication
                              in the spec for a single request.
        :return: tuple of form (path, http_method, query_params, header_params,
            body, post_params, files)
        """

        config = self.configuration

        # header parameters
        header_params = header_params or {}
        header_params.update(self.default_headers)
        if self.cookie:
            header_params['Cookie'] = self.cookie
        if header_params:
            header_params = self.sanitize_for_serialization(header_params)
            header_params = dict(
                self.parameters_to_tuples(header_params,collection_formats)
            )

        # path parameters
        if path_params:
            path_params = self.sanitize_for_serialization(path_params)
            path_params = self.parameters_to_tuples(
                path_params,
                collection_formats
            )
            for k, v in path_params:
                # specified safe chars, encode everything
                resource_path = resource_path.replace(
                    '{%s}' % k,
                    quote(str(v), safe=config.safe_chars_for_path_param)
                )

        # post parameters
        if post_params or files:
            post_params = post_params if post_params else []
            post_params = self.sanitize_for_serialization(post_params)
            post_params = self.parameters_to_tuples(
                post_params,
                collection_formats
            )
            if files:
                post_params.extend(self.files_parameters(files))

        # auth setting
        self.update_params_for_auth(
            header_params,
            query_params,
            auth_settings,
            resource_path,
            method,
            body,
            request_auth=_request_auth
        )

        # body
        if body:
            body = self.sanitize_for_serialization(body)

        # request url
        if _host is None or self.configuration.ignore_operation_servers:
            url = self.configuration.host + resource_path
        else:
            # use server/host defined in path or operation instead
            url = _host + resource_path

        # query parameters
        if query_params:
            query_params = self.sanitize_for_serialization(query_params)
            url_query = self.parameters_to_url_query(
                query_params,
                collection_formats
            )
            url += "?" + url_query

        return method, url, header_params, body, post_params


    def call_api(
        self,
        method,
        url,
        header_params=None,
        body=None,
        post_params=None,
        _request_timeout=None
    ) -> rest.RESTResponse:
        """Makes the HTTP request (synchronous)
        :param method: Method to call.
        :param url: Path to method endpoint.
        :param header_params: Header parameters to be
            placed in the request header.
        :param body: Request body.
        :param post_params dict: Request post form parameters,
            for `application/x-www-form-urlencoded`, `multipart/form-data`.
        :param _request_timeout: timeout setting for this request.
        :return: RESTResponse
        """

        try:
            # perform request and return response
            response_data = self.rest_client.request(
                method, url,
                headers=header_params,
                body=body, post_params=post_params,
                _request_timeout=_request_timeout
            )

        except ApiException as e:
            raise e

        return response_data

    def response_deserialize(
        self,
        response_data: rest.RESTResponse,
        response_types_map: Optional[Dict[str, ApiResponseT]]=None
    ) -> ApiResponse[ApiResponseT]:
        """Deserializes response into an object.
        :param response_data: RESTResponse object to be deserialized.
        :param response_types_map: dict of response types.
        :return: ApiResponse
        """

        msg = "RESTResponse.read() must be called before passing it to response_deserialize()"
        assert response_data.data is not None, msg

        response_type = response_types_map.get(str(response_data.status), None)
        if not response_type and isinstance(response_data.status, int) and 100 <= response_data.status <= 599:
            # if not found, look for '1XX', '2XX', etc.
            response_type = response_types_map.get(str(response_data.status)[0] + "XX", None)

        # deserialize response data
        response_text = None
        return_data = None
        try:
            if response_type == "bytearray":
                return_data = response_data.data
            elif response_type == "file":
                return_data = self.__deserialize_file(response_data)
            elif response_type is not None:
                match = None
                content_type = response_data.getheader('content-type')
                if content_type is not None:
                    match = re.search(r"charset=([a-zA-Z\-\d]+)[\s;]?", content_type)
                encoding = match.group(1) if match else "utf-8"
                response_text = response_data.data.decode(encoding)
                return_data = self.deserialize(response_text, response_type, content_type)
        finally:
            if not 200 <= response_data.status <= 299:
                raise ApiException.from_response(
                    http_resp=response_data,
                    body=response_text,
                    data=return_data,
                )

        return ApiResponse(
            status_code = response_data.status,
            data = return_data,
            headers = response_data.getheaders(),
            raw_data = response_data.data
        )

    def sanitize_for_serialization(self, obj):
        """Builds a JSON POST object.

        If obj is None, return None.
        If obj is SecretStr, return obj.get_secret_value()
        If obj is str, int, long, float, bool, return directly.
        If obj is datetime.datetime, datetime.date
            convert to string in iso8601 format.
        If obj is decimal.Decimal return string representation.
        If obj is list, sanitize each element in the list.
        If obj is dict, return the dict.
        If obj is OpenAPI model, return the properties dict.

        :param obj: The data to serialize.
        :return: The serialized form of data.
        """
        if obj is None:
            return None
        elif isinstance(obj, Enum):
            return obj.value
        elif isinstance(obj, SecretStr):
            return obj.get_secret_value()
        elif isinstance(obj, self.PRIMITIVE_TYPES):
            return obj
        elif isinstance(obj, list):
            return [
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            ]
        elif isinstance(obj, tuple):
            return tuple(
                self.sanitize_for_serialization(sub_obj) for sub_obj in obj
            )
        elif isinstance(obj, (datetime.datetime, datetime.date)):
            return obj.isoformat()
        elif isinstance(obj, decimal.Decimal):
            return str(obj)

        elif isinstance(obj, dict):
            obj_dict = obj
        else:
            # Convert model obj to dict except
            # attributes `openapi_types`, `attribute_map`
            # and attributes which value is not None.
            # Convert attribute name to json key in
            # model definition for request.
            if hasattr(obj, 'to_dict') and callable(getattr(obj, 'to_dict')):
                obj_dict = obj.to_dict()
            else:
                obj_dict = obj.__dict__

        return {
            key: self.sanitize_for_serialization(val)
            for key, val in obj_dict.items()
        }

    def deserialize(self, response_text: str, response_type: str, content_type: Optional[str]):
        """Deserializes response into an object.

        :param response: RESTResponse object to be deserialized.
        :param response_type: class literal for
            deserialized object, or string of class name.
        :param content_type: content type of response.

        :return: deserialized object.
        """

        # fetch data from response object
        if content_type is None:
            try:
                data = json.loads(response_text)
            except ValueError:
                data = response_text
        elif re.match(r'^application/(json|[\w!#$&.+-^_]+\+json)\s*(;|$)', content_type, re.IGNORECASE):
            if response_text == "":
                data = ""
            else:
                data = json.loads(response_text)
        elif re.match(r'^text\/[a-z.+-]+\s*(;|$)', content_type, re.IGNORECASE):
            data = response_text
        else:
            raise ApiException(
                status=0,
                reason="Unsupported content type: {0}".format(content_type)
            )

        return self.__deserialize(data, response_type)

    def __deserialize(self, data, klass):
        """Deserializes dict, list, str into an object.

        :param data: dict, list or str.
        :param klass: class literal, or string of class name.

        :return: object.
        """
        if data is None:
            return None

        if isinstance(klass, str):
            if klass.startswith('List['):
                m = re.match(r'List\[(.*)]', klass)
                assert m is not None, "Malformed List type definition"
                sub_kls = m.group(1)
                return [self.__deserialize(sub_data, sub_kls)
                        for sub_data in data]

            if klass.startswith('Dict['):
                m = re.match(r'Dict\[([^,]*), (.*)]', klass)
                assert m is not None, "Malformed Dict type definition"
                sub_kls = m.group(2)
                return {k: self.__deserialize(v, sub_kls)
                        for k, v in data.items()}

            # convert str to class
            if klass in self.NATIVE_TYPES_MAPPING:
                klass = self.NATIVE_TYPES_MAPPING[klass]
            else:
                klass = getattr(openapi_client.models, klass)

        if klass in self.PRIMITIVE_TYPES:
            return self.__deserialize_primitive(data, klass)
        elif klass == object:
            return self.__deserialize_object(data)
        elif klass == datetime.date:
            return self.__deserialize_date(data)
        elif klass == datetime.datetime:
            return self.__deserialize_datetime(data)
        elif klass == decimal.Decimal:
            return decimal.Decimal(data)
        elif issubclass(klass, Enum):
            return self.__deserialize_enum(data, klass)
        else:
            return self.__deserialize_model(data, klass)

    def parameters_to_tuples(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: Parameters as list of tuples, collections formatted
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, value) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(str(value) for value in v)))
            else:
                new_params.append((k, v))
        return new_params

    def parameters_to_url_query(self, params, collection_formats):
        """Get parameters as list of tuples, formatting collections.

        :param params: Parameters as dict or list of two-tuples
        :param dict collection_formats: Parameter collection formats
        :return: URL query string (e.g. a=Hello%20World&b=123)
        """
        new_params: List[Tuple[str, str]] = []
        if collection_formats is None:
            collection_formats = {}
        for k, v in params.items() if isinstance(params, dict) else params:
            if isinstance(v, bool):
                v = str(v).lower()
            if isinstance(v, (int, float)):
                v = str(v)
            if isinstance(v, dict):
                v = json.dumps(v)

            if k in collection_formats:
                collection_format = collection_formats[k]
                if collection_format == 'multi':
                    new_params.extend((k, str(value)) for value in v)
                else:
                    if collection_format == 'ssv':
                        delimiter = ' '
                    elif collection_format == 'tsv':
                        delimiter = '\t'
                    elif collection_format == 'pipes':
                        delimiter = '|'
                    else:  # csv is the default
                        delimiter = ','
                    new_params.append(
                        (k, delimiter.join(quote(str(value)) for value in v))
                    )
            else:
                new_params.append((k, quote(str(v))))

        return "&".join(["=".join(map(str, item)) for item in new_params])

    def files_parameters(
        self,
        files: Dict[str, Union[str, bytes, List[str], List[bytes], Tuple[str, bytes]]],
    ):
        """Builds form parameters.

        :param files: File parameters.
        :return: Form parameters with files.
        """
        params = []
        for k, v in files.items():
            if isinstance(v, str):
                with open(v, 'rb') as f:
                    filename = os.path.basename(f.name)
                    filedata = f.read()
            elif isinstance(v, bytes):
                filename = k
                filedata = v
            elif isinstance(v, tuple):
                filename, filedata = v
            elif isinstance(v, list):
                for file_param in v:
                    params.extend(self.files_parameters({k: file_param}))
                continue
            else:
                raise ValueError("Unsupported file value")
            mimetype = (
                mimetypes.guess_type(filename)[0]
                or 'application/octet-stream'
            )
            params.append(
                tuple([k, tuple([filename, filedata, mimetype])])
            )
        return params

    def select_header_accept(self, accepts: List[str]) -> Optional[str]:
        """Returns `Accept` based on an array of accepts provided.

        :param accepts: List of headers.
        :return: Accept (e.g. application/json).
        """
        if not accepts:
            return None

        for accept in accepts:
            if re.search('json', accept, re.IGNORECASE):
                return accept

        return accepts[0]

    def select_header_content_type(self, content_types):
        """Returns `Content-Type` based on an array of content_types provided.

        :param content_types: List of content-types.
        :return: Content-Type (e.g. application/json).
        """
        if not content_types:
            return None

        for content_type in content_types:
            if re.search('json', content_type, re.IGNORECASE):
                return content_type

        return content_types[0]

    def update_params_for_auth(
        self,
        headers,
        queries,
        auth_settings,
        resource_path,
        method,
        body,
        request_auth=None
    ) -> None:
        """Updates header and query params based on authentication setting.

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :param auth_settings: Authentication setting identifiers list.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param request_auth: if set, the provided settings will
                             override the token in the configuration.
        """
        if not auth_settings:
            return

        if request_auth:
            self._apply_auth_params(
                headers,
                queries,
                resource_path,
                method,
                body,
                request_auth
            )
        else:
            for auth in auth_settings:
                auth_setting = self.configuration.auth_settings().get(auth)
                if auth_setting:
                    self._apply_auth_params(
                        headers,
                        queries,
                        resource_path,
                        method,
                        body,
                        auth_setting
                    )

    def _apply_auth_params(
        self,
        headers,
        queries,
        resource_path,
        method,
        body,
        auth_setting
    ) -> None:
        """Updates the request parameters based on a single auth_setting

        :param headers: Header parameters dict to be updated.
        :param queries: Query parameters tuple list to be updated.
        :resource_path: A string representation of the HTTP request resource path.
        :method: A string representation of the HTTP request method.
        :body: A object representing the body of the HTTP request.
        The object type is the return value of sanitize_for_serialization().
        :param auth_setting: auth settings for the endpoint
        """
        if auth_setting['in'] == 'cookie':
            headers['Cookie'] = auth_setting['value']
        elif auth_setting['in'] == 'header':
            if auth_setting['type'] != 'http-signature':
                headers[auth_setting['key']] = auth_setting['value']
        elif auth_setting['in'] == 'query':
            queries.append((auth_setting['key'], auth_setting['value']))
        else:
            raise ApiValueError(
                'Authentication token must be in `query` or `header`'
            )

    def __deserialize_file(self, response):
        """Deserializes body to file

        Saves response body into a file in a temporary folder,
        using the filename from the `Content-Disposition` header if provided.

        handle file downloading
        save response body into a tmp file and return the instance

        :param response:  RESTResponse.
        :return: file path.
        """
        fd, path = tempfile.mkstemp(dir=self.configuration.temp_folder_path)
        os.close(fd)
        os.remove(path)

        content_disposition = response.getheader("Content-Disposition")
        if content_disposition:
            m = re.search(
                r'filename=[\'"]?([^\'"\s]+)[\'"]?',
                content_disposition
            )
            assert m is not None, "Unexpected 'content-disposition' header value"
            filename = m.group(1)
            path = os.path.join(os.path.dirname(path), filename)

        with open(path, "wb") as f:
            f.write(response.data)

        return path

    def __deserialize_primitive(self, data, klass):
        """Deserializes string to primitive type.

        :param data: str.
        :param klass: class literal.

        :return: int, long, float, str, bool.
        """
        try:
            return klass(data)
        except UnicodeEncodeError:
            return str(data)
        except TypeError:
            return data

    def __deserialize_object(self, value):
        """Return an original value.

        :return: object.
        """
        return value

    def __deserialize_date(self, string):
        """Deserializes string to date.

        :param string: str.
        :return: date.
        """
        try:
            return parse(string).date()
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason="Failed to parse `{0}` as date object".format(string)
            )

    def __deserialize_datetime(self, string):
        """Deserializes string to datetime.

        The string should be in iso8601 datetime format.

        :param string: str.
        :return: datetime.
        """
        try:
            return parse(string)
        except ImportError:
            return string
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as datetime object"
                    .format(string)
                )
            )

    def __deserialize_enum(self, data, klass):
        """Deserializes primitive type to enum.

        :param data: primitive type.
        :param klass: class literal.
        :return: enum value.
        """
        try:
            return klass(data)
        except ValueError:
            raise rest.ApiException(
                status=0,
                reason=(
                    "Failed to parse `{0}` as `{1}`"
                    .format(data, klass)
                )
            )

    def __deserialize_model(self, data, klass):
        """Deserializes list or dict to model.

        :param data: dict, list.
        :param klass: class literal.
        :return: model object.
        """

        return klass.from_dict(data)
