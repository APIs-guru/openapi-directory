# openapi_client.DataApi

All URIs are relative to *https://www.googleapis.com/analytics/v2.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_data_get**](DataApi.md#analytics_data_get) | **GET** /data | 


# **analytics_data_get**
> analytics_data_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, segment=segment, sort=sort, start_index=start_index)



Returns Analytics report data for a view (profile).

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/analytics/v2.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/analytics/v2.4"
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
    ids = 'ids_example' # str | Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID.
    start_date = 'start_date_example' # str | Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD.
    end_date = 'end_date_example' # str | End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD.
    metrics = 'metrics_example' # str | A comma-separated list of Analytics metrics. E.g., 'ga:sessions,ga:pageviews'. At least one metric must be specified to retrieve a valid Analytics report.
    alt = atom # str | Data format for the response. (optional) (default to atom)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = False # bool | Returns response with indentations and line breaks. (optional) (default to False)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    dimensions = 'dimensions_example' # str | A comma-separated list of Analytics dimensions. E.g., 'ga:browser,ga:city'. (optional)
    filters = 'filters_example' # str | A comma-separated list of dimension or metric filters to be applied to the report data. (optional)
    max_results = 56 # int | The maximum number of entries to include in this feed. (optional)
    segment = 'segment_example' # str | An Analytics advanced segment to be applied to the report data. (optional)
    sort = 'sort_example' # str | A comma-separated list of dimensions or metrics that determine the sort order for the report data. (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. (optional)

    try:
        api_instance.analytics_data_get(ids, start_date, end_date, metrics, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimensions=dimensions, filters=filters, max_results=max_results, segment=segment, sort=sort, start_index=start_index)
    except Exception as e:
        print("Exception when calling DataApi->analytics_data_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | **str**| Unique table ID for retrieving report data. Table ID is of the form ga:XXXX, where XXXX is the Analytics view (profile) ID. | 
 **start_date** | **str**| Start date for fetching report data. All requests should specify a start date formatted as YYYY-MM-DD. | 
 **end_date** | **str**| End date for fetching report data. All requests should specify an end date formatted as YYYY-MM-DD. | 
 **metrics** | **str**| A comma-separated list of Analytics metrics. E.g., &#39;ga:sessions,ga:pageviews&#39;. At least one metric must be specified to retrieve a valid Analytics report. | 
 **alt** | **str**| Data format for the response. | [optional] [default to atom]
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] [default to False]
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **dimensions** | **str**| A comma-separated list of Analytics dimensions. E.g., &#39;ga:browser,ga:city&#39;. | [optional] 
 **filters** | **str**| A comma-separated list of dimension or metric filters to be applied to the report data. | [optional] 
 **max_results** | **int**| The maximum number of entries to include in this feed. | [optional] 
 **segment** | **str**| An Analytics advanced segment to be applied to the report data. | [optional] 
 **sort** | **str**| A comma-separated list of dimensions or metrics that determine the sort order for the report data. | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter. | [optional] 

### Return type

void (empty response body)

### Authorization

[Oauth2c](../README.md#Oauth2c), [Oauth2](../README.md#Oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

