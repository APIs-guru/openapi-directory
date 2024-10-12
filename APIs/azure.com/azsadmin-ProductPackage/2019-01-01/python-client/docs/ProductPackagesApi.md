# openapi_client.ProductPackagesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**product_packages_create**](ProductPackagesApi.md#product_packages_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId} | 
[**product_packages_delete**](ProductPackagesApi.md#product_packages_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId} | 
[**product_packages_get**](ProductPackagesApi.md#product_packages_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages/{productId} | 
[**product_packages_list**](ProductPackagesApi.md#product_packages_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/productPackages | 


# **product_packages_create**
> ProductPackage product_packages_create(subscription_id, product_id, api_version)



Creates a new product package.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_package import ProductPackage
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
    api_instance = openapi_client.ProductPackagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.product_packages_create(subscription_id, product_id, api_version)
        print("The response of ProductPackagesApi->product_packages_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPackagesApi->product_packages_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ProductPackage**](ProductPackage.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_packages_delete**
> product_packages_delete(subscription_id, product_id, api_version)



Deletes a product package.

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
    api_instance = openapi_client.ProductPackagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_instance.product_packages_delete(subscription_id, product_id, api_version)
    except Exception as e:
        print("Exception when calling ProductPackagesApi->product_packages_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_packages_get**
> ProductPackage product_packages_get(subscription_id, product_id, api_version)



Retrieves the specific product package details.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_package import ProductPackage
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
    api_instance = openapi_client.ProductPackagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    product_id = 'product_id_example' # str | The product identifier.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.product_packages_get(subscription_id, product_id, api_version)
        print("The response of ProductPackagesApi->product_packages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPackagesApi->product_packages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **product_id** | **str**| The product identifier. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ProductPackage**](ProductPackage.md)

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

# **product_packages_list**
> ProductPackagesList product_packages_list(subscription_id, api_version)



Returns an array of product packages.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.product_packages_list import ProductPackagesList
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
    api_instance = openapi_client.ProductPackagesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.product_packages_list(subscription_id, api_version)
        print("The response of ProductPackagesApi->product_packages_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductPackagesApi->product_packages_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ProductPackagesList**](ProductPackagesList.md)

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

