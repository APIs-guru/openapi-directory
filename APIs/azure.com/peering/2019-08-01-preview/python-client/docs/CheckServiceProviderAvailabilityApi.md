# openapi_client.CheckServiceProviderAvailabilityApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_service_provider_availability**](CheckServiceProviderAvailabilityApi.md#check_service_provider_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/CheckServiceProviderAvailability | 


# **check_service_provider_availability**
> str check_service_provider_availability(subscription_id, api_version, check_service_provider_availability_input)



Checks if the peering service provider is present within 1000 miles of customer's location

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_service_provider_availability_input import CheckServiceProviderAvailabilityInput
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
    api_instance = openapi_client.CheckServiceProviderAvailabilityApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    check_service_provider_availability_input = openapi_client.CheckServiceProviderAvailabilityInput() # CheckServiceProviderAvailabilityInput | The CheckServiceProviderAvailabilityInput              indicating customer location and service provider.

    try:
        api_response = api_instance.check_service_provider_availability(subscription_id, api_version, check_service_provider_availability_input)
        print("The response of CheckServiceProviderAvailabilityApi->check_service_provider_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CheckServiceProviderAvailabilityApi->check_service_provider_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **check_service_provider_availability_input** | [**CheckServiceProviderAvailabilityInput**](CheckServiceProviderAvailabilityInput.md)| The CheckServiceProviderAvailabilityInput              indicating customer location and service provider. | 

### Return type

**str**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

