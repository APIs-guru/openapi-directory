# openapi_client.PricingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pricings_create_or_update_resource_group_pricing**](PricingsApi.md#pricings_create_or_update_resource_group_pricing) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName} | 
[**pricings_get_resource_group_pricing**](PricingsApi.md#pricings_get_resource_group_pricing) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName} | 
[**pricings_get_subscription_pricing**](PricingsApi.md#pricings_get_subscription_pricing) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName} | 
[**pricings_list**](PricingsApi.md#pricings_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings | 
[**pricings_list_by_resource_group**](PricingsApi.md#pricings_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings | 
[**pricings_update_subscription_pricing**](PricingsApi.md#pricings_update_subscription_pricing) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName} | 


# **pricings_create_or_update_resource_group_pricing**
> Pricing pricings_create_or_update_resource_group_pricing(api_version, subscription_id, resource_group_name, pricing_name, pricing)



Security pricing configuration in the resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing import Pricing
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    pricing_name = 'pricing_name_example' # str | name of the pricing configuration
    pricing = openapi_client.Pricing() # Pricing | Pricing object

    try:
        api_response = api_instance.pricings_create_or_update_resource_group_pricing(api_version, subscription_id, resource_group_name, pricing_name, pricing)
        print("The response of PricingsApi->pricings_create_or_update_resource_group_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_create_or_update_resource_group_pricing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **pricing_name** | **str**| name of the pricing configuration | 
 **pricing** | [**Pricing**](Pricing.md)| Pricing object | 

### Return type

[**Pricing**](Pricing.md)

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

# **pricings_get_resource_group_pricing**
> Pricing pricings_get_resource_group_pricing(api_version, subscription_id, resource_group_name, pricing_name)



Security pricing configuration in the resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing import Pricing
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    pricing_name = 'pricing_name_example' # str | name of the pricing configuration

    try:
        api_response = api_instance.pricings_get_resource_group_pricing(api_version, subscription_id, resource_group_name, pricing_name)
        print("The response of PricingsApi->pricings_get_resource_group_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_get_resource_group_pricing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **pricing_name** | **str**| name of the pricing configuration | 

### Return type

[**Pricing**](Pricing.md)

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

# **pricings_get_subscription_pricing**
> Pricing pricings_get_subscription_pricing(api_version, subscription_id, pricing_name)



Security pricing configuration in the subscriptionSecurity pricing configuration in the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing import Pricing
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    pricing_name = 'pricing_name_example' # str | name of the pricing configuration

    try:
        api_response = api_instance.pricings_get_subscription_pricing(api_version, subscription_id, pricing_name)
        print("The response of PricingsApi->pricings_get_subscription_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_get_subscription_pricing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **pricing_name** | **str**| name of the pricing configuration | 

### Return type

[**Pricing**](Pricing.md)

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

# **pricings_list**
> PricingList pricings_list(api_version, subscription_id)



Security pricing configurations in the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing_list import PricingList
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.pricings_list(api_version, subscription_id)
        print("The response of PricingsApi->pricings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**PricingList**](PricingList.md)

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

# **pricings_list_by_resource_group**
> PricingList pricings_list_by_resource_group(api_version, subscription_id, resource_group_name)



Security pricing configurations in the resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing_list import PricingList
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.

    try:
        api_response = api_instance.pricings_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of PricingsApi->pricings_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 

### Return type

[**PricingList**](PricingList.md)

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

# **pricings_update_subscription_pricing**
> Pricing pricings_update_subscription_pricing(api_version, subscription_id, pricing_name, pricing)



Security pricing configuration in the subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.pricing import Pricing
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
    api_instance = openapi_client.PricingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    pricing_name = 'pricing_name_example' # str | name of the pricing configuration
    pricing = openapi_client.Pricing() # Pricing | Pricing object

    try:
        api_response = api_instance.pricings_update_subscription_pricing(api_version, subscription_id, pricing_name, pricing)
        print("The response of PricingsApi->pricings_update_subscription_pricing:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PricingsApi->pricings_update_subscription_pricing: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **pricing_name** | **str**| name of the pricing configuration | 
 **pricing** | [**Pricing**](Pricing.md)| Pricing object | 

### Return type

[**Pricing**](Pricing.md)

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

