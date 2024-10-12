# openapi_client.DownloadedProductsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloaded_products_create**](DownloadedProductsApi.md#downloaded_products_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/downloadedProducts/{productName} | 
[**downloaded_products_delete**](DownloadedProductsApi.md#downloaded_products_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/downloadedProducts/{productName} | 
[**downloaded_products_get**](DownloadedProductsApi.md#downloaded_products_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/downloadedProducts/{productName} | 
[**downloaded_products_list**](DownloadedProductsApi.md#downloaded_products_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroup}/providers/Microsoft.AzureBridge.Admin/activations/{activationName}/downloadedProducts | 


# **downloaded_products_create**
> DownloadedProductsGet200Response downloaded_products_create(subscription_id, resource_group, activation_name, product_name, api_version, downloaded_product)



Creates a downloaded product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.downloaded_products_get200_response import DownloadedProductsGet200Response
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
    api_instance = openapi_client.DownloadedProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')
    downloaded_product = openapi_client.DownloadedProductsGet200Response() # DownloadedProductsGet200Response | Downloaded product resource definition.

    try:
        api_response = api_instance.downloaded_products_create(subscription_id, resource_group, activation_name, product_name, api_version, downloaded_product)
        print("The response of DownloadedProductsApi->downloaded_products_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadedProductsApi->downloaded_products_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]
 **downloaded_product** | [**DownloadedProductsGet200Response**](DownloadedProductsGet200Response.md)| Downloaded product resource definition. | 

### Return type

[**DownloadedProductsGet200Response**](DownloadedProductsGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **downloaded_products_delete**
> DownloadedProductsGet200Response downloaded_products_delete(subscription_id, resource_group, activation_name, product_name, api_version)



Delete a downloaded product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.downloaded_products_get200_response import DownloadedProductsGet200Response
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
    api_instance = openapi_client.DownloadedProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.downloaded_products_delete(subscription_id, resource_group, activation_name, product_name, api_version)
        print("The response of DownloadedProductsApi->downloaded_products_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadedProductsApi->downloaded_products_delete: %s\n" % e)
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

[**DownloadedProductsGet200Response**](DownloadedProductsGet200Response.md)

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

# **downloaded_products_get**
> DownloadedProductsGet200Response downloaded_products_get(subscription_id, resource_group, activation_name, product_name, api_version)



Get a downloaded product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.downloaded_products_get200_response import DownloadedProductsGet200Response
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
    api_instance = openapi_client.DownloadedProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.downloaded_products_get(subscription_id, resource_group, activation_name, product_name, api_version)
        print("The response of DownloadedProductsApi->downloaded_products_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadedProductsApi->downloaded_products_get: %s\n" % e)
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

[**DownloadedProductsGet200Response**](DownloadedProductsGet200Response.md)

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

# **downloaded_products_list**
> DownloadedProductResourcesPage downloaded_products_list(subscription_id, resource_group, activation_name, api_version)



Get a list of downloaded products.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.downloaded_product_resources_page import DownloadedProductResourcesPage
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
    api_instance = openapi_client.DownloadedProductsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | The resource group the resource is located under.
    activation_name = 'activation_name_example' # str | Name of the activation.
    api_version = '2016-01-01' # str | Client Api Version. (default to '2016-01-01')

    try:
        api_response = api_instance.downloaded_products_list(subscription_id, resource_group, activation_name, api_version)
        print("The response of DownloadedProductsApi->downloaded_products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DownloadedProductsApi->downloaded_products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| The resource group the resource is located under. | 
 **activation_name** | **str**| Name of the activation. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2016-01-01&#39;]

### Return type

[**DownloadedProductResourcesPage**](DownloadedProductResourcesPage.md)

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

