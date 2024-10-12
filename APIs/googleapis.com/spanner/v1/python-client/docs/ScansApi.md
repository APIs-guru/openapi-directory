# openapi_client.ScansApi

All URIs are relative to *https://spanner.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spanner_scans_list**](ScansApi.md#spanner_scans_list) | **GET** /v1/{parent} | 


# **spanner_scans_list**
> ListScansResponse spanner_scans_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, view=view)



Return available scans given a Database-specific resource name.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_scans_response import ListScansResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://spanner.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://spanner.googleapis.com"
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
    api_instance = openapi_client.ScansApi(api_client)
    parent = 'parent_example' # str | Required. The unique name of the parent resource, specific to the Database service implementing this interface.
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
    filter = 'filter_example' # str | A filter expression to restrict the results based on information present in the available Scan collection. The filter applies to all fields within the Scan message except for `data`. (optional)
    page_size = 56 # int | The maximum number of items to return. (optional)
    page_token = 'page_token_example' # str | The next_page_token value returned from a previous List request, if any. (optional)
    view = 'view_example' # str | Specifies which parts of the Scan should be returned in the response. Note, only the SUMMARY view (the default) is currently supported for ListScans. (optional)

    try:
        api_response = api_instance.spanner_scans_list(parent, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, filter=filter, page_size=page_size, page_token=page_token, view=view)
        print("The response of ScansApi->spanner_scans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScansApi->spanner_scans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **str**| Required. The unique name of the parent resource, specific to the Database service implementing this interface. | 
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
 **filter** | **str**| A filter expression to restrict the results based on information present in the available Scan collection. The filter applies to all fields within the Scan message except for &#x60;data&#x60;. | [optional] 
 **page_size** | **int**| The maximum number of items to return. | [optional] 
 **page_token** | **str**| The next_page_token value returned from a previous List request, if any. | [optional] 
 **view** | **str**| Specifies which parts of the Scan should be returned in the response. Note, only the SUMMARY view (the default) is currently supported for ListScans. | [optional] 

### Return type

[**ListScansResponse**](ListScansResponse.md)

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

