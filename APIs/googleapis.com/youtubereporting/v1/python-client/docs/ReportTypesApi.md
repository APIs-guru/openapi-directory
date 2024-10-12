# openapi_client.ReportTypesApi

All URIs are relative to *https://youtubereporting.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**youtubereporting_report_types_list**](ReportTypesApi.md#youtubereporting_report_types_list) | **GET** /v1/reportTypes | 


# **youtubereporting_report_types_list**
> ListReportTypesResponse youtubereporting_report_types_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_system_managed=include_system_managed, on_behalf_of_content_owner=on_behalf_of_content_owner, page_size=page_size, page_token=page_token)



Lists report types.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_report_types_response import ListReportTypesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://youtubereporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://youtubereporting.googleapis.com"
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
    api_instance = openapi_client.ReportTypesApi(api_client)
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
    include_system_managed = True # bool | If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned. (optional)
    on_behalf_of_content_owner = 'on_behalf_of_content_owner_example' # str | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). (optional)
    page_size = 56 # int | Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. (optional)
    page_token = 'page_token_example' # str | A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method. (optional)

    try:
        api_response = api_instance.youtubereporting_report_types_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, include_system_managed=include_system_managed, on_behalf_of_content_owner=on_behalf_of_content_owner, page_size=page_size, page_token=page_token)
        print("The response of ReportTypesApi->youtubereporting_report_types_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReportTypesApi->youtubereporting_report_types_list: %s\n" % e)
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
 **include_system_managed** | **bool**| If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned. | [optional] 
 **on_behalf_of_content_owner** | **str**| The content owner&#39;s external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). | [optional] 
 **page_size** | **int**| Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. | [optional] 
 **page_token** | **str**| A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the &#x60;ListReportTypes&#x60; method. | [optional] 

### Return type

[**ListReportTypesResponse**](ListReportTypesResponse.md)

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

