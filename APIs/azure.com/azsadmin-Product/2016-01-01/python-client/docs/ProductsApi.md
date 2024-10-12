# openapi_client.ProductsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_download**](ProductsApi.md#products_download) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products/{productName}/download | 
[**products_get**](ProductsApi.md#products_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products/{productName} | 
[**products_list**](ProductsApi.md#products_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/products | 


# **products_download**
> ProductsDownload200Response products_download(subscription_id, resource_group, activation_name, product_name, api_version)



Downloads a product from azure marketplace.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.products_download200_response import ProductsDownload200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.products_download(subscription_id, resource_group, activation_name, product_name, api_version)
        print("The response of ProductsApi->products_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ProductsDownload200Response**](ProductsDownload200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Accepted |  -  |
**202** | Accepted |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_get**
> ProductResource products_get(subscription_id, resource_group, activation_name, product_name, api_version)



Return product name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_resource import ProductResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.products_get(subscription_id, resource_group, activation_name, product_name, api_version)
        print("The response of ProductsApi->products_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ProductResource**](ProductResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_list**
> ProductResourcesPage products_list(subscription_id, resource_group, activation_name, api_version)



Return product name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_resources_page import ProductResourcesPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.products_list(subscription_id, resource_group, activation_name, api_version)
        print("The response of ProductsApi->products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**ProductResourcesPage**](ProductResourcesPage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

