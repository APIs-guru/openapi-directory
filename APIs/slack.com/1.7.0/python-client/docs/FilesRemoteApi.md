# openapi_client.FilesRemoteApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_remote_add**](FilesRemoteApi.md#files_remote_add) | **POST** /files.remote.add | 
[**files_remote_info**](FilesRemoteApi.md#files_remote_info) | **GET** /files.remote.info | 
[**files_remote_list**](FilesRemoteApi.md#files_remote_list) | **GET** /files.remote.list | 
[**files_remote_remove**](FilesRemoteApi.md#files_remote_remove) | **POST** /files.remote.remove | 
[**files_remote_share**](FilesRemoteApi.md#files_remote_share) | **GET** /files.remote.share | 
[**files_remote_update**](FilesRemoteApi.md#files_remote_update) | **POST** /files.remote.update | 


# **files_remote_add**
> DefaultSuccessTemplate files_remote_add(external_id=external_id, external_url=external_url, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)



Adds a file from a remote service

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    external_url = 'external_url_example' # str | URL of the remote file. (optional)
    filetype = 'filetype_example' # str | type of file (optional)
    indexable_file_contents = 'indexable_file_contents_example' # str | A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. (optional)
    preview_image = 'preview_image_example' # str | Preview of the document via `multipart/form-data`. (optional)
    title = 'title_example' # str | Title of the file being shared. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_add(external_id=external_id, external_url=external_url, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)
        print("The response of FilesRemoteApi->files_remote_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| Creator defined GUID for the file. | [optional] 
 **external_url** | **str**| URL of the remote file. | [optional] 
 **filetype** | **str**| type of file | [optional] 
 **indexable_file_contents** | **str**| A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. | [optional] 
 **preview_image** | **str**| Preview of the document via &#x60;multipart/form-data&#x60;. | [optional] 
 **title** | **str**| Title of the file being shared. | [optional] 
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:write&#x60; | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_remote_info**
> DefaultSuccessTemplate files_remote_info(token=token, file=file, external_id=external_id)



Retrieve information about a remote file added to Slack

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:read` (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)

    try:
        api_response = api_instance.files_remote_info(token=token, file=file, external_id=external_id)
        print("The response of FilesRemoteApi->files_remote_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:read&#x60; | [optional] 
 **file** | **str**| Specify a file by providing its ID. | [optional] 
 **external_id** | **str**| Creator defined GUID for the file. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_remote_list**
> DefaultSuccessTemplate files_remote_list(token=token, channel=channel, ts_from=ts_from, ts_to=ts_to, limit=limit, cursor=cursor)



Retrieve information about a remote file added to Slack

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:read` (optional)
    channel = 'channel_example' # str | Filter files appearing in a specific channel, indicated by its ID. (optional)
    ts_from = 3.4 # float | Filter files created after this timestamp (inclusive). (optional)
    ts_to = 3.4 # float | Filter files created before this timestamp (inclusive). (optional)
    limit = 56 # int | The maximum number of items to return. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.files_remote_list(token=token, channel=channel, ts_from=ts_from, ts_to=ts_to, limit=limit, cursor=cursor)
        print("The response of FilesRemoteApi->files_remote_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:read&#x60; | [optional] 
 **channel** | **str**| Filter files appearing in a specific channel, indicated by its ID. | [optional] 
 **ts_from** | **float**| Filter files created after this timestamp (inclusive). | [optional] 
 **ts_to** | **float**| Filter files created before this timestamp (inclusive). | [optional] 
 **limit** | **int**| The maximum number of items to return. | [optional] 
 **cursor** | **str**| Paginate through collections of data by setting the &#x60;cursor&#x60; parameter to a &#x60;next_cursor&#x60; attribute returned by a previous request&#39;s &#x60;response_metadata&#x60;. Default value fetches the first \&quot;page\&quot; of the collection. See [pagination](/docs/pagination) for more detail. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_remote_remove**
> DefaultSuccessTemplate files_remote_remove(external_id=external_id, file=file, token=token)



Remove a remote file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_remove(external_id=external_id, file=file, token=token)
        print("The response of FilesRemoteApi->files_remote_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| Creator defined GUID for the file. | [optional] 
 **file** | **str**| Specify a file by providing its ID. | [optional] 
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:write&#x60; | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_remote_share**
> DefaultSuccessTemplate files_remote_share(token=token, file=file, external_id=external_id, channels=channels)



Share a remote file into a channel.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:share` (optional)
    file = 'file_example' # str | Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. (optional)
    external_id = 'external_id_example' # str | The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. (optional)
    channels = 'channels_example' # str | Comma-separated list of channel IDs where the file will be shared. (optional)

    try:
        api_response = api_instance.files_remote_share(token=token, file=file, external_id=external_id, channels=channels)
        print("The response of FilesRemoteApi->files_remote_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:share&#x60; | [optional] 
 **file** | **str**| Specify a file registered with Slack by providing its ID. Either this field or &#x60;external_id&#x60; or both are required. | [optional] 
 **external_id** | **str**| The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or &#x60;file&#x60; or both are required. | [optional] 
 **channels** | **str**| Comma-separated list of channel IDs where the file will be shared. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_remote_update**
> DefaultSuccessTemplate files_remote_update(external_id=external_id, external_url=external_url, file=file, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)



Updates an existing remote file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesRemoteApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    external_url = 'external_url_example' # str | URL of the remote file. (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    filetype = 'filetype_example' # str | type of file (optional)
    indexable_file_contents = 'indexable_file_contents_example' # str | File containing contents that can be used to improve searchability for the remote file. (optional)
    preview_image = 'preview_image_example' # str | Preview of the document via `multipart/form-data`. (optional)
    title = 'title_example' # str | Title of the file being shared. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_update(external_id=external_id, external_url=external_url, file=file, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)
        print("The response of FilesRemoteApi->files_remote_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesRemoteApi->files_remote_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_id** | **str**| Creator defined GUID for the file. | [optional] 
 **external_url** | **str**| URL of the remote file. | [optional] 
 **file** | **str**| Specify a file by providing its ID. | [optional] 
 **filetype** | **str**| type of file | [optional] 
 **indexable_file_contents** | **str**| File containing contents that can be used to improve searchability for the remote file. | [optional] 
 **preview_image** | **str**| Preview of the document via &#x60;multipart/form-data&#x60;. | [optional] 
 **title** | **str**| Title of the file being shared. | [optional] 
 **token** | **str**| Authentication token. Requires scope: &#x60;remote_files:write&#x60; | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

