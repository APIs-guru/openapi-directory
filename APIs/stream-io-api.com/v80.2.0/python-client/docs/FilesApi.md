# openapi_client.FilesApi

All URIs are relative to *https://chat.stream-io-api.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_file_0**](FilesApi.md#delete_file_0) | **DELETE** /channels/{type}/{id}/file | Delete file
[**delete_image_0**](FilesApi.md#delete_image_0) | **DELETE** /channels/{type}/{id}/image | Delete image
[**upload_file_0**](FilesApi.md#upload_file_0) | **POST** /channels/{type}/{id}/file | Upload file
[**upload_image_0**](FilesApi.md#upload_image_0) | **POST** /channels/{type}/{id}/image | Upload image


# **delete_file_0**
> FileDeleteResponse delete_file_0(type, id, url=url)

Delete file

Deletes previously uploaded file  Required permissions: - DeleteAttachment 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.file_delete_response import FileDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    type = 'type_example' # str | Automatically added
    id = 'id_example' # str | Automatically added
    url = 'url_example' # str |  (optional)

    try:
        # Delete file
        api_response = api_instance.delete_file_0(type, id, url=url)
        print("The response of FilesApi->delete_file_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->delete_file_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Automatically added | 
 **id** | **str**| Automatically added | 
 **url** | **str**|  | [optional] 

### Return type

[**FileDeleteResponse**](FileDeleteResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_image_0**
> FileDeleteResponse delete_image_0(type, id, url=url)

Delete image

Deletes previously uploaded image  Required permissions: - DeleteAttachment 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.file_delete_response import FileDeleteResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    type = 'type_example' # str | Automatically added
    id = 'id_example' # str | Automatically added
    url = 'url_example' # str |  (optional)

    try:
        # Delete image
        api_response = api_instance.delete_image_0(type, id, url=url)
        print("The response of FilesApi->delete_image_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->delete_image_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**| Automatically added | 
 **id** | **str**| Automatically added | 
 **url** | **str**|  | [optional] 

### Return type

[**FileDeleteResponse**](FileDeleteResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_file_0**
> FileUploadResponse upload_file_0(type, id, file=file, user=user)

Upload file

Uploads file  Required permissions: - UploadAttachment 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.file_upload_response import FileUploadResponse
from openapi_client.models.only_user_id_request import OnlyUserIDRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    type = 'type_example' # str | 
    id = 'id_example' # str | 
    file = 'file_example' # str | file field (optional)
    user = openapi_client.OnlyUserIDRequest() # OnlyUserIDRequest |  (optional)

    try:
        # Upload file
        api_response = api_instance.upload_file_0(type, id, file=file, user=user)
        print("The response of FilesApi->upload_file_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->upload_file_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **id** | **str**|  | 
 **file** | **str**| file field | [optional] 
 **user** | [**OnlyUserIDRequest**](OnlyUserIDRequest.md)|  | [optional] 

### Return type

[**FileUploadResponse**](FileUploadResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upload_image_0**
> ImageUploadResponse upload_image_0(type, id, file=file, upload_sizes=upload_sizes, user=user)

Upload image

Uploads image  Required permissions: - UploadAttachment 

### Example

* Api Key Authentication (stream-auth-type):
* Api Key Authentication (api_key):
* Api Key Authentication (JWT):

```python
import openapi_client
from openapi_client.models.image_size_request import ImageSizeRequest
from openapi_client.models.image_upload_response import ImageUploadResponse
from openapi_client.models.only_user_id_request import OnlyUserIDRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://chat.stream-io-api.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://chat.stream-io-api.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: stream-auth-type
configuration.api_key['stream-auth-type'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['stream-auth-type'] = 'Bearer'

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Configure API key authorization: JWT
configuration.api_key['JWT'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['JWT'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesApi(api_client)
    type = 'type_example' # str | 
    id = 'id_example' # str | 
    file = 'file_example' # str |  (optional)
    upload_sizes = [openapi_client.ImageSizeRequest()] # List[ImageSizeRequest] | field with JSON-encoded array of image size configurations (optional)
    user = openapi_client.OnlyUserIDRequest() # OnlyUserIDRequest |  (optional)

    try:
        # Upload image
        api_response = api_instance.upload_image_0(type, id, file=file, upload_sizes=upload_sizes, user=user)
        print("The response of FilesApi->upload_image_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesApi->upload_image_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **str**|  | 
 **id** | **str**|  | 
 **file** | **str**|  | [optional] 
 **upload_sizes** | [**List[ImageSizeRequest]**](ImageSizeRequest.md)| field with JSON-encoded array of image size configurations | [optional] 
 **user** | [**OnlyUserIDRequest**](OnlyUserIDRequest.md)|  | [optional] 

### Return type

[**ImageUploadResponse**](ImageUploadResponse.md)

### Authorization

[stream-auth-type](../README.md#stream-auth-type), [api_key](../README.md#api_key), [JWT](../README.md#JWT)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |
**400** | Bad request |  -  |
**429** | Too many requests |  * X-RateLimit-Limit - The number of allowed requests in the current period <br>  * X-RateLimit-Remaining - The number of remaining requests in the current period <br>  * X-RateLimit-Reset - Timestamp when number of requests will be reset <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

