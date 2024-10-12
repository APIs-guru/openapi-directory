# openapi_client.StatsApi

All URIs are relative to *https://cloudsearch.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudsearch_stats_get_index**](StatsApi.md#cloudsearch_stats_get_index) | **GET** /v1/stats/index | 
[**cloudsearch_stats_get_query**](StatsApi.md#cloudsearch_stats_get_query) | **GET** /v1/stats/query | 
[**cloudsearch_stats_get_searchapplication**](StatsApi.md#cloudsearch_stats_get_searchapplication) | **GET** /v1/stats/searchapplication | 
[**cloudsearch_stats_get_session**](StatsApi.md#cloudsearch_stats_get_session) | **GET** /v1/stats/session | 
[**cloudsearch_stats_get_user**](StatsApi.md#cloudsearch_stats_get_user) | **GET** /v1/stats/user | 
[**cloudsearch_stats_index_datasources_get**](StatsApi.md#cloudsearch_stats_index_datasources_get) | **GET** /v1/stats/index/{name} | 
[**cloudsearch_stats_query_searchapplications_get**](StatsApi.md#cloudsearch_stats_query_searchapplications_get) | **GET** /v1/stats/query/{name} | 
[**cloudsearch_stats_session_searchapplications_get**](StatsApi.md#cloudsearch_stats_session_searchapplications_get) | **GET** /v1/stats/session/{name} | 
[**cloudsearch_stats_user_searchapplications_get**](StatsApi.md#cloudsearch_stats_user_searchapplications_get) | **GET** /v1/stats/user/{name} | 


# **cloudsearch_stats_get_index**
> GetCustomerIndexStatsResponse cloudsearch_stats_get_index(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_customer_index_stats_response import GetCustomerIndexStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_get_index(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_get_index:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_get_index: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetCustomerIndexStatsResponse**](GetCustomerIndexStatsResponse.md)

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

# **cloudsearch_stats_get_query**
> GetCustomerQueryStatsResponse cloudsearch_stats_get_query(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_customer_query_stats_response import GetCustomerQueryStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_get_query(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_get_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_get_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetCustomerQueryStatsResponse**](GetCustomerQueryStatsResponse.md)

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

# **cloudsearch_stats_get_searchapplication**
> GetCustomerSearchApplicationStatsResponse cloudsearch_stats_get_searchapplication(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_date_day=end_date_day, end_date_month=end_date_month, end_date_year=end_date_year, start_date_day=start_date_day, start_date_month=start_date_month, start_date_year=start_date_year)



Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_customer_search_application_stats_response import GetCustomerSearchApplicationStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
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
    end_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    end_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    end_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    start_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    start_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    start_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_get_searchapplication(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_date_day=end_date_day, end_date_month=end_date_month, end_date_year=end_date_year, start_date_day=start_date_day, start_date_month=start_date_month, start_date_year=start_date_year)
        print("The response of StatsApi->cloudsearch_stats_get_searchapplication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_get_searchapplication: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **end_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **end_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **end_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **start_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **start_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **start_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetCustomerSearchApplicationStatsResponse**](GetCustomerSearchApplicationStatsResponse.md)

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

# **cloudsearch_stats_get_session**
> GetCustomerSessionStatsResponse cloudsearch_stats_get_session(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_customer_session_stats_response import GetCustomerSessionStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_get_session(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_get_session:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_get_session: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetCustomerSessionStatsResponse**](GetCustomerSessionStatsResponse.md)

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

# **cloudsearch_stats_get_user**
> GetCustomerUserStatsResponse cloudsearch_stats_get_user(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_customer_user_stats_response import GetCustomerUserStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_get_user(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_get_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_get_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetCustomerUserStatsResponse**](GetCustomerUserStatsResponse.md)

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

# **cloudsearch_stats_index_datasources_get**
> GetDataSourceIndexStatsResponse cloudsearch_stats_index_datasources_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_data_source_index_stats_response import GetDataSourceIndexStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
    name = 'name_example' # str | The resource id of the data source to retrieve statistics for, in the following format: \"datasources/{source_id}\"
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_index_datasources_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_index_datasources_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_index_datasources_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource id of the data source to retrieve statistics for, in the following format: \&quot;datasources/{source_id}\&quot; | 
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetDataSourceIndexStatsResponse**](GetDataSourceIndexStatsResponse.md)

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

# **cloudsearch_stats_query_searchapplications_get**
> GetSearchApplicationQueryStatsResponse cloudsearch_stats_query_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_search_application_query_stats_response import GetSearchApplicationQueryStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
    name = 'name_example' # str | The resource id of the search application query stats, in the following format: searchapplications/{application_id}
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_query_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_query_searchapplications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_query_searchapplications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource id of the search application query stats, in the following format: searchapplications/{application_id} | 
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetSearchApplicationQueryStatsResponse**](GetSearchApplicationQueryStatsResponse.md)

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

# **cloudsearch_stats_session_searchapplications_get**
> GetSearchApplicationSessionStatsResponse cloudsearch_stats_session_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_search_application_session_stats_response import GetSearchApplicationSessionStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
    name = 'name_example' # str | The resource id of the search application session stats, in the following format: searchapplications/{application_id}
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_session_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_session_searchapplications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_session_searchapplications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource id of the search application session stats, in the following format: searchapplications/{application_id} | 
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetSearchApplicationSessionStatsResponse**](GetSearchApplicationSessionStatsResponse.md)

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

# **cloudsearch_stats_user_searchapplications_get**
> GetSearchApplicationUserStatsResponse cloudsearch_stats_user_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)



Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_search_application_user_stats_response import GetSearchApplicationUserStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudsearch.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudsearch.googleapis.com"
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
    api_instance = openapi_client.StatsApi(api_client)
    name = 'name_example' # str | The resource id of the search application session stats, in the following format: searchapplications/{application_id}
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
    from_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    from_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    from_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)
    to_date_day = 56 # int | Day of month. Must be from 1 to 31 and valid for the year and month. (optional)
    to_date_month = 56 # int | Month of date. Must be from 1 to 12. (optional)
    to_date_year = 56 # int | Year of date. Must be from 1 to 9999. (optional)

    try:
        api_response = api_instance.cloudsearch_stats_user_searchapplications_get(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, from_date_day=from_date_day, from_date_month=from_date_month, from_date_year=from_date_year, to_date_day=to_date_day, to_date_month=to_date_month, to_date_year=to_date_year)
        print("The response of StatsApi->cloudsearch_stats_user_searchapplications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatsApi->cloudsearch_stats_user_searchapplications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The resource id of the search application session stats, in the following format: searchapplications/{application_id} | 
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
 **from_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **from_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **from_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 
 **to_date_day** | **int**| Day of month. Must be from 1 to 31 and valid for the year and month. | [optional] 
 **to_date_month** | **int**| Month of date. Must be from 1 to 12. | [optional] 
 **to_date_year** | **int**| Year of date. Must be from 1 to 9999. | [optional] 

### Return type

[**GetSearchApplicationUserStatsResponse**](GetSearchApplicationUserStatsResponse.md)

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

