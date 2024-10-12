# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**events_get**](DefaultApi.md#events_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/events/{eventType}/{eventId} | Get an event
[**events_get_by_type**](DefaultApi.md#events_get_by_type) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/events/{eventType} | Execute OData query
[**events_get_odata_metadata**](DefaultApi.md#events_get_odata_metadata) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/events/$metadata | Get OData metadata
[**metrics_get**](DefaultApi.md#metrics_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/metrics/{metricId} | Retrieve metric data
[**metrics_get_metadata**](DefaultApi.md#metrics_get_metadata) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/metrics/metadata | Retrieve metric metadata
[**query_execute**](DefaultApi.md#query_execute) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/query | Execute an Analytics query
[**query_get**](DefaultApi.md#query_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Insights/components/{applicationName}/query | Execute an Analytics query


# **events_get**
> EventsResults events_get(subscription_id, resource_group_name, application_name, event_type, event_id, api_version, timespan=timespan)

Get an event

Gets the data for a single event

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.events_results import EventsResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    event_type = 'event_type_example' # str | The type of events to query; either a standard event type (`traces`, `customEvents`, `pageViews`, `requests`, `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query across all event types.
    event_id = 'event_id_example' # str | ID of event.
    api_version = 'api_version_example' # str | Client API version.
    timespan = 'timespan_example' # str | Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression. (optional)

    try:
        # Get an event
        api_response = api_instance.events_get(subscription_id, resource_group_name, application_name, event_type, event_id, api_version, timespan=timespan)
        print("The response of DefaultApi->events_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->events_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **event_type** | **str**| The type of events to query; either a standard event type (&#x60;traces&#x60;, &#x60;customEvents&#x60;, &#x60;pageViews&#x60;, &#x60;requests&#x60;, &#x60;dependencies&#x60;, &#x60;exceptions&#x60;, &#x60;availabilityResults&#x60;) or &#x60;$all&#x60; to query across all event types. | 
 **event_id** | **str**| ID of event. | 
 **api_version** | **str**| Client API version. | 
 **timespan** | **str**| Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression. | [optional] 

### Return type

[**EventsResults**](EventsResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_get_by_type**
> EventsResults events_get_by_type(subscription_id, resource_group_name, application_name, event_type, api_version, timespan=timespan, filter=filter, search=search, orderby=orderby, select=select, skip=skip, top=top, format=format, count=count, apply=apply)

Execute OData query

Executes an OData query for events

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.events_results import EventsResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    event_type = 'event_type_example' # str | The type of events to query; either a standard event type (`traces`, `customEvents`, `pageViews`, `requests`, `dependencies`, `exceptions`, `availabilityResults`) or `$all` to query across all event types.
    api_version = 'api_version_example' # str | Client API version.
    timespan = 'timespan_example' # str | Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression. (optional)
    filter = 'filter_example' # str | An expression used to filter the returned events (optional)
    search = 'search_example' # str | A free-text search expression to match for whether a particular event should be returned (optional)
    orderby = 'orderby_example' # str | A comma-separated list of properties with \\\"asc\\\" (the default) or \\\"desc\\\" to control the order of returned events (optional)
    select = 'select_example' # str | Limits the properties to just those requested on each returned event (optional)
    skip = 56 # int | The number of items to skip over before returning events (optional)
    top = 56 # int | The number of events to return (optional)
    format = 'format_example' # str | Format for the returned events (optional)
    count = True # bool | Request a count of matching items included with the returned events (optional)
    apply = 'apply_example' # str | An expression used for aggregation over returned events (optional)

    try:
        # Execute OData query
        api_response = api_instance.events_get_by_type(subscription_id, resource_group_name, application_name, event_type, api_version, timespan=timespan, filter=filter, search=search, orderby=orderby, select=select, skip=skip, top=top, format=format, count=count, apply=apply)
        print("The response of DefaultApi->events_get_by_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->events_get_by_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **event_type** | **str**| The type of events to query; either a standard event type (&#x60;traces&#x60;, &#x60;customEvents&#x60;, &#x60;pageViews&#x60;, &#x60;requests&#x60;, &#x60;dependencies&#x60;, &#x60;exceptions&#x60;, &#x60;availabilityResults&#x60;) or &#x60;$all&#x60; to query across all event types. | 
 **api_version** | **str**| Client API version. | 
 **timespan** | **str**| Optional. The timespan over which to retrieve events. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the Odata expression. | [optional] 
 **filter** | **str**| An expression used to filter the returned events | [optional] 
 **search** | **str**| A free-text search expression to match for whether a particular event should be returned | [optional] 
 **orderby** | **str**| A comma-separated list of properties with \\\&quot;asc\\\&quot; (the default) or \\\&quot;desc\\\&quot; to control the order of returned events | [optional] 
 **select** | **str**| Limits the properties to just those requested on each returned event | [optional] 
 **skip** | **int**| The number of items to skip over before returning events | [optional] 
 **top** | **int**| The number of events to return | [optional] 
 **format** | **str**| Format for the returned events | [optional] 
 **count** | **bool**| Request a count of matching items included with the returned events | [optional] 
 **apply** | **str**| An expression used for aggregation over returned events | [optional] 

### Return type

[**EventsResults**](EventsResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **events_get_odata_metadata**
> object events_get_odata_metadata(subscription_id, resource_group_name, application_name, api_version)

Get OData metadata

Gets OData EDMX metadata describing the event data model

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Get OData metadata
        api_response = api_instance.events_get_odata_metadata(subscription_id, resource_group_name, application_name, api_version)
        print("The response of DefaultApi->events_get_odata_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->events_get_odata_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **api_version** | **str**| Client API version. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml;charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metrics_get**
> MetricsResult metrics_get(subscription_id, resource_group_name, application_name, metric_id, api_version, timespan=timespan, interval=interval, aggregation=aggregation, segment=segment, top=top, orderby=orderby, filter=filter)

Retrieve metric data

Gets metric values for a single metric

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metrics_result import MetricsResult
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    metric_id = 'metric_id_example' # str | ID of the metric. This is either a standard AI metric, or an application-specific custom metric.
    api_version = 'api_version_example' # str | Client API version.
    timespan = 'timespan_example' # str | The timespan over which to retrieve metric values. This is an ISO8601 time period value. If timespan is omitted, a default time range of `PT12H` (\"last 12 hours\") is used. The actual timespan that is queried may be adjusted by the server based. In all cases, the actual time span used for the query is included in the response. (optional)
    interval = 'interval_example' # str | The time interval to use when retrieving metric values. This is an ISO8601 duration. If interval is omitted, the metric value is aggregated across the entire timespan. If interval is supplied, the server may adjust the interval to a more appropriate size based on the timespan used for the query. In all cases, the actual interval used for the query is included in the response. (optional)
    aggregation = ['aggregation_example'] # List[str] | The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used. (optional)
    segment = ['segment_example'] # List[str] | The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter. (optional)
    top = 56 # int | The number of segments to return.  This value is only valid when segment is specified. (optional)
    orderby = 'orderby_example' # str | The aggregation function and direction to sort the segments by.  This value is only valid when segment is specified. (optional)
    filter = 'filter_example' # str | An expression used to filter the results.  This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving. (optional)

    try:
        # Retrieve metric data
        api_response = api_instance.metrics_get(subscription_id, resource_group_name, application_name, metric_id, api_version, timespan=timespan, interval=interval, aggregation=aggregation, segment=segment, top=top, orderby=orderby, filter=filter)
        print("The response of DefaultApi->metrics_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->metrics_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **metric_id** | **str**| ID of the metric. This is either a standard AI metric, or an application-specific custom metric. | 
 **api_version** | **str**| Client API version. | 
 **timespan** | **str**| The timespan over which to retrieve metric values. This is an ISO8601 time period value. If timespan is omitted, a default time range of &#x60;PT12H&#x60; (\&quot;last 12 hours\&quot;) is used. The actual timespan that is queried may be adjusted by the server based. In all cases, the actual time span used for the query is included in the response. | [optional] 
 **interval** | **str**| The time interval to use when retrieving metric values. This is an ISO8601 duration. If interval is omitted, the metric value is aggregated across the entire timespan. If interval is supplied, the server may adjust the interval to a more appropriate size based on the timespan used for the query. In all cases, the actual interval used for the query is included in the response. | [optional] 
 **aggregation** | [**List[str]**](str.md)| The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used. | [optional] 
 **segment** | [**List[str]**](str.md)| The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter. | [optional] 
 **top** | **int**| The number of segments to return.  This value is only valid when segment is specified. | [optional] 
 **orderby** | **str**| The aggregation function and direction to sort the segments by.  This value is only valid when segment is specified. | [optional] 
 **filter** | **str**| An expression used to filter the results.  This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving. | [optional] 

### Return type

[**MetricsResult**](MetricsResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metrics_get_metadata**
> object metrics_get_metadata(subscription_id, resource_group_name, application_name, api_version)

Retrieve metric metadata

Gets metadata describing the available metrics

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Retrieve metric metadata
        api_response = api_instance.metrics_get_metadata(subscription_id, resource_group_name, application_name, api_version)
        print("The response of DefaultApi->metrics_get_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->metrics_get_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **api_version** | **str**| Client API version. | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful responses |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_execute**
> QueryResults query_execute(subscription_id, resource_group_name, application_name, api_version, body)

Execute an Analytics query

Executes an Analytics query for data. [Here](https://dev.applicationinsights.io/documentation/Using-the-API/Query) is an example for using POST with an Analytics query.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_body import QueryBody
from openapi_client.models.query_results import QueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    api_version = 'api_version_example' # str | Client API version.
    body = openapi_client.QueryBody() # QueryBody | The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)

    try:
        # Execute an Analytics query
        api_response = api_instance.query_execute(subscription_id, resource_group_name, application_name, api_version, body)
        print("The response of DefaultApi->query_execute:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_execute: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **api_version** | **str**| Client API version. | 
 **body** | [**QueryBody**](QueryBody.md)| The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/) | 

### Return type

[**QueryResults**](QueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **query_get**
> QueryResults query_get(subscription_id, resource_group_name, application_name, query, api_version, timespan=timespan)

Execute an Analytics query

Executes an Analytics query for data

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_results import QueryResults
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group to get. The name is case insensitive.
    application_name = 'application_name_example' # str | Name of the Application Insights application.
    query = 'query_example' # str | The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/)
    api_version = 'api_version_example' # str | Client API version.
    timespan = 'timespan_example' # str | Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression. (optional)

    try:
        # Execute an Analytics query
        api_response = api_instance.query_get(subscription_id, resource_group_name, application_name, query, api_version, timespan=timespan)
        print("The response of DefaultApi->query_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->query_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group to get. The name is case insensitive. | 
 **application_name** | **str**| Name of the Application Insights application. | 
 **query** | **str**| The Analytics query. Learn more about the [Analytics query syntax](https://azure.microsoft.com/documentation/articles/app-insights-analytics-reference/) | 
 **api_version** | **str**| Client API version. | 
 **timespan** | **str**| Optional. The timespan over which to query data. This is an ISO8601 time period value.  This timespan is applied in addition to any that are specified in the query expression. | [optional] 

### Return type

[**QueryResults**](QueryResults.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | An error response object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

