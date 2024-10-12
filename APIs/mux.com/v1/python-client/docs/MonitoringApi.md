# openapi_client.MonitoringApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_monitoring_breakdown**](MonitoringApi.md#get_monitoring_breakdown) | **GET** /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown | Get Monitoring Breakdown
[**get_monitoring_breakdown_timeseries**](MonitoringApi.md#get_monitoring_breakdown_timeseries) | **GET** /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/breakdown-timeseries | Get Monitoring Breakdown Timeseries
[**get_monitoring_histogram_timeseries**](MonitoringApi.md#get_monitoring_histogram_timeseries) | **GET** /data/v1/monitoring/metrics/{MONITORING_HISTOGRAM_METRIC_ID}/histogram-timeseries | Get Monitoring Histogram Timeseries
[**get_monitoring_timeseries**](MonitoringApi.md#get_monitoring_timeseries) | **GET** /data/v1/monitoring/metrics/{MONITORING_METRIC_ID}/timeseries | Get Monitoring Timeseries
[**list_monitoring_dimensions**](MonitoringApi.md#list_monitoring_dimensions) | **GET** /data/v1/monitoring/dimensions | List Monitoring Dimensions
[**list_monitoring_metrics**](MonitoringApi.md#list_monitoring_metrics) | **GET** /data/v1/monitoring/metrics | List Monitoring Metrics


# **get_monitoring_breakdown**
> GetMonitoringBreakdownResponse get_monitoring_breakdown(monitoring_metric_id, dimension=dimension, timestamp=timestamp, filters=filters, order_by=order_by, order_direction=order_direction)

Get Monitoring Breakdown

Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_monitoring_breakdown_response import GetMonitoringBreakdownResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)
    monitoring_metric_id = 'current-concurrent-viewers' # str | ID of the Monitoring Metric
    dimension = 'dimension_example' # str | Dimension the specified value belongs to (optional)
    timestamp = 56 # int | Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp. (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)

    try:
        # Get Monitoring Breakdown
        api_response = api_instance.get_monitoring_breakdown(monitoring_metric_id, dimension=dimension, timestamp=timestamp, filters=filters, order_by=order_by, order_direction=order_direction)
        print("The response of MonitoringApi->get_monitoring_breakdown:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->get_monitoring_breakdown: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitoring_metric_id** | **str**| ID of the Monitoring Metric | 
 **dimension** | **str**| Dimension the specified value belongs to | [optional] 
 **timestamp** | **int**| Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp. | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 

### Return type

[**GetMonitoringBreakdownResponse**](GetMonitoringBreakdownResponse.md)

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

# **get_monitoring_breakdown_timeseries**
> GetMonitoringBreakdownTimeseriesResponse get_monitoring_breakdown_timeseries(monitoring_metric_id, dimension=dimension, timeframe=timeframe, filters=filters, limit=limit, order_by=order_by, order_direction=order_direction)

Get Monitoring Breakdown Timeseries

Gets timeseries of breakdown information for a specific dimension and metric. Each datapoint in the response represents 5 seconds worth of data.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_monitoring_breakdown_timeseries_response import GetMonitoringBreakdownTimeseriesResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)
    monitoring_metric_id = 'current-concurrent-viewers' # str | ID of the Monitoring Metric
    dimension = 'dimension_example' # str | Dimension the specified value belongs to (optional)
    timeframe = ['timeframe_example'] # List[str] | Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]=).  The default for this is the last 60 seconds of available data. Timeframes larger than 10 minutes are not allowed, and must be within the last 24 hours.  (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    limit = 10 # int | Number of items to include in each timestamp's `value` list.  The default is 10, and the maximum is 100.  (optional) (default to 10)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)

    try:
        # Get Monitoring Breakdown Timeseries
        api_response = api_instance.get_monitoring_breakdown_timeseries(monitoring_metric_id, dimension=dimension, timeframe=timeframe, filters=filters, limit=limit, order_by=order_by, order_direction=order_direction)
        print("The response of MonitoringApi->get_monitoring_breakdown_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->get_monitoring_breakdown_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitoring_metric_id** | **str**| ID of the Monitoring Metric | 
 **dimension** | **str**| Dimension the specified value belongs to | [optional] 
 **timeframe** | [**List[str]**](str.md)| Timeframe window to limit results by. Must be provided as an array query string parameter (e.g. timeframe[]&#x3D;).  The default for this is the last 60 seconds of available data. Timeframes larger than 10 minutes are not allowed, and must be within the last 24 hours.  | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **limit** | **int**| Number of items to include in each timestamp&#39;s &#x60;value&#x60; list.  The default is 10, and the maximum is 100.  | [optional] [default to 10]
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 

### Return type

[**GetMonitoringBreakdownTimeseriesResponse**](GetMonitoringBreakdownTimeseriesResponse.md)

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

# **get_monitoring_histogram_timeseries**
> GetMonitoringHistogramTimeseriesResponse get_monitoring_histogram_timeseries(monitoring_histogram_metric_id, filters=filters)

Get Monitoring Histogram Timeseries

Gets histogram timeseries information for a specific metric.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_monitoring_histogram_timeseries_response import GetMonitoringHistogramTimeseriesResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)
    monitoring_histogram_metric_id = 'video-startup-time' # str | ID of the Monitoring Histogram Metric
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)

    try:
        # Get Monitoring Histogram Timeseries
        api_response = api_instance.get_monitoring_histogram_timeseries(monitoring_histogram_metric_id, filters=filters)
        print("The response of MonitoringApi->get_monitoring_histogram_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->get_monitoring_histogram_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitoring_histogram_metric_id** | **str**| ID of the Monitoring Histogram Metric | 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 

### Return type

[**GetMonitoringHistogramTimeseriesResponse**](GetMonitoringHistogramTimeseriesResponse.md)

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

# **get_monitoring_timeseries**
> GetMonitoringTimeseriesResponse get_monitoring_timeseries(monitoring_metric_id, filters=filters, timestamp=timestamp)

Get Monitoring Timeseries

Gets Time series information for a specific metric along with the number of concurrent viewers.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_monitoring_timeseries_response import GetMonitoringTimeseriesResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)
    monitoring_metric_id = 'current-concurrent-viewers' # str | ID of the Monitoring Metric
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    timestamp = 56 # int | Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago. (optional)

    try:
        # Get Monitoring Timeseries
        api_response = api_instance.get_monitoring_timeseries(monitoring_metric_id, filters=filters, timestamp=timestamp)
        print("The response of MonitoringApi->get_monitoring_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->get_monitoring_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitoring_metric_id** | **str**| ID of the Monitoring Metric | 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **timestamp** | **int**| Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago. | [optional] 

### Return type

[**GetMonitoringTimeseriesResponse**](GetMonitoringTimeseriesResponse.md)

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

# **list_monitoring_dimensions**
> ListMonitoringDimensionsResponse list_monitoring_dimensions()

List Monitoring Dimensions

Lists available monitoring dimensions.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_monitoring_dimensions_response import ListMonitoringDimensionsResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)

    try:
        # List Monitoring Dimensions
        api_response = api_instance.list_monitoring_dimensions()
        print("The response of MonitoringApi->list_monitoring_dimensions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->list_monitoring_dimensions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListMonitoringDimensionsResponse**](ListMonitoringDimensionsResponse.md)

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

# **list_monitoring_metrics**
> ListMonitoringMetricsResponse list_monitoring_metrics()

List Monitoring Metrics

Lists available monitoring metrics.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_monitoring_metrics_response import ListMonitoringMetricsResponse
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
    api_instance = openapi_client.MonitoringApi(api_client)

    try:
        # List Monitoring Metrics
        api_response = api_instance.list_monitoring_metrics()
        print("The response of MonitoringApi->list_monitoring_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MonitoringApi->list_monitoring_metrics: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListMonitoringMetricsResponse**](ListMonitoringMetricsResponse.md)

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

