# openapi_client.ProductApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**products_get**](ProductApi.md#products_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName} | 
[**products_get_product**](ProductApi.md#products_get_product) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/GetProduct | 
[**products_get_products**](ProductApi.md#products_get_products) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/_all/GetProducts | 
[**products_list**](ProductApi.md#products_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products | 
[**products_list_details**](ProductApi.md#products_list_details) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/listDetails | 
[**products_upload_log**](ProductApi.md#products_upload_log) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.AzureStack/registrations/{registrationName}/products/{productName}/uploadProductLog | 


# **products_get**
> Product products_get(subscription_id, resource_group, registration_name, product_name, api_version)



Returns the specified product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.products_get(subscription_id, resource_group, registration_name, product_name, api_version)
        print("The response of ProductApi->products_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**Product**](Product.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_get_product**
> Product products_get_product(subscription_id, resource_group, registration_name, product_name, api_version, device_configuration=device_configuration)



Returns the specified product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_configuration import DeviceConfiguration
from openapi_client.models.product import Product
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')
    device_configuration = openapi_client.DeviceConfiguration() # DeviceConfiguration | Device configuration. (optional)

    try:
        api_response = api_instance.products_get_product(subscription_id, resource_group, registration_name, product_name, api_version, device_configuration=device_configuration)
        print("The response of ProductApi->products_get_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_get_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]
 **device_configuration** | [**DeviceConfiguration**](DeviceConfiguration.md)| Device configuration. | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_get_products**
> ProductList products_get_products(subscription_id, resource_group, registration_name, api_version, device_configuration=device_configuration)



Returns a list of products.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.device_configuration import DeviceConfiguration
from openapi_client.models.product_list import ProductList
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')
    device_configuration = openapi_client.DeviceConfiguration() # DeviceConfiguration | Device configuration. (optional)

    try:
        api_response = api_instance.products_get_products(subscription_id, resource_group, registration_name, api_version, device_configuration=device_configuration)
        print("The response of ProductApi->products_get_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_get_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]
 **device_configuration** | [**DeviceConfiguration**](DeviceConfiguration.md)| Device configuration. | [optional] 

### Return type

[**ProductList**](ProductList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_list**
> ProductList products_list(subscription_id, resource_group, registration_name, api_version)



Returns a list of products.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_list import ProductList
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.products_list(subscription_id, resource_group, registration_name, api_version)
        print("The response of ProductApi->products_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**ProductList**](ProductList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **products_list_details**
> ExtendedProduct products_list_details(subscription_id, resource_group, registration_name, product_name, api_version)



Returns the extended properties of a product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.extended_product import ExtendedProduct
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')

    try:
        api_response = api_instance.products_list_details(subscription_id, resource_group, registration_name, product_name, api_version)
        print("The response of ProductApi->products_list_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_list_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]

### Return type

[**ExtendedProduct**](ExtendedProduct.md)

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

# **products_upload_log**
> ProductLog products_upload_log(subscription_id, resource_group, registration_name, product_name, api_version, marketplace_product_log_update=marketplace_product_log_update)



Returns the specified product.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.marketplace_product_log_update import MarketplaceProductLogUpdate
from openapi_client.models.product_log import ProductLog
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
    api_instance = openapi_client.ProductApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group = 'resource_group_example' # str | Name of the resource group.
    registration_name = 'registration_name_example' # str | Name of the Azure Stack registration.
    product_name = 'product_name_example' # str | Name of the product.
    api_version = '2017-06-01' # str | Client API Version. (default to '2017-06-01')
    marketplace_product_log_update = openapi_client.MarketplaceProductLogUpdate() # MarketplaceProductLogUpdate | Update details for product log. (optional)

    try:
        api_response = api_instance.products_upload_log(subscription_id, resource_group, registration_name, product_name, api_version, marketplace_product_log_update=marketplace_product_log_update)
        print("The response of ProductApi->products_upload_log:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->products_upload_log: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group** | **str**| Name of the resource group. | 
 **registration_name** | **str**| Name of the Azure Stack registration. | 
 **product_name** | **str**| Name of the product. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2017-06-01&#39;]
 **marketplace_product_log_update** | [**MarketplaceProductLogUpdate**](MarketplaceProductLogUpdate.md)| Update details for product log. | [optional] 

### Return type

[**ProductLog**](ProductLog.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

