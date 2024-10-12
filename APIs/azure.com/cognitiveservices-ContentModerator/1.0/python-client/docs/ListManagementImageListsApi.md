# openapi_client.ListManagementImageListsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_management_image_lists_create**](ListManagementImageListsApi.md#list_management_image_lists_create) | **POST** /contentmoderator/lists/v1.0/imagelists | 
[**list_management_image_lists_delete**](ListManagementImageListsApi.md#list_management_image_lists_delete) | **DELETE** /contentmoderator/lists/v1.0/imagelists/{listId} | 
[**list_management_image_lists_get_all_image_lists**](ListManagementImageListsApi.md#list_management_image_lists_get_all_image_lists) | **GET** /contentmoderator/lists/v1.0/imagelists | 
[**list_management_image_lists_get_details**](ListManagementImageListsApi.md#list_management_image_lists_get_details) | **GET** /contentmoderator/lists/v1.0/imagelists/{listId} | 
[**list_management_image_lists_refresh_index**](ListManagementImageListsApi.md#list_management_image_lists_refresh_index) | **POST** /contentmoderator/lists/v1.0/imagelists/{listId}/RefreshIndex | 
[**list_management_image_lists_update**](ListManagementImageListsApi.md#list_management_image_lists_update) | **PUT** /contentmoderator/lists/v1.0/imagelists/{listId} | 


# **list_management_image_lists_create**
> ImageList list_management_image_lists_create(content_type, body)



Creates an image list.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image_list import ImageList
from openapi_client.models.list_management_image_lists_create_request import ListManagementImageListsCreateRequest
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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)
    content_type = 'content_type_example' # str | The content type.
    body = openapi_client.ListManagementImageListsCreateRequest() # ListManagementImageListsCreateRequest | Schema of the body.

    try:
        api_response = api_instance.list_management_image_lists_create(content_type, body)
        print("The response of ListManagementImageListsApi->list_management_image_lists_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**| The content type. | 
 **body** | [**ListManagementImageListsCreateRequest**](ListManagementImageListsCreateRequest.md)| Schema of the body. | 

### Return type

[**ImageList**](ImageList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_image_lists_delete**
> str list_management_image_lists_delete(list_id)



Deletes image list with the list Id equal to list Id passed.

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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.

    try:
        api_response = api_instance.list_management_image_lists_delete(list_id)
        print("The response of ListManagementImageListsApi->list_management_image_lists_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_delete: %s\n" % e)
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

# **list_management_image_lists_get_all_image_lists**
> List[ImageList] list_management_image_lists_get_all_image_lists()



Gets all the Image Lists.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image_list import ImageList
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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)

    try:
        api_response = api_instance.list_management_image_lists_get_all_image_lists()
        print("The response of ListManagementImageListsApi->list_management_image_lists_get_all_image_lists:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_get_all_image_lists: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ImageList]**](ImageList.md)

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

# **list_management_image_lists_get_details**
> ImageList list_management_image_lists_get_details(list_id)



Returns the details of the image list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image_list import ImageList
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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.

    try:
        api_response = api_instance.list_management_image_lists_get_details(list_id)
        print("The response of ListManagementImageListsApi->list_management_image_lists_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 

### Return type

[**ImageList**](ImageList.md)

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

# **list_management_image_lists_refresh_index**
> RefreshIndex list_management_image_lists_refresh_index(list_id)



Refreshes the index of the list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.refresh_index import RefreshIndex
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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.

    try:
        api_response = api_instance.list_management_image_lists_refresh_index(list_id)
        print("The response of ListManagementImageListsApi->list_management_image_lists_refresh_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_refresh_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 

### Return type

[**RefreshIndex**](RefreshIndex.md)

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

# **list_management_image_lists_update**
> ImageList list_management_image_lists_update(list_id, content_type, body)



Updates an image list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.image_list import ImageList
from openapi_client.models.list_management_image_lists_create_request import ListManagementImageListsCreateRequest
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
    api_instance = openapi_client.ListManagementImageListsApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    content_type = 'content_type_example' # str | The content type.
    body = openapi_client.ListManagementImageListsCreateRequest() # ListManagementImageListsCreateRequest | Schema of the body.

    try:
        api_response = api_instance.list_management_image_lists_update(list_id, content_type, body)
        print("The response of ListManagementImageListsApi->list_management_image_lists_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementImageListsApi->list_management_image_lists_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **content_type** | **str**| The content type. | 
 **body** | [**ListManagementImageListsCreateRequest**](ListManagementImageListsCreateRequest.md)| Schema of the body. | 

### Return type

[**ImageList**](ImageList.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

