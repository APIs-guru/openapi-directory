# openapi_client.ListManagementImageApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_management_image_add_image**](ListManagementImageApi.md#list_management_image_add_image) | **POST** /contentmoderator/lists/v1.0/imagelists/{listId}/images | 
[**list_management_image_delete_all_images**](ListManagementImageApi.md#list_management_image_delete_all_images) | **DELETE** /contentmoderator/lists/v1.0/imagelists/{listId}/images | 
[**list_management_image_delete_image**](ListManagementImageApi.md#list_management_image_delete_image) | **DELETE** /contentmoderator/lists/v1.0/imagelists/{listId}/images/{ImageId} | 
[**list_management_image_get_all_image_ids**](ListManagementImageApi.md#list_management_image_get_all_image_ids) | **GET** /contentmoderator/lists/v1.0/imagelists/{listId}/images | 


# **list_management_image_add_image**
> Image list_management_image_add_image(list_id, tag=tag, label=label)



Add an image to the list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image import Image
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementImageApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    tag = 56 # int | Tag for the image. (optional)
    label = 'label_example' # str | The image label. (optional)

    try:
        api_response = api_instance.list_management_image_add_image(list_id, tag=tag, label=label)
        print("The response of ListManagementImageApi->list_management_image_add_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageApi->list_management_image_add_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **tag** | **int**| Tag for the image. | [optional] 
 **label** | **str**| The image label. | [optional] 

### Return type

[**Image**](Image.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_image_delete_all_images**
> str list_management_image_delete_all_images(list_id)



Deletes all images from the list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementImageApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.

    try:
        api_response = api_instance.list_management_image_delete_all_images(list_id)
        print("The response of ListManagementImageApi->list_management_image_delete_all_images:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageApi->list_management_image_delete_all_images: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 

### Return type

**str**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_image_delete_image**
> str list_management_image_delete_image(list_id, image_id)



Deletes an image from the list with list Id and image Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementImageApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    image_id = 'image_id_example' # str | Id of the image.

    try:
        api_response = api_instance.list_management_image_delete_image(list_id, image_id)
        print("The response of ListManagementImageApi->list_management_image_delete_image:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageApi->list_management_image_delete_image: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **image_id** | **str**| Id of the image. | 

### Return type

**str**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_image_get_all_image_ids**
> ImageIds list_management_image_get_all_image_ids(list_id)



Gets all image Ids from the list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image_ids import ImageIds
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementImageApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.

    try:
        api_response = api_instance.list_management_image_get_all_image_ids(list_id)
        print("The response of ListManagementImageApi->list_management_image_get_all_image_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageApi->list_management_image_get_all_image_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 

### Return type

[**ImageIds**](ImageIds.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

