# openapi_client.StreamApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_get_channel**](StreamApi.md#stream_get_channel) | **GET** /streams/{webId}/channel | Opens a channel that will send messages about any value changes for the specified stream.
[**stream_get_end**](StreamApi.md#stream_get_end) | **GET** /streams/{webId}/end | Returns the end-of-stream value of the stream.
[**stream_get_interpolated**](StreamApi.md#stream_get_interpolated) | **GET** /streams/{webId}/interpolated | Retrieves interpolated values over the specified time range at the specified sampling interval.
[**stream_get_interpolated_at_times**](StreamApi.md#stream_get_interpolated_at_times) | **GET** /streams/{webId}/interpolatedattimes | Retrieves interpolated values over the specified time range at the specified sampling interval.
[**stream_get_plot**](StreamApi.md#stream_get_plot) | **GET** /streams/{webId}/plot | Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**stream_get_recorded**](StreamApi.md#stream_get_recorded) | **GET** /streams/{webId}/recorded | Returns a list of compressed values for the requested time range from the source provider.
[**stream_get_recorded_at_time**](StreamApi.md#stream_get_recorded_at_time) | **GET** /streams/{webId}/recordedattime | Returns a single recorded value based on the passed time and retrieval mode from the stream.
[**stream_get_recorded_at_times**](StreamApi.md#stream_get_recorded_at_times) | **GET** /streams/{webId}/recordedattimes | Retrieves recorded values at the specified times.
[**stream_get_summary**](StreamApi.md#stream_get_summary) | **GET** /streams/{webId}/summary | Returns a summary over the specified time range for the stream.
[**stream_get_value**](StreamApi.md#stream_get_value) | **GET** /streams/{webId}/value | Returns the value of the stream at the specified time. By default, this is usually the current value.
[**stream_register_stream_update**](StreamApi.md#stream_register_stream_update) | **POST** /streams/{webId}/updates | Register for stream updates
[**stream_retrieve_stream_update**](StreamApi.md#stream_retrieve_stream_update) | **GET** /streams/updates/{marker} | Receive stream updates
[**stream_update_value**](StreamApi.md#stream_update_value) | **POST** /streams/{webId}/value | Updates a value for the specified stream.
[**stream_update_values**](StreamApi.md#stream_update_values) | **POST** /streams/{webId}/recorded | Updates multiple values for the specified stream.


# **stream_get_channel**
> stream_get_channel(web_id, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, web_id_type=web_id_type)

Opens a channel that will send messages about any value changes for the specified stream.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    heartbeat_rate = 56 # int | HeartbeatRate is an integer multiple of the Polling Interval. It specifies the rate at which a client will receive an empty message if there are no data updates. It can be used to check that the connection is still alive. Zero/negative values correspond to no heartbeat. By default, no empty messages will be sent to the user. (optional)
    include_initial_values = True # bool | Specified if the channel should send a message with the current value of the stream after the connection is opened. The default is 'false'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Opens a channel that will send messages about any value changes for the specified stream.
        api_instance.stream_get_channel(web_id, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **heartbeat_rate** | **int**| HeartbeatRate is an integer multiple of the Polling Interval. It specifies the rate at which a client will receive an empty message if there are no data updates. It can be used to check that the connection is still alive. Zero/negative values correspond to no heartbeat. By default, no empty messages will be sent to the user. | [optional] 
 **include_initial_values** | **bool**| Specified if the channel should send a message with the current value of the stream after the connection is opened. The default is &#39;false&#39;. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**101** | Switches to the Web Socket protocol. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_end**
> TimedValue stream_get_end(web_id, desired_units=desired_units, selected_fields=selected_fields)

Returns the end-of-stream value of the stream.

### Example


```python
import openapi_client
from openapi_client.models.timed_value import TimedValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)

    try:
        # Returns the end-of-stream value of the stream.
        api_response = api_instance.stream_get_end(web_id, desired_units=desired_units, selected_fields=selected_fields)
        print("The response of StreamApi->stream_get_end:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_end: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 

### Return type

[**TimedValue**](TimedValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The value at the specified time value. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_interpolated**
> TimedValues stream_get_interpolated(web_id, desired_units=desired_units, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, selected_fields=selected_fields, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, time_zone=time_zone)

Retrieves interpolated values over the specified time range at the specified sampling interval.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.timed_values import TimedValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    interval = 'interval_example' # str | The sampling interval, in AFTimeSpan format. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    sync_time = 'sync_time_example' # str | An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. (optional)
    sync_time_boundary_type = 'sync_time_boundary_type_example' # str | An optional string specifying the boundary type to use when applying a syncTime. The allowed values are 'Inside' and 'Outside'. The default is 'Inside'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Retrieves interpolated values over the specified time range at the specified sampling interval.
        api_response = api_instance.stream_get_interpolated(web_id, desired_units=desired_units, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, selected_fields=selected_fields, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, time_zone=time_zone)
        print("The response of StreamApi->stream_get_interpolated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_interpolated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **interval** | **str**| The sampling interval, in AFTimeSpan format. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **sync_time** | **str**| An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. | [optional] 
 **sync_time_boundary_type** | **str**| An optional string specifying the boundary type to use when applying a syncTime. The allowed values are &#39;Inside&#39; and &#39;Outside&#39;. The default is &#39;Inside&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**TimedValues**](TimedValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The values that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support this method, or the supplied filter expression is unsupported, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_interpolated_at_times**
> TimedValues stream_get_interpolated_at_times(web_id, time, desired_units=desired_units, filter_expression=filter_expression, include_filtered_values=include_filtered_values, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone)

Retrieves interpolated values over the specified time range at the specified sampling interval.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.timed_values import TimedValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    time = ['time_example'] # List[str] | The timestamp at which to retrieve an interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Retrieves interpolated values over the specified time range at the specified sampling interval.
        api_response = api_instance.stream_get_interpolated_at_times(web_id, time, desired_units=desired_units, filter_expression=filter_expression, include_filtered_values=include_filtered_values, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone)
        print("The response of StreamApi->stream_get_interpolated_at_times:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_interpolated_at_times: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve an interpolated value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**TimedValues**](TimedValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The values that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support this method, or the supplied filter expression is unsupported, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_plot**
> TimedValues stream_get_plot(web_id, desired_units=desired_units, end_time=end_time, intervals=intervals, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone)

Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.timed_values import TimedValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    intervals = 56 # int | The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Retrieves values over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
        api_response = api_instance.stream_get_plot(web_id, desired_units=desired_units, end_time=end_time, intervals=intervals, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone)
        print("The response of StreamApi->stream_get_plot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_plot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **intervals** | **int**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is &#39;24&#39;. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**TimedValues**](TimedValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The values that meet the specified conditions |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support this method, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_recorded**
> ExtendedTimedValues stream_get_recorded(web_id, associations=associations, boundary_type=boundary_type, desired_units=desired_units, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone)

Returns a list of compressed values for the requested time range from the source provider.

Returned times are affected by the specified boundary type. If no values are found for the time range and conditions specified then the HTTP response will be success, with a body containing an empty array of Items. When specifying true for the includeFilteredValues parameter, consecutive filtered events are not returned. The first value that would be filtered out is returned with its time and the enumeration value \"Filtered\". The next value in the collection will be the next compressed value in the specified direction that passes the filter criteria - if any. When both boundaryType and a filterExpression are specified, the events returned for the boundary condition specified are passed through the filter. If the includeFilteredValues parameter is true, the boundary values will be reported at the proper timestamps with the enumeration value \"Filtered\" when the filter conditions are not met at the boundary time. If the includeFilteredValues parameter is false for this case, no event is returned for the boundary time. Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.   If only recorded values with annotations are desired, the filterExpression parameter should include the filter IsSet('.', \"a\").

### Example


```python
import openapi_client
from openapi_client.models.extended_timed_values import ExtendedTimedValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. (optional)
    boundary_type = 'boundary_type_example' # str | An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'. (optional)
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    max_count = 56 # int | The maximum number of values to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Returns a list of compressed values for the requested time range from the source provider.
        api_response = api_instance.stream_get_recorded(web_id, associations=associations, boundary_type=boundary_type, desired_units=desired_units, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone)
        print("The response of StreamApi->stream_get_recorded:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_recorded: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. | [optional] 
 **boundary_type** | **str**| An optional value that determines how the times and values of the returned end points are determined. The default is &#39;Inside&#39;. | [optional] 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **max_count** | **int**| The maximum number of values to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**ExtendedTimedValues**](ExtendedTimedValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The values that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support the method, or the supplied filter expression is unsupported, or the desired units of measure are incompatible, or an unsupported association was specified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_recorded_at_time**
> ExtendedTimedValue stream_get_recorded_at_time(web_id, time, associations=associations, desired_units=desired_units, retrieval_mode=retrieval_mode, selected_fields=selected_fields, time_zone=time_zone)

Returns a single recorded value based on the passed time and retrieval mode from the stream.

If only recorded values with annotations are desired, the filterExpression parameter should include the filter IsSet('.', \"a\").

### Example


```python
import openapi_client
from openapi_client.models.extended_timed_value import ExtendedTimedValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    time = 'time_example' # str | The timestamp at which the value is desired.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. (optional)
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Returns a single recorded value based on the passed time and retrieval mode from the stream.
        api_response = api_instance.stream_get_recorded_at_time(web_id, time, associations=associations, desired_units=desired_units, retrieval_mode=retrieval_mode, selected_fields=selected_fields, time_zone=time_zone)
        print("The response of StreamApi->stream_get_recorded_at_time:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_recorded_at_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **time** | **str**| The timestamp at which the value is desired. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. | [optional] 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **retrieval_mode** | **str**| An optional value that determines the value to return when a value doesn&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**ExtendedTimedValue**](ExtendedTimedValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The value that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support the method, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_recorded_at_times**
> ExtendedTimedValues stream_get_recorded_at_times(web_id, time, associations=associations, desired_units=desired_units, retrieval_mode=retrieval_mode, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone)

Retrieves recorded values at the specified times.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.   If only recorded values with annotations are desired, the filterExpression parameter should include the filter IsSet('.', \"a\").

### Example


```python
import openapi_client
from openapi_client.models.extended_timed_values import ExtendedTimedValues
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    time = ['time_example'] # List[str] | The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
    associations = 'associations_example' # str | Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. (optional)
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the value to return when a value doesn't exist at the exact time specified. The default is 'Auto'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Retrieves recorded values at the specified times.
        api_response = api_instance.stream_get_recorded_at_times(web_id, time, associations=associations, desired_units=desired_units, retrieval_mode=retrieval_mode, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone)
        print("The response of StreamApi->stream_get_recorded_at_times:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_recorded_at_times: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **associations** | **str**| Associated values to return in the response, separated by semicolons (;). This call supports Annotations to return events with annotation values. If this parameter is not specified, annotation values are not returned. | [optional] 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **retrieval_mode** | **str**| An optional value that determines the value to return when a value doesn&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**ExtendedTimedValues**](ExtendedTimedValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The values that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**409** | The data reference does not support this method, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_summary**
> ItemsSummaryValue stream_get_summary(web_id, calculation_basis=calculation_basis, end_time=end_time, filter_expression=filter_expression, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, time_zone=time_zone)

Returns a summary over the specified time range for the stream.

Count is the only summary type supported on non-numeric streams. Requesting a summary for any other type will generate an error. Time-weighted totals are computed by integrating the rate tag values over the requested time range. If some of the data are bad in the time range, the calculated total is divided by the fraction of the time period for which there are good values. This approach is equivalent to assuming that during the period of bad data, the tag takes on the average values for the entire calculation time range. The PercentGood summary may be used to determine if the calculation results are suitable for the application's purposes. For time-weighted totals, if the time unit rate of the stream cannot be determined, then the value will be totaled assuming a unit of \"per day\" and no unit of measure will be assigned to the value. If the measured time component of the tag is not based on a day, the user of the data must convert the totalized value to the correct units.

### Example


```python
import openapi_client
from openapi_client.models.items_summary_value import ItemsSummaryValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    calculation_basis = 'calculation_basis_example' # str | Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. (optional)
    sample_interval = 'sample_interval_example' # str | When the sampleType is Interval, sampleInterval specifies how often the filter expression is evaluated when computing the summary for an interval. (optional)
    sample_type = 'sample_type_example' # str | Defines the evaluation of an expression over a time range. The default is 'ExpressionRecordedValues'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    summary_duration = 'summary_duration_example' # str | The duration of each summary interval. If specified in hours, minutes, seconds, or milliseconds, the summary durations will be evenly spaced UTC time intervals. Longer interval types are interpreted using wall clock rules and are time zone dependent. (optional)
    summary_type = ['summary_type_example'] # List[str] | Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType. (optional)
    time_type = 'time_type_example' # str | Specifies how to calculate the timestamp for each interval. The default is 'Auto'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Returns a summary over the specified time range for the stream.
        api_response = api_instance.stream_get_summary(web_id, calculation_basis=calculation_basis, end_time=end_time, filter_expression=filter_expression, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, time_zone=time_zone)
        print("The response of StreamApi->stream_get_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **calculation_basis** | **str**| Specifies the method of evaluating the data over the time range. The default is &#39;TimeWeighted&#39;. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| A string containing a filter expression. Expression variables are relative to the attribute. Use &#39;.&#39; to reference the containing attribute. | [optional] 
 **sample_interval** | **str**| When the sampleType is Interval, sampleInterval specifies how often the filter expression is evaluated when computing the summary for an interval. | [optional] 
 **sample_type** | **str**| Defines the evaluation of an expression over a time range. The default is &#39;ExpressionRecordedValues&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **summary_duration** | **str**| The duration of each summary interval. If specified in hours, minutes, seconds, or milliseconds, the summary durations will be evenly spaced UTC time intervals. Longer interval types are interpreted using wall clock rules and are time zone dependent. | [optional] 
 **summary_type** | [**List[str]**](str.md)| Specifies the kinds of summaries to produce over the range. The default is &#39;Total&#39;. Multiple summary types may be specified by using multiple instances of summaryType. | [optional] 
 **time_type** | **str**| Specifies how to calculate the timestamp for each interval. The default is &#39;Auto&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**ItemsSummaryValue**](ItemsSummaryValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The summaries that meet the specified conditions. |  -  |
**409** | The data reference does not support this method. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_get_value**
> TimedValue stream_get_value(web_id, desired_units=desired_units, selected_fields=selected_fields, time=time, time_zone=time_zone)

Returns the value of the stream at the specified time. By default, this is usually the current value.

### Example


```python
import openapi_client
from openapi_client.models.timed_value import TimedValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    time = 'time_example' # str | An optional time. The default time context is determined from the owning object - for example, the time range of the event frame or transfer which holds this attribute. Otherwise, the implementation of the Data Reference determines the meaning of no context. For Points or simply configured PI Point Data References, this means the snapshot value of the PI Point on the Data Server. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)

    try:
        # Returns the value of the stream at the specified time. By default, this is usually the current value.
        api_response = api_instance.stream_get_value(web_id, desired_units=desired_units, selected_fields=selected_fields, time=time, time_zone=time_zone)
        print("The response of StreamApi->stream_get_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_get_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **time** | **str**| An optional time. The default time context is determined from the owning object - for example, the time range of the event frame or transfer which holds this attribute. Otherwise, the implementation of the Data Reference determines the meaning of no context. For Points or simply configured PI Point Data References, this means the snapshot value of the PI Point on the Data Server. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 

### Return type

[**TimedValue**](TimedValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The value at the specified time value. |  -  |
**409** | The data reference does not support the method, or the desired units of measure are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_register_stream_update**
> StreamUpdatesRegister stream_register_stream_update(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Register for stream updates

The supplied webId will register for stream updates. For a 201 or 204 response, the returned location header will contain the url for retrieving the next set of stream updates.

### Example


```python
import openapi_client
from openapi_client.models.stream_updates_register import StreamUpdatesRegister
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Register for stream updates
        api_response = api_instance.stream_register_stream_update(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of StreamApi->stream_register_stream_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_register_stream_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**StreamUpdatesRegister**](StreamUpdatesRegister.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful registration |  -  |
**400** | Invalid webId |  -  |
**409** | WebId represents a static attribute |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_retrieve_stream_update**
> StreamUpdatesRetrieve stream_retrieve_stream_update(marker, desired_units=desired_units, selected_fields=selected_fields, web_id_type=web_id_type)

Receive stream updates

The supplied marker will identify the set of stream updates to retrieve. For a 200 response, the returned location header will contain the url for retrieving the stream updates.

### Example


```python
import openapi_client
from openapi_client.models.stream_updates_retrieve import StreamUpdatesRetrieve
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    marker = 'marker_example' # str | Identifier of stream source and current position
    desired_units = 'desired_units_example' # str | The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute's default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Receive stream updates
        api_response = api_instance.stream_retrieve_stream_update(marker, desired_units=desired_units, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of StreamApi->stream_retrieve_stream_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_retrieve_stream_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marker** | **str**| Identifier of stream source and current position | 
 **desired_units** | **str**| The name or abbreviation of the desired units of measure for the returned value, as found in the UOM database associated with the attribute. If not specified for an attribute, the attribute&#39;s default unit of measure is used. If the underlying stream is a point, this value may not be specified, as points are not associated with a unit of measure. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**StreamUpdatesRetrieve**](StreamUpdatesRetrieve.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The stream updates have been successfully retrieved |  -  |
**404** | Cache not found |  -  |
**409** | Invalid marker supplied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_update_value**
> stream_update_value(web_id, value, buffer_option=buffer_option, update_option=update_option, web_id_type=web_id_type)

Updates a value for the specified stream.

### Example


```python
import openapi_client
from openapi_client.models.timed_value import TimedValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    value = openapi_client.TimedValue() # TimedValue | The value to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. This parameter is ignored if the attribute is a configuration item. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Updates a value for the specified stream.
        api_instance.stream_update_value(web_id, value, buffer_option=buffer_option, update_option=update_option, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling StreamApi->stream_update_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **value** | [**TimedValue**](TimedValue.md)| The value to add or update. | 
 **buffer_option** | **str**| The desired AFBufferOption. The default is &#39;BufferIfPossible&#39;. | [optional] 
 **update_option** | **str**| The desired AFUpdateOption. The default is &#39;Replace&#39;. This parameter is ignored if the attribute is a configuration item. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The value was accepted for a potential buffered update. The response&#39;s Location header is a link that can be used to examine the result. |  -  |
**204** | The update operation was successfully applied. The response&#39;s Location header is a link that can be used to examine the result. |  -  |
**400** | The request was malformed. |  -  |
**409** | The attribute or data reference does not support this operation, or the specified units are incompatible. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_update_values**
> ItemsSubstatus stream_update_values(web_id, values, buffer_option=buffer_option, update_option=update_option)

Updates multiple values for the specified stream.

### Example


```python
import openapi_client
from openapi_client.models.items_substatus import ItemsSubstatus
from openapi_client.models.timed_value import TimedValue
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StreamApi(api_client)
    web_id = 'web_id_example' # str | The ID of the stream.
    values = [openapi_client.TimedValue()] # List[TimedValue] | The values to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. (optional)

    try:
        # Updates multiple values for the specified stream.
        api_response = api_instance.stream_update_values(web_id, values, buffer_option=buffer_option, update_option=update_option)
        print("The response of StreamApi->stream_update_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamApi->stream_update_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the stream. | 
 **values** | [**List[TimedValue]**](TimedValue.md)| The values to add or update. | 
 **buffer_option** | **str**| The desired AFBufferOption. The default is &#39;BufferIfPossible&#39;. | [optional] 
 **update_option** | **str**| The desired AFUpdateOption. The default is &#39;Replace&#39;. | [optional] 

### Return type

[**ItemsSubstatus**](ItemsSubstatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | All updates executed successfully. |  -  |
**207** | The operation was a partial success. The response body contains substatuses and errors in the same order as the supplied values. |  -  |
**409** | The data reference does not support this operation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

