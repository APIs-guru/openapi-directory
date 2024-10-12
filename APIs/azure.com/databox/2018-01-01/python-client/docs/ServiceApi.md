# openapi_client.ServiceApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_list_available_skus**](ServiceApi.md#service_list_available_skus) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/availableSkus | 
[**service_validate_address**](ServiceApi.md#service_validate_address) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DataBox/locations/{location}/validateAddress | 


# **service_list_available_skus**
> AvailableSkusResult service_list_available_skus(subscription_id, location, api_version, available_sku_request)



This method provides the list of available skus for the given subscription and location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.available_sku_request import AvailableSkuRequest
from openapi_client.models.available_skus_result import AvailableSkusResult
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    available_sku_request = openapi_client.AvailableSkuRequest() # AvailableSkuRequest | Filters for showing the available skus.

    try:
        api_response = api_instance.service_list_available_skus(subscription_id, location, api_version, available_sku_request)
        print("The response of ServiceApi->service_list_available_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_list_available_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **available_sku_request** | [**AvailableSkuRequest**](AvailableSkuRequest.md)| Filters for showing the available skus. | 

### Return type

[**AvailableSkusResult**](AvailableSkusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of available skus. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_validate_address**
> AddressValidationOutput service_validate_address(subscription_id, location, api_version, validate_address)



This method validates the customer shipping address and provide alternate addresses if any.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.address_validation_output import AddressValidationOutput
from openapi_client.models.validate_address import ValidateAddress
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
    api_instance = openapi_client.ServiceApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Subscription Id
    location = 'location_example' # str | The location of the resource
    api_version = 'api_version_example' # str | The API Version
    validate_address = openapi_client.ValidateAddress() # ValidateAddress | Shipping address of the customer.

    try:
        api_response = api_instance.service_validate_address(subscription_id, location, api_version, validate_address)
        print("The response of ServiceApi->service_validate_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServiceApi->service_validate_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Subscription Id | 
 **location** | **str**| The location of the resource | 
 **api_version** | **str**| The API Version | 
 **validate_address** | [**ValidateAddress**](ValidateAddress.md)| Shipping address of the customer. | 

### Return type

[**AddressValidationOutput**](AddressValidationOutput.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The valid and alternate addresses. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

