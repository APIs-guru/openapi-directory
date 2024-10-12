# openapi_client.CommerceApi

All URIs are relative to *https://management.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriber_usage_aggregates_list**](CommerceApi.md#subscriber_usage_aggregates_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Commerce/subscriberUsageAggregates | 


# **subscriber_usage_aggregates_list**
> UsageAggregatePage subscriber_usage_aggregates_list(subscription_id, api_version, reported_start_time, reported_end_time, aggregation_granularity=aggregation_granularity, subscriber_id=subscriber_id, continuation_token=continuation_token)



Gets a collection of SubscriberUsageAggregates, which are UsageAggregates from direct tenants.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.usage_aggregate_page import UsageAggregatePage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommerceApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    api_version = '2015-06-01-preview' # str | Client Api Version. (default to '2015-06-01-preview')
    reported_start_time = '2013-10-20T19:20:30+01:00' # datetime | The reported start time (inclusive).
    reported_end_time = '2013-10-20T19:20:30+01:00' # datetime | The reported end time (exclusive).
    aggregation_granularity = 'aggregation_granularity_example' # str | The aggregation granularity. (optional)
    subscriber_id = 'subscriber_id_example' # str | The tenant subscription identifier. (optional)
    continuation_token = 'continuation_token_example' # str | The continuation token. (optional)

    try:
        api_response = api_instance.subscriber_usage_aggregates_list(subscription_id, api_version, reported_start_time, reported_end_time, aggregation_granularity=aggregation_granularity, subscriber_id=subscriber_id, continuation_token=continuation_token)
        print("The response of CommerceApi->subscriber_usage_aggregates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommerceApi->subscriber_usage_aggregates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-06-01-preview&#39;]
 **reported_start_time** | **datetime**| The reported start time (inclusive). | 
 **reported_end_time** | **datetime**| The reported end time (exclusive). | 
 **aggregation_granularity** | **str**| The aggregation granularity. | [optional] 
 **subscriber_id** | **str**| The tenant subscription identifier. | [optional] 
 **continuation_token** | **str**| The continuation token. | [optional] 

### Return type

[**UsageAggregatePage**](UsageAggregatePage.md)

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

