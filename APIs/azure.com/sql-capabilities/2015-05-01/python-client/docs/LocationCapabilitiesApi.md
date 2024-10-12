# openapi_client.LocationCapabilitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capabilities_list_by_location**](LocationCapabilitiesApi.md#capabilities_list_by_location) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/capabilities | 


# **capabilities_list_by_location**
> LocationCapabilities capabilities_list_by_location(location_name, subscription_id, api_version)



Gets the subscription capabilities available for the specified location.

### Example


```python
import openapi_client
from openapi_client.models.location_capabilities import LocationCapabilities
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationCapabilitiesApi(api_client)
    location_name = 'location_name_example' # str | The location name whose capabilities are retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.capabilities_list_by_location(location_name, subscription_id, api_version)
        print("The response of LocationCapabilitiesApi->capabilities_list_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationCapabilitiesApi->capabilities_list_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The location name whose capabilities are retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**LocationCapabilities**](LocationCapabilities.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the subscription location capabilities. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidLocation - An invalid location was specified.   * 400 SubscriptionNotFound - The requested subscription was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

