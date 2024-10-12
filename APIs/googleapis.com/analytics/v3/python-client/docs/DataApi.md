# openapi_client.DataApi

All URIs are relative to *https://analytics.googleapis.com/analytics/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_data_ga_get**](DataApi.md#analytics_data_ga_get) | **GET** /data/ga | 
[**analytics_data_mcf_get**](DataApi.md#analytics_data_mcf_get) | **GET** /data/mcf | 
[**analytics_data_realtime_get**](DataApi.md#analytics_data_realtime_get) | **GET** /data/realtime | 


# **analytics_data_ga_get**
> GaData analytics_data_ga_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, include_empty_rows=include_empty_rows, max_results=max_results, output=output, sampling_level=sampling_level, segment=segment, sort=sort, start_index=start_index)



Returns Analytics data for a view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.ga_data import GaData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.DataApi(api_client)
    ids = 'ids_example' # str | Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
    start_date = 'start_date_example' # str | Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
    end_date = 'end_date_example' # str | End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday.
    metrics = 'metrics_example' # str | A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    dimensions = 'dimensions_example' # str | A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'. (optional)
    filters = 'filters_example' # str | A comma-separated list of dimension or metric filters to be applied to Analytics data. (optional)
    include_empty_rows = True # bool | The response will include empty rows if this parameter is set to true, the default is true (optional)
    max_results = 56 # int | The maximum number of entries to include in this feed. (optional)
    output = 'output_example' # str | The selected format for the response. Default format is JSON. (optional)
    sampling_level = 'sampling_level_example' # str | The desired sampling level. (optional)
    segment = 'segment_example' # str | An Analytics segment to be applied to data. (optional)
    sort = 'sort_example' # str | A comma-separated list of dimensions or metrics that determine the sort order for Analytics data. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_data_ga_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, include_empty_rows=include_empty_rows, max_results=max_results, output=output, sampling_level=sampling_level, segment=segment, sort=sort, start_index=start_index)
        print("The response of DataApi->analytics_data_ga_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->analytics_data_ga_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. | 
 **start_date** | **str**| Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. | 
 **end_date** | **str**| End date for fetching Analytics data. Request can should specify an end date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is yesterday. | 
 **metrics** | **str**| A comma-separated list of Analytics metrics. E.g., &#39;ga:sessions,ga:pageviews&#39;. At least one metric must be specified. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **dimensions** | **str**| A comma-separated list of Analytics dimensions. E.g., &#39;ga:browser,ga:city&#39;. | [optional] 
 **filters** | **str**| A comma-separated list of dimension or metric filters to be applied to Analytics data. | [optional] 
 **include_empty_rows** | **bool**| The response will include empty rows if this parameter is set to true, the default is true | [optional] 
 **max_results** | **int**| The maximum number of entries to include in this feed. | [optional] 
 **output** | **str**| The selected format for the response. Default format is JSON. | [optional] 
 **sampling_level** | **str**| The desired sampling level. | [optional] 
 **segment** | **str**| An Analytics segment to be applied to data. | [optional] 
 **sort** | **str**| A comma-separated list of dimensions or metrics that determine the sort order for Analytics data. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**GaData**](GaData.md)

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

# **analytics_data_mcf_get**
> McfData analytics_data_mcf_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, sampling_level=sampling_level, sort=sort, start_index=start_index)



Returns Analytics Multi-Channel Funnels data for a view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.mcf_data import McfData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.DataApi(api_client)
    ids = 'ids_example' # str | Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
    start_date = 'start_date_example' # str | Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
    end_date = 'end_date_example' # str | End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo.
    metrics = 'metrics_example' # str | A comma-separated list of Multi-Channel Funnels metrics. E.g., 'mcf:totalConversions,mcf:totalConversionValue'. At least one metric must be specified.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    dimensions = 'dimensions_example' # str | A comma-separated list of Multi-Channel Funnels dimensions. E.g., 'mcf:source,mcf:medium'. (optional)
    filters = 'filters_example' # str | A comma-separated list of dimension or metric filters to be applied to the Analytics data. (optional)
    max_results = 56 # int | The maximum number of entries to include in this feed. (optional)
    sampling_level = 'sampling_level_example' # str | The desired sampling level. (optional)
    sort = 'sort_example' # str | A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_response = api_instance.analytics_data_mcf_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, sampling_level=sampling_level, sort=sort, start_index=start_index)
        print("The response of DataApi->analytics_data_mcf_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->analytics_data_mcf_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Unique table ID for retrieving Analytics data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. | 
 **start_date** | **str**| Start date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. | 
 **end_date** | **str**| End date for fetching Analytics data. Requests can specify a start date formatted as YYYY-MM-DD, or as a relative date (e.g., today, yesterday, or 7daysAgo). The default value is 7daysAgo. | 
 **metrics** | **str**| A comma-separated list of Multi-Channel Funnels metrics. E.g., &#39;mcf:totalConversions,mcf:totalConversionValue&#39;. At least one metric must be specified. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **dimensions** | **str**| A comma-separated list of Multi-Channel Funnels dimensions. E.g., &#39;mcf:source,mcf:medium&#39;. | [optional] 
 **filters** | **str**| A comma-separated list of dimension or metric filters to be applied to the Analytics data. | [optional] 
 **max_results** | **int**| The maximum number of entries to include in this feed. | [optional] 
 **sampling_level** | **str**| The desired sampling level. | [optional] 
 **sort** | **str**| A comma-separated list of dimensions or metrics that determine the sort order for the Analytics data. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

[**McfData**](McfData.md)

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

# **analytics_data_realtime_get**
> RealtimeData analytics_data_realtime_get(ids, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, sort=sort)



Returns real time data for a view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.realtime_data import RealtimeData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://analytics.googleapis.com/analytics/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://analytics.googleapis.com/analytics/v3"
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
    api_instance = openapi_client.DataApi(api_client)
    ids = 'ids_example' # str | Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
    metrics = 'metrics_example' # str | A comma-separated list of real time metrics. E.g., 'rt:activeUsers'. At least one metric must be specified.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    dimensions = 'dimensions_example' # str | A comma-separated list of real time dimensions. E.g., 'rt:medium,rt:city'. (optional)
    filters = 'filters_example' # str | A comma-separated list of dimension or metric filters to be applied to real time data. (optional)
    max_results = 56 # int | The maximum number of entries to include in this feed. (optional)
    sort = 'sort_example' # str | A comma-separated list of dimensions or metrics that determine the sort order for real time data. (optional)

    try:
        api_response = api_instance.analytics_data_realtime_get(ids, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, sort=sort)
        print("The response of DataApi->analytics_data_realtime_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataApi->analytics_data_realtime_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Unique table ID for retrieving real time data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. | 
 **metrics** | **str**| A comma-separated list of real time metrics. E.g., &#39;rt:activeUsers&#39;. At least one metric must be specified. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **dimensions** | **str**| A comma-separated list of real time dimensions. E.g., &#39;rt:medium,rt:city&#39;. | [optional] 
 **filters** | **str**| A comma-separated list of dimension or metric filters to be applied to real time data. | [optional] 
 **max_results** | **int**| The maximum number of entries to include in this feed. | [optional] 
 **sort** | **str**| A comma-separated list of dimensions or metrics that determine the sort order for real time data. | [optional] 

### Return type

[**RealtimeData**](RealtimeData.md)

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

