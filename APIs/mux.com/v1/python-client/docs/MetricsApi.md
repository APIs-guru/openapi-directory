# openapi_client.MetricsApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_metric_timeseries_data**](MetricsApi.md#get_metric_timeseries_data) | **GET** /data/v1/metrics/{METRIC_ID}/timeseries | Get metric timeseries data
[**get_overall_values**](MetricsApi.md#get_overall_values) | **GET** /data/v1/metrics/{METRIC_ID}/overall | Get Overall values
[**list_all_metric_values**](MetricsApi.md#list_all_metric_values) | **GET** /data/v1/metrics/comparison | List all metric values
[**list_breakdown_values**](MetricsApi.md#list_breakdown_values) | **GET** /data/v1/metrics/{METRIC_ID}/breakdown | List breakdown values
[**list_insights**](MetricsApi.md#list_insights) | **GET** /data/v1/metrics/{METRIC_ID}/insights | List Insights


# **get_metric_timeseries_data**
> GetMetricTimeseriesDataResponse get_metric_timeseries_data(metric_id, timeframe=timeframe, filters=filters, measurement=measurement, order_direction=order_direction, group_by=group_by)

Get metric timeseries data

Returns timeseries data for a specific metric.  Each interval represented in the data array contains an array with the following values:   * the first element is the interval time   * the second element is the calculated metric value   * the third element is the number of views in the interval that have a valid metric value 

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_metric_timeseries_data_response import GetMetricTimeseriesDataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    metric_id = 'video_startup_time' # str | ID of the Metric
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  Accepted formats are...    * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`   * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`  (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    measurement = 'measurement_example' # str | Measurement for the provided metric. If omitted, the default for the metric will be used. (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)
    group_by = 'group_by_example' # str | Time granularity to group results by. If this value is omitted, a default granularity is chosen based on the timeframe.  For timeframes of less than 90 minutes, the default granularity is `minute`. Between 90 minutes and 6 hours, the default granularity is `ten_minutes`. Between 6 hours and 15 days inclusive, the default granularity is `hour`. The granularity of timeframes that exceed 15 days is `day`. This default behavior is subject to change; it is strongly suggested that you explicitly specify the granularity.  (optional)

    try:
        # Get metric timeseries data
        api_response = api_instance.get_metric_timeseries_data(metric_id, timeframe=timeframe, filters=filters, measurement=measurement, order_direction=order_direction, group_by=group_by)
        print("The response of MetricsApi->get_metric_timeseries_data:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->get_metric_timeseries_data: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric_id** | **str**| ID of the Metric | 
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  Accepted formats are...    * array of epoch timestamps e.g. &#x60;timeframe[]&#x3D;1498867200&amp;timeframe[]&#x3D;1498953600&#x60;   * duration string e.g. &#x60;timeframe[]&#x3D;24:hours or timeframe[]&#x3D;7:days&#x60;  | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **measurement** | **str**| Measurement for the provided metric. If omitted, the default for the metric will be used. | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 
 **group_by** | **str**| Time granularity to group results by. If this value is omitted, a default granularity is chosen based on the timeframe.  For timeframes of less than 90 minutes, the default granularity is &#x60;minute&#x60;. Between 90 minutes and 6 hours, the default granularity is &#x60;ten_minutes&#x60;. Between 6 hours and 15 days inclusive, the default granularity is &#x60;hour&#x60;. The granularity of timeframes that exceed 15 days is &#x60;day&#x60;. This default behavior is subject to change; it is strongly suggested that you explicitly specify the granularity.  | [optional] 

### Return type

[**GetMetricTimeseriesDataResponse**](GetMetricTimeseriesDataResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_overall_values**
> GetOverallValuesResponse get_overall_values(metric_id, timeframe=timeframe, filters=filters, measurement=measurement)

Get Overall values

Returns the overall value for a specific metric, as well as the total view count, watch time, and the Mux Global metric value for the metric.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_overall_values_response import GetOverallValuesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    metric_id = 'video_startup_time' # str | ID of the Metric
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  Accepted formats are...    * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`   * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`  (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    measurement = 'measurement_example' # str | Measurement for the provided metric. If omitted, the default for the metric will be used. (optional)

    try:
        # Get Overall values
        api_response = api_instance.get_overall_values(metric_id, timeframe=timeframe, filters=filters, measurement=measurement)
        print("The response of MetricsApi->get_overall_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->get_overall_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric_id** | **str**| ID of the Metric | 
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  Accepted formats are...    * array of epoch timestamps e.g. &#x60;timeframe[]&#x3D;1498867200&amp;timeframe[]&#x3D;1498953600&#x60;   * duration string e.g. &#x60;timeframe[]&#x3D;24:hours or timeframe[]&#x3D;7:days&#x60;  | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **measurement** | **str**| Measurement for the provided metric. If omitted, the default for the metric will be used. | [optional] 

### Return type

[**GetOverallValuesResponse**](GetOverallValuesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_all_metric_values**
> ListAllMetricValuesResponse list_all_metric_values(timeframe=timeframe, filters=filters, dimension=dimension, value=value)

List all metric values

List all of the values across every breakdown for a specific metric.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_all_metric_values_response import ListAllMetricValuesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  Accepted formats are...    * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`   * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`  (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    dimension = 'dimension_example' # str | Dimension the specified value belongs to (optional)
    value = 'value_example' # str | Value to show all available metrics for (optional)

    try:
        # List all metric values
        api_response = api_instance.list_all_metric_values(timeframe=timeframe, filters=filters, dimension=dimension, value=value)
        print("The response of MetricsApi->list_all_metric_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->list_all_metric_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  Accepted formats are...    * array of epoch timestamps e.g. &#x60;timeframe[]&#x3D;1498867200&amp;timeframe[]&#x3D;1498953600&#x60;   * duration string e.g. &#x60;timeframe[]&#x3D;24:hours or timeframe[]&#x3D;7:days&#x60;  | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **dimension** | **str**| Dimension the specified value belongs to | [optional] 
 **value** | **str**| Value to show all available metrics for | [optional] 

### Return type

[**ListAllMetricValuesResponse**](ListAllMetricValuesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_breakdown_values**
> ListBreakdownValuesResponse list_breakdown_values(metric_id, group_by=group_by, measurement=measurement, filters=filters, limit=limit, page=page, order_by=order_by, order_direction=order_direction, timeframe=timeframe)

List breakdown values

List the breakdown values for a specific metric.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_breakdown_values_response import ListBreakdownValuesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    metric_id = 'video_startup_time' # str | ID of the Metric
    group_by = 'group_by_example' # str | Breakdown value to group the results by (optional)
    measurement = 'measurement_example' # str | Measurement for the provided metric. If omitted, the default for the metric will be used. (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    limit = 25 # int | Number of items to include in the response (optional) (default to 25)
    page = 1 # int | Offset by this many pages, of the size of `limit` (optional) (default to 1)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  Accepted formats are...    * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`   * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`  (optional)

    try:
        # List breakdown values
        api_response = api_instance.list_breakdown_values(metric_id, group_by=group_by, measurement=measurement, filters=filters, limit=limit, page=page, order_by=order_by, order_direction=order_direction, timeframe=timeframe)
        print("The response of MetricsApi->list_breakdown_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->list_breakdown_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric_id** | **str**| ID of the Metric | 
 **group_by** | **str**| Breakdown value to group the results by | [optional] 
 **measurement** | **str**| Measurement for the provided metric. If omitted, the default for the metric will be used. | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Filters endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **limit** | **int**| Number of items to include in the response | [optional] [default to 25]
 **page** | **int**| Offset by this many pages, of the size of &#x60;limit&#x60; | [optional] [default to 1]
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  Accepted formats are...    * array of epoch timestamps e.g. &#x60;timeframe[]&#x3D;1498867200&amp;timeframe[]&#x3D;1498953600&#x60;   * duration string e.g. &#x60;timeframe[]&#x3D;24:hours or timeframe[]&#x3D;7:days&#x60;  | [optional] 

### Return type

[**ListBreakdownValuesResponse**](ListBreakdownValuesResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_insights**
> ListInsightsResponse list_insights(metric_id, measurement=measurement, order_direction=order_direction, timeframe=timeframe)

List Insights

Returns a list of insights for a metric. These are the worst performing values across all breakdowns sorted by how much they negatively impact a specific metric.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_insights_response import ListInsightsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.mux.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.mux.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: accessToken
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetricsApi(api_client)
    metric_id = 'video_startup_time' # str | ID of the Metric
    measurement = 'measurement_example' # str | Measurement for the provided metric. If omitted, the default for the metric will be used. (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  Accepted formats are...    * array of epoch timestamps e.g. `timeframe[]=1498867200&timeframe[]=1498953600`   * duration string e.g. `timeframe[]=24:hours or timeframe[]=7:days`  (optional)

    try:
        # List Insights
        api_response = api_instance.list_insights(metric_id, measurement=measurement, order_direction=order_direction, timeframe=timeframe)
        print("The response of MetricsApi->list_insights:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetricsApi->list_insights: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metric_id** | **str**| ID of the Metric | 
 **measurement** | **str**| Measurement for the provided metric. If omitted, the default for the metric will be used. | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  Accepted formats are...    * array of epoch timestamps e.g. &#x60;timeframe[]&#x3D;1498867200&amp;timeframe[]&#x3D;1498953600&#x60;   * duration string e.g. &#x60;timeframe[]&#x3D;24:hours or timeframe[]&#x3D;7:days&#x60;  | [optional] 

### Return type

[**ListInsightsResponse**](ListInsightsResponse.md)

### Authorization

[accessToken](../README.md#accessToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

