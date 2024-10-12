# openapi_client.RealTimeApi

All URIs are relative to *https://api.mux.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_realtime_breakdown**](RealTimeApi.md#get_realtime_breakdown) | **GET** /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/breakdown | Get Real-Time Breakdown
[**get_realtime_histogram_timeseries**](RealTimeApi.md#get_realtime_histogram_timeseries) | **GET** /data/v1/realtime/metrics/{REALTIME_HISTOGRAM_METRIC_ID}/histogram-timeseries | Get Real-Time Histogram Timeseries
[**get_realtime_timeseries**](RealTimeApi.md#get_realtime_timeseries) | **GET** /data/v1/realtime/metrics/{REALTIME_METRIC_ID}/timeseries | Get Real-Time Timeseries
[**list_realtime_dimensions**](RealTimeApi.md#list_realtime_dimensions) | **GET** /data/v1/realtime/dimensions | List Real-Time Dimensions
[**list_realtime_metrics**](RealTimeApi.md#list_realtime_metrics) | **GET** /data/v1/realtime/metrics | List Real-Time Metrics


# **get_realtime_breakdown**
> GetRealTimeBreakdownResponse get_realtime_breakdown(realtime_metric_id, dimension=dimension, timestamp=timestamp, filters=filters, order_by=order_by, order_direction=order_direction)

Get Real-Time Breakdown

Gets breakdown information for a specific dimension and metric along with the number of concurrent viewers and negative impact score. This API is now deprecated, please use the `Get Monitoring Breakdown` API.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_real_time_breakdown_response import GetRealTimeBreakdownResponse
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
    api_instance = openapi_client.RealTimeApi(api_client)
    realtime_metric_id = 'current-concurrent-viewers' # str | ID of the Realtime Metric
    dimension = 'dimension_example' # str | Dimension the specified value belongs to (optional)
    timestamp = 56 # int | Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp. (optional)
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    order_by = 'order_by_example' # str | Value to order the results by (optional)
    order_direction = 'order_direction_example' # str | Sort order. (optional)

    try:
        # Get Real-Time Breakdown
        api_response = api_instance.get_realtime_breakdown(realtime_metric_id, dimension=dimension, timestamp=timestamp, filters=filters, order_by=order_by, order_direction=order_direction)
        print("The response of RealTimeApi->get_realtime_breakdown:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealTimeApi->get_realtime_breakdown: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtime_metric_id** | **str**| ID of the Realtime Metric | 
 **dimension** | **str**| Dimension the specified value belongs to | [optional] 
 **timestamp** | **int**| Timestamp to limit results by. This value must be provided as a unix timestamp. Defaults to the current unix timestamp. | [optional] 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **order_by** | **str**| Value to order the results by | [optional] 
 **order_direction** | **str**| Sort order. | [optional] 

### Return type

[**GetRealTimeBreakdownResponse**](GetRealTimeBreakdownResponse.md)

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

# **get_realtime_histogram_timeseries**
> GetRealTimeHistogramTimeseriesResponse get_realtime_histogram_timeseries(realtime_histogram_metric_id, filters=filters)

Get Real-Time Histogram Timeseries

Gets histogram timeseries information for a specific metric. This API is now deprecated, please use the `Get Monitoring Histogram Timeseries` API.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_real_time_histogram_timeseries_response import GetRealTimeHistogramTimeseriesResponse
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
    api_instance = openapi_client.RealTimeApi(api_client)
    realtime_histogram_metric_id = 'video-startup-time' # str | ID of the Realtime Histogram Metric
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)

    try:
        # Get Real-Time Histogram Timeseries
        api_response = api_instance.get_realtime_histogram_timeseries(realtime_histogram_metric_id, filters=filters)
        print("The response of RealTimeApi->get_realtime_histogram_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealTimeApi->get_realtime_histogram_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtime_histogram_metric_id** | **str**| ID of the Realtime Histogram Metric | 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 

### Return type

[**GetRealTimeHistogramTimeseriesResponse**](GetRealTimeHistogramTimeseriesResponse.md)

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

# **get_realtime_timeseries**
> GetRealTimeTimeseriesResponse get_realtime_timeseries(realtime_metric_id, filters=filters, timestamp=timestamp)

Get Real-Time Timeseries

Gets Time series information for a specific metric along with the number of concurrent viewers. This API is now deprecated, please use the `Get Monitoring Timeseries` API.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.get_real_time_timeseries_response import GetRealTimeTimeseriesResponse
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
    api_instance = openapi_client.RealTimeApi(api_client)
    realtime_metric_id = 'current-concurrent-viewers' # str | ID of the Realtime Metric
    filters = ['filters_example'] # List[str] | Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a `!` character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * `filters[]=operating_system:windows&filters[]=!country:US`  (optional)
    timestamp = 56 # int | Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago. (optional)

    try:
        # Get Real-Time Timeseries
        api_response = api_instance.get_realtime_timeseries(realtime_metric_id, filters=filters, timestamp=timestamp)
        print("The response of RealTimeApi->get_realtime_timeseries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealTimeApi->get_realtime_timeseries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **realtime_metric_id** | **str**| ID of the Realtime Metric | 
 **filters** | [**List[str]**](str.md)| Limit the results to rows that match conditions from provided key:value pairs. Must be provided as an array query string parameter.  To exclude rows that match a certain condition, prepend a &#x60;!&#x60; character to the dimension.  Possible filter names are the same as returned by the List Monitoring Dimensions endpoint.  Example:    * &#x60;filters[]&#x3D;operating_system:windows&amp;filters[]&#x3D;!country:US&#x60;  | [optional] 
 **timestamp** | **int**| Timestamp to use as the start of the timeseries data. This value must be provided as a unix timestamp. Defaults to 30 minutes ago. | [optional] 

### Return type

[**GetRealTimeTimeseriesResponse**](GetRealTimeTimeseriesResponse.md)

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

# **list_realtime_dimensions**
> ListRealTimeDimensionsResponse list_realtime_dimensions()

List Real-Time Dimensions

Lists available real-time dimensions. This API is now deprecated, please use the `List Monitoring Dimensions` API.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_real_time_dimensions_response import ListRealTimeDimensionsResponse
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
    api_instance = openapi_client.RealTimeApi(api_client)

    try:
        # List Real-Time Dimensions
        api_response = api_instance.list_realtime_dimensions()
        print("The response of RealTimeApi->list_realtime_dimensions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealTimeApi->list_realtime_dimensions: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRealTimeDimensionsResponse**](ListRealTimeDimensionsResponse.md)

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

# **list_realtime_metrics**
> ListRealTimeMetricsResponse list_realtime_metrics()

List Real-Time Metrics

Lists available real-time metrics. This API is now deprecated, please use the `List Monitoring Metrics` API.

### Example

* Basic Authentication (accessToken):

```python
import openapi_client
from openapi_client.models.list_real_time_metrics_response import ListRealTimeMetricsResponse
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
    api_instance = openapi_client.RealTimeApi(api_client)

    try:
        # List Real-Time Metrics
        api_response = api_instance.list_realtime_metrics()
        print("The response of RealTimeApi->list_realtime_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RealTimeApi->list_realtime_metrics: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ListRealTimeMetricsResponse**](ListRealTimeMetricsResponse.md)

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

