# openapi_client.CalculationApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calculation_get_at_intervals**](CalculationApi.md#calculation_get_at_intervals) | **GET** /calculation/intervals | Returns results of evaluating the expression over the time range from the start time to the end time at a defined interval.
[**calculation_get_at_recorded**](CalculationApi.md#calculation_get_at_recorded) | **GET** /calculation/recorded | Returns the result of evaluating the expression at each point in time over the time range from the start time to the end time where a recorded value exists for a member of the expression.
[**calculation_get_at_times**](CalculationApi.md#calculation_get_at_times) | **GET** /calculation/times | Returns the result of evaluating the expression at the specified timestamps.
[**calculation_get_summary**](CalculationApi.md#calculation_get_summary) | **GET** /calculation/summary | Returns the result of evaluating the expression over the time range from the start time to the end time. The time range is first divided into a number of summary intervals. Then the calculation is performed for the specified summaries over each interval.


# **calculation_get_at_intervals**
> TimedValues calculation_get_at_intervals(expression, end_time=end_time, sample_interval=sample_interval, selected_fields=selected_fields, start_time=start_time, web_id=web_id)

Returns results of evaluating the expression over the time range from the start time to the end time at a defined interval.

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
    api_instance = openapi_client.CalculationApi(api_client)
    expression = 'expression_example' # str | A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    sample_interval = 'sample_interval_example' # str | A time span specifies how often the filter expression is evaluated when computing the summary for an interval. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    web_id = 'web_id_example' # str | The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. (optional)

    try:
        # Returns results of evaluating the expression over the time range from the start time to the end time at a defined interval.
        api_response = api_instance.calculation_get_at_intervals(expression, end_time=end_time, sample_interval=sample_interval, selected_fields=selected_fields, start_time=start_time, web_id=web_id)
        print("The response of CalculationApi->calculation_get_at_intervals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalculationApi->calculation_get_at_intervals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expression** | **str**| A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation. | 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **sample_interval** | **str**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **web_id** | **str**| The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. | [optional] 

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
**200** | The calculated values. |  -  |
**409** | The targeted object does not support the calculation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calculation_get_at_recorded**
> TimedValues calculation_get_at_recorded(expression, end_time=end_time, selected_fields=selected_fields, start_time=start_time, web_id=web_id)

Returns the result of evaluating the expression at each point in time over the time range from the start time to the end time where a recorded value exists for a member of the expression.

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
    api_instance = openapi_client.CalculationApi(api_client)
    expression = 'expression_example' # str | A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    web_id = 'web_id_example' # str | The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. (optional)

    try:
        # Returns the result of evaluating the expression at each point in time over the time range from the start time to the end time where a recorded value exists for a member of the expression.
        api_response = api_instance.calculation_get_at_recorded(expression, end_time=end_time, selected_fields=selected_fields, start_time=start_time, web_id=web_id)
        print("The response of CalculationApi->calculation_get_at_recorded:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalculationApi->calculation_get_at_recorded: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expression** | **str**| A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation. | 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **web_id** | **str**| The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. | [optional] 

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
**200** | The calculated values. |  -  |
**409** | The targeted object does not support the calculation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calculation_get_at_times**
> TimedValues calculation_get_at_times(expression, time, selected_fields=selected_fields, sort_order=sort_order, web_id=web_id)

Returns the result of evaluating the expression at the specified timestamps.

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
    api_instance = openapi_client.CalculationApi(api_client)
    expression = 'expression_example' # str | A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
    time = ['time_example'] # List[str] | A list of timestamps at which to calculate the expression.
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    sort_order = 'sort_order_example' # str | The order that the returned collection is sorted. The default is 'Ascending'. (optional)
    web_id = 'web_id_example' # str | The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. (optional)

    try:
        # Returns the result of evaluating the expression at the specified timestamps.
        api_response = api_instance.calculation_get_at_times(expression, time, selected_fields=selected_fields, sort_order=sort_order, web_id=web_id)
        print("The response of CalculationApi->calculation_get_at_times:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalculationApi->calculation_get_at_times: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expression** | **str**| A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation. | 
 **time** | [**List[str]**](str.md)| A list of timestamps at which to calculate the expression. | 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **sort_order** | **str**| The order that the returned collection is sorted. The default is &#39;Ascending&#39;. | [optional] 
 **web_id** | **str**| The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. | [optional] 

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
**200** | The calculated values. |  -  |
**409** | The targeted object does not support the calculation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calculation_get_summary**
> ItemsSummaryValue calculation_get_summary(expression, calculation_basis=calculation_basis, end_time=end_time, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, web_id=web_id)

Returns the result of evaluating the expression over the time range from the start time to the end time. The time range is first divided into a number of summary intervals. Then the calculation is performed for the specified summaries over each interval.

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
    api_instance = openapi_client.CalculationApi(api_client)
    expression = 'expression_example' # str | A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation.
    calculation_basis = 'calculation_basis_example' # str | Specifies the method of evaluating the data over the time range. The default is 'TimeWeighted'. (optional)
    end_time = 'end_time_example' # str | An optional end time. The default is '*' for element attributes and points. For event frame attributes, the default is the event frame's end time, or '*' if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. (optional)
    sample_interval = 'sample_interval_example' # str | A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is 'Interval'. (optional)
    sample_type = 'sample_type_example' # str | A flag which specifies one or more summaries to compute for each interval over the time range. The default is 'ExpressionRecordedValues'. (optional)
    selected_fields = 'selected_fields_example' # str | List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. (optional)
    start_time = 'start_time_example' # str | An optional start time. The default is '*-1d' for element attributes and points. For event frame attributes, the default is the event frame's start time, or '*-1d' if that is not set. (optional)
    summary_duration = 'summary_duration_example' # str | The duration of each summary interval. (optional)
    summary_type = ['summary_type_example'] # List[str] | Specifies the kinds of summaries to produce over the range. The default is 'Total'. Multiple summary types may be specified by using multiple instances of summaryType. (optional)
    time_type = 'time_type_example' # str | Specifies how to calculate the timestamp for each interval. The default is 'Auto'. (optional)
    web_id = 'web_id_example' # str | The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. (optional)

    try:
        # Returns the result of evaluating the expression over the time range from the start time to the end time. The time range is first divided into a number of summary intervals. Then the calculation is performed for the specified summaries over each interval.
        api_response = api_instance.calculation_get_summary(expression, calculation_basis=calculation_basis, end_time=end_time, sample_interval=sample_interval, sample_type=sample_type, selected_fields=selected_fields, start_time=start_time, summary_duration=summary_duration, summary_type=summary_type, time_type=time_type, web_id=web_id)
        print("The response of CalculationApi->calculation_get_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CalculationApi->calculation_get_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **expression** | **str**| A string containing the expression to be evaluated. The syntax for the expression generally follows the Performance Equation syntax as described in the PI Server documentation, with the exception that expressions which target AF objects use attribute names in place of tag names in the equation. | 
 **calculation_basis** | **str**| Specifies the method of evaluating the data over the time range. The default is &#39;TimeWeighted&#39;. | [optional] 
 **end_time** | **str**| An optional end time. The default is &#39;*&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s end time, or &#39;*&#39; if that is not set. Note that if endTime is earlier than startTime, the resulting values will be in time-descending order. | [optional] 
 **sample_interval** | **str**| A time span specifies how often the filter expression is evaluated when computing the summary for an interval, if the sampleType is &#39;Interval&#39;. | [optional] 
 **sample_type** | **str**| A flag which specifies one or more summaries to compute for each interval over the time range. The default is &#39;ExpressionRecordedValues&#39;. | [optional] 
 **selected_fields** | **str**| List of fields to be returned in the response, separated by semicolons (;). If this parameter is not specified, all available fields will be returned. | [optional] 
 **start_time** | **str**| An optional start time. The default is &#39;*-1d&#39; for element attributes and points. For event frame attributes, the default is the event frame&#39;s start time, or &#39;*-1d&#39; if that is not set. | [optional] 
 **summary_duration** | **str**| The duration of each summary interval. | [optional] 
 **summary_type** | [**List[str]**](str.md)| Specifies the kinds of summaries to produce over the range. The default is &#39;Total&#39;. Multiple summary types may be specified by using multiple instances of summaryType. | [optional] 
 **time_type** | **str**| Specifies how to calculate the timestamp for each interval. The default is &#39;Auto&#39;. | [optional] 
 **web_id** | **str**| The ID of the target object of the expression. A target object can be a Data Server, a database, an element, an event frame or an attribute. References to attributes or points are based on the target. If this parameter is not provided, the target object is set to null. | [optional] 

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
**200** | The calculated values. |  -  |
**409** | The targeted object does not support the calculation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

