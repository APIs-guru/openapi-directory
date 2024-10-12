# openapi_client.CustomImagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**custom_images_create_or_update**](CustomImagesApi.md#custom_images_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name} | 
[**custom_images_delete**](CustomImagesApi.md#custom_images_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name} | 
[**custom_images_get**](CustomImagesApi.md#custom_images_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages/{name} | 
[**custom_images_list**](CustomImagesApi.md#custom_images_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/customimages | 


# **custom_images_create_or_update**
> CustomImage custom_images_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, custom_image)



Create or replace an existing custom image. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_image import CustomImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the custom image.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    custom_image = openapi_client.CustomImage() # CustomImage | A custom image.

    try:
        api_response = api_instance.custom_images_create_or_update(subscription_id, resource_group_name, lab_name, name, api_version, custom_image)
        print("The response of CustomImagesApi->custom_images_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomImagesApi->custom_images_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the custom image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **custom_image** | [**CustomImage**](CustomImage.md)| A custom image. | 

### Return type

[**CustomImage**](CustomImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_images_delete**
> custom_images_delete(subscription_id, resource_group_name, lab_name, name, api_version)



Delete custom image. This operation can take a while to complete.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the custom image.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')

    try:
        api_instance.custom_images_delete(subscription_id, resource_group_name, lab_name, name, api_version)
    except Exception as e:
        print("Exception when calling CustomImagesApi->custom_images_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the custom image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_images_get**
> CustomImage custom_images_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)



Get custom image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.custom_image import CustomImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    name = 'name_example' # str | The name of the custom image.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=vm)' (optional)

    try:
        api_response = api_instance.custom_images_get(subscription_id, resource_group_name, lab_name, name, api_version, expand=expand)
        print("The response of CustomImagesApi->custom_images_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomImagesApi->custom_images_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **name** | **str**| The name of the custom image. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;vm)&#39; | [optional] 

### Return type

[**CustomImage**](CustomImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **custom_images_list**
> ResponseWithContinuationCustomImage custom_images_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List custom images in a given lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_custom_image import ResponseWithContinuationCustomImage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomImagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2016-05-15' # str | Client API version. (default to '2016-05-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=vm)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.custom_images_list(subscription_id, resource_group_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of CustomImagesApi->custom_images_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomImagesApi->custom_images_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2016-05-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;vm)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationCustomImage**](ResponseWithContinuationCustomImage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

