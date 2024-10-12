# openapi_client.FilesApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_comments_delete_0**](FilesApi.md#files_comments_delete_0) | **POST** /files.comments.delete | 
[**files_delete**](FilesApi.md#files_delete) | **POST** /files.delete | 
[**files_info**](FilesApi.md#files_info) | **GET** /files.info | 
[**files_list**](FilesApi.md#files_list) | **GET** /files.list | 
[**files_remote_add_0**](FilesApi.md#files_remote_add_0) | **POST** /files.remote.add | 
[**files_remote_info_0**](FilesApi.md#files_remote_info_0) | **GET** /files.remote.info | 
[**files_remote_list_0**](FilesApi.md#files_remote_list_0) | **GET** /files.remote.list | 
[**files_remote_remove_0**](FilesApi.md#files_remote_remove_0) | **POST** /files.remote.remove | 
[**files_remote_share_0**](FilesApi.md#files_remote_share_0) | **GET** /files.remote.share | 
[**files_remote_update_0**](FilesApi.md#files_remote_update_0) | **POST** /files.remote.update | 
[**files_revoke_public_url**](FilesApi.md#files_revoke_public_url) | **POST** /files.revokePublicURL | 
[**files_shared_public_url**](FilesApi.md#files_shared_public_url) | **POST** /files.sharedPublicURL | 
[**files_upload**](FilesApi.md#files_upload) | **POST** /files.upload | 


# **files_comments_delete_0**
> FilesCommentsDeleteSchema files_comments_delete_0(token=token, file=file, id=id)



Deletes an existing comment on a file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_comments_delete_schema import FilesCommentsDeleteSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)
    file = 'file_example' # str | File to delete a comment from. (optional)
    id = 'id_example' # str | The comment to delete. (optional)

    try:
        api_response = api_instance.files_comments_delete_0(token=token, file=file, id=id)
        print("The response of FilesApi->files_comments_delete_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_comments_delete_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 
 **file** | **str**| File to delete a comment from. | [optional] 
 **id** | **str**| The comment to delete. | [optional] 

### Return type

[**FilesCommentsDeleteSchema**](FilesCommentsDeleteSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response is very simple |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_delete**
> FilesDeleteSchema files_delete(token=token, file=file)



Deletes a file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_delete_schema import FilesDeleteSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)
    file = 'file_example' # str | ID of file to delete. (optional)

    try:
        api_response = api_instance.files_delete(token=token, file=file)
        print("The response of FilesApi->files_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 
 **file** | **str**| ID of file to delete. | [optional] 

### Return type

[**FilesDeleteSchema**](FilesDeleteSchema.md)

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

# **files_info**
> FilesInfoSchema files_info(token=token, file=file, count=count, page=page, limit=limit, cursor=cursor)



Gets information about a file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_info_schema import FilesInfoSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:read` (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    count = 'count_example' # str |  (optional)
    page = 'page_example' # str |  (optional)
    limit = 56 # int | The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. (optional)
    cursor = 'cursor_example' # str | Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection of comments. See [pagination](/docs/pagination) for more details. (optional)

    try:
        api_response = api_instance.files_info(token=token, file=file, count=count, page=page, limit=limit, cursor=cursor)
        print("The response of FilesApi->files_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:read&#x60; | [optional] 
 **file** | **str**| Specify a file by providing its ID. | [optional] 
 **count** | **str**|  | [optional] 
 **page** | **str**|  | [optional] 
 **limit** | **int**| The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn&#39;t been reached. | [optional] 
 **cursor** | **str**| Parameter for pagination. File comments are paginated for a single file. Set &#x60;cursor&#x60; equal to the &#x60;next_cursor&#x60; attribute returned by the previous request&#39;s &#x60;response_metadata&#x60;. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \&quot;page\&quot; of the collection of comments. See [pagination](/docs/pagination) for more details. | [optional] 

### Return type

[**FilesInfoSchema**](FilesInfoSchema.md)

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

# **files_list**
> FilesListSchema files_list(token=token, user=user, channel=channel, ts_from=ts_from, ts_to=ts_to, types=types, count=count, page=page, show_files_hidden_by_limit=show_files_hidden_by_limit)



List for a team, in a channel, or from a user with applied filters.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_list_schema import FilesListSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:read` (optional)
    user = 'user_example' # str | Filter files created by a single user. (optional)
    channel = 'channel_example' # str | Filter files appearing in a specific channel, indicated by its ID. (optional)
    ts_from = 3.4 # float | Filter files created after this timestamp (inclusive). (optional)
    ts_to = 3.4 # float | Filter files created before this timestamp (inclusive). (optional)
    types = 'types_example' # str | Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list. (optional)
    count = 'count_example' # str |  (optional)
    page = 'page_example' # str |  (optional)
    show_files_hidden_by_limit = True # bool | Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit. (optional)

    try:
        api_response = api_instance.files_list(token=token, user=user, channel=channel, ts_from=ts_from, ts_to=ts_to, types=types, count=count, page=page, show_files_hidden_by_limit=show_files_hidden_by_limit)
        print("The response of FilesApi->files_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:read&#x60; | [optional] 
 **user** | **str**| Filter files created by a single user. | [optional] 
 **channel** | **str**| Filter files appearing in a specific channel, indicated by its ID. | [optional] 
 **ts_from** | **float**| Filter files created after this timestamp (inclusive). | [optional] 
 **ts_to** | **float**| Filter files created before this timestamp (inclusive). | [optional] 
 **types** | **str**| Filter files by type ([see below](#file_types)). You can pass multiple values in the types argument, like &#x60;types&#x3D;spaces,snippets&#x60;.The default value is &#x60;all&#x60;, which does not filter the list. | [optional] 
 **count** | **str**|  | [optional] 
 **page** | **str**|  | [optional] 
 **show_files_hidden_by_limit** | **bool**| Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit. | [optional] 

### Return type

[**FilesListSchema**](FilesListSchema.md)

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

# **files_remote_add_0**
> DefaultSuccessTemplate files_remote_add_0(external_id=external_id, external_url=external_url, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)



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
    api_instance = openapi_client.FilesApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    external_url = 'external_url_example' # str | URL of the remote file. (optional)
    filetype = 'filetype_example' # str | type of file (optional)
    indexable_file_contents = 'indexable_file_contents_example' # str | A text file (txt, pdf, doc, etc.) containing textual search terms that are used to improve discovery of the remote file. (optional)
    preview_image = 'preview_image_example' # str | Preview of the document via `multipart/form-data`. (optional)
    title = 'title_example' # str | Title of the file being shared. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_add_0(external_id=external_id, external_url=external_url, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)
        print("The response of FilesApi->files_remote_add_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_add_0: %s\n" % e)
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

# **files_remote_info_0**
> DefaultSuccessTemplate files_remote_info_0(token=token, file=file, external_id=external_id)



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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:read` (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)

    try:
        api_response = api_instance.files_remote_info_0(token=token, file=file, external_id=external_id)
        print("The response of FilesApi->files_remote_info_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_info_0: %s\n" % e)
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

# **files_remote_list_0**
> DefaultSuccessTemplate files_remote_list_0(token=token, channel=channel, ts_from=ts_from, ts_to=ts_to, limit=limit, cursor=cursor)



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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:read` (optional)
    channel = 'channel_example' # str | Filter files appearing in a specific channel, indicated by its ID. (optional)
    ts_from = 3.4 # float | Filter files created after this timestamp (inclusive). (optional)
    ts_to = 3.4 # float | Filter files created before this timestamp (inclusive). (optional)
    limit = 56 # int | The maximum number of items to return. (optional)
    cursor = 'cursor_example' # str | Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](/docs/pagination) for more detail. (optional)

    try:
        api_response = api_instance.files_remote_list_0(token=token, channel=channel, ts_from=ts_from, ts_to=ts_to, limit=limit, cursor=cursor)
        print("The response of FilesApi->files_remote_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_list_0: %s\n" % e)
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

# **files_remote_remove_0**
> DefaultSuccessTemplate files_remote_remove_0(external_id=external_id, file=file, token=token)



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
    api_instance = openapi_client.FilesApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_remove_0(external_id=external_id, file=file, token=token)
        print("The response of FilesApi->files_remote_remove_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_remove_0: %s\n" % e)
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

# **files_remote_share_0**
> DefaultSuccessTemplate files_remote_share_0(token=token, file=file, external_id=external_id, channels=channels)



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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:share` (optional)
    file = 'file_example' # str | Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required. (optional)
    external_id = 'external_id_example' # str | The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required. (optional)
    channels = 'channels_example' # str | Comma-separated list of channel IDs where the file will be shared. (optional)

    try:
        api_response = api_instance.files_remote_share_0(token=token, file=file, external_id=external_id, channels=channels)
        print("The response of FilesApi->files_remote_share_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_share_0: %s\n" % e)
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

# **files_remote_update_0**
> DefaultSuccessTemplate files_remote_update_0(external_id=external_id, external_url=external_url, file=file, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)



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
    api_instance = openapi_client.FilesApi(api_client)
    external_id = 'external_id_example' # str | Creator defined GUID for the file. (optional)
    external_url = 'external_url_example' # str | URL of the remote file. (optional)
    file = 'file_example' # str | Specify a file by providing its ID. (optional)
    filetype = 'filetype_example' # str | type of file (optional)
    indexable_file_contents = 'indexable_file_contents_example' # str | File containing contents that can be used to improve searchability for the remote file. (optional)
    preview_image = 'preview_image_example' # str | Preview of the document via `multipart/form-data`. (optional)
    title = 'title_example' # str | Title of the file being shared. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `remote_files:write` (optional)

    try:
        api_response = api_instance.files_remote_update_0(external_id=external_id, external_url=external_url, file=file, filetype=filetype, indexable_file_contents=indexable_file_contents, preview_image=preview_image, title=title, token=token)
        print("The response of FilesApi->files_remote_update_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_remote_update_0: %s\n" % e)
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

# **files_revoke_public_url**
> FilesRevokePublicURLSchema files_revoke_public_url(token=token, file=file)



Revokes public/external sharing access for a file

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_revoke_public_url_schema import FilesRevokePublicURLSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)
    file = 'file_example' # str | File to revoke (optional)

    try:
        api_response = api_instance.files_revoke_public_url(token=token, file=file)
        print("The response of FilesApi->files_revoke_public_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_revoke_public_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 
 **file** | **str**| File to revoke | [optional] 

### Return type

[**FilesRevokePublicURLSchema**](FilesRevokePublicURLSchema.md)

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

# **files_shared_public_url**
> FilesSharedPublicURLSchema files_shared_public_url(token=token, file=file)



Enables a file for public/external sharing.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_shared_public_url_schema import FilesSharedPublicURLSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)
    file = 'file_example' # str | File to share (optional)

    try:
        api_response = api_instance.files_shared_public_url(token=token, file=file)
        print("The response of FilesApi->files_shared_public_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_shared_public_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 
 **file** | **str**| File to share | [optional] 

### Return type

[**FilesSharedPublicURLSchema**](FilesSharedPublicURLSchema.md)

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

# **files_upload**
> FilesUploadSchema files_upload(channels=channels, content=content, file=file, filename=filename, filetype=filetype, initial_comment=initial_comment, thread_ts=thread_ts, title=title, token=token)



Uploads or creates a file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_upload_schema import FilesUploadSchema
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
    api_instance = openapi_client.FilesApi(api_client)
    channels = 'channels_example' # str | Comma-separated list of channel names or IDs where the file will be shared. (optional)
    content = 'content_example' # str | File contents via a POST variable. If omitting this parameter, you must provide a `file`. (optional)
    file = 'file_example' # str | File contents via `multipart/form-data`. If omitting this parameter, you must submit `content`. (optional)
    filename = 'filename_example' # str | Filename of file. (optional)
    filetype = 'filetype_example' # str | A [file type](/types/file#file_types) identifier. (optional)
    initial_comment = 'initial_comment_example' # str | The message text introducing the file in specified `channels`. (optional)
    thread_ts = 3.4 # float | Provide another message's `ts` value to upload this file as a reply. Never use a reply's `ts` value; use its parent instead. (optional)
    title = 'title_example' # str | Title of file. (optional)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)

    try:
        api_response = api_instance.files_upload(channels=channels, content=content, file=file, filename=filename, filetype=filetype, initial_comment=initial_comment, thread_ts=thread_ts, title=title, token=token)
        print("The response of FilesApi->files_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channels** | **str**| Comma-separated list of channel names or IDs where the file will be shared. | [optional] 
 **content** | **str**| File contents via a POST variable. If omitting this parameter, you must provide a &#x60;file&#x60;. | [optional] 
 **file** | **str**| File contents via &#x60;multipart/form-data&#x60;. If omitting this parameter, you must submit &#x60;content&#x60;. | [optional] 
 **filename** | **str**| Filename of file. | [optional] 
 **filetype** | **str**| A [file type](/types/file#file_types) identifier. | [optional] 
 **initial_comment** | **str**| The message text introducing the file in specified &#x60;channels&#x60;. | [optional] 
 **thread_ts** | **float**| Provide another message&#39;s &#x60;ts&#x60; value to upload this file as a reply. Never use a reply&#39;s &#x60;ts&#x60; value; use its parent instead. | [optional] 
 **title** | **str**| Title of file. | [optional] 
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 

### Return type

[**FilesUploadSchema**](FilesUploadSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response after uploading a file to a channel with an initial message |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

