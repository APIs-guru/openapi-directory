# openapi_client.MetricApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**baselines_list_0**](MetricApi.md#baselines_list_0) | **GET** /{resourceUri}/providers/microsoft.insights/metricBaselines | 


# **baselines_list_0**
> MetricBaselinesResponse baselines_list_0(resource_uri, api_version, metricnames=metricnames, metricnamespace=metricnamespace, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, filter=filter, result_type=result_type)



**Lists the metric baseline values for a resource**.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metric_baselines_response import MetricBaselinesResponse
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
    api_instance = openapi_client.MetricApi(api_client)
    resource_uri = 'resource_uri_example' # str | The identifier of the resource.
    api_version = 'api_version_example' # str | Client Api Version.
    metricnames = 'metricnames_example' # str | The names of the metrics (comma separated) to retrieve. (optional)
    metricnamespace = 'metricnamespace_example' # str | Metric namespace to query metric definitions for. (optional)
    timespan = 'timespan_example' # str | The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. (optional)
    interval = 'interval_example' # str | The interval (i.e. timegrain) of the query. (optional)
    aggregation = 'aggregation_example' # str | The list of aggregation types (comma separated) to retrieve. (optional)
    sensitivities = 'sensitivities_example' # str | The list of sensitivities (comma separated) to retrieve. (optional)
    filter = 'filter_example' # str | The **$filter** is used to reduce the set of metric data returned.<br>Example:<br>Metric contains metadata A, B and C.<br>- Return all time series of C where A = a1 and B = b1 or b2<br>**$filter=A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**<br>- Invalid variant:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B = ‘b2’**<br>This is invalid because the logical or operator cannot separate two different metadata names.<br>- Return all time series where A = a1, B = b1 and C = c1:<br>**$filter=A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**<br>- Return all time series where A = a1<br>**$filter=A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**. (optional)
    result_type = 'result_type_example' # str | Allows retrieving only metadata of the baseline. On data request all information is retrieved. (optional)

    try:
        api_response = api_instance.baselines_list_0(resource_uri, api_version, metricnames=metricnames, metricnamespace=metricnamespace, timespan=timespan, interval=interval, aggregation=aggregation, sensitivities=sensitivities, filter=filter, result_type=result_type)
        print("The response of MetricApi->baselines_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricApi->baselines_list_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_uri** | **str**| The identifier of the resource. | 
 **api_version** | **str**| Client Api Version. | 
 **metricnames** | **str**| The names of the metrics (comma separated) to retrieve. | [optional] 
 **metricnamespace** | **str**| Metric namespace to query metric definitions for. | [optional] 
 **timespan** | **str**| The timespan of the query. It is a string with the following format &#39;startDateTime_ISO/endDateTime_ISO&#39;. | [optional] 
 **interval** | **str**| The interval (i.e. timegrain) of the query. | [optional] 
 **aggregation** | **str**| The list of aggregation types (comma separated) to retrieve. | [optional] 
 **sensitivities** | **str**| The list of sensitivities (comma separated) to retrieve. | [optional] 
 **filter** | **str**| The **$filter** is used to reduce the set of metric data returned.&lt;br&gt;Example:&lt;br&gt;Metric contains metadata A, B and C.&lt;br&gt;- Return all time series of C where A &#x3D; a1 and B &#x3D; b1 or b2&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ or B eq ‘b2’ and C eq ‘*’**&lt;br&gt;- Invalid variant:&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ and C eq ‘*’ or B &#x3D; ‘b2’**&lt;br&gt;This is invalid because the logical or operator cannot separate two different metadata names.&lt;br&gt;- Return all time series where A &#x3D; a1, B &#x3D; b1 and C &#x3D; c1:&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘b1’ and C eq ‘c1’**&lt;br&gt;- Return all time series where A &#x3D; a1&lt;br&gt;**$filter&#x3D;A eq ‘a1’ and B eq ‘*’ and C eq ‘*’**. | [optional] 
 **result_type** | **str**| Allows retrieving only metadata of the baseline. On data request all information is retrieved. | [optional] 

### Return type

[**MetricBaselinesResponse**](MetricBaselinesResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request to get the list of metric baseline values. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

