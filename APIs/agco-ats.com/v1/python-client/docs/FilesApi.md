# openapi_client.FilesApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_delete_file**](FilesApi.md#files_delete_file) | **DELETE** /api/v2/Files/{ID} | Mark a file as &#39;Removed&#39;. Disables download of the file and hides metadata from GET all method
[**files_get_file**](FilesApi.md#files_get_file) | **GET** /api/v2/Files/{ID} | Gets a file&#39;s metadata.
[**files_get_file_contents**](FilesApi.md#files_get_file_contents) | **GET** /api/v2/Files/{ID}/FileContents | Download the contents of a file. The current State of the File should be &#39;Available&#39;.
[**files_get_files**](FilesApi.md#files_get_files) | **GET** /api/v2/Files | Get a paged response of file metadata.
[**files_post_file**](FilesApi.md#files_post_file) | **POST** /api/v2/Files | Create the metadata for a file before uploading. The State of the File should be &#39;Created&#39;.
[**files_put_file**](FilesApi.md#files_put_file) | **PUT** /api/v2/Files/{ID} | Update the metadata for a file. Size may not be modified by the client.
[**files_put_file_contents**](FilesApi.md#files_put_file_contents) | **PUT** /api/v2/Files/{ID}/FileContents | Upload the contents of a file. The current State of the File should be &#39;Created&#39;.


# **files_delete_file**
> files_delete_file(id)

Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    id = 'id_example' # str | The file's id.

    try:
        # Mark a file as 'Removed'. Disables download of the file and hides metadata from GET all method
        api_instance.files_delete_file(id)
    except Exception as e:
        print("Exception when calling FilesApi->files_delete_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The file&#39;s id. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_get_file**
> GlobalResourcesSharedModelsFileDownload files_get_file(id)

Gets a file's metadata.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_file_download import GlobalResourcesSharedModelsFileDownload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Gets a file's metadata.
        api_response = api_instance.files_get_file(id)
        print("The response of FilesApi->files_get_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_get_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GlobalResourcesSharedModelsFileDownload**](GlobalResourcesSharedModelsFileDownload.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_get_file_contents**
> object files_get_file_contents(id)

Download the contents of a file. The current State of the File should be 'Available'.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    id = 'id_example' # str | The file's metadata.

    try:
        # Download the contents of a file. The current State of the File should be 'Available'.
        api_response = api_instance.files_get_file_contents(id)
        print("The response of FilesApi->files_get_file_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_get_file_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The file&#39;s metadata. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_get_files**
> APIIPagedResponseGlobalResourcesSharedModelsFileDownload files_get_files(include_deleted=include_deleted, limit=limit, offset=offset)

Get a paged response of file metadata.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.apii_paged_response_global_resources_shared_models_file_download import APIIPagedResponseGlobalResourcesSharedModelsFileDownload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    include_deleted = True # bool | Indicates whether to include files marked as removed. (optional)
    limit = 56 # int | Optional. The page limit. The default page limit is 10. (optional)
    offset = 56 # int | Optional. The page offset. The default page offset is 0. (optional)

    try:
        # Get a paged response of file metadata.
        api_response = api_instance.files_get_files(include_deleted=include_deleted, limit=limit, offset=offset)
        print("The response of FilesApi->files_get_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_get_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_deleted** | **bool**| Indicates whether to include files marked as removed. | [optional] 
 **limit** | **int**| Optional. The page limit. The default page limit is 10. | [optional] 
 **offset** | **int**| Optional. The page offset. The default page offset is 0. | [optional] 

### Return type

[**APIIPagedResponseGlobalResourcesSharedModelsFileDownload**](APIIPagedResponseGlobalResourcesSharedModelsFileDownload.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_post_file**
> str files_post_file(global_resources_shared_models_file_download)

Create the metadata for a file before uploading. The State of the File should be 'Created'.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_file_download import GlobalResourcesSharedModelsFileDownload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    global_resources_shared_models_file_download = openapi_client.GlobalResourcesSharedModelsFileDownload() # GlobalResourcesSharedModelsFileDownload | The file's metadata.

    try:
        # Create the metadata for a file before uploading. The State of the File should be 'Created'.
        api_response = api_instance.files_post_file(global_resources_shared_models_file_download)
        print("The response of FilesApi->files_post_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_post_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **global_resources_shared_models_file_download** | [**GlobalResourcesSharedModelsFileDownload**](GlobalResourcesSharedModelsFileDownload.md)| The file&#39;s metadata. | 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_put_file**
> files_put_file(id, global_resources_shared_models_file_download)

Update the metadata for a file. Size may not be modified by the client.

Update the metadata for a file. Size may not be modified by the client.                   Set status to 'Available' to publish a file. The file must be uploaded.                  Set status to 'Created' to reset a file's contents and re-upload.                   A file may only be 'Removed' by the DELETE method.

### Example


```python
import openapi_client
from openapi_client.models.global_resources_shared_models_file_download import GlobalResourcesSharedModelsFileDownload
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    id = 'id_example' # str | The file's id
    global_resources_shared_models_file_download = openapi_client.GlobalResourcesSharedModelsFileDownload() # GlobalResourcesSharedModelsFileDownload | The file's metadata

    try:
        # Update the metadata for a file. Size may not be modified by the client.
        api_instance.files_put_file(id, global_resources_shared_models_file_download)
    except Exception as e:
        print("Exception when calling FilesApi->files_put_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The file&#39;s id | 
 **global_resources_shared_models_file_download** | [**GlobalResourcesSharedModelsFileDownload**](GlobalResourcesSharedModelsFileDownload.md)| The file&#39;s metadata | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **files_put_file_contents**
> object files_put_file_contents(id)

Upload the contents of a file. The current State of the File should be 'Created'.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    id = 'id_example' # str | The file's metadata.

    try:
        # Upload the contents of a file. The current State of the File should be 'Created'.
        api_response = api_instance.files_put_file_contents(id)
        print("The response of FilesApi->files_put_file_contents:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->files_put_file_contents: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The file&#39;s metadata. | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

