# openapi_client.InsightDrivenPlanningForecastOptimizationApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**forecast_ai_history_and_forecast_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_ai_history_and_forecast_post) | **POST** /forecast/AI/history-and-forecast | History and forecast utilizing advanced machine learning models
[**forecast_ai_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_ai_post) | **POST** /forecast/AI | Forecast utilizing advanced machine learning models
[**forecast_file_to_forecast_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_file_to_forecast_post) | **POST** /forecast/file-to-forecast | Forecast from file
[**forecast_forecast_bottom_up_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_forecast_bottom_up_post) | **POST** /forecast/forecast-bottom-up | Bottom up forecasting
[**forecast_forecast_top_down_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_forecast_top_down_post) | **POST** /forecast/forecast-top-down | Top down forecasting
[**forecast_full_detail_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_full_detail_post) | **POST** /forecast/full-detail | Full forecast result details, including error, trend seasonality and outlier
[**forecast_history_and_forecast_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_history_and_forecast_post) | **POST** /forecast/history-and-forecast | History and forecast for fast timeseries view
[**forecast_optimal_parameter_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_optimal_parameter_post) | **POST** /forecast/optimal-parameter | Get optimal parameter per method
[**forecast_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_post) | **POST** /forecast | Forecasts only, for faster results
[**forecast_rerun_post**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_rerun_post) | **POST** /forecast/rerun | Rerun previously uploaded planning level
[**forecast_result_job_id_get**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_result_job_id_get) | **GET** /forecast/result/{jobId} | Forecast result
[**forecast_status_job_id_get**](InsightDrivenPlanningForecastOptimizationApi.md#forecast_status_job_id_get) | **GET** /forecast/status/{jobId} | Forecast status
[**outlier_post**](InsightDrivenPlanningForecastOptimizationApi.md#outlier_post) | **POST** /outlier | Get outlier


# **forecast_ai_history_and_forecast_post**
> JobResponse forecast_ai_history_and_forecast_post(token=token, ai_planning_level_request=ai_planning_level_request)

History and forecast utilizing advanced machine learning models

History and forecast utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).

### Example


```python
import openapi_client
from openapi_client.models.ai_planning_level_request import AiPlanningLevelRequest
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    ai_planning_level_request = openapi_client.AiPlanningLevelRequest() # AiPlanningLevelRequest |  (optional)

    try:
        # History and forecast utilizing advanced machine learning models
        api_response = api_instance.forecast_ai_history_and_forecast_post(token=token, ai_planning_level_request=ai_planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_ai_history_and_forecast_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_ai_history_and_forecast_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **ai_planning_level_request** | [**AiPlanningLevelRequest**](AiPlanningLevelRequest.md)|  | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_ai_post**
> JobResponse forecast_ai_post(token=token, ai_planning_level_request=ai_planning_level_request)

Forecast utilizing advanced machine learning models

Forecast AI is utilizing advanced machine learning models. Please be mindful of enhanced execution times (~1-2s per timeseries).

### Example


```python
import openapi_client
from openapi_client.models.ai_planning_level_request import AiPlanningLevelRequest
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    ai_planning_level_request = openapi_client.AiPlanningLevelRequest() # AiPlanningLevelRequest |  (optional)

    try:
        # Forecast utilizing advanced machine learning models
        api_response = api_instance.forecast_ai_post(token=token, ai_planning_level_request=ai_planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_ai_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_ai_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **ai_planning_level_request** | [**AiPlanningLevelRequest**](AiPlanningLevelRequest.md)|  | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_file_to_forecast_post**
> JobResponse forecast_file_to_forecast_post(file, method, token=token, discard_data=discard_data, error_type=error_type, hold_out_period=hold_out_period, no_fcst=no_fcst, outlier_detection=outlier_detection, periodicity=periodicity)

Forecast from file

Forecast from file allows for quick analysis via Microsoft Excel and CSV file format. Please check documentation link for help.

### Example


```python
import openapi_client
from openapi_client.models.job_response import JobResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    file = None # bytearray | 
    method = 'method_example' # str | 
    token = 'token_example' # str | User Authentication Token (optional)
    discard_data = True # bool |  (optional)
    error_type = 'error_type_example' # str |  (optional)
    hold_out_period = 56 # int |  (optional)
    no_fcst = 56 # int |  (optional)
    outlier_detection = True # bool |  (optional)
    periodicity = 56 # int |  (optional)

    try:
        # Forecast from file
        api_response = api_instance.forecast_file_to_forecast_post(file, method, token=token, discard_data=discard_data, error_type=error_type, hold_out_period=hold_out_period, no_fcst=no_fcst, outlier_detection=outlier_detection, periodicity=periodicity)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_file_to_forecast_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_file_to_forecast_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**|  | 
 **method** | **str**|  | 
 **token** | **str**| User Authentication Token | [optional] 
 **discard_data** | **bool**|  | [optional] 
 **error_type** | **str**|  | [optional] 
 **hold_out_period** | **int**|  | [optional] 
 **no_fcst** | **int**|  | [optional] 
 **outlier_detection** | **bool**|  | [optional] 
 **periodicity** | **int**|  | [optional] 

### Return type

[**JobResponse**](JobResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_forecast_bottom_up_post**
> ForecastBottomUpResponse forecast_forecast_bottom_up_post(token=token, planning_level_request=planning_level_request)

Bottom up forecasting

Calculate forecast by timeseries and sum results up to establish forecast for top level timeseries.

### Example


```python
import openapi_client
from openapi_client.models.forecast_bottom_up_response import ForecastBottomUpResponse
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # Bottom up forecasting
        api_response = api_instance.forecast_forecast_bottom_up_post(token=token, planning_level_request=planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_forecast_bottom_up_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_forecast_bottom_up_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

[**ForecastBottomUpResponse**](ForecastBottomUpResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_forecast_top_down_post**
> forecast_forecast_top_down_post(token=token, planning_level_request=planning_level_request)

Top down forecasting

Calculate forecast based on sum of of lower level timeseries and distribute forecast down based on ratios. Great feature for planning levels with dynamic timeseries.

### Example


```python
import openapi_client
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # Top down forecasting
        api_instance.forecast_forecast_top_down_post(token=token, planning_level_request=planning_level_request)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_forecast_top_down_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_full_detail_post**
> FullDetailsForecastResponse forecast_full_detail_post(token=token, planning_level_request=planning_level_request)

Full forecast result details, including error, trend seasonality and outlier

Response provides full forecast result details, including error, trend seasonality and outlier. Great for advanced analysis.

### Example


```python
import openapi_client
from openapi_client.models.full_details_forecast_response import FullDetailsForecastResponse
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # Full forecast result details, including error, trend seasonality and outlier
        api_response = api_instance.forecast_full_detail_post(token=token, planning_level_request=planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_full_detail_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_full_detail_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

[**FullDetailsForecastResponse**](FullDetailsForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_history_and_forecast_post**
> HistoryAndForecastResponse forecast_history_and_forecast_post(token=token, planning_level_request=planning_level_request)

History and forecast for fast timeseries view

Reponse provides history and forecast per timeseries. Great for visualizing results.

### Example


```python
import openapi_client
from openapi_client.models.history_and_forecast_response import HistoryAndForecastResponse
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # History and forecast for fast timeseries view
        api_response = api_instance.forecast_history_and_forecast_post(token=token, planning_level_request=planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_history_and_forecast_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_history_and_forecast_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

[**HistoryAndForecastResponse**](HistoryAndForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_optimal_parameter_post**
> OptimalParameterResponse forecast_optimal_parameter_post(token=token, planning_level_request=planning_level_request)

Get optimal parameter per method

Use the optimal parameter sets created by iCUE to set the method parameters of your internal planning system.

### Example


```python
import openapi_client
from openapi_client.models.optimal_parameter_response import OptimalParameterResponse
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # Get optimal parameter per method
        api_response = api_instance.forecast_optimal_parameter_post(token=token, planning_level_request=planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_optimal_parameter_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_optimal_parameter_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

[**OptimalParameterResponse**](OptimalParameterResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_post**
> ForecastResponse forecast_post(token=token, planning_level_request=planning_level_request)

Forecasts only, for faster results

To support maximum operation and integration speed, this endpoint only returns the calculated forecast.

### Example


```python
import openapi_client
from openapi_client.models.forecast_response import ForecastResponse
from openapi_client.models.planning_level_request import PlanningLevelRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_request = openapi_client.PlanningLevelRequest() # PlanningLevelRequest |  (optional)

    try:
        # Forecasts only, for faster results
        api_response = api_instance.forecast_post(token=token, planning_level_request=planning_level_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_request** | [**PlanningLevelRequest**](PlanningLevelRequest.md)|  | [optional] 

### Return type

[**ForecastResponse**](ForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_rerun_post**
> ForecastResponse forecast_rerun_post(token=token, planning_level_re_run_request=planning_level_re_run_request)

Rerun previously uploaded planning level

Rerun previously uploaded planning level.

### Example


```python
import openapi_client
from openapi_client.models.forecast_response import ForecastResponse
from openapi_client.models.planning_level_re_run_request import PlanningLevelReRunRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    planning_level_re_run_request = openapi_client.PlanningLevelReRunRequest() # PlanningLevelReRunRequest |  (optional)

    try:
        # Rerun previously uploaded planning level
        api_response = api_instance.forecast_rerun_post(token=token, planning_level_re_run_request=planning_level_re_run_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->forecast_rerun_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_rerun_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **planning_level_re_run_request** | [**PlanningLevelReRunRequest**](PlanningLevelReRunRequest.md)|  | [optional] 

### Return type

[**ForecastResponse**](ForecastResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_result_job_id_get**
> forecast_result_job_id_get(job_id, token=token)

Forecast result

Get result for forecast job

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    job_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Forecast result
        api_instance.forecast_result_job_id_get(job_id, token=token)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_result_job_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **forecast_status_job_id_get**
> forecast_status_job_id_get(job_id, token=token)

Forecast status

Get status for forecast job

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    job_id = 56 # int | 
    token = 'token_example' # str | User Authentication Token (optional)

    try:
        # Forecast status
        api_instance.forecast_status_job_id_get(job_id, token=token)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->forecast_status_job_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id** | **int**|  | 
 **token** | **str**| User Authentication Token | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **outlier_post**
> List[TimeSeriesOutliersResponse] outlier_post(token=token, outliers_request=outliers_request)

Get outlier

Identify outliers (single and repetitive spikes, seasonality, masked outliers, trend and level jumps, amongst other topics) and use for cleansing of the history stream prior to forecast claculation. Depending on math model used, this approach often improves results dramatically, as it removes disturbances.

### Example


```python
import openapi_client
from openapi_client.models.outliers_request import OutliersRequest
from openapi_client.models.time_series_outliers_response import TimeSeriesOutliersResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InsightDrivenPlanningForecastOptimizationApi(api_client)
    token = 'token_example' # str | User Authentication Token (optional)
    outliers_request = openapi_client.OutliersRequest() # OutliersRequest |  (optional)

    try:
        # Get outlier
        api_response = api_instance.outlier_post(token=token, outliers_request=outliers_request)
        print("The response of InsightDrivenPlanningForecastOptimizationApi->outlier_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InsightDrivenPlanningForecastOptimizationApi->outlier_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| User Authentication Token | [optional] 
 **outliers_request** | [**OutliersRequest**](OutliersRequest.md)|  | [optional] 

### Return type

[**List[TimeSeriesOutliersResponse]**](TimeSeriesOutliersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

