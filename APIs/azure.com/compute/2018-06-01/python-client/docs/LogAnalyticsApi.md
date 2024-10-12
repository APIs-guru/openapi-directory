# openapi_client.LogAnalyticsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**log_analytics_export_request_rate_by_interval**](LogAnalyticsApi.md#log_analytics_export_request_rate_by_interval) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getRequestRateByInterval | 
[**log_analytics_export_throttled_requests**](LogAnalyticsApi.md#log_analytics_export_throttled_requests) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/logAnalytics/apiAccess/getThrottledRequests | 


# **log_analytics_export_request_rate_by_interval**
> LogAnalyticsOperationResult log_analytics_export_request_rate_by_interval(location, api_version, subscription_id, parameters)



Export logs that show Api requests made by this subscription in the given time window to show throttling activities.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_operation_result import LogAnalyticsOperationResult
from openapi_client.models.request_rate_by_interval_input import RequestRateByIntervalInput
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
    api_instance = openapi_client.LogAnalyticsApi(api_client)
    location = 'location_example' # str | The location upon which virtual-machine-sizes is queried.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.RequestRateByIntervalInput() # RequestRateByIntervalInput | Parameters supplied to the LogAnalytics getRequestRateByInterval Api.

    try:
        api_response = api_instance.log_analytics_export_request_rate_by_interval(location, api_version, subscription_id, parameters)
        print("The response of LogAnalyticsApi->log_analytics_export_request_rate_by_interval:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogAnalyticsApi->log_analytics_export_request_rate_by_interval: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location upon which virtual-machine-sizes is queried. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**RequestRateByIntervalInput**](RequestRateByIntervalInput.md)| Parameters supplied to the LogAnalytics getRequestRateByInterval Api. | 

### Return type

[**LogAnalyticsOperationResult**](LogAnalyticsOperationResult.md)

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

# **log_analytics_export_throttled_requests**
> LogAnalyticsOperationResult log_analytics_export_throttled_requests(location, api_version, subscription_id, parameters)



Export logs that show total throttled Api requests for this subscription in the given time window.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_analytics_operation_result import LogAnalyticsOperationResult
from openapi_client.models.throttled_requests_input import ThrottledRequestsInput
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
    api_instance = openapi_client.LogAnalyticsApi(api_client)
    location = 'location_example' # str | The location upon which virtual-machine-sizes is queried.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ThrottledRequestsInput() # ThrottledRequestsInput | Parameters supplied to the LogAnalytics getThrottledRequests Api.

    try:
        api_response = api_instance.log_analytics_export_throttled_requests(location, api_version, subscription_id, parameters)
        print("The response of LogAnalyticsApi->log_analytics_export_throttled_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LogAnalyticsApi->log_analytics_export_throttled_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The location upon which virtual-machine-sizes is queried. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ThrottledRequestsInput**](ThrottledRequestsInput.md)| Parameters supplied to the LogAnalytics getThrottledRequests Api. | 

### Return type

[**LogAnalyticsOperationResult**](LogAnalyticsOperationResult.md)

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

