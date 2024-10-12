# openapi_client.LocationsApi

All URIs are relative to *https://businessprofileperformance.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**businessprofileperformance_locations_fetch_multi_daily_metrics_time_series**](LocationsApi.md#businessprofileperformance_locations_fetch_multi_daily_metrics_time_series) | **GET** /v1/{location}:fetchMultiDailyMetricsTimeSeries | 
[**businessprofileperformance_locations_get_daily_metrics_time_series**](LocationsApi.md#businessprofileperformance_locations_get_daily_metrics_time_series) | **GET** /v1/{name}:getDailyMetricsTimeSeries | 
[**businessprofileperformance_locations_searchkeywords_impressions_monthly_list**](LocationsApi.md#businessprofileperformance_locations_searchkeywords_impressions_monthly_list) | **GET** /v1/{parent}/searchkeywords/impressions/monthly | 


# **businessprofileperformance_locations_fetch_multi_daily_metrics_time_series**
> FetchMultiDailyMetricsTimeSeriesResponse businessprofileperformance_locations_fetch_multi_daily_metrics_time_series(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, daily_metrics=daily_metrics, daily_range_end_date_day=daily_range_end_date_day, daily_range_end_date_month=daily_range_end_date_month, daily_range_end_date_year=daily_range_end_date_year, daily_range_start_date_day=daily_range_start_date_day, daily_range_start_date_month=daily_range_start_date_month, daily_range_start_date_year=daily_range_start_date_year)



 Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example


```python
import openapi_client
from openapi_client.models.fetch_multi_daily_metrics_time_series_response import FetchMultiDailyMetricsTimeSeriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://businessprofileperformance.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://businessprofileperformance.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationsApi(api_client)
    location = 'location_example' # str | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    daily_metrics = ['daily_metrics_example'] # List[str] | Required. The metrics to retrieve time series for. (optional)
    daily_range_end_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    daily_range_end_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    daily_range_end_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    daily_range_start_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    daily_range_start_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    daily_range_start_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)

    try:
        api_response = api_instance.businessprofileperformance_locations_fetch_multi_daily_metrics_time_series(location, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, daily_metrics=daily_metrics, daily_range_end_date_day=daily_range_end_date_day, daily_range_end_date_month=daily_range_end_date_month, daily_range_end_date_year=daily_range_end_date_year, daily_range_start_date_day=daily_range_start_date_day, daily_range_start_date_month=daily_range_start_date_month, daily_range_start_date_year=daily_range_start_date_year)
        print("The response of LocationsApi->businessprofileperformance_locations_fetch_multi_daily_metrics_time_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->businessprofileperformance_locations_fetch_multi_daily_metrics_time_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **daily_metrics** | [**List[str]**](str.md)| Required. The metrics to retrieve time series for. | [optional] 
 **daily_range_end_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **daily_range_end_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **daily_range_end_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **daily_range_start_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **daily_range_start_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **daily_range_start_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 

### Return type

[**FetchMultiDailyMetricsTimeSeriesResponse**](FetchMultiDailyMetricsTimeSeriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **businessprofileperformance_locations_get_daily_metrics_time_series**
> GetDailyMetricsTimeSeriesResponse businessprofileperformance_locations_get_daily_metrics_time_series(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, daily_metric=daily_metric, daily_range_end_date_day=daily_range_end_date_day, daily_range_end_date_month=daily_range_end_date_month, daily_range_end_date_year=daily_range_end_date_year, daily_range_start_date_day=daily_range_start_date_day, daily_range_start_date_month=daily_range_start_date_month, daily_range_start_date_year=daily_range_start_date_year, daily_sub_entity_type_day_of_week=daily_sub_entity_type_day_of_week, daily_sub_entity_type_time_of_day_hours=daily_sub_entity_type_time_of_day_hours, daily_sub_entity_type_time_of_day_minutes=daily_sub_entity_type_time_of_day_minutes, daily_sub_entity_type_time_of_day_nanos=daily_sub_entity_type_time_of_day_nanos, daily_sub_entity_type_time_of_day_seconds=daily_sub_entity_type_time_of_day_seconds)



 Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`

### Example


```python
import openapi_client
from openapi_client.models.get_daily_metrics_time_series_response import GetDailyMetricsTimeSeriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://businessprofileperformance.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://businessprofileperformance.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationsApi(api_client)
    name = 'name_example' # str | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    daily_metric = 'daily_metric_example' # str | Required. The metric to retrieve time series. (optional)
    daily_range_end_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    daily_range_end_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    daily_range_end_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    daily_range_start_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    daily_range_start_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    daily_range_start_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    daily_sub_entity_type_day_of_week = 'daily_sub_entity_type_day_of_week_example' # str | Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE. (optional)
    daily_sub_entity_type_time_of_day_hours = 56 # int | Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value \"24:00:00\" for scenarios like business closing time. (optional)
    daily_sub_entity_type_time_of_day_minutes = 56 # int | Minutes of hour of day. Must be from 0 to 59. (optional)
    daily_sub_entity_type_time_of_day_nanos = 56 # int | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. (optional)
    daily_sub_entity_type_time_of_day_seconds = 56 # int | Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. (optional)

    try:
        api_response = api_instance.businessprofileperformance_locations_get_daily_metrics_time_series(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, daily_metric=daily_metric, daily_range_end_date_day=daily_range_end_date_day, daily_range_end_date_month=daily_range_end_date_month, daily_range_end_date_year=daily_range_end_date_year, daily_range_start_date_day=daily_range_start_date_day, daily_range_start_date_month=daily_range_start_date_month, daily_range_start_date_year=daily_range_start_date_year, daily_sub_entity_type_day_of_week=daily_sub_entity_type_day_of_week, daily_sub_entity_type_time_of_day_hours=daily_sub_entity_type_time_of_day_hours, daily_sub_entity_type_time_of_day_minutes=daily_sub_entity_type_time_of_day_minutes, daily_sub_entity_type_time_of_day_nanos=daily_sub_entity_type_time_of_day_nanos, daily_sub_entity_type_time_of_day_seconds=daily_sub_entity_type_time_of_day_seconds)
        print("The response of LocationsApi->businessprofileperformance_locations_get_daily_metrics_time_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->businessprofileperformance_locations_get_daily_metrics_time_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **daily_metric** | **str**| Required. The metric to retrieve time series. | [optional] 
 **daily_range_end_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **daily_range_end_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **daily_range_end_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **daily_range_start_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **daily_range_start_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **daily_range_start_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **daily_sub_entity_type_day_of_week** | **str**| Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics &#x3D; NONE. | [optional] 
 **daily_sub_entity_type_time_of_day_hours** | **int**| Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
 **daily_sub_entity_type_time_of_day_minutes** | **int**| Minutes of hour of day. Must be from 0 to 59. | [optional] 
 **daily_sub_entity_type_time_of_day_nanos** | **int**| Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. | [optional] 
 **daily_sub_entity_type_time_of_day_seconds** | **int**| Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. | [optional] 

### Return type

[**GetDailyMetricsTimeSeriesResponse**](GetDailyMetricsTimeSeriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **businessprofileperformance_locations_searchkeywords_impressions_monthly_list**
> ListSearchKeywordImpressionsMonthlyResponse businessprofileperformance_locations_searchkeywords_impressions_monthly_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, monthly_range_end_month_day=monthly_range_end_month_day, monthly_range_end_month_month=monthly_range_end_month_month, monthly_range_end_month_year=monthly_range_end_month_year, monthly_range_start_month_day=monthly_range_start_month_day, monthly_range_start_month_month=monthly_range_start_month_month, monthly_range_start_month_year=monthly_range_start_month_year, page_size=page_size, page_token=page_token)



Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`

### Example


```python
import openapi_client
from openapi_client.models.list_search_keyword_impressions_monthly_response import ListSearchKeywordImpressionsMonthlyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://businessprofileperformance.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://businessprofileperformance.googleapis.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LocationsApi(api_client)
    parent = 'parent_example' # str | Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.
    xgafv = 'xgafv_example' # str | V1 error format. (optional)
    access_token = 'access_token_example' # str | OAuth access token. (optional)
    alt = 'alt_example' # str | Data format for response. (optional)
    param_callback = 'param_callback_example' # str | JSONP (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. (optional)
    upload_protocol = 'upload_protocol_example' # str | Upload protocol for media (e.g. \"raw\", \"multipart\"). (optional)
    upload_type = 'upload_type_example' # str | Legacy upload protocol for media (e.g. \"media\", \"multipart\"). (optional)
    monthly_range_end_month_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    monthly_range_end_month_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    monthly_range_end_month_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    monthly_range_start_month_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    monthly_range_start_month_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    monthly_range_start_month_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    page_size = 56 # int | Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100. (optional)
    page_token = 'page_token_example' # str | Optional. A token indicating the next paginated result to be returned. (optional)

    try:
        api_response = api_instance.businessprofileperformance_locations_searchkeywords_impressions_monthly_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, monthly_range_end_month_day=monthly_range_end_month_day, monthly_range_end_month_month=monthly_range_end_month_month, monthly_range_end_month_year=monthly_range_end_month_year, monthly_range_start_month_day=monthly_range_start_month_day, monthly_range_start_month_month=monthly_range_start_month_month, monthly_range_start_month_year=monthly_range_start_month_year, page_size=page_size, page_token=page_token)
        print("The response of LocationsApi->businessprofileperformance_locations_searchkeywords_impressions_monthly_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LocationsApi->businessprofileperformance_locations_searchkeywords_impressions_monthly_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id. | 
 **xgafv** | **str**| V1 error format. | [optional] 
 **access_token** | **str**| OAuth access token. | [optional] 
 **alt** | **str**| Data format for response. | [optional] 
 **param_callback** | **str**| JSONP | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. | [optional] 
 **upload_protocol** | **str**| Upload protocol for media (e.g. \&quot;raw\&quot;, \&quot;multipart\&quot;). | [optional] 
 **upload_type** | **str**| Legacy upload protocol for media (e.g. \&quot;media\&quot;, \&quot;multipart\&quot;). | [optional] 
 **monthly_range_end_month_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **monthly_range_end_month_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **monthly_range_end_month_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **monthly_range_start_month_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **monthly_range_start_month_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **monthly_range_start_month_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **page_size** | **int**| Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100. | [optional] 
 **page_token** | **str**| Optional. A token indicating the next paginated result to be returned. | [optional] 

### Return type

[**ListSearchKeywordImpressionsMonthlyResponse**](ListSearchKeywordImpressionsMonthlyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

