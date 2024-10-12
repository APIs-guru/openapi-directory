# openapi_client.ReportsApi

All URIs are relative to *https://youtubeanalytics.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**youtube_analytics_reports_query**](ReportsApi.md#youtube_analytics_reports_query) | **GET** /v2/reports | 


# **youtube_analytics_reports_query**
> QueryResponse youtube_analytics_reports_query(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, currency=currency, dimensions=dimensions, end_date=end_date, filters=filters, ids=ids, include_historical_channel_data=include_historical_channel_data, max_results=max_results, metrics=metrics, sort=sort, start_date=start_date, start_index=start_index)



Retrieve your YouTube Analytics reports.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.query_response import QueryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://youtubeanalytics.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://youtubeanalytics.googleapis.com"
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
    api_instance = openapi_client.ReportsApi(api_client)
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
    currency = 'currency_example' # str | The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.\", pattern: [A-Z]{3} (optional)
    dimensions = 'dimensions_example' # str | A comma-separated list of YouTube Analytics dimensions, such as `views` or `ageGroup,gender`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document for definitions of those dimensions.\" pattern: [0-9a-zA-Z,]+ (optional)
    end_date = 'end_date_example' # str | The end date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: [0-9]{4}-[0-9]{2}-[0-9]{2} (optional)
    filters = 'filters_example' # str | A list of filters that should be applied when retrieving YouTube Analytics data. The [Available Reports](/youtube/analytics/v2/available_reports) document identifies the dimensions that can be used to filter each report, and the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (`;`), and the returned result table will satisfy both filters. For example, a filters parameter value of `video==dMH0bHeiRNg;country==IT` restricts the result set to include data for the given video in Italy.\", (optional)
    ids = 'ids_example' # str | Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the `ids` parameter value to `channel==CHANNEL_ID`, where `CHANNEL_ID` specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the `ids` parameter value to `contentOwner==OWNER_NAME`, where `OWNER_NAME` is the CMS name of the content owner. required: true, pattern: [a-zA-Z]+==[a-zA-Z0-9_+-]+ (optional)
    include_historical_channel_data = True # bool | If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.\", (optional)
    max_results = 56 # int | The maximum number of rows to include in the response.\", minValue: 1 (optional)
    metrics = 'metrics_example' # str | A comma-separated list of YouTube Analytics metrics, such as `views` or `likes,dislikes`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the metrics available in each report, and see the [Metrics](/youtube/analytics/v2/dimsmets/mets) document for definitions of those metrics. required: true, pattern: [0-9a-zA-Z,]+ (optional)
    sort = 'sort_example' # str | A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '`-`' prefix causes descending sort order.\", pattern: [-0-9a-zA-Z,]+ (optional)
    start_date = 'start_date_example' # str | The start date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: \"[0-9]{4}-[0-9]{2}-[0-9]{2} (optional)
    start_index = 56 # int | An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).\", minValue: 1 (optional)

    try:
        api_response = api_instance.youtube_analytics_reports_query(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, currency=currency, dimensions=dimensions, end_date=end_date, filters=filters, ids=ids, include_historical_channel_data=include_historical_channel_data, max_results=max_results, metrics=metrics, sort=sort, start_date=start_date, start_index=start_index)
        print("The response of ReportsApi->youtube_analytics_reports_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->youtube_analytics_reports_query: %s\n" % e)
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
 **currency** | **str**| The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.\&quot;, pattern: [A-Z]{3} | [optional] 
 **dimensions** | **str**| A comma-separated list of YouTube Analytics dimensions, such as &#x60;views&#x60; or &#x60;ageGroup,gender&#x60;. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document for definitions of those dimensions.\&quot; pattern: [0-9a-zA-Z,]+ | [optional] 
 **end_date** | **str**| The end date for fetching YouTube Analytics data. The value should be in &#x60;YYYY-MM-DD&#x60; format. required: true, pattern: [0-9]{4}-[0-9]{2}-[0-9]{2} | [optional] 
 **filters** | **str**| A list of filters that should be applied when retrieving YouTube Analytics data. The [Available Reports](/youtube/analytics/v2/available_reports) document identifies the dimensions that can be used to filter each report, and the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (&#x60;;&#x60;), and the returned result table will satisfy both filters. For example, a filters parameter value of &#x60;video&#x3D;&#x3D;dMH0bHeiRNg;country&#x3D;&#x3D;IT&#x60; restricts the result set to include data for the given video in Italy.\&quot;, | [optional] 
 **ids** | **str**| Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the &#x60;ids&#x60; parameter value to &#x60;channel&#x3D;&#x3D;CHANNEL_ID&#x60;, where &#x60;CHANNEL_ID&#x60; specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the &#x60;ids&#x60; parameter value to &#x60;contentOwner&#x3D;&#x3D;OWNER_NAME&#x60;, where &#x60;OWNER_NAME&#x60; is the CMS name of the content owner. required: true, pattern: [a-zA-Z]+&#x3D;&#x3D;[a-zA-Z0-9_+-]+ | [optional] 
 **include_historical_channel_data** | **bool**| If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.\&quot;, | [optional] 
 **max_results** | **int**| The maximum number of rows to include in the response.\&quot;, minValue: 1 | [optional] 
 **metrics** | **str**| A comma-separated list of YouTube Analytics metrics, such as &#x60;views&#x60; or &#x60;likes,dislikes&#x60;. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the metrics available in each report, and see the [Metrics](/youtube/analytics/v2/dimsmets/mets) document for definitions of those metrics. required: true, pattern: [0-9a-zA-Z,]+ | [optional] 
 **sort** | **str**| A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The &#39;&#x60;-&#x60;&#39; prefix causes descending sort order.\&quot;, pattern: [-0-9a-zA-Z,]+ | [optional] 
 **start_date** | **str**| The start date for fetching YouTube Analytics data. The value should be in &#x60;YYYY-MM-DD&#x60; format. required: true, pattern: \&quot;[0-9]{4}-[0-9]{2}-[0-9]{2} | [optional] 
 **start_index** | **int**| An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).\&quot;, minValue: 1 | [optional] 

### Return type

[**QueryResponse**](QueryResponse.md)

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

