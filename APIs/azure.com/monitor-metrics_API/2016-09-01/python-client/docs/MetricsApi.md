# openapi_client.MetricsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metrics_list**](MetricsApi.md#metrics_list) | **GET** /{resourceUri}/providers/microsoft.insights/metrics | 


# **metrics_list**
> MetricCollection metrics_list(resource_uri, api_version, filter=filter)



Lists the metric values for a resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_collection import MetricCollection
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
    filter = 'filter_example' # str | Reduces the set of data collected.<br>The filter is optional. If present it must contain a list of metric names to retrieve of the form: *(name.value eq 'metricName' [or name.value eq 'metricName' or ...])*. Optionally, the filter can contain conditions for the following attributes *aggregationType*, *startTime*, *endTime*, and *timeGrain* of the form *attributeName operator value*. Where operator is one of *ne*, *eq*, *gt*, *lt*.<br>Several conditions can be combined with parentheses and logical operators, e.g: *and*, *or*.<br>Some example filter expressions are:<br>- $filter=(name.value eq 'RunsSucceeded') and aggregationType eq 'Total' and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M',<br>- $filter=(name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1H',<br>- $filter=(name.value eq 'ActionsCompleted' or name.value eq 'RunsSucceeded') and (aggregationType eq 'Total' or aggregationType eq 'Average') and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration'PT1M'.<br><br>**NOTE**: When a metrics query comes in with multiple metrics, but with no aggregation types defined, the service will pick the Primary aggregation type of the first metrics to be used as the default aggregation type for all the metrics. (optional)

    try:
        api_response = api_instance.metrics_list(resource_uri, api_version, filter=filter)
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
 **filter** | **str**| Reduces the set of data collected.&lt;br&gt;The filter is optional. If present it must contain a list of metric names to retrieve of the form: *(name.value eq &#39;metricName&#39; [or name.value eq &#39;metricName&#39; or ...])*. Optionally, the filter can contain conditions for the following attributes *aggregationType*, *startTime*, *endTime*, and *timeGrain* of the form *attributeName operator value*. Where operator is one of *ne*, *eq*, *gt*, *lt*.&lt;br&gt;Several conditions can be combined with parentheses and logical operators, e.g: *and*, *or*.&lt;br&gt;Some example filter expressions are:&lt;br&gt;- $filter&#x3D;(name.value eq &#39;RunsSucceeded&#39;) and aggregationType eq &#39;Total&#39; and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration&#39;PT1M&#39;,&lt;br&gt;- $filter&#x3D;(name.value eq &#39;RunsSucceeded&#39;) and (aggregationType eq &#39;Total&#39; or aggregationType eq &#39;Average&#39;) and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration&#39;PT1H&#39;,&lt;br&gt;- $filter&#x3D;(name.value eq &#39;ActionsCompleted&#39; or name.value eq &#39;RunsSucceeded&#39;) and (aggregationType eq &#39;Total&#39; or aggregationType eq &#39;Average&#39;) and startTime eq 2016-02-20 and endTime eq 2016-02-21 and timeGrain eq duration&#39;PT1M&#39;.&lt;br&gt;&lt;br&gt;**NOTE**: When a metrics query comes in with multiple metrics, but with no aggregation types defined, the service will pick the Primary aggregation type of the first metrics to be used as the default aggregation type for all the metrics. | [optional] 

### Return type

[**MetricCollection**](MetricCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric values |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

