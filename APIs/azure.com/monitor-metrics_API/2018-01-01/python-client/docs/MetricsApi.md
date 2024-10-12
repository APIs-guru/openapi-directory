# openapi_client.MetricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_list**](MetricsApi.md#metrics_list) | **GET** /{resourceUri}/providers/microsoft.insights/metrics | 


# **metrics_list**
> Response metrics_list(resource_uri, api_version, timespan=timespan, interval=interval, metricnames=metricnames, aggregation=aggregation, top=top, orderby=orderby, filter=filter, result_type=result_type, metricnamespace=metricnamespace)



**Lists the metric values for a resource**.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response import Response
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
    api_instance = openapi_client.MetricsApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    timespan = 'timespan_example' # str | The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. (optional)
    interval = 'interval_example' # str | The interval (i.e. timegrain) of the query. (optional)
    metricnames = 'metricnames_example' # str | The names of the metrics (comma separated) to retrieve. (optional)
    aggregation = 'aggregation_example' # str | The list of aggregation types (comma separated) to retrieve. (optional)
    top = 56 # int | The maximum number of records to retrieve. Valid only if $filter is specified. Defaults to 10. (optional)
    orderby = 'orderby_example' # str | The aggregation to use for sorting results and the direction of the sort. Only one order can be specified. Examples: sum asc. (optional)
    filter = 'filter_example' # str | The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**. (optional)
    result_type = 'result_type_example' # str | Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details. (optional)
    metricnamespace = 'metricnamespace_example' # str | Metric namespace to query metric definitions for. (optional)

    try:
        api_response = api_instance.metrics_list(resource_uri, api_version, timespan=timespan, interval=interval, metricnames=metricnames, aggregation=aggregation, top=top, orderby=orderby, filter=filter, result_type=result_type, metricnamespace=metricnamespace)
        print("The response of MetricsApi->metrics_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->metrics_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **timespan** | **str**| The timespan of the query. It is a string with the following format &#39;startDateTime_ISO/endDateTime_ISO&#39;. | [optional] 
 **interval** | **str**| The interval (i.e. timegrain) of the query. | [optional] 
 **metricnames** | **str**| The names of the metrics (comma separated) to retrieve. | [optional] 
 **aggregation** | **str**| The list of aggregation types (comma separated) to retrieve. | [optional] 
 **top** | **int**| The maximum number of records to retrieve. Valid only if $filter is specified. Defaults to 10. | [optional] 
 **orderby** | **str**| The aggregation to use for sorting results and the direction of the sort. Only one order can be specified. Examples: sum asc. | [optional] 
 **filter** | **str**| The **$filter** is used to reduce the set of metric data returned.&lt;br&gt;Example:&lt;br&gt;Metric contains metadata A, B and C.&lt;br&gt;- Return all time series of C where A &#x3D; a1 and B &#x3D; b1 or b2&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**&lt;br&gt;- Invalid variant:&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B &#x3D; ‘b2’**&lt;br&gt;This is invalid because the logical or operator cannot separate two different metadata names.&lt;br&gt;- Return all time series where A &#x3D; a1, B &#x3D; b1 and C &#x3D; c1:&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**&lt;br&gt;- Return all time series where A &#x3D; a1&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**. | [optional] 
 **result_type** | **str**| Reduces the set of data collected. The syntax allowed depends on the operation. See the operation&#39;s description for details. | [optional] 
 **metricnamespace** | **str**| Metric namespace to query metric definitions for. | [optional] 

### Return type

[**Response**](Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

