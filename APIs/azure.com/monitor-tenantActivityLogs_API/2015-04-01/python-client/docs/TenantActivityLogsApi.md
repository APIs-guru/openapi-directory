# openapi_client.TenantActivityLogsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tenant_activity_logs_list**](TenantActivityLogsApi.md#tenant_activity_logs_list) | **GET** /providers/microsoft.insights/eventtypes/management/values | 


# **tenant_activity_logs_list**
> EventDataCollection tenant_activity_logs_list(api_version, filter=filter, select=select)



Gets the Activity Logs for the Tenant.<br>Everything that is applicable to the API to get the Activity Logs for the subscription is applicable to this API (the parameters, $filter, etc.).<br>One thing to point out here is that this API does *not* retrieve the logs at the individual subscription of the tenant but only surfaces the logs that were generated at the tenant level.

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
    api_instance = openapi_client.TenantActivityLogsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    filter = 'filter_example' # str | Reduces the set of data collected. <br>The **$filter** is very restricted and allows only the following patterns.<br>- List events for a resource group: $filter=eventTimestamp ge '<Start Time>' and eventTimestamp le '<End Time>' and eventChannels eq 'Admin, Operation' and resourceGroupName eq '<ResourceGroupName>'.<br>- List events for resource: $filter=eventTimestamp ge '<Start Time>' and eventTimestamp le '<End Time>' and eventChannels eq 'Admin, Operation' and resourceUri eq '<ResourceURI>'.<br>- List events for a subscription: $filter=eventTimestamp ge '<Start Time>' and eventTimestamp le '<End Time>' and eventChannels eq 'Admin, Operation'.<br>- List events for a resource provider: $filter=eventTimestamp ge '<Start Time>' and eventTimestamp le '<End Time>' and eventChannels eq 'Admin, Operation' and resourceProvider eq '<ResourceProviderName>'.<br>- List events for a correlation Id: api-version=2014-04-01&$filter=eventTimestamp ge '2014-07-16T04:36:37.6407898Z' and eventTimestamp le '2014-07-20T04:36:37.6407898Z' and eventChannels eq 'Admin, Operation' and correlationId eq '<CorrelationID>'.<br>**NOTE**: No other syntax is allowed. (optional)
    select = 'select_example' # str | Used to fetch events with only the given properties.<br>The **$select** argument is a comma separated list of property names to be returned. Possible values are: *authorization*, *claims*, *correlationId*, *description*, *eventDataId*, *eventName*, *eventTimestamp*, *httpRequest*, *level*, *operationId*, *operationName*, *properties*, *resourceGroupName*, *resourceProviderName*, *resourceId*, *status*, *submissionTimestamp*, *subStatus*, *subscriptionId* (optional)

    try:
        api_response = api_instance.tenant_activity_logs_list(api_version, filter=filter, select=select)
        print("The response of TenantActivityLogsApi->tenant_activity_logs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TenantActivityLogsApi->tenant_activity_logs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **filter** | **str**| Reduces the set of data collected. &lt;br&gt;The **$filter** is very restricted and allows only the following patterns.&lt;br&gt;- List events for a resource group: $filter&#x3D;eventTimestamp ge &#39;&lt;Start Time&gt;&#39; and eventTimestamp le &#39;&lt;End Time&gt;&#39; and eventChannels eq &#39;Admin, Operation&#39; and resourceGroupName eq &#39;&lt;ResourceGroupName&gt;&#39;.&lt;br&gt;- List events for resource: $filter&#x3D;eventTimestamp ge &#39;&lt;Start Time&gt;&#39; and eventTimestamp le &#39;&lt;End Time&gt;&#39; and eventChannels eq &#39;Admin, Operation&#39; and resourceUri eq &#39;&lt;ResourceURI&gt;&#39;.&lt;br&gt;- List events for a subscription: $filter&#x3D;eventTimestamp ge &#39;&lt;Start Time&gt;&#39; and eventTimestamp le &#39;&lt;End Time&gt;&#39; and eventChannels eq &#39;Admin, Operation&#39;.&lt;br&gt;- List events for a resource provider: $filter&#x3D;eventTimestamp ge &#39;&lt;Start Time&gt;&#39; and eventTimestamp le &#39;&lt;End Time&gt;&#39; and eventChannels eq &#39;Admin, Operation&#39; and resourceProvider eq &#39;&lt;ResourceProviderName&gt;&#39;.&lt;br&gt;- List events for a correlation Id: api-version&#x3D;2014-04-01&amp;$filter&#x3D;eventTimestamp ge &#39;2014-07-16T04:36:37.6407898Z&#39; and eventTimestamp le &#39;2014-07-20T04:36:37.6407898Z&#39; and eventChannels eq &#39;Admin, Operation&#39; and correlationId eq &#39;&lt;CorrelationID&gt;&#39;.&lt;br&gt;**NOTE**: No other syntax is allowed. | [optional] 
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
**200** | Successful request to get a page of events in the tenant activity logs |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

