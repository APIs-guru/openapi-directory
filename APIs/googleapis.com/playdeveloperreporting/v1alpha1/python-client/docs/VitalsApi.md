# openapi_client.VitalsApi

All URIs are relative to *https://playdeveloperreporting.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**playdeveloperreporting_vitals_errors_issues_search**](VitalsApi.md#playdeveloperreporting_vitals_errors_issues_search) | **GET** /v1alpha1/{parent}/errorIssues:search | 
[**playdeveloperreporting_vitals_errors_reports_search**](VitalsApi.md#playdeveloperreporting_vitals_errors_reports_search) | **GET** /v1alpha1/{parent}/errorReports:search | 
[**playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get**](VitalsApi.md#playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get) | **GET** /v1alpha1/{name} | 
[**playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query**](VitalsApi.md#playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query) | **POST** /v1alpha1/{name}:query | 


# **playdeveloperreporting_vitals_errors_issues_search**
> GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse playdeveloperreporting_vitals_errors_issues_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, interval_end_time_day=interval_end_time_day, interval_end_time_hours=interval_end_time_hours, interval_end_time_minutes=interval_end_time_minutes, interval_end_time_month=interval_end_time_month, interval_end_time_nanos=interval_end_time_nanos, interval_end_time_seconds=interval_end_time_seconds, interval_end_time_time_zone_id=interval_end_time_time_zone_id, interval_end_time_time_zone_version=interval_end_time_time_zone_version, interval_end_time_utc_offset=interval_end_time_utc_offset, interval_end_time_year=interval_end_time_year, interval_start_time_day=interval_start_time_day, interval_start_time_hours=interval_start_time_hours, interval_start_time_minutes=interval_start_time_minutes, interval_start_time_month=interval_start_time_month, interval_start_time_nanos=interval_start_time_nanos, interval_start_time_seconds=interval_start_time_seconds, interval_start_time_time_zone_id=interval_start_time_time_zone_id, interval_start_time_time_zone_version=interval_start_time_time_zone_version, interval_start_time_utc_offset=interval_start_time_utc_offset, interval_start_time_year=interval_start_time_year, order_by=order_by, page_size=page_size, page_token=page_token)



Searches all error issues in which reports have been grouped.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_play_developer_reporting_v1alpha1_search_error_issues_response import GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://playdeveloperreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://playdeveloperreporting.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VitalsApi(api_client)
    parent = 'parent_example' # str | Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app}
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
    filter = 'filter_example' # str | A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error issues that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = \"google/walleye\" OR deviceModel = \"google/marlin\"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = \"Google\". * `deviceType`: Matches error issues that occurred in the requested device types. Example: `deviceType = \"PHONE\"`. * `errorIssueType`: Matches error issues of the requested types only. Valid candidates: `CRASH`, `ANR`. Example: `errorIssueType = CRASH OR errorIssueType = ANR`. * `appProcessState`: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR errorIssueType = ANR` is not a valid filter. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)` (optional)
    interval_end_time_day = 56 # int | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. (optional)
    interval_end_time_hours = 56 # int | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \"24:00:00\" for scenarios like business closing time. (optional)
    interval_end_time_minutes = 56 # int | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. (optional)
    interval_end_time_month = 56 # int | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. (optional)
    interval_end_time_nanos = 56 # int | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. (optional)
    interval_end_time_seconds = 56 # int | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. (optional)
    interval_end_time_time_zone_id = 'interval_end_time_time_zone_id_example' # str | IANA Time Zone Database time zone, e.g. \"America/New_York\". (optional)
    interval_end_time_time_zone_version = 'interval_end_time_time_zone_version_example' # str | Optional. IANA Time Zone Database version number, e.g. \"2019a\". (optional)
    interval_end_time_utc_offset = 'interval_end_time_utc_offset_example' # str | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. (optional)
    interval_end_time_year = 56 # int | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. (optional)
    interval_start_time_day = 56 # int | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. (optional)
    interval_start_time_hours = 56 # int | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \"24:00:00\" for scenarios like business closing time. (optional)
    interval_start_time_minutes = 56 # int | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. (optional)
    interval_start_time_month = 56 # int | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. (optional)
    interval_start_time_nanos = 56 # int | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. (optional)
    interval_start_time_seconds = 56 # int | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. (optional)
    interval_start_time_time_zone_id = 'interval_start_time_time_zone_id_example' # str | IANA Time Zone Database time zone, e.g. \"America/New_York\". (optional)
    interval_start_time_time_zone_version = 'interval_start_time_time_zone_version_example' # str | Optional. IANA Time Zone Database version number, e.g. \"2019a\". (optional)
    interval_start_time_utc_offset = 'interval_start_time_utc_offset_example' # str | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. (optional)
    interval_start_time_year = 56 # int | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. (optional)
    order_by = 'order_by_example' # str | Specifies a field that will be used to order the results. ** Supported dimensions:** * `errorReportCount`: Orders issues by number of error reports. * `distinctUsers`: Orders issues by number of unique affected users. ** Supported operations:** * `asc` for ascending order. * `desc` for descending order. Format: A field and an operation, e.g., `errorReportCount desc` *Note:* currently only one field is supported at a time. (optional)
    page_size = 56 # int | The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.playdeveloperreporting_vitals_errors_issues_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, interval_end_time_day=interval_end_time_day, interval_end_time_hours=interval_end_time_hours, interval_end_time_minutes=interval_end_time_minutes, interval_end_time_month=interval_end_time_month, interval_end_time_nanos=interval_end_time_nanos, interval_end_time_seconds=interval_end_time_seconds, interval_end_time_time_zone_id=interval_end_time_time_zone_id, interval_end_time_time_zone_version=interval_end_time_time_zone_version, interval_end_time_utc_offset=interval_end_time_utc_offset, interval_end_time_year=interval_end_time_year, interval_start_time_day=interval_start_time_day, interval_start_time_hours=interval_start_time_hours, interval_start_time_minutes=interval_start_time_minutes, interval_start_time_month=interval_start_time_month, interval_start_time_nanos=interval_start_time_nanos, interval_start_time_seconds=interval_start_time_seconds, interval_start_time_time_zone_id=interval_start_time_time_zone_id, interval_start_time_time_zone_version=interval_start_time_time_zone_version, interval_start_time_utc_offset=interval_start_time_utc_offset, interval_start_time_year=interval_start_time_year, order_by=order_by, page_size=page_size, page_token=page_token)
        print("The response of VitalsApi->playdeveloperreporting_vitals_errors_issues_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VitalsApi->playdeveloperreporting_vitals_errors_issues_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Parent resource of the error issues, indicating the application for which they were received. Format: apps/{app} | 
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
 **filter** | **str**| A selection predicate to retrieve only a subset of the issues. Counts in the returned error issues will only reflect occurrences that matched the filter. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * &#x60;apiLevel&#x60;: Matches error issues that occurred in the requested Android versions (specified as the numeric API level) only. Example: &#x60;apiLevel &#x3D; 28 OR apiLevel &#x3D; 29&#x60;. * &#x60;versionCode&#x60;: Matches error issues that occurred in the requested app version codes only. Example: &#x60;versionCode &#x3D; 123 OR versionCode &#x3D; 456&#x60;. * &#x60;deviceModel&#x60;: Matches error issues that occurred in the requested devices. Example: &#x60;deviceModel &#x3D; \&quot;google/walleye\&quot; OR deviceModel &#x3D; \&quot;google/marlin\&quot;&#x60;. * &#x60;deviceBrand&#x60;: Matches error issues that occurred in the requested device brands. Example: &#x60;deviceBrand &#x3D; \&quot;Google\&quot;. * &#x60;deviceType&#x60;: Matches error issues that occurred in the requested device types. Example: &#x60;deviceType &#x3D; \&quot;PHONE\&quot;&#x60;. * &#x60;errorIssueType&#x60;: Matches error issues of the requested types only. Valid candidates: &#x60;CRASH&#x60;, &#x60;ANR&#x60;. Example: &#x60;errorIssueType &#x3D; CRASH OR errorIssueType &#x3D; ANR&#x60;. * &#x60;appProcessState&#x60;: Matches error issues on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: &#x60;FOREGROUND&#x60;, &#x60;BACKGROUND&#x60;. Example: &#x60;appProcessState &#x3D; FOREGROUND&#x60;. * &#x60;isUserPerceived&#x60;: Matches error issues that are user-perceived. It is not accompanied by any operators. Example: &#x60;isUserPerceived&#x60;. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators &#x60;AND&#x60; and &#x60;OR&#x60; can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The &#x60;OR&#x60; operator takes precedence over &#x60;AND&#x60; so the use of parenthesis is not necessary when building CNF. The &#x60;OR&#x60; operator is only supported to build disjunctions that apply to the same field, e.g., &#x60;versionCode &#x3D; 123 OR errorIssueType &#x3D; ANR&#x60; is not a valid filter. ** Examples ** Some valid filtering expressions: * &#x60;versionCode &#x3D; 123 AND errorIssueType &#x3D; ANR&#x60; * &#x60;versionCode &#x3D; 123 AND errorIssueType &#x3D; OR errorIssueType &#x3D; CRASH&#x60; * &#x60;versionCode &#x3D; 123 AND (errorIssueType &#x3D; OR errorIssueType &#x3D; CRASH)&#x60; | [optional] 
 **interval_end_time_day** | **int**| Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. | [optional] 
 **interval_end_time_hours** | **int**| Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
 **interval_end_time_minutes** | **int**| Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. | [optional] 
 **interval_end_time_month** | **int**| Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. | [optional] 
 **interval_end_time_nanos** | **int**| Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. | [optional] 
 **interval_end_time_seconds** | **int**| Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. | [optional] 
 **interval_end_time_time_zone_id** | **str**| IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
 **interval_end_time_time_zone_version** | **str**| Optional. IANA Time Zone Database version number, e.g. \&quot;2019a\&quot;. | [optional] 
 **interval_end_time_utc_offset** | **str**| UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. | [optional] 
 **interval_end_time_year** | **int**| Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. | [optional] 
 **interval_start_time_day** | **int**| Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. | [optional] 
 **interval_start_time_hours** | **int**| Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
 **interval_start_time_minutes** | **int**| Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. | [optional] 
 **interval_start_time_month** | **int**| Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. | [optional] 
 **interval_start_time_nanos** | **int**| Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. | [optional] 
 **interval_start_time_seconds** | **int**| Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. | [optional] 
 **interval_start_time_time_zone_id** | **str**| IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
 **interval_start_time_time_zone_version** | **str**| Optional. IANA Time Zone Database version number, e.g. \&quot;2019a\&quot;. | [optional] 
 **interval_start_time_utc_offset** | **str**| UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. | [optional] 
 **interval_start_time_year** | **int**| Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. | [optional] 
 **order_by** | **str**| Specifies a field that will be used to order the results. ** Supported dimensions:** * &#x60;errorReportCount&#x60;: Orders issues by number of error reports. * &#x60;distinctUsers&#x60;: Orders issues by number of unique affected users. ** Supported operations:** * &#x60;asc&#x60; for ascending order. * &#x60;desc&#x60; for descending order. Format: A field and an operation, e.g., &#x60;errorReportCount desc&#x60; *Note:* currently only one field is supported at a time. | [optional] 
 **page_size** | **int**| The maximum number of error issues to return. The service may return fewer than this value. If unspecified, at most 50 error issues will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
 **page_token** | **str**| A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to the request must match the call that provided the page token. | [optional] 

### Return type

[**GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse**](GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **playdeveloperreporting_vitals_errors_reports_search**
> GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse playdeveloperreporting_vitals_errors_reports_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, interval_end_time_day=interval_end_time_day, interval_end_time_hours=interval_end_time_hours, interval_end_time_minutes=interval_end_time_minutes, interval_end_time_month=interval_end_time_month, interval_end_time_nanos=interval_end_time_nanos, interval_end_time_seconds=interval_end_time_seconds, interval_end_time_time_zone_id=interval_end_time_time_zone_id, interval_end_time_time_zone_version=interval_end_time_time_zone_version, interval_end_time_utc_offset=interval_end_time_utc_offset, interval_end_time_year=interval_end_time_year, interval_start_time_day=interval_start_time_day, interval_start_time_hours=interval_start_time_hours, interval_start_time_minutes=interval_start_time_minutes, interval_start_time_month=interval_start_time_month, interval_start_time_nanos=interval_start_time_nanos, interval_start_time_seconds=interval_start_time_seconds, interval_start_time_time_zone_id=interval_start_time_time_zone_id, interval_start_time_time_zone_version=interval_start_time_time_zone_version, interval_start_time_utc_offset=interval_start_time_utc_offset, interval_start_time_year=interval_start_time_year, page_size=page_size, page_token=page_token)



Searches all error reports received for an app.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_play_developer_reporting_v1alpha1_search_error_reports_response import GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://playdeveloperreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://playdeveloperreporting.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VitalsApi(api_client)
    parent = 'parent_example' # str | Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app}
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
    filter = 'filter_example' # str | A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * `apiLevel`: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: `apiLevel = 28 OR apiLevel = 29`. * `versionCode`: Matches error reports that occurred in the requested app version codes only. Example: `versionCode = 123 OR versionCode = 456`. * `deviceModel`: Matches error issues that occurred in the requested devices. Example: `deviceModel = \"google/walleye\" OR deviceModel = \"google/marlin\"`. * `deviceBrand`: Matches error issues that occurred in the requested device brands. Example: `deviceBrand = \"Google\". * `deviceType`: Matches error reports that occurred in the requested device types. Example: `deviceType = \"PHONE\"`. * `errorIssueType`: Matches error reports of the requested types only. Valid candidates: `JAVA_CRASH`, `NATIVE_CRASH`, `ANR`. Example: `errorIssueType = JAVA_CRASH OR errorIssueType = NATIVE_CRASH`. * `errorIssueId`: Matches error reports belonging to the requested error issue ids only. Example: `errorIssueId = 1234 OR errorIssueId = 4567`. * `appProcessState`: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: `FOREGROUND`, `BACKGROUND`. Example: `appProcessState = FOREGROUND`. * `isUserPerceived`: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: `isUserPerceived`. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators `AND` and `OR` can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The `OR` operator takes precedence over `AND` so the use of parenthesis is not necessary when building CNF. The `OR` operator is only supported to build disjunctions that apply to the same field, e.g., `versionCode = 123 OR versionCode = ANR`. The filter expression `versionCode = 123 OR errorIssueType = ANR` is not valid. ** Examples ** Some valid filtering expressions: * `versionCode = 123 AND errorIssueType = ANR` * `versionCode = 123 AND errorIssueType = OR errorIssueType = CRASH` * `versionCode = 123 AND (errorIssueType = OR errorIssueType = CRASH)` (optional)
    interval_end_time_day = 56 # int | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. (optional)
    interval_end_time_hours = 56 # int | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \"24:00:00\" for scenarios like business closing time. (optional)
    interval_end_time_minutes = 56 # int | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. (optional)
    interval_end_time_month = 56 # int | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. (optional)
    interval_end_time_nanos = 56 # int | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. (optional)
    interval_end_time_seconds = 56 # int | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. (optional)
    interval_end_time_time_zone_id = 'interval_end_time_time_zone_id_example' # str | IANA Time Zone Database time zone, e.g. \"America/New_York\". (optional)
    interval_end_time_time_zone_version = 'interval_end_time_time_zone_version_example' # str | Optional. IANA Time Zone Database version number, e.g. \"2019a\". (optional)
    interval_end_time_utc_offset = 'interval_end_time_utc_offset_example' # str | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. (optional)
    interval_end_time_year = 56 # int | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. (optional)
    interval_start_time_day = 56 # int | Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. (optional)
    interval_start_time_hours = 56 # int | Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \"24:00:00\" for scenarios like business closing time. (optional)
    interval_start_time_minutes = 56 # int | Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. (optional)
    interval_start_time_month = 56 # int | Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. (optional)
    interval_start_time_nanos = 56 # int | Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. (optional)
    interval_start_time_seconds = 56 # int | Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. (optional)
    interval_start_time_time_zone_id = 'interval_start_time_time_zone_id_example' # str | IANA Time Zone Database time zone, e.g. \"America/New_York\". (optional)
    interval_start_time_time_zone_version = 'interval_start_time_time_zone_version_example' # str | Optional. IANA Time Zone Database version number, e.g. \"2019a\". (optional)
    interval_start_time_utc_offset = 'interval_start_time_utc_offset_example' # str | UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. (optional)
    interval_start_time_year = 56 # int | Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. (optional)
    page_size = 56 # int | The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 100; values above 100 will be coerced to 100. (optional)
    page_token = 'page_token_example' # str | A page token, received from a previous `SearchErrorReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchErrorReports` must match the call that provided the page token. (optional)

    try:
        api_response = api_instance.playdeveloperreporting_vitals_errors_reports_search(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, interval_end_time_day=interval_end_time_day, interval_end_time_hours=interval_end_time_hours, interval_end_time_minutes=interval_end_time_minutes, interval_end_time_month=interval_end_time_month, interval_end_time_nanos=interval_end_time_nanos, interval_end_time_seconds=interval_end_time_seconds, interval_end_time_time_zone_id=interval_end_time_time_zone_id, interval_end_time_time_zone_version=interval_end_time_time_zone_version, interval_end_time_utc_offset=interval_end_time_utc_offset, interval_end_time_year=interval_end_time_year, interval_start_time_day=interval_start_time_day, interval_start_time_hours=interval_start_time_hours, interval_start_time_minutes=interval_start_time_minutes, interval_start_time_month=interval_start_time_month, interval_start_time_nanos=interval_start_time_nanos, interval_start_time_seconds=interval_start_time_seconds, interval_start_time_time_zone_id=interval_start_time_time_zone_id, interval_start_time_time_zone_version=interval_start_time_time_zone_version, interval_start_time_utc_offset=interval_start_time_utc_offset, interval_start_time_year=interval_start_time_year, page_size=page_size, page_token=page_token)
        print("The response of VitalsApi->playdeveloperreporting_vitals_errors_reports_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VitalsApi->playdeveloperreporting_vitals_errors_reports_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. Parent resource of the reports, indicating the application for which they were received. Format: apps/{app} | 
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
 **filter** | **str**| A selection predicate to retrieve only a subset of the reports. For filtering basics, please check [AIP-160](https://google.aip.dev/160). ** Supported field names:** * &#x60;apiLevel&#x60;: Matches error reports that occurred in the requested Android versions (specified as the numeric API level) only. Example: &#x60;apiLevel &#x3D; 28 OR apiLevel &#x3D; 29&#x60;. * &#x60;versionCode&#x60;: Matches error reports that occurred in the requested app version codes only. Example: &#x60;versionCode &#x3D; 123 OR versionCode &#x3D; 456&#x60;. * &#x60;deviceModel&#x60;: Matches error issues that occurred in the requested devices. Example: &#x60;deviceModel &#x3D; \&quot;google/walleye\&quot; OR deviceModel &#x3D; \&quot;google/marlin\&quot;&#x60;. * &#x60;deviceBrand&#x60;: Matches error issues that occurred in the requested device brands. Example: &#x60;deviceBrand &#x3D; \&quot;Google\&quot;. * &#x60;deviceType&#x60;: Matches error reports that occurred in the requested device types. Example: &#x60;deviceType &#x3D; \&quot;PHONE\&quot;&#x60;. * &#x60;errorIssueType&#x60;: Matches error reports of the requested types only. Valid candidates: &#x60;JAVA_CRASH&#x60;, &#x60;NATIVE_CRASH&#x60;, &#x60;ANR&#x60;. Example: &#x60;errorIssueType &#x3D; JAVA_CRASH OR errorIssueType &#x3D; NATIVE_CRASH&#x60;. * &#x60;errorIssueId&#x60;: Matches error reports belonging to the requested error issue ids only. Example: &#x60;errorIssueId &#x3D; 1234 OR errorIssueId &#x3D; 4567&#x60;. * &#x60;appProcessState&#x60;: Matches error reports on the process state of an app, indicating whether an app runs in the foreground (user-visible) or background. Valid candidates: &#x60;FOREGROUND&#x60;, &#x60;BACKGROUND&#x60;. Example: &#x60;appProcessState &#x3D; FOREGROUND&#x60;. * &#x60;isUserPerceived&#x60;: Matches error reports that are user-perceived. It is not accompanied by any operators. Example: &#x60;isUserPerceived&#x60;. ** Supported operators:** * Comparison operators: The only supported comparison operator is equality. The filtered field must appear on the left hand side of the comparison. * Logical Operators: Logical operators &#x60;AND&#x60; and &#x60;OR&#x60; can be used to build complex filters following a conjunctive normal form (CNF), i.e., conjunctions of disjunctions. The &#x60;OR&#x60; operator takes precedence over &#x60;AND&#x60; so the use of parenthesis is not necessary when building CNF. The &#x60;OR&#x60; operator is only supported to build disjunctions that apply to the same field, e.g., &#x60;versionCode &#x3D; 123 OR versionCode &#x3D; ANR&#x60;. The filter expression &#x60;versionCode &#x3D; 123 OR errorIssueType &#x3D; ANR&#x60; is not valid. ** Examples ** Some valid filtering expressions: * &#x60;versionCode &#x3D; 123 AND errorIssueType &#x3D; ANR&#x60; * &#x60;versionCode &#x3D; 123 AND errorIssueType &#x3D; OR errorIssueType &#x3D; CRASH&#x60; * &#x60;versionCode &#x3D; 123 AND (errorIssueType &#x3D; OR errorIssueType &#x3D; CRASH)&#x60; | [optional] 
 **interval_end_time_day** | **int**| Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. | [optional] 
 **interval_end_time_hours** | **int**| Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
 **interval_end_time_minutes** | **int**| Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. | [optional] 
 **interval_end_time_month** | **int**| Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. | [optional] 
 **interval_end_time_nanos** | **int**| Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. | [optional] 
 **interval_end_time_seconds** | **int**| Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. | [optional] 
 **interval_end_time_time_zone_id** | **str**| IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
 **interval_end_time_time_zone_version** | **str**| Optional. IANA Time Zone Database version number, e.g. \&quot;2019a\&quot;. | [optional] 
 **interval_end_time_utc_offset** | **str**| UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. | [optional] 
 **interval_end_time_year** | **int**| Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. | [optional] 
 **interval_start_time_day** | **int**| Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day. | [optional] 
 **interval_start_time_hours** | **int**| Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value \&quot;24:00:00\&quot; for scenarios like business closing time. | [optional] 
 **interval_start_time_minutes** | **int**| Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0. | [optional] 
 **interval_start_time_month** | **int**| Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month. | [optional] 
 **interval_start_time_nanos** | **int**| Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0. | [optional] 
 **interval_start_time_seconds** | **int**| Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds. | [optional] 
 **interval_start_time_time_zone_id** | **str**| IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
 **interval_start_time_time_zone_version** | **str**| Optional. IANA Time Zone Database version number, e.g. \&quot;2019a\&quot;. | [optional] 
 **interval_start_time_utc_offset** | **str**| UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }. | [optional] 
 **interval_start_time_year** | **int**| Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year. | [optional] 
 **page_size** | **int**| The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 50 reports will be returned. The maximum value is 100; values above 100 will be coerced to 100. | [optional] 
 **page_token** | **str**| A page token, received from a previous &#x60;SearchErrorReports&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;SearchErrorReports&#x60; must match the call that provided the page token. | [optional] 

### Return type

[**GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse**](GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get**
> GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Describes the properties of the metric set.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_play_developer_reporting_v1alpha1_stuck_background_wakelock_rate_metric_set import GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://playdeveloperreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://playdeveloperreporting.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VitalsApi(api_client)
    name = 'name_example' # str | Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
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

    try:
        api_response = api_instance.playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of VitalsApi->playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VitalsApi->playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet | 
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

### Return type

[**GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet**](GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query**
> GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request=google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request)



Queries the metrics in the metric set.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request import GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest
from openapi_client.models.google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_response import GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://playdeveloperreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://playdeveloperreporting.googleapis.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VitalsApi(api_client)
    name = 'name_example' # str | Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet
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
    google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request = openapi_client.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest() # GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest |  (optional)

    try:
        api_response = api_instance.playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request=google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request)
        print("The response of VitalsApi->playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VitalsApi->playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Required. The resource name. Format: apps/{app}/stuckBackgroundWakelockRateMetricSet | 
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
 **google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_request** | [**GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest**](GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetRequest.md)|  | [optional] 

### Return type

[**GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse**](GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse.md)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

