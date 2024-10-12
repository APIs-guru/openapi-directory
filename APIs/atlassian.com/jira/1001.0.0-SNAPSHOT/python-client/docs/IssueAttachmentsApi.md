# openapi_client.IssueAttachmentsApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_attachment**](IssueAttachmentsApi.md#add_attachment) | **POST** /rest/api/3/issue/{issueIdOrKey}/attachments | Add attachment
[**expand_attachment_for_humans**](IssueAttachmentsApi.md#expand_attachment_for_humans) | **GET** /rest/api/3/attachment/{id}/expand/human | Get all metadata for an expanded attachment
[**expand_attachment_for_machines**](IssueAttachmentsApi.md#expand_attachment_for_machines) | **GET** /rest/api/3/attachment/{id}/expand/raw | Get contents metadata for an expanded attachment
[**get_attachment**](IssueAttachmentsApi.md#get_attachment) | **GET** /rest/api/3/attachment/{id} | Get attachment metadata
[**get_attachment_content**](IssueAttachmentsApi.md#get_attachment_content) | **GET** /rest/api/3/attachment/content/{id} | Get attachment content
[**get_attachment_meta**](IssueAttachmentsApi.md#get_attachment_meta) | **GET** /rest/api/3/attachment/meta | Get Jira attachment settings
[**get_attachment_thumbnail**](IssueAttachmentsApi.md#get_attachment_thumbnail) | **GET** /rest/api/3/attachment/thumbnail/{id} | Get attachment thumbnail
[**remove_attachment**](IssueAttachmentsApi.md#remove_attachment) | **DELETE** /rest/api/3/attachment/{id} | Delete attachment


# **add_attachment**
> List[Attachment] add_attachment(issue_id_or_key)

Add attachment

Adds one or more attachments to an issue. Attachments are posted as multipart/form-data ([RFC 1867](https://www.ietf.org/rfc/rfc1867.txt)).  Note that:   *  The request must have a `X-Atlassian-Token: no-check` header, if not it is blocked. See [Special headers](#special-request-headers) for more information.  *  The name of the multipart/form-data parameter that contains the attachments must be `file`.  The following examples upload a file called *myfile.txt* to the issue *TEST-123*:  #### curl ####      curl --location --request POST 'https://your-domain.atlassian.net/rest/api/3/issue/TEST-123/attachments'      -u 'email@example.com:<api_token>'      -H 'X-Atlassian-Token: no-check'      --form 'file=@\"myfile.txt\"'  #### Node.js ####      // This code sample uses the 'node-fetch' and 'form-data' libraries:      // https://www.npmjs.com/package/node-fetch      // https://www.npmjs.com/package/form-data      const fetch = require('node-fetch');      const FormData = require('form-data');      const fs = require('fs');           const filePath = 'myfile.txt';      const form = new FormData();      const stats = fs.statSync(filePath);      const fileSizeInBytes = stats.size;      const fileStream = fs.createReadStream(filePath);           form.append('file', fileStream, {knownLength: fileSizeInBytes});           fetch('https://your-domain.atlassian.net/rest/api/3/issue/TEST-123/attachments', {          method: 'POST',          body: form,          headers: {              'Authorization': `Basic ${Buffer.from(                  'email@example.com:'              ).toString('base64')}`,              'Accept': 'application/json',              'X-Atlassian-Token': 'no-check'          }      })          .then(response => {              console.log(                  `Response: ${response.status} ${response.statusText}`              );              return response.text();          })          .then(text => console.log(text))          .catch(err => console.error(err));  #### Java ####      // This code sample uses the  'Unirest' library:      // http://unirest.io/java.html      HttpResponse response = Unirest.post(\"https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments\")              .basicAuth(\"email@example.com\", \"\")              .header(\"Accept\", \"application/json\")              .header(\"X-Atlassian-Token\", \"no-check\")              .field(\"file\", new File(\"myfile.txt\"))              .asJson();                   System.out.println(response.getBody());  #### Python ####      # This code sample uses the 'requests' library:      # http://docs.python-requests.org      import requests      from requests.auth import HTTPBasicAuth      import json           url = \"https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments\"           auth = HTTPBasicAuth(\"email@example.com\", \"\")           headers = {         \"Accept\": \"application/json\",         \"X-Atlassian-Token\": \"no-check\"      }           response = requests.request(         \"POST\",         url,         headers = headers,         auth = auth,         files = {              \"file\": (\"myfile.txt\", open(\"myfile.txt\",\"rb\"), \"application-type\")         }      )           print(json.dumps(json.loads(response.text), sort_keys=True, indent=4, separators=(\",\", \": \")))  #### PHP ####      // This code sample uses the 'Unirest' library:      // http://unirest.io/php.html      Unirest\\Request::auth('email@example.com', '');           $headers = array(        'Accept' => 'application/json',        'X-Atlassian-Token' => 'no-check'      );           $parameters = array(        'file' => File::add('myfile.txt')      );           $response = Unirest\\Request::post(        'https://your-domain.atlassian.net/rest/api/2/issue/{issueIdOrKey}/attachments',        $headers,        $parameters      );           var_dump($response)  #### Forge ####      // This sample uses Atlassian Forge and the `form-data` library.      // https://developer.atlassian.com/platform/forge/      // https://www.npmjs.com/package/form-data      import api from \"@forge/api\";      import FormData from \"form-data\";           const form = new FormData();      form.append('file', fileStream, {knownLength: fileSizeInBytes});           const response = await api.asApp().requestJira('/rest/api/2/issue/{issueIdOrKey}/attachments', {          method: 'POST',          body: form,          headers: {              'Accept': 'application/json',              'X-Atlassian-Token': 'no-check'          }      });           console.log(`Response: ${response.status} ${response.statusText}`);      console.log(await response.json());  Tip: Use a client library. Many client libraries have classes for handling multipart POST operations. For example, in Java, the Apache HTTP Components library provides a [MultiPartEntity](http://hc.apache.org/httpcomponents-client-ga/httpmime/apidocs/org/apache/http/entity/mime/MultipartEntity.html) class for multipart POST operations.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**    *  *Browse Projects* and *Create attachments* [ project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.attachment import Attachment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    issue_id_or_key = 'issue_id_or_key_example' # str | The ID or key of the issue that attachments are added to.

    try:
        # Add attachment
        api_response = api_instance.add_attachment(issue_id_or_key)
        print("The response of IssueAttachmentsApi->add_attachment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->add_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **issue_id_or_key** | **str**| The ID or key of the issue that attachments are added to. | 

### Return type

[**List[Attachment]**](Attachment.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if any of the following is true:   *  the issue is not found.  *  the user does not have permission to view the issue. |  -  |
**413** | The attachments exceed the maximum attachment size for issues. See [Configuring file attachments](https://confluence.atlassian.com/x/wIXKM) for details. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expand_attachment_for_humans**
> AttachmentArchiveMetadataReadable expand_attachment_for_humans(id)

Get all metadata for an expanded attachment

Returns the metadata for the contents of an attachment, if it is an archive, and metadata for the attachment itself. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned and metadata for the ZIP archive. Currently, only the ZIP archive format is supported.  Use this operation to retrieve data that is presented to the user, as this operation returns the metadata for the attachment itself, such as the attachment's ID and name. Otherwise, use [ Get contents metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-raw-get), which only returns the metadata for the attachment's contents.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.attachment_archive_metadata_readable import AttachmentArchiveMetadataReadable
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.

    try:
        # Get all metadata for an expanded attachment
        api_response = api_instance.expand_attachment_for_humans(id)
        print("The response of IssueAttachmentsApi->expand_attachment_for_humans:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->expand_attachment_for_humans: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 

### Return type

[**AttachmentArchiveMetadataReadable**](AttachmentArchiveMetadataReadable.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | The user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |
**409** | Returned if the attachment is an archive, but not a supported archive format. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expand_attachment_for_machines**
> AttachmentArchiveImpl expand_attachment_for_machines(id)

Get contents metadata for an expanded attachment

Returns the metadata for the contents of an attachment, if it is an archive. For example, if the attachment is a ZIP archive, then information about the files in the archive is returned. Currently, only the ZIP archive format is supported.  Use this operation if you are processing the data without presenting it to the user, as this operation only returns the metadata for the contents of the attachment. Otherwise, to retrieve data to present to the user, use [ Get all metadata for an expanded attachment](#api-rest-api-3-attachment-id-expand-human-get) which also returns the metadata for the attachment itself, such as the attachment's ID and name.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.attachment_archive_impl import AttachmentArchiveImpl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.

    try:
        # Get contents metadata for an expanded attachment
        api_response = api_instance.expand_attachment_for_machines(id)
        print("The response of IssueAttachmentsApi->expand_attachment_for_machines:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->expand_attachment_for_machines: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 

### Return type

[**AttachmentArchiveImpl**](AttachmentArchiveImpl.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. If an empty list is returned in the response, the attachment is empty, corrupt, or not an archive. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | The user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |
**409** | Returned if the attachment is an archive, but not a supported archive format. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attachment**
> AttachmentMetadata get_attachment(id)

Get attachment metadata

Returns the metadata for an attachment. Note that the attachment itself is not returned.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:**   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.attachment_metadata import AttachmentMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.

    try:
        # Get attachment metadata
        api_response = api_instance.get_attachment(id)
        print("The response of IssueAttachmentsApi->get_attachment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->get_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 

### Return type

[**AttachmentMetadata**](AttachmentMetadata.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attachment_content**
> object get_attachment_content(id, redirect=redirect)

Get attachment content

Returns the contents of an attachment. A `Range` header can be set to define a range of bytes within the attachment to download. See the [HTTP Range header standard](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range) for details.  To return a thumbnail of the attachment, use [Get attachment thumbnail](#api-rest-api-3-attachment-thumbnail-id-get).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.
    redirect = True # bool | Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. (optional) (default to True)

    try:
        # Get attachment content
        api_response = api_instance.get_attachment_content(id, redirect=redirect)
        print("The response of IssueAttachmentsApi->get_attachment_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->get_attachment_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 
 **redirect** | **bool**| Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to &#x60;false&#x60; to avoid making multiple requests to download the attachment. | [optional] [default to True]

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful when &#x60;redirect&#x60; is set to &#x60;false&#x60;. |  -  |
**206** | Returned if the request is successful when a &#x60;Range&#x60; header is provided and &#x60;redirect&#x60; is set to &#x60;false&#x60;. |  -  |
**303** | Returned if the request is successful. See the &#x60;Location&#x60; header for the download URL. |  -  |
**400** | Returned if the range supplied in the &#x60;Range&#x60; header is malformed. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**403** | The user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |
**416** | Returned if the server is unable to satisfy the range of bytes provided. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attachment_meta**
> AttachmentSettings get_attachment_meta()

Get Jira attachment settings

Returns the attachment settings, that is, whether attachments are enabled and the maximum attachment size allowed.  Note that there are also [project permissions](https://confluence.atlassian.com/x/yodKLg) that restrict whether users can create and delete attachments.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** None.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.attachment_settings import AttachmentSettings
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)

    try:
        # Get Jira attachment settings
        api_response = api_instance.get_attachment_meta()
        print("The response of IssueAttachmentsApi->get_attachment_meta:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->get_attachment_meta: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AttachmentSettings**](AttachmentSettings.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attachment_thumbnail**
> object get_attachment_thumbnail(id, redirect=redirect, fallback_to_default=fallback_to_default, width=width, height=height)

Get attachment thumbnail

Returns the thumbnail of an attachment.  To return the attachment contents, use [Get attachment content](#api-rest-api-3-attachment-content-id-get).  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** For the issue containing the attachment:   *  *Browse projects* [project permission](https://confluence.atlassian.com/x/yodKLg) for the project that the issue is in.  *  If [issue-level security](https://confluence.atlassian.com/x/J4lKLg) is configured, issue-level security permission to view the issue.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.
    redirect = True # bool | Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to `false` to avoid making multiple requests to download the attachment. (optional) (default to True)
    fallback_to_default = True # bool | Whether a default thumbnail is returned when the requested thumbnail is not found. (optional) (default to True)
    width = 56 # int | The maximum width to scale the thumbnail to. (optional)
    height = 56 # int | The maximum height to scale the thumbnail to. (optional)

    try:
        # Get attachment thumbnail
        api_response = api_instance.get_attachment_thumbnail(id, redirect=redirect, fallback_to_default=fallback_to_default, width=width, height=height)
        print("The response of IssueAttachmentsApi->get_attachment_thumbnail:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->get_attachment_thumbnail: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 
 **redirect** | **bool**| Whether a redirect is provided for the attachment download. Clients that do not automatically follow redirects can set this to &#x60;false&#x60; to avoid making multiple requests to download the attachment. | [optional] [default to True]
 **fallback_to_default** | **bool**| Whether a default thumbnail is returned when the requested thumbnail is not found. | [optional] [default to True]
 **width** | **int**| The maximum width to scale the thumbnail to. | [optional] 
 **height** | **int**| The maximum height to scale the thumbnail to. | [optional] 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful when &#x60;redirect&#x60; is set to &#x60;false&#x60;. |  -  |
**303** | Returned if the request is successful. See the &#x60;Location&#x60; header for the download URL. |  -  |
**400** | Returned if the request is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect. |  -  |
**403** | The user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings.  *  &#x60;fallbackToDefault&#x60; is &#x60;false&#x60; and the request thumbnail cannot be downloaded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_attachment**
> remove_attachment(id)

Delete attachment

Deletes an attachment from an issue.  This operation can be accessed anonymously.  **[Permissions](#permissions) required:** For the project holding the issue containing the attachment:   *  *Delete own attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by the calling user.  *  *Delete all attachments* [project permission](https://confluence.atlassian.com/x/yodKLg) to delete an attachment created by any user.

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.IssueAttachmentsApi(api_client)
    id = 'id_example' # str | The ID of the attachment.

    try:
        # Delete attachment
        api_instance.remove_attachment(id)
    except Exception as e:
        print("Exception when calling IssueAttachmentsApi->remove_attachment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The ID of the attachment. | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |
**404** | Returned if:   *  the attachment is not found.  *  attachments are disabled in the Jira settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

