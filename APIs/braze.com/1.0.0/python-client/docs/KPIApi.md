# openapi_client.KPIApi

All URIs are relative to *https://rest.iad-01.braze.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**daily_active_users_by_date_0**](KPIApi.md#daily_active_users_by_date_0) | **GET** /kpi/dau/data_series | Daily Active Users by Date
[**daily_new_users_by_date_0**](KPIApi.md#daily_new_users_by_date_0) | **GET** /kpi/new_users/data_series | Daily New Users by Date
[**kp_is_for_daily_app_uninstalls_by_date_0**](KPIApi.md#kp_is_for_daily_app_uninstalls_by_date_0) | **GET** /kpi/uninstalls/data_series | KPIs for Daily App Uninstalls by Date
[**monthly_active_users_for_last30_days_0**](KPIApi.md#monthly_active_users_for_last30_days_0) | **GET** /kpi/mau/data_series | Monthly Active Users for Last 30 Days


# **daily_active_users_by_date_0**
> daily_active_users_by_date_0(length=length, ending_at=ending_at, app_id=app_id)

Daily Active Users by Date

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"dau\" : (int)         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KPIApi(api_client)
    length = '10' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Daily Active Users by Date
        api_instance.daily_active_users_by_date_0(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling KPIApi->daily_active_users_by_date_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **daily_new_users_by_date_0**
> daily_new_users_by_date_0(length=length, ending_at=ending_at, app_id=app_id)

Daily New Users by Date

This endpoint allows you to retrieve a daily series of the total number of new users on each date.   ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"new_users\" : (int)         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KPIApi(api_client)
    length = '14' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Daily New Users by Date
        api_instance.daily_new_users_by_date_0(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling KPIApi->daily_new_users_by_date_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kp_is_for_daily_app_uninstalls_by_date_0**
> kp_is_for_daily_app_uninstalls_by_date_0(length=length, ending_at=ending_at, app_id=app_id)

KPIs for Daily App Uninstalls by Date

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"uninstalls\" : (int)         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KPIApi(api_client)
    length = '14' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-5:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # KPIs for Daily App Uninstalls by Date
        api_instance.kp_is_for_daily_app_uninstalls_by_date_0(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling KPIApi->kp_is_for_daily_app_uninstalls_by_date_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **monthly_active_users_for_last30_days_0**
> monthly_active_users_for_last30_days_0(length=length, ending_at=ending_at, app_id=app_id)

Monthly Active Users for Last 30 Days

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.  ## Response  ```json Content-Type: application/json Authorization: Bearer YOUR-REST-API-KEY {     \"message\": (required, string) the status of the export, returns 'success' when completed without errors,     \"data\" : [         {             \"time\" : (string) date as ISO 8601 date,             \"mau\" : (int)         },         ...     ] } ```

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://rest.iad-01.braze.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://rest.iad-01.braze.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.KPIApi(api_client)
    length = '7' # str | (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive (optional)
    ending_at = '2018-06-28T23:59:59-05:00' # str | (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request (optional)
    app_id = '{{app_identifier}}' # str | (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned (optional)

    try:
        # Monthly Active Users for Last 30 Days
        api_instance.monthly_active_users_for_last30_days_0(length=length, ending_at=ending_at, app_id=app_id)
    except Exception as e:
        print("Exception when calling KPIApi->monthly_active_users_for_last30_days_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **length** | **str**| (Required) Integer  Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive | [optional] 
 **ending_at** | **str**| (Optional) DateTime (ISO 8601 string)  Point in time when the data series should end - defaults to time of the request | [optional] 
 **app_id** | **str**| (Optional) String  App API identifier; if excluded, results for all apps in app group will be returned | [optional] 

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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

