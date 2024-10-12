# openapi_client.AccountReportsApi

All URIs are relative to *https://localservices.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**localservices_account_reports_search**](AccountReportsApi.md#localservices_account_reports_search) | **GET** /v1/accountReports:search | 


# **localservices_account_reports_search**
> GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse localservices_account_reports_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_date_day=end_date_day, end_date_month=end_date_month, end_date_year=end_date_year, page_size=page_size, page_token=page_token, query=query, start_date_day=start_date_day, start_date_month=start_date_month, start_date_year=start_date_year)



Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.google_ads_homeservices_localservices_v1_search_account_reports_response import GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://localservices.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://localservices.googleapis.com"
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
    api_instance = openapi_client.AccountReportsApi(api_client)
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
    end_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    end_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    end_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)
    page_size = 56 # int | The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. (optional)
    page_token = 'page_token_example' # str | The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. (optional)
    query = 'query_example' # str | A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required. (optional)
    start_date_day = 56 # int | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. (optional)
    start_date_month = 56 # int | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. (optional)
    start_date_year = 56 # int | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. (optional)

    try:
        api_response = api_instance.localservices_account_reports_search(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_date_day=end_date_day, end_date_month=end_date_month, end_date_year=end_date_year, page_size=page_size, page_token=page_token, query=query, start_date_day=start_date_day, start_date_month=start_date_month, start_date_year=start_date_year)
        print("The response of AccountReportsApi->localservices_account_reports_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AccountReportsApi->localservices_account_reports_search: %s\n" % e)
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
 **end_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **end_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **end_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 
 **page_size** | **int**| The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. | [optional] 
 **page_token** | **str**| The &#x60;next_page_token&#x60; value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. | [optional] 
 **query** | **str**| A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required. | [optional] 
 **start_date_day** | **int**| Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn&#39;t significant. | [optional] 
 **start_date_month** | **int**| Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. | [optional] 
 **start_date_year** | **int**| Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. | [optional] 

### Return type

[**GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse**](GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse.md)

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

