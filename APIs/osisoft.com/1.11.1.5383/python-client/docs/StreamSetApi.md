# openapi_client.StreamSetApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**stream_set_get_channel**](StreamSetApi.md#stream_set_get_channel) | **GET** /streamsets/{webId}/channel | Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.
[**stream_set_get_channel_ad_hoc**](StreamSetApi.md#stream_set_get_channel_ad_hoc) | **GET** /streamsets/channel | Opens a channel that will send messages about any value changes for the specified streams.
[**stream_set_get_end**](StreamSetApi.md#stream_set_get_end) | **GET** /streamsets/{webId}/end | Returns End of stream values of the attributes for an Element, Event Frame or Attribute
[**stream_set_get_end_ad_hoc**](StreamSetApi.md#stream_set_get_end_ad_hoc) | **GET** /streamsets/end | Returns End Of Stream values for attributes of the specified streams
[**stream_set_get_interpolated**](StreamSetApi.md#stream_set_get_interpolated) | **GET** /streamsets/{webId}/interpolated | Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.
[**stream_set_get_interpolated_ad_hoc**](StreamSetApi.md#stream_set_get_interpolated_ad_hoc) | **GET** /streamsets/interpolated | Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.
[**stream_set_get_interpolated_at_times**](StreamSetApi.md#stream_set_get_interpolated_at_times) | **GET** /streamsets/{webId}/interpolatedattimes | Returns interpolated values of attributes for an element, event frame or attribute at the specified times.
[**stream_set_get_interpolated_at_times_ad_hoc**](StreamSetApi.md#stream_set_get_interpolated_at_times_ad_hoc) | **GET** /streamsets/interpolatedattimes | Returns interpolated values of the specified streams at the specified times.
[**stream_set_get_joined**](StreamSetApi.md#stream_set_get_joined) | **GET** /streamsets/joined | Returns the base stream&#39;s recorded values and subordinate streams&#39; interpolated values at times matching the recorded values&#39; timestamps.
[**stream_set_get_plot**](StreamSetApi.md#stream_set_get_plot) | **GET** /streamsets/{webId}/plot | Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**stream_set_get_plot_ad_hoc**](StreamSetApi.md#stream_set_get_plot_ad_hoc) | **GET** /streamsets/plot | Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
[**stream_set_get_recorded**](StreamSetApi.md#stream_set_get_recorded) | **GET** /streamsets/{webId}/recorded | Returns recorded values of the attributes for an element, event frame, or attribute.
[**stream_set_get_recorded_ad_hoc**](StreamSetApi.md#stream_set_get_recorded_ad_hoc) | **GET** /streamsets/recorded | Returns recorded values of the specified streams.
[**stream_set_get_recorded_at_time**](StreamSetApi.md#stream_set_get_recorded_at_time) | **GET** /streamsets/{webId}/recordedattime | Returns recorded values of the attributes for an element, event frame, or attribute.
[**stream_set_get_recorded_at_time_ad_hoc**](StreamSetApi.md#stream_set_get_recorded_at_time_ad_hoc) | **GET** /streamsets/recordedattime | Returns recorded values based on the passed time and retrieval mode.
[**stream_set_get_recorded_at_times**](StreamSetApi.md#stream_set_get_recorded_at_times) | **GET** /streamsets/{webId}/recordedattimes | Returns recorded values of attributes for an element, event frame or attribute at the specified times.
[**stream_set_get_recorded_at_times_ad_hoc**](StreamSetApi.md#stream_set_get_recorded_at_times_ad_hoc) | **GET** /streamsets/recordedattimes | Returns recorded values of the specified streams at the specified times.
[**stream_set_get_summaries**](StreamSetApi.md#stream_set_get_summaries) | **GET** /streamsets/{webId}/summary | Returns summary values of the attributes for an element, event frame or attribute.
[**stream_set_get_summaries_ad_hoc**](StreamSetApi.md#stream_set_get_summaries_ad_hoc) | **GET** /streamsets/summary | Returns summary values of the specified streams.
[**stream_set_get_values**](StreamSetApi.md#stream_set_get_values) | **GET** /streamsets/{webId}/value | Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.
[**stream_set_get_values_ad_hoc**](StreamSetApi.md#stream_set_get_values_ad_hoc) | **GET** /streamsets/value | Returns values of the specified streams.
[**stream_set_register_stream_set_updates**](StreamSetApi.md#stream_set_register_stream_set_updates) | **POST** /streamsets/updates | Register for stream updates
[**stream_set_retrieve_stream_set_updates**](StreamSetApi.md#stream_set_retrieve_stream_set_updates) | **GET** /streamsets/updates | Receive stream updates
[**stream_set_update_value**](StreamSetApi.md#stream_set_update_value) | **POST** /streamsets/{webId}/value | Updates a single value for the specified streams.
[**stream_set_update_value_ad_hoc**](StreamSetApi.md#stream_set_update_value_ad_hoc) | **POST** /streamsets/value | Updates a single value for the specified streams.
[**stream_set_update_values**](StreamSetApi.md#stream_set_update_values) | **POST** /streamsets/{webId}/recorded | Updates multiple values for the specified streams.
[**stream_set_update_values_ad_hoc**](StreamSetApi.md#stream_set_update_values_ad_hoc) | **POST** /streamsets/recorded | Updates multiple values for the specified streams.


# **stream_set_get_channel**
> stream_set_get_channel(web_id, category_name=category_name, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, show_excluded=show_excluded, show_hidden=show_hidden, template_name=template_name, web_id_type=web_id_type)

Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.

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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    heartbeat_rate = 56 # int | Specifies the maximum number of consecutive empty messages that can be elapsed with no new data updates from the PI System, after which the client receives an empty payload. It helps to check if the connection is still alive. Zero/negative values correspond to no heartbeat, and the default value is no heartbeat. (optional)
    include_initial_values = True # bool | Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Opens a channel that will send messages about any value changes for the attributes of an Element, Event Frame, or Attribute.
        api_instance.stream_set_get_channel(web_id, category_name=category_name, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, show_excluded=show_excluded, show_hidden=show_hidden, template_name=template_name, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_channel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **heartbeat_rate** | **int**| Specifies the maximum number of consecutive empty messages that can be elapsed with no new data updates from the PI System, after which the client receives an empty payload. It helps to check if the connection is still alive. Zero/negative values correspond to no heartbeat, and the default value is no heartbeat. | [optional] 
 **include_initial_values** | **bool**| Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is &#39;false&#39;. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
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
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_channel_ad_hoc**
> stream_set_get_channel_ad_hoc(web_id, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, web_id_type=web_id_type)

Opens a channel that will send messages about any value changes for the specified streams.

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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    heartbeat_rate = 56 # int | Specifies the maximum number of consecutive empty messages that can be elapsed with no new data updates from the PI System, after which the client receives an empty payload. It helps to check if the connection is still alive. Zero/negative values correspond to no heartbeat, and the default value is no heartbeat. (optional)
    include_initial_values = True # bool | Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is 'false'. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Opens a channel that will send messages about any value changes for the specified streams.
        api_instance.stream_set_get_channel_ad_hoc(web_id, heartbeat_rate=heartbeat_rate, include_initial_values=include_initial_values, web_id_type=web_id_type)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_channel_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **heartbeat_rate** | **int**| Specifies the maximum number of consecutive empty messages that can be elapsed with no new data updates from the PI System, after which the client receives an empty payload. It helps to check if the connection is still alive. Zero/negative values correspond to no heartbeat, and the default value is no heartbeat. | [optional] 
 **include_initial_values** | **bool**| Specified if the channel should send a message with the current values of all the streams after the connection is opened. The default is &#39;false&#39;. | [optional] 
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

# **stream_set_get_end**
> ItemsStreamValue stream_set_get_end(web_id, category_name=category_name, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, template_name=template_name, web_id_type=web_id_type)

Returns End of stream values of the attributes for an Element, Event Frame or Attribute

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_value import ItemsStreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns End of stream values of the attributes for an Element, Event Frame or Attribute
        api_response = api_instance.stream_set_get_end(web_id, category_name=category_name, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, template_name=template_name, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_end:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_end: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValue**](ItemsStreamValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_end_ad_hoc**
> ItemsStreamValues stream_set_get_end_ad_hoc(web_id, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)

Returns End Of Stream values for attributes of the specified streams

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns End Of Stream values for attributes of the specified streams
        api_response = api_instance.stream_set_get_end_ad_hoc(web_id, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_end_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_end_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | End of stream values of the streams that meet the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_interpolated**
> ItemsStreamValues stream_set_get_interpolated(web_id, category_name=category_name, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    interval = 'interval_example' # str | The sampling interval, in AFTimeSpan format. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    sync_time = 'sync_time_example' # str | An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. (optional)
    sync_time_boundary_type = 'sync_time_boundary_type_example' # str | An optional string specifying the boundary type to use when applying a syncTime. The allowed values are 'Inside' and 'Outside'. The default is 'Inside'. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns interpolated values of attributes for an element, event frame or attribute over the specified time range at the specified sampling interval.
        api_response = api_instance.stream_set_get_interpolated(web_id, category_name=category_name, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_interpolated:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_interpolated: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **interval** | **str**| The sampling interval, in AFTimeSpan format. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **sync_time** | **str**| An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. | [optional] 
 **sync_time_boundary_type** | **str**| An optional string specifying the boundary type to use when applying a syncTime. The allowed values are &#39;Inside&#39; and &#39;Outside&#39;. The default is &#39;Inside&#39;. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Interpolated values of the streams that meet the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_interpolated_ad_hoc**
> ItemsStreamValues stream_set_get_interpolated_ad_hoc(web_id, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, time_zone=time_zone, web_id_type=web_id_type)

Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    end_time = 'end_time_example' # str | An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    interval = 'interval_example' # str | The sampling interval, in AFTimeSpan format. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d'. (optional)
    sync_time = 'sync_time_example' # str | An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. (optional)
    sync_time_boundary_type = 'sync_time_boundary_type_example' # str | An optional string specifying the boundary type to use when applying a syncTime. The allowed values are 'Inside' and 'Outside'. The default is 'Inside'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns interpolated values of the specified streams over the specified time range at the specified sampling interval.
        api_response = api_instance.stream_set_get_interpolated_ad_hoc(web_id, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, interval=interval, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, sync_time=sync_time, sync_time_boundary_type=sync_time_boundary_type, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_interpolated_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_interpolated_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39;. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **interval** | **str**| The sampling interval, in AFTimeSpan format. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39;. | [optional] 
 **sync_time** | **str**| An optional start time anchor, in AFTime format. When specified, interpolated data retrieval will use the sync time as the origin for calculating the interval times. | [optional] 
 **sync_time_boundary_type** | **str**| An optional string specifying the boundary type to use when applying a syncTime. The allowed values are &#39;Inside&#39; and &#39;Outside&#39;. The default is &#39;Inside&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Interpolated values of the streams that meet the specified conditions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_interpolated_at_times**
> ItemsStreamValues stream_set_get_interpolated_at_times(web_id, time, category_name=category_name, filter_expression=filter_expression, include_filtered_values=include_filtered_values, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_order=sort_order, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns interpolated values of attributes for an element, event frame or attribute at the specified times.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    time = ['time_example'] # List[str] | The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns interpolated values of attributes for an element, event frame or attribute at the specified times.
        api_response = api_instance.stream_set_get_interpolated_at_times(web_id, time, category_name=category_name, filter_expression=filter_expression, include_filtered_values=include_filtered_values, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_order=sort_order, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_interpolated_at_times:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_interpolated_at_times: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Interpolated values of the streams that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**502** | The request was cancelled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_interpolated_at_times_ad_hoc**
> ItemsStreamValues stream_set_get_interpolated_at_times_ad_hoc(time, web_id, filter_expression=filter_expression, include_filtered_values=include_filtered_values, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone, web_id_type=web_id_type)

Returns interpolated values of the specified streams at the specified times.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    time = ['time_example'] # List[str] | The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter.
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns interpolated values of the specified streams at the specified times.
        api_response = api_instance.stream_set_get_interpolated_at_times_ad_hoc(time, web_id, filter_expression=filter_expression, include_filtered_values=include_filtered_values, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_interpolated_at_times_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_interpolated_at_times_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve a interpolated value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. If the attribute does not support filtering, the filter will be ignored. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Interpolated values of the streams that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**502** | The request was cancelled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_joined**
> ItemsStreamValues stream_set_get_joined(base_web_id, subordinate_web_id, boundary_type=boundary_type, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)

Returns the base stream's recorded values and subordinate streams' interpolated values at times matching the recorded values' timestamps.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream. The first stream in the response is always the X-Axis.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    base_web_id = 'base_web_id_example' # str | The ID of the base stream which is used for retrieving the recorded values.
    subordinate_web_id = ['subordinate_web_id_example'] # List[str] | The ID of a stream whose values will be joined on the times with the values of the base stream. Multiple streams may be specified with multiple instances of the parameter.
    boundary_type = 'boundary_type_example' # str | An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    max_count = 56 # int | The maximum number of values to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either place, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns the base stream's recorded values and subordinate streams' interpolated values at times matching the recorded values' timestamps.
        api_response = api_instance.stream_set_get_joined(base_web_id, subordinate_web_id, boundary_type=boundary_type, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_joined:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_joined: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **base_web_id** | **str**| The ID of the base stream which is used for retrieving the recorded values. | 
 **subordinate_web_id** | [**List[str]**](str.md)| The ID of a stream whose values will be joined on the times with the values of the base stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **boundary_type** | **str**| An optional value that determines how the times and values of the returned end points are determined. The default is &#39;Inside&#39;. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **max_count** | **int**| The maximum number of values to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either place, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_plot**
> ItemsStreamValues stream_set_get_plot(web_id, category_name=category_name, end_time=end_time, intervals=intervals, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    intervals = 56 # int | The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns values of attributes for an element, event frame or attribute over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
        api_response = api_instance.stream_set_get_plot(web_id, category_name=category_name, end_time=end_time, intervals=intervals, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_plot:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_plot: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **intervals** | **int**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is &#39;24&#39;. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plot values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_plot_ad_hoc**
> ItemsStreamValues stream_set_get_plot_ad_hoc(web_id, end_time=end_time, intervals=intervals, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)

Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).

For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    end_time = 'end_time_example' # str | An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    intervals = 56 # int | The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is '24'. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns values of attributes for the specified streams over the specified time range suitable for plotting over the number of intervals (typically represents pixels).
        api_response = api_instance.stream_set_get_plot_ad_hoc(web_id, end_time=end_time, intervals=intervals, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_plot_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_plot_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39;. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **intervals** | **int**| The number of intervals to plot over. Typically, this would be the number of horizontal pixels in the trend. The default is &#39;24&#39;. For each interval, the data available is examined and significant values are returned. Each interval can produce up to 5 values if they are unique, the first value in the interval, the last value, the highest value, the lowest value and at most one exceptional point (bad status or digital state). | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Plot values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded**
> ItemsStreamValues stream_set_get_recorded(web_id, boundary_type=boundary_type, category_name=category_name, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values of the attributes for an element, event frame, or attribute.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    boundary_type = 'boundary_type_example' # str | An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'. (optional)
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    max_count = 56 # int | The maximum number of values to be returned. The default is 1000. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values of the attributes for an element, event frame, or attribute.
        api_response = api_instance.stream_set_get_recorded(web_id, boundary_type=boundary_type, category_name=category_name, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, start_time=start_time, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **boundary_type** | **str**| An optional value that determines how the times and values of the returned end points are determined. The default is &#39;Inside&#39;. | [optional] 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **max_count** | **int**| The maximum number of values to be returned. The default is 1000. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded_ad_hoc**
> ItemsStreamValues stream_set_get_recorded_ad_hoc(web_id, boundary_type=boundary_type, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values of the specified streams.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    boundary_type = 'boundary_type_example' # str | An optional value that determines how the times and values of the returned end points are determined. The default is 'Inside'. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | An optional string containing a filter expression. Expression variables are relative to the data point. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    include_filtered_values = True # bool | Specify 'true' to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a 'Filtered' enumeration value with bad status. Repeated consecutive failures are omitted. (optional)
    max_count = 56 # int | The maximum number of values to be returned. The default is 1000. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values of the specified streams.
        api_response = api_instance.stream_set_get_recorded_ad_hoc(web_id, boundary_type=boundary_type, end_time=end_time, filter_expression=filter_expression, include_filtered_values=include_filtered_values, max_count=max_count, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, start_time=start_time, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **boundary_type** | **str**| An optional value that determines how the times and values of the returned end points are determined. The default is &#39;Inside&#39;. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39;. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| An optional string containing a filter expression. Expression variables are relative to the data point. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **include_filtered_values** | **bool**| Specify &#39;true&#39; to indicate that values which fail the filter criteria are present in the returned data at the times where they occurred with a value set to a &#39;Filtered&#39; enumeration value with bad status. Repeated consecutive failures are omitted. | [optional] 
 **max_count** | **int**| The maximum number of values to be returned. The default is 1000. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded_at_time**
> ItemsStreamValue stream_set_get_recorded_at_time(web_id, time, category_name=category_name, name_filter=name_filter, retrieval_mode=retrieval_mode, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values of the attributes for an element, event frame, or attribute.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_value import ItemsStreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    time = 'time_example' # str | The timestamp at which the values are desired.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values of the attributes for an element, event frame, or attribute.
        api_response = api_instance.stream_set_get_recorded_at_time(web_id, time, category_name=category_name, name_filter=name_filter, retrieval_mode=retrieval_mode, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded_at_time:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded_at_time: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **time** | **str**| The timestamp at which the values are desired. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **retrieval_mode** | **str**| An optional value that determines the values to return when values don&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValue**](ItemsStreamValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded_at_time_ad_hoc**
> ItemsStreamValue stream_set_get_recorded_at_time_ad_hoc(time, web_id, retrieval_mode=retrieval_mode, selected_fields=selected_fields, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values based on the passed time and retrieval mode.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_value import ItemsStreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    time = 'time_example' # str | The timestamp at which the values are desired.
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values based on the passed time and retrieval mode.
        api_response = api_instance.stream_set_get_recorded_at_time_ad_hoc(time, web_id, retrieval_mode=retrieval_mode, selected_fields=selected_fields, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded_at_time_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded_at_time_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time** | **str**| The timestamp at which the values are desired. | 
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **retrieval_mode** | **str**| An optional value that determines the values to return when values don&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValue**](ItemsStreamValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded_at_times**
> ItemsStreamValues stream_set_get_recorded_at_times(web_id, time, category_name=category_name, name_filter=name_filter, retrieval_mode=retrieval_mode, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_order=sort_order, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values of attributes for an element, event frame or attribute at the specified times.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    time = ['time_example'] # List[str] | The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values of attributes for an element, event frame or attribute at the specified times.
        api_response = api_instance.stream_set_get_recorded_at_times(web_id, time, category_name=category_name, name_filter=name_filter, retrieval_mode=retrieval_mode, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_order=sort_order, template_name=template_name, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded_at_times:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded_at_times: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **retrieval_mode** | **str**| An optional value that determines the values to return when values don&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**502** | The request was cancelled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_recorded_at_times_ad_hoc**
> ItemsStreamValues stream_set_get_recorded_at_times_ad_hoc(time, web_id, retrieval_mode=retrieval_mode, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone, web_id_type=web_id_type)

Returns recorded values of the specified streams at the specified times.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_values import ItemsStreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    time = ['time_example'] # List[str] | The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter.
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    retrieval_mode = 'retrieval_mode_example' # str | An optional value that determines the values to return when values don't exist at the exact time specified. The default is 'Auto'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns recorded values of the specified streams at the specified times.
        api_response = api_instance.stream_set_get_recorded_at_times_ad_hoc(time, web_id, retrieval_mode=retrieval_mode, selected_fields=selected_fields, sort_order=sort_order, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_recorded_at_times_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_recorded_at_times_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time** | [**List[str]**](str.md)| The timestamp at which to retrieve a recorded value. Multiple timestamps may be specified with multiple instances of the parameter. | 
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **retrieval_mode** | **str**| An optional value that determines the values to return when values don&#39;t exist at the exact time specified. The default is &#39;Auto&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValues**](ItemsStreamValues.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recorded values of the streams that meet the specified conditions. |  -  |
**400** | The request was malformed. |  -  |
**502** | The request was cancelled. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_summaries**
> ItemsStreamSummaries stream_set_get_summaries(web_id, calculation_basis=calculation_basis, category_name=category_name, end_time=end_time, filter_expression=filter_expression, name_filter=name_filter, sample_interval=sample_interval, sample_type=sample_type, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, template_name=template_name, time_type=time_type, time_zone=time_zone, web_id_type=web_id_type)

Returns summary values of the attributes for an element, event frame or attribute.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_summaries import ItemsStreamSummaries
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes.
    calculation_basis = 'calculation_basis_example' # str | Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'. (optional)
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    sample_interval = 'sample_interval_example' # str | A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'. (optional)
    sample_type = 'sample_type_example' # str | A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    summary_duration = 'summary_duration_example' # str | The duration of each summary interval. (optional)
    summary_type = ['summary_type_example'] # List[str] | Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType. (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time_type = 'time_type_example' # str | Specifies how to calculate the timestamp for each interval. The default is 'Auto'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns summary values of the attributes for an element, event frame or attribute.
        api_response = api_instance.stream_set_get_summaries(web_id, calculation_basis=calculation_basis, category_name=category_name, end_time=end_time, filter_expression=filter_expression, name_filter=name_filter, sample_interval=sample_interval, sample_type=sample_type, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, template_name=template_name, time_type=time_type, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_summaries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_summaries: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an element, event frame or attribute, which is the base element or parent of all the stream attributes. | 
 **calculation_basis** | **str**| Specifies the method of evaluating the data over the time range. The default is &#39;TimeWeighted&#39;. | [optional] 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| A string containing a filter expression. Expression variables are relative to the attribute. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **sample_interval** | **str**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is &#39;Interval&#39;. | [optional] 
 **sample_type** | **str**| A flag which specifies one or more summaries to compute for each interval over the time range. The default is &#39;ExpressionRecordedValues&#39;. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **summary_duration** | **str**| The duration of each summary interval. | [optional] 
 **summary_type** | [**List[str]**](str.md)| Specifies the kinds of summaries to produce over the range. The default is &#39;Total&#39;. Multiple summary types may be specified by using multiple instances of summaryType. | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time_type** | **str**| Specifies how to calculate the timestamp for each interval. The default is &#39;Auto&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamSummaries**](ItemsStreamSummaries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_summaries_ad_hoc**
> ItemsStreamSummaries stream_set_get_summaries_ad_hoc(web_id, calculation_basis=calculation_basis, end_time=end_time, filter_expression=filter_expression, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, time_zone=time_zone, web_id_type=web_id_type)

Returns summary values of the specified streams.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_summaries import ItemsStreamSummaries
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    calculation_basis = 'calculation_basis_example' # str | Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*'. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    filter_expression = 'filter_expression_example' # str | A string containing a filter expression. Expression variables are relative to the attribute. Use '.' to reference the containing attribute. The default is no filtering. (optional)
    sample_interval = 'sample_interval_example' # str | A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'. (optional)
    sample_type = 'sample_type_example' # str | A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d'. (optional)
    summary_duration = 'summary_duration_example' # str | The duration of each summary interval. (optional)
    summary_type = ['summary_type_example'] # List[str] | Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType. (optional)
    time_type = 'time_type_example' # str | Specifies how to calculate the timestamp for each interval. The default is 'Auto'. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns summary values of the specified streams.
        api_response = api_instance.stream_set_get_summaries_ad_hoc(web_id, calculation_basis=calculation_basis, end_time=end_time, filter_expression=filter_expression, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_summaries_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_summaries_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **calculation_basis** | **str**| Specifies the method of evaluating the data over the time range. The default is &#39;TimeWeighted&#39;. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39;. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **filter_expression** | **str**| A string containing a filter expression. Expression variables are relative to the attribute. Use &#39;.&#39; to reference the containing attribute. The default is no filtering. | [optional] 
 **sample_interval** | **str**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is &#39;Interval&#39;. | [optional] 
 **sample_type** | **str**| A flag which specifies one or more summaries to compute for each interval over the time range. The default is &#39;ExpressionRecordedValues&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39;. | [optional] 
 **summary_duration** | **str**| The duration of each summary interval. | [optional] 
 **summary_type** | [**List[str]**](str.md)| Specifies the kinds of summaries to produce over the range. The default is &#39;Total&#39;. Multiple summary types may be specified by using multiple instances of summaryType. | [optional] 
 **time_type** | **str**| Specifies how to calculate the timestamp for each interval. The default is &#39;Auto&#39;. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamSummaries**](ItemsStreamSummaries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_values**
> ItemsStreamValue stream_set_get_values(web_id, category_name=category_name, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, template_name=template_name, time=time, time_zone=time_zone, web_id_type=web_id_type)

Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_value import ItemsStreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes.
    category_name = 'category_name_example' # str | Specify that included attributes must have this category. The default is no category filter. (optional)
    name_filter = 'name_filter_example' # str | The name query string used for filtering attributes. The default is no filter. (optional)
    search_full_hierarchy = True # bool | Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is 'false'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    show_excluded = True # bool | Specified if the search should include attributes with the Excluded property set. The default is 'false'. (optional)
    show_hidden = True # bool | Specified if the search should include attributes with the Hidden property set. The default is 'false'. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    template_name = 'template_name_example' # str | Specify that included attributes must be members of this template. The default is no template filter. (optional)
    time = 'time_example' # str | An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns values of the attributes for an Element, Event Frame or Attribute at the specified time.
        api_response = api_instance.stream_set_get_values(web_id, category_name=category_name, name_filter=name_filter, search_full_hierarchy=search_full_hierarchy, selected_fields=selected_fields, show_excluded=show_excluded, show_hidden=show_hidden, sort_field=sort_field, sort_order=sort_order, template_name=template_name, time=time, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of an Element, Event Frame or Attribute, which is the base element or parent of all the stream attributes. | 
 **category_name** | **str**| Specify that included attributes must have this category. The default is no category filter. | [optional] 
 **name_filter** | **str**| The name query string used for filtering attributes. The default is no filter. | [optional] 
 **search_full_hierarchy** | **bool**| Specifies if the search should include attributes nested further than the immediate attributes of the searchRoot. The default is &#39;false&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **show_excluded** | **bool**| Specified if the search should include attributes with the Excluded property set. The default is &#39;false&#39;. | [optional] 
 **show_hidden** | **bool**| Specified if the search should include attributes with the Hidden property set. The default is &#39;false&#39;. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **template_name** | **str**| Specify that included attributes must be members of this template. The default is no template filter. | [optional] 
 **time** | **str**| An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValue**](ItemsStreamValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_get_values_ad_hoc**
> ItemsStreamValue stream_set_get_values_ad_hoc(web_id, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, time=time, time_zone=time_zone, web_id_type=web_id_type)

Returns values of the specified streams.

Any time series value in the response that contains an 'Errors' property indicates PI Web API encountered a handled error during the transfer of the response stream.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_value import ItemsStreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_field = 'sort_field_example' # str | The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. 'Name' is the only supported field by which to sort. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending' (optional)
    time = 'time_example' # str | An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used. (optional)
    time_zone = 'time_zone_example' # str | The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Returns values of the specified streams.
        api_response = api_instance.stream_set_get_values_ad_hoc(web_id, selected_fields=selected_fields, sort_field=sort_field, sort_order=sort_order, time=time, time_zone=time_zone, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_get_values_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_get_values_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_field** | **str**| The field or property of the object used to sort the returned collection. For better performance, by default no sorting is applied. &#39;Name&#39; is the only supported field by which to sort. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39; | [optional] 
 **time** | **str**| An AF time string, which is used as the time context to get stream values if it is provided. By default, it is not specified, and the default time context of the AF object will be used. | [optional] 
 **time_zone** | **str**| The time zone in which the time string will be interpreted. This parameter will be ignored if a time zone is specified in the time string. If no time zone is specified in either places, the PI Web API server time zone will be used. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamValue**](ItemsStreamValue.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary values of the streams that meet the specified conditions. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_register_stream_set_updates**
> ItemsStreamUpdatesRegister stream_set_register_stream_set_updates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)

Register for stream updates

The supplied webIds will register for stream updates. For a 200 response, the returned location header will contain the url for retrieving the next set of stream updates.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_updates_register import ItemsStreamUpdatesRegister
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = ['web_id_example'] # List[str] | The ID of a stream. Multiple streams may be specified with multiple instances of the parameter.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Register for stream updates
        api_response = api_instance.stream_set_register_stream_set_updates(web_id, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_register_stream_set_updates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_register_stream_set_updates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | [**List[str]**](str.md)| The ID of a stream. Multiple streams may be specified with multiple instances of the parameter. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamUpdatesRegister**](ItemsStreamUpdatesRegister.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Registration |  -  |
**400** | Any webID supplied is invalid |  -  |
**409** | Any webID supplied is a static attribute |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_retrieve_stream_set_updates**
> ItemsStreamUpdatesRetrieve stream_set_retrieve_stream_set_updates(marker, selected_fields=selected_fields, web_id_type=web_id_type)

Receive stream updates

The supplied markers will identify the set of stream updates to retrieve. For a 200 response, the returned location header will contain the url for retrieving the stream updates.

### Example


```python
import openapi_client
from openapi_client.models.items_stream_updates_retrieve import ItemsStreamUpdatesRetrieve
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
    api_instance = openapi_client.StreamSetApi(api_client)
    marker = ['marker_example'] # List[str] | Identifier of stream source and current position. Multiple markers may be specified with multiple instances of the parameter.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    web_id_type = 'web_id_type_example' # str | Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \"WebIDType\". (optional)

    try:
        # Receive stream updates
        api_response = api_instance.stream_set_retrieve_stream_set_updates(marker, selected_fields=selected_fields, web_id_type=web_id_type)
        print("The response of StreamSetApi->stream_set_retrieve_stream_set_updates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_retrieve_stream_set_updates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marker** | [**List[str]**](str.md)| Identifier of stream source and current position. Multiple markers may be specified with multiple instances of the parameter. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **web_id_type** | **str**| Optional parameter. Used to specify the type of WebID. Useful for URL brevity and other special cases. Default is the value of the configuration item \&quot;WebIDType\&quot;. | [optional] 

### Return type

[**ItemsStreamUpdatesRetrieve**](ItemsStreamUpdatesRetrieve.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The stream updates have been successfully retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_update_value**
> ItemsSubstatus stream_set_update_value(web_id, values, buffer_option=buffer_option, update_option=update_option)

Updates a single value for the specified streams.

### Example


```python
import openapi_client
from openapi_client.models.items_substatus import ItemsSubstatus
from openapi_client.models.stream_value import StreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.
    values = [openapi_client.StreamValue()] # List[StreamValue] | The values to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. (optional)

    try:
        # Updates a single value for the specified streams.
        api_response = api_instance.stream_set_update_value(web_id, values, buffer_option=buffer_option, update_option=update_option)
        print("The response of StreamSetApi->stream_set_update_value:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_update_value: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object. | 
 **values** | [**List[StreamValue]**](StreamValue.md)| The values to add or update. | 
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
**200** | All updates executed successfully. |  -  |
**207** | The operation was a partial success. The response body contains substatuses and errors in the same order as the supplied values. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_update_value_ad_hoc**
> ItemsSubstatus stream_set_update_value_ad_hoc(values, buffer_option=buffer_option, update_option=update_option)

Updates a single value for the specified streams.

### Example


```python
import openapi_client
from openapi_client.models.items_substatus import ItemsSubstatus
from openapi_client.models.stream_value import StreamValue
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
    api_instance = openapi_client.StreamSetApi(api_client)
    values = [openapi_client.StreamValue()] # List[StreamValue] | The values to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. (optional)

    try:
        # Updates a single value for the specified streams.
        api_response = api_instance.stream_set_update_value_ad_hoc(values, buffer_option=buffer_option, update_option=update_option)
        print("The response of StreamSetApi->stream_set_update_value_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_update_value_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **values** | [**List[StreamValue]**](StreamValue.md)| The values to add or update. | 
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
**200** | All updates executed successfully. |  -  |
**207** | The operation was a partial success. The response body contains substatuses and errors in the same order as the supplied values. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_update_values**
> ItemsItemsSubstatus stream_set_update_values(web_id, values, buffer_option=buffer_option, update_option=update_option)

Updates multiple values for the specified streams.

### Example


```python
import openapi_client
from openapi_client.models.items_items_substatus import ItemsItemsSubstatus
from openapi_client.models.stream_values import StreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    web_id = 'web_id_example' # str | The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object.
    values = [openapi_client.StreamValues()] # List[StreamValues] | The values to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. (optional)

    try:
        # Updates multiple values for the specified streams.
        api_response = api_instance.stream_set_update_values(web_id, values, buffer_option=buffer_option, update_option=update_option)
        print("The response of StreamSetApi->stream_set_update_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_update_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **web_id** | **str**| The ID of the parent element, event frame, or attribute. Attributes specified in the body must be descendants of the specified object. | 
 **values** | [**List[StreamValues]**](StreamValues.md)| The values to add or update. | 
 **buffer_option** | **str**| The desired AFBufferOption. The default is &#39;BufferIfPossible&#39;. | [optional] 
 **update_option** | **str**| The desired AFUpdateOption. The default is &#39;Replace&#39;. | [optional] 

### Return type

[**ItemsItemsSubstatus**](ItemsItemsSubstatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All updates executed successfully. |  -  |
**207** | The operation was a partial success. The response body contains substatuses and errors in the same order as the supplied values. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stream_set_update_values_ad_hoc**
> ItemsItemsSubstatus stream_set_update_values_ad_hoc(values, buffer_option=buffer_option, update_option=update_option)

Updates multiple values for the specified streams.

### Example


```python
import openapi_client
from openapi_client.models.items_items_substatus import ItemsItemsSubstatus
from openapi_client.models.stream_values import StreamValues
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
    api_instance = openapi_client.StreamSetApi(api_client)
    values = [openapi_client.StreamValues()] # List[StreamValues] | The values to add or update.
    buffer_option = 'buffer_option_example' # str | The desired AFBufferOption. The default is 'BufferIfPossible'. (optional)
    update_option = 'update_option_example' # str | The desired AFUpdateOption. The default is 'Replace'. (optional)

    try:
        # Updates multiple values for the specified streams.
        api_response = api_instance.stream_set_update_values_ad_hoc(values, buffer_option=buffer_option, update_option=update_option)
        print("The response of StreamSetApi->stream_set_update_values_ad_hoc:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StreamSetApi->stream_set_update_values_ad_hoc: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **values** | [**List[StreamValues]**](StreamValues.md)| The values to add or update. | 
 **buffer_option** | **str**| The desired AFBufferOption. The default is &#39;BufferIfPossible&#39;. | [optional] 
 **update_option** | **str**| The desired AFUpdateOption. The default is &#39;Replace&#39;. | [optional] 

### Return type

[**ItemsItemsSubstatus**](ItemsItemsSubstatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All updates executed successfully. |  -  |
**207** | The operation was a partial success. The response body contains substatuses and errors in the same order as the supplied values. |  -  |
**409** | Unsupported operation on the given AF object. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

