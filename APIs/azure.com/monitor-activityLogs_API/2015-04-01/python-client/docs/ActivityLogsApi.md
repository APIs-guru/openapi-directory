# openapi_client.ActivityLogsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activity_logs_list**](ActivityLogsApi.md#activity_logs_list) | **GET** /subscriptions/{subscriptionId}/providers/microsoft.insights/eventtypes/management/values | 


# **activity_logs_list**
> EventDataCollection activity_logs_list(api_version, filter, subscription_id, select=select)



Provides the list of records from the activity logs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.event_data_collection import EventDataCollection
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
    api_instance = openapi_client.ActivityLogsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | Reduces the set of data collected.<br>This argument is required and it also requires at least the start date/time.<br>The **$filter** argument is very restricted and allows only the following patterns.<br>- *List events for a resource group*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceGroupName eq 'resourceGroupName'.<br>- *List events for resource*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceUri eq 'resourceURI'.<br>- *List events for a subscription in a time range*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z'.<br>- *List events for a resource provider*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and resourceProvider eq 'resourceProviderName'.<br>- *List events for a correlation Id*: $filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and correlationId eq 'correlationID'.<br><br>**NOTE**: No other syntax is allowed.
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    select = 'select_example' # str | Used to fetch events with only the given properties.<br>The **$select** argument is a comma separated list of property names to be returned. Possible values are: *authorization*, *claims*, *correlationId*, *description*, *eventDataId*, *eventName*, *eventTimestamp*, *httpRequest*, *level*, *operationId*, *operationName*, *properties*, *resourceGroupName*, *resourceProviderName*, *resourceId*, *status*, *submissionTimestamp*, *subStatus*, *subscriptionId* (optional)

    try:
        api_response = api_instance.activity_logs_list(api_version, filter, subscription_id, select=select)
        print("The response of ActivityLogsApi->activity_logs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActivityLogsApi->activity_logs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| Reduces the set of data collected.&lt;br&gt;This argument is required and it also requires at least the start date/time.&lt;br&gt;The **$filter** argument is very restricted and allows only the following patterns.&lt;br&gt;- *List events for a resource group*: $filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39; and resourceGroupName eq &#39;resourceGroupName&#39;.&lt;br&gt;- *List events for resource*: $filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39; and resourceUri eq &#39;resourceURI&#39;.&lt;br&gt;- *List events for a subscription in a time range*: $filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39;.&lt;br&gt;- *List events for a resource provider*: $filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39; and resourceProvider eq &#39;resourceProviderName&#39;.&lt;br&gt;- *List events for a correlation Id*: $filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39; and correlationId eq &#39;correlationID&#39;.&lt;br&gt;&lt;br&gt;**NOTE**: No other syntax is allowed. | 
 **subscription_id** | **str**| The Azure subscription Id. | 
 **select** | **str**| Used to fetch events with only the given properties.&lt;br&gt;The **$select** argument is a comma separated list of property names to be returned. Possible values are: *authorization*, *claims*, *correlationId*, *description*, *eventDataId*, *eventName*, *eventTimestamp*, *httpRequest*, *level*, *operationId*, *operationName*, *properties*, *resourceGroupName*, *resourceProviderName*, *resourceId*, *status*, *submissionTimestamp*, *subStatus*, *subscriptionId* | [optional] 

### Return type

[**EventDataCollection**](EventDataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get a page of events in the activity logs |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

