# openapi_client.ImageStoreApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy_image_store_content**](ImageStoreApi.md#copy_image_store_content) | **POST** /ImageStore/$/Copy | Copies image store content internally
[**delete_image_store_content**](ImageStoreApi.md#delete_image_store_content) | **DELETE** /ImageStore/{contentPath} | Deletes existing image store content.
[**get_image_store_content**](ImageStoreApi.md#get_image_store_content) | **GET** /ImageStore/{contentPath} | Gets the image store content information.
[**get_image_store_root_content**](ImageStoreApi.md#get_image_store_root_content) | **GET** /ImageStore | Gets the content information at the root of the image store.
[**upload_file**](ImageStoreApi.md#upload_file) | **PUT** /ImageStore/{contentPath} | Uploads contents of the file to the image store.


# **copy_image_store_content**
> copy_image_store_content(api_version, image_store_copy_description, timeout=timeout)

Copies image store content internally

Copies the image store content from the source image store relative path to the destination image store relative path.

### Example


```python
import openapi_client
from openapi_client.models.image_store_copy_description import ImageStoreCopyDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImageStoreApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    image_store_copy_description = openapi_client.ImageStoreCopyDescription() # ImageStoreCopyDescription | Describes the copy description for the image store.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Copies image store content internally
        api_instance.copy_image_store_content(api_version, image_store_copy_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ImageStoreApi->copy_image_store_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **image_store_copy_description** | [**ImageStoreCopyDescription**](ImageStoreCopyDescription.md)| Describes the copy description for the image store. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_image_store_content**
> delete_image_store_content(api_version, content_path, timeout=timeout)

Deletes existing image store content.

Deletes existing image store content being found within the given image store relative path. This can be used to delete uploaded application packages once they are provisioned.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImageStoreApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    content_path = 'content_path_example' # str | Relative path to file or folder in the image store from its root.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deletes existing image store content.
        api_instance.delete_image_store_content(api_version, content_path, timeout=timeout)
    except Exception as e:
        print("Exception when calling ImageStoreApi->delete_image_store_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **content_path** | **str**| Relative path to file or folder in the image store from its root. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_store_content**
> ImageStoreContent get_image_store_content(api_version, content_path, timeout=timeout)

Gets the image store content information.

Returns the information about the image store content at the specified contentPath relative to the root of the image store.

### Example


```python
import openapi_client
from openapi_client.models.image_store_content import ImageStoreContent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImageStoreApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    content_path = 'content_path_example' # str | Relative path to file or folder in the image store from its root.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the image store content information.
        api_response = api_instance.get_image_store_content(api_version, content_path, timeout=timeout)
        print("The response of ImageStoreApi->get_image_store_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageStoreApi->get_image_store_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **content_path** | **str**| Relative path to file or folder in the image store from its root. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ImageStoreContent**](ImageStoreContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested image store content information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_store_root_content**
> ImageStoreContent get_image_store_root_content(api_version, timeout=timeout)

Gets the content information at the root of the image store.

Returns the information about the image store content at the root of the image store.

### Example


```python
import openapi_client
from openapi_client.models.image_store_content import ImageStoreContent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImageStoreApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the content information at the root of the image store.
        api_response = api_instance.get_image_store_root_content(api_version, timeout=timeout)
        print("The response of ImageStoreApi->get_image_store_root_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImageStoreApi->get_image_store_root_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ImageStoreContent**](ImageStoreContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested image store content information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file**
> upload_file(api_version, content_path, timeout=timeout)

Uploads contents of the file to the image store.

Uploads contents of the file to the image store. Use this API if the file is small enough to upload again if the connection fails. The file's data needs to be added to the request body. The contents will be uploaded to the specified path. Image store service uses a mark file to indicate the availability of the folder. The mark file is an empty file named \"_.dir\". The mark file is generated by the image store service when all files in a folder are uploaded. When using File-by-File approach to upload application package in REST, the image store service isn't aware of the file hierarchy of the application package; you need to create a mark file per folder and upload it last, to let the image store service know that the folder is complete. 

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ImageStoreApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    content_path = 'content_path_example' # str | Relative path to file or folder in the image store from its root.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Uploads contents of the file to the image store.
        api_instance.upload_file(api_version, content_path, timeout=timeout)
    except Exception as e:
        print("Exception when calling ImageStoreApi->upload_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **content_path** | **str**| Relative path to file or folder in the image store from its root. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If the upload request succeeds, the server returns the HTTP 200 OK status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

