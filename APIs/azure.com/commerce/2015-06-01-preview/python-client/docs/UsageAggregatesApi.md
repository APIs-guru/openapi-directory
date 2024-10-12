# openapi_client.UsageAggregatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usage_aggregates_list**](UsageAggregatesApi.md#usage_aggregates_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Commerce/UsageAggregates | 


# **usage_aggregates_list**
> UsageAggregationListResult usage_aggregates_list(reported_start_time, reported_end_time, api_version, subscription_id, show_details=show_details, aggregation_granularity=aggregation_granularity, continuation_token=continuation_token)



Query aggregated Azure subscription consumption data for a date range.

### Example


```python
import openapi_client
from openapi_client.models.usage_aggregation_list_result import UsageAggregationListResult
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
    api_instance = openapi_client.UsageAggregatesApi(api_client)
    reported_start_time = '2013-10-20T19:20:30+01:00' # datetime | The start of the time range to retrieve data for.
    reported_end_time = '2013-10-20T19:20:30+01:00' # datetime | The end of the time range to retrieve data for.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    show_details = True # bool | `True` returns usage data in instance-level detail, `false` causes server-side aggregation with fewer details. For example, if you have 3 website instances, by default you will get 3 line items for website consumption. If you specify showDetails = false, the data will be aggregated as a single line item for website consumption within the time period (for the given subscriptionId, meterId, usageStartTime and usageEndTime). (optional)
    aggregation_granularity = Daily # str | `Daily` (default) returns the data in daily granularity, `Hourly` returns the data in hourly granularity. (optional) (default to Daily)
    continuation_token = 'continuation_token_example' # str | Used when a continuation token string is provided in the response body of the previous call, enabling paging through a large result set. If not present, the data is retrieved from the beginning of the day/hour (based on the granularity) passed in.  (optional)

    try:
        api_response = api_instance.usage_aggregates_list(reported_start_time, reported_end_time, api_version, subscription_id, show_details=show_details, aggregation_granularity=aggregation_granularity, continuation_token=continuation_token)
        print("The response of UsageAggregatesApi->usage_aggregates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsageAggregatesApi->usage_aggregates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reported_start_time** | **datetime**| The start of the time range to retrieve data for. | 
 **reported_end_time** | **datetime**| The end of the time range to retrieve data for. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| It uniquely identifies Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **show_details** | **bool**| &#x60;True&#x60; returns usage data in instance-level detail, &#x60;false&#x60; causes server-side aggregation with fewer details. For example, if you have 3 website instances, by default you will get 3 line items for website consumption. If you specify showDetails &#x3D; false, the data will be aggregated as a single line item for website consumption within the time period (for the given subscriptionId, meterId, usageStartTime and usageEndTime). | [optional] 
 **aggregation_granularity** | **str**| &#x60;Daily&#x60; (default) returns the data in daily granularity, &#x60;Hourly&#x60; returns the data in hourly granularity. | [optional] [default to Daily]
 **continuation_token** | **str**| Used when a continuation token string is provided in the response body of the previous call, enabling paging through a large result set. If not present, the data is retrieved from the beginning of the day/hour (based on the granularity) passed in.  | [optional] 

### Return type

[**UsageAggregationListResult**](UsageAggregationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Normal response for a successful query. The response body will contain the data that matches the filters specified in the query parameters. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

