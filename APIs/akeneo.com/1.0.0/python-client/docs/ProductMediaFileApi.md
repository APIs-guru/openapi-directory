# openapi_client.ProductMediaFileApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_media_files**](ProductMediaFileApi.md#get_media_files) | **GET** /api/rest/v1/media-files | Get a list of product media files
[**get_media_files_code**](ProductMediaFileApi.md#get_media_files_code) | **GET** /api/rest/v1/media-files/{code} | Get a product media file
[**get_media_files_code_download**](ProductMediaFileApi.md#get_media_files_code_download) | **GET** /api/rest/v1/media-files/{code}/download | Download a product media file
[**post_media_files**](ProductMediaFileApi.md#post_media_files) | **POST** /api/rest/v1/media-files | Create a new product media file


# **get_media_files**
> MediaFiles get_media_files(page=page, limit=limit, with_count=with_count)

Get a list of product media files

This endpoint allows you to get a list of media files that are used as attribute values in products or product models.

### Example


```python
import openapi_client
from openapi_client.models.media_files import MediaFiles
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductMediaFileApi(api_client)
    page = 1 # int | Number of the page to retrieve when using the `page` pagination method type. <strong>Should never be set manually</strong>, see <a href=\"/documentation/pagination.html#pagination\">Pagination</a> section (optional) (default to 1)
    limit = 10 # int | Number of results by page, see <a href=\"/documentation/pagination.html\">Pagination</a> section (optional) (default to 10)
    with_count = False # bool | Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way (optional) (default to False)

    try:
        # Get a list of product media files
        api_response = api_instance.get_media_files(page=page, limit=limit, with_count=with_count)
        print("The response of ProductMediaFileApi->get_media_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductMediaFileApi->get_media_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Number of the page to retrieve when using the &#x60;page&#x60; pagination method type. &lt;strong&gt;Should never be set manually&lt;/strong&gt;, see &lt;a href&#x3D;\&quot;/documentation/pagination.html#pagination\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 1]
 **limit** | **int**| Number of results by page, see &lt;a href&#x3D;\&quot;/documentation/pagination.html\&quot;&gt;Pagination&lt;/a&gt; section | [optional] [default to 10]
 **with_count** | **bool**| Return the count of items in the response. Be carefull with that, on a big catalog, it can decrease performance in a significative way | [optional] [default to False]

### Return type

[**MediaFiles**](MediaFiles.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, _embedded, _links, current_page, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return media files paginated |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_media_files_code**
> GetMediaFilesCode200Response get_media_files_code(code)

Get a product media file

This endpoint allows you to get the information about a given media file that is used as an attribute value of a product or a product model.

### Example


```python
import openapi_client
from openapi_client.models.get_media_files_code200_response import GetMediaFilesCode200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductMediaFileApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Get a product media file
        api_response = api_instance.get_media_files_code(code)
        print("The response of ProductMediaFileApi->get_media_files_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductMediaFileApi->get_media_files_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

[**GetMediaFilesCode200Response**](GetMediaFilesCode200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_media_files_code_download**
> get_media_files_code_download(code)

Download a product media file

This endpoint allows you to download a given media file that is used as an attribute value of a product or a product model.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductMediaFileApi(api_client)
    code = 'code_example' # str | Code of the resource

    try:
        # Download a product media file
        api_instance.get_media_files_code_download(code)
    except Exception as e:
        print("Exception when calling ProductMediaFileApi->get_media_files_code_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **str**| Code of the resource | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**404** | Resource not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_media_files**
> post_media_files(content_type, body=body)

Create a new product media file

This endpoint allows you to create a new media file and associate it to an attribute value of a given product or product model.

### Example


```python
import openapi_client
from openapi_client.models.post_media_files_request import PostMediaFilesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductMediaFileApi(api_client)
    content_type = 'content_type_example' # str | Equal to 'multipart/form-data', no other value allowed
    body = openapi_client.PostMediaFilesRequest() # PostMediaFilesRequest |  (optional)

    try:
        # Create a new product media file
        api_instance.post_media_files(content_type, body=body)
    except Exception as e:
        print("Exception when calling ProductMediaFileApi->post_media_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| Equal to &#39;multipart/form-data&#39;, no other value allowed | 
 **body** | [**PostMediaFilesRequest**](PostMediaFilesRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, code, message, _links

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  * Location - URI of the created resource <br>  |
**400** | Bad request |  -  |
**401** | Authentication required |  -  |
**403** | Access forbidden |  -  |
**415** | Unsupported Media type |  -  |
**422** | Unprocessable entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

