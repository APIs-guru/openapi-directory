# openapi_client.LocationBasedPerformanceTierApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**location_based_performance_tier_list**](LocationBasedPerformanceTierApi.md#location_based_performance_tier_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DBforMariaDB/locations/{locationName}/performanceTiers | 


# **location_based_performance_tier_list**
> PerformanceTierListResult location_based_performance_tier_list(api_version, subscription_id, location_name)



List all the performance tiers at specified location in a given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.performance_tier_list_result import PerformanceTierListResult
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
    api_instance = openapi_client.LocationBasedPerformanceTierApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for the request.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    location_name = 'location_name_example' # str | The name of the location.

    try:
        api_response = api_instance.location_based_performance_tier_list(api_version, subscription_id, location_name)
        print("The response of LocationBasedPerformanceTierApi->location_based_performance_tier_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationBasedPerformanceTierApi->location_based_performance_tier_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for the request. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **location_name** | **str**| The name of the location. | 

### Return type

[**PerformanceTierListResult**](PerformanceTierListResult.md)

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

