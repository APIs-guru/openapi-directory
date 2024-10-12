# openapi_client.ReportsApi

All URIs are relative to *https://www.googleapis.com/adsensehost/v4.1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adsensehost_reports_generate**](ReportsApi.md#adsensehost_reports_generate) | **GET** /reports | 


# **adsensehost_reports_generate**
> Report adsensehost_reports_generate(start_date, end_date, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimension=dimension, filter=filter, locale=locale, max_results=max_results, metric=metric, sort=sort, start_index=start_index)



Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify \"alt=csv\" as a query parameter.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.report import Report
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/adsensehost/v4.1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/adsensehost/v4.1"
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
    start_date = 'start_date_example' # str | Start of the date range to report on in \"YYYY-MM-DD\" format, inclusive.
    end_date = 'end_date_example' # str | End of the date range to report on in \"YYYY-MM-DD\" format, inclusive.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    dimension = ['dimension_example'] # List[str] | Dimensions to base the report on. (optional)
    filter = ['filter_example'] # List[str] | Filters to be run on the report. (optional)
    locale = 'locale_example' # str | Optional locale to use for translating report output to a local language. Defaults to \"en_US\" if not specified. (optional)
    max_results = 56 # int | The maximum number of rows of report data to return. (optional)
    metric = ['metric_example'] # List[str] | Numeric columns to include in the report. (optional)
    sort = ['sort_example'] # List[str] | The name of a dimension or metric to sort the resulting report on, optionally prefixed with \"+\" to sort ascending or \"-\" to sort descending. If no prefix is specified, the column is sorted ascending. (optional)
    start_index = 56 # int | Index of the first row of report data to return. (optional)

    try:
        api_response = api_instance.adsensehost_reports_generate(start_date, end_date, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, dimension=dimension, filter=filter, locale=locale, max_results=max_results, metric=metric, sort=sort, start_index=start_index)
        print("The response of ReportsApi->adsensehost_reports_generate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportsApi->adsensehost_reports_generate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start_date** | **str**| Start of the date range to report on in \&quot;YYYY-MM-DD\&quot; format, inclusive. | 
 **end_date** | **str**| End of the date range to report on in \&quot;YYYY-MM-DD\&quot; format, inclusive. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **dimension** | [**List[str]**](str.md)| Dimensions to base the report on. | [optional] 
 **filter** | [**List[str]**](str.md)| Filters to be run on the report. | [optional] 
 **locale** | **str**| Optional locale to use for translating report output to a local language. Defaults to \&quot;en_US\&quot; if not specified. | [optional] 
 **max_results** | **int**| The maximum number of rows of report data to return. | [optional] 
 **metric** | [**List[str]**](str.md)| Numeric columns to include in the report. | [optional] 
 **sort** | [**List[str]**](str.md)| The name of a dimension or metric to sort the resulting report on, optionally prefixed with \&quot;+\&quot; to sort ascending or \&quot;-\&quot; to sort descending. If no prefix is specified, the column is sorted ascending. | [optional] 
 **start_index** | **int**| Index of the first row of report data to return. | [optional] 

### Return type

[**Report**](Report.md)

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

