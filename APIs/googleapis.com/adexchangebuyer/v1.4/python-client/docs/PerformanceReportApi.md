# openapi_client.PerformanceReportApi

All URIs are relative to *https://www.googleapis.com/adexchangebuyer/v1.4*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adexchangebuyer_performance_report_list**](PerformanceReportApi.md#adexchangebuyer_performance_report_list) | **GET** /performancereport | 


# **adexchangebuyer_performance_report_list**
> PerformanceReportList adexchangebuyer_performance_report_list(account_id, end_date_time, start_date_time, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)



Retrieves the authenticated user's list of performance metrics.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.performance_report_list import PerformanceReportList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://www.googleapis.com/adexchangebuyer/v1.4
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://www.googleapis.com/adexchangebuyer/v1.4"
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
    api_instance = openapi_client.PerformanceReportApi(api_client)
    account_id = 'account_id_example' # str | The account id to get the reports.
    end_date_time = 'end_date_time_example' # str | The end time of the report in ISO 8601 timestamp format using UTC.
    start_date_time = 'start_date_time_example' # str | The start time of the report in ISO 8601 timestamp format using UTC.
    alt = 'alt_example' # str | Data format for the response. (optional)
    fields = 'fields_example' # str | Selector specifying which fields to include in a partial response. (optional)
    key = 'key_example' # str | API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. (optional)
    oauth_token = 'oauth_token_example' # str | OAuth 2.0 token for the current user. (optional)
    pretty_print = True # bool | Returns response with indentations and line breaks. (optional)
    quota_user = 'quota_user_example' # str | An opaque string that represents a user for quota purposes. Must not exceed 40 characters. (optional)
    user_ip = 'user_ip_example' # str | Deprecated. Please use quotaUser instead. (optional)
    max_results = 56 # int | Maximum number of entries returned on one result page. If not set, the default is 100. Optional. (optional)
    page_token = 'page_token_example' # str | A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of \"nextPageToken\" from the previous response. Optional. (optional)

    try:
        api_response = api_instance.adexchangebuyer_performance_report_list(account_id, end_date_time, start_date_time, alt=alt, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, user_ip=user_ip, max_results=max_results, page_token=page_token)
        print("The response of PerformanceReportApi->adexchangebuyer_performance_report_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PerformanceReportApi->adexchangebuyer_performance_report_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| The account id to get the reports. | 
 **end_date_time** | **str**| The end time of the report in ISO 8601 timestamp format using UTC. | 
 **start_date_time** | **str**| The start time of the report in ISO 8601 timestamp format using UTC. | 
 **alt** | **str**| Data format for the response. | [optional] 
 **fields** | **str**| Selector specifying which fields to include in a partial response. | [optional] 
 **key** | **str**| API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. | [optional] 
 **oauth_token** | **str**| OAuth 2.0 token for the current user. | [optional] 
 **pretty_print** | **bool**| Returns response with indentations and line breaks. | [optional] 
 **quota_user** | **str**| An opaque string that represents a user for quota purposes. Must not exceed 40 characters. | [optional] 
 **user_ip** | **str**| Deprecated. Please use quotaUser instead. | [optional] 
 **max_results** | **int**| Maximum number of entries returned on one result page. If not set, the default is 100. Optional. | [optional] 
 **page_token** | **str**| A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of \&quot;nextPageToken\&quot; from the previous response. Optional. | [optional] 

### Return type

[**PerformanceReportList**](PerformanceReportList.md)

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

