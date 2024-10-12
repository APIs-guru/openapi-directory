# openapi_client.DebuggerApi

All URIs are relative to *https://clouddebugger.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clouddebugger_debugger_debuggees_breakpoints_delete**](DebuggerApi.md#clouddebugger_debugger_debuggees_breakpoints_delete) | **DELETE** /v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId} | 
[**clouddebugger_debugger_debuggees_breakpoints_get**](DebuggerApi.md#clouddebugger_debugger_debuggees_breakpoints_get) | **GET** /v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId} | 
[**clouddebugger_debugger_debuggees_breakpoints_list**](DebuggerApi.md#clouddebugger_debugger_debuggees_breakpoints_list) | **GET** /v2/debugger/debuggees/{debuggeeId}/breakpoints | 
[**clouddebugger_debugger_debuggees_breakpoints_set**](DebuggerApi.md#clouddebugger_debugger_debuggees_breakpoints_set) | **POST** /v2/debugger/debuggees/{debuggeeId}/breakpoints/set | 
[**clouddebugger_debugger_debuggees_list**](DebuggerApi.md#clouddebugger_debugger_debuggees_list) | **GET** /v2/debugger/debuggees | 


# **clouddebugger_debugger_debuggees_breakpoints_delete**
> object clouddebugger_debugger_debuggees_breakpoints_delete(debuggee_id, breakpoint_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version)



Deletes the breakpoint from the debuggee.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouddebugger.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouddebugger.googleapis.com"
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
    api_instance = openapi_client.DebuggerApi(api_client)
    debuggee_id = 'debuggee_id_example' # str | Required. ID of the debuggee whose breakpoint to delete.
    breakpoint_id = 'breakpoint_id_example' # str | Required. ID of the breakpoint to delete.
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
    client_version = 'client_version_example' # str | Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`). (optional)

    try:
        api_response = api_instance.clouddebugger_debugger_debuggees_breakpoints_delete(debuggee_id, breakpoint_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version)
        print("The response of DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debuggee_id** | **str**| Required. ID of the debuggee whose breakpoint to delete. | 
 **breakpoint_id** | **str**| Required. ID of the breakpoint to delete. | 
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
 **client_version** | **str**| Required. The client version making the call. Schema: &#x60;domain/type/version&#x60; (e.g., &#x60;google.com/intellij/v1&#x60;). | [optional] 

### Return type

**object**

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

# **clouddebugger_debugger_debuggees_breakpoints_get**
> GetBreakpointResponse clouddebugger_debugger_debuggees_breakpoints_get(debuggee_id, breakpoint_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version)



Gets breakpoint information.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.get_breakpoint_response import GetBreakpointResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouddebugger.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouddebugger.googleapis.com"
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
    api_instance = openapi_client.DebuggerApi(api_client)
    debuggee_id = 'debuggee_id_example' # str | Required. ID of the debuggee whose breakpoint to get.
    breakpoint_id = 'breakpoint_id_example' # str | Required. ID of the breakpoint to get.
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
    client_version = 'client_version_example' # str | Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`). (optional)

    try:
        api_response = api_instance.clouddebugger_debugger_debuggees_breakpoints_get(debuggee_id, breakpoint_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version)
        print("The response of DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debuggee_id** | **str**| Required. ID of the debuggee whose breakpoint to get. | 
 **breakpoint_id** | **str**| Required. ID of the breakpoint to get. | 
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
 **client_version** | **str**| Required. The client version making the call. Schema: &#x60;domain/type/version&#x60; (e.g., &#x60;google.com/intellij/v1&#x60;). | [optional] 

### Return type

[**GetBreakpointResponse**](GetBreakpointResponse.md)

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

# **clouddebugger_debugger_debuggees_breakpoints_list**
> ListBreakpointsResponse clouddebugger_debugger_debuggees_breakpoints_list(debuggee_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, action_value=action_value, client_version=client_version, include_all_users=include_all_users, include_inactive=include_inactive, strip_results=strip_results, wait_token=wait_token)



Lists all breakpoints for the debuggee.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_breakpoints_response import ListBreakpointsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouddebugger.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouddebugger.googleapis.com"
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
    api_instance = openapi_client.DebuggerApi(api_client)
    debuggee_id = 'debuggee_id_example' # str | Required. ID of the debuggee whose breakpoints to list.
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
    action_value = 'action_value_example' # str | Only breakpoints with the specified action will pass the filter. (optional)
    client_version = 'client_version_example' # str | Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`). (optional)
    include_all_users = True # bool | When set to `true`, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller. (optional)
    include_inactive = True # bool | When set to `true`, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints. (optional)
    strip_results = True # bool | This field is deprecated. The following fields are always stripped out of the result: `stack_frames`, `evaluated_expressions` and `variable_table`. (optional)
    wait_token = 'wait_token_example' # str | A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response. The error code `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which should be called again with the same `wait_token`. (optional)

    try:
        api_response = api_instance.clouddebugger_debugger_debuggees_breakpoints_list(debuggee_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, action_value=action_value, client_version=client_version, include_all_users=include_all_users, include_inactive=include_inactive, strip_results=strip_results, wait_token=wait_token)
        print("The response of DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debuggee_id** | **str**| Required. ID of the debuggee whose breakpoints to list. | 
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
 **action_value** | **str**| Only breakpoints with the specified action will pass the filter. | [optional] 
 **client_version** | **str**| Required. The client version making the call. Schema: &#x60;domain/type/version&#x60; (e.g., &#x60;google.com/intellij/v1&#x60;). | [optional] 
 **include_all_users** | **bool**| When set to &#x60;true&#x60;, the response includes the list of breakpoints set by any user. Otherwise, it includes only breakpoints set by the caller. | [optional] 
 **include_inactive** | **bool**| When set to &#x60;true&#x60;, the response includes active and inactive breakpoints. Otherwise, it includes only active breakpoints. | [optional] 
 **strip_results** | **bool**| This field is deprecated. The following fields are always stripped out of the result: &#x60;stack_frames&#x60;, &#x60;evaluated_expressions&#x60; and &#x60;variable_table&#x60;. | [optional] 
 **wait_token** | **str**| A wait token that, if specified, blocks the call until the breakpoints list has changed, or a server selected timeout has expired. The value should be set from the last response. The error code &#x60;google.rpc.Code.ABORTED&#x60; (RPC) is returned on wait timeout, which should be called again with the same &#x60;wait_token&#x60;. | [optional] 

### Return type

[**ListBreakpointsResponse**](ListBreakpointsResponse.md)

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

# **clouddebugger_debugger_debuggees_breakpoints_set**
> SetBreakpointResponse clouddebugger_debugger_debuggees_breakpoints_set(debuggee_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, canary_option=canary_option, client_version=client_version, breakpoint=breakpoint)



Sets the breakpoint to the debuggee.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.breakpoint import Breakpoint
from openapi_client.models.set_breakpoint_response import SetBreakpointResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouddebugger.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouddebugger.googleapis.com"
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
    api_instance = openapi_client.DebuggerApi(api_client)
    debuggee_id = 'debuggee_id_example' # str | Required. ID of the debuggee where the breakpoint is to be set.
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
    canary_option = 'canary_option_example' # str | The canary option set by the user upon setting breakpoint. (optional)
    client_version = 'client_version_example' # str | Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`). (optional)
    breakpoint = openapi_client.Breakpoint() # Breakpoint |  (optional)

    try:
        api_response = api_instance.clouddebugger_debugger_debuggees_breakpoints_set(debuggee_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, canary_option=canary_option, client_version=client_version, breakpoint=breakpoint)
        print("The response of DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_set:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebuggerApi->clouddebugger_debugger_debuggees_breakpoints_set: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debuggee_id** | **str**| Required. ID of the debuggee where the breakpoint is to be set. | 
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
 **canary_option** | **str**| The canary option set by the user upon setting breakpoint. | [optional] 
 **client_version** | **str**| Required. The client version making the call. Schema: &#x60;domain/type/version&#x60; (e.g., &#x60;google.com/intellij/v1&#x60;). | [optional] 
 **breakpoint** | [**Breakpoint**](Breakpoint.md)|  | [optional] 

### Return type

[**SetBreakpointResponse**](SetBreakpointResponse.md)

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

# **clouddebugger_debugger_debuggees_list**
> ListDebuggeesResponse clouddebugger_debugger_debuggees_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version, include_inactive=include_inactive, project=project)



Lists all the debuggees that the user has access to.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_debuggees_response import ListDebuggeesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouddebugger.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouddebugger.googleapis.com"
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
    api_instance = openapi_client.DebuggerApi(api_client)
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
    client_version = 'client_version_example' # str | Required. The client version making the call. Schema: `domain/type/version` (e.g., `google.com/intellij/v1`). (optional)
    include_inactive = True # bool | When set to `true`, the result includes all debuggees. Otherwise, the result includes only debuggees that are active. (optional)
    project = 'project_example' # str | Required. Project number of a Google Cloud project whose debuggees to list. (optional)

    try:
        api_response = api_instance.clouddebugger_debugger_debuggees_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, client_version=client_version, include_inactive=include_inactive, project=project)
        print("The response of DebuggerApi->clouddebugger_debugger_debuggees_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DebuggerApi->clouddebugger_debugger_debuggees_list: %s\n" % e)
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
 **client_version** | **str**| Required. The client version making the call. Schema: &#x60;domain/type/version&#x60; (e.g., &#x60;google.com/intellij/v1&#x60;). | [optional] 
 **include_inactive** | **bool**| When set to &#x60;true&#x60;, the result includes all debuggees. Otherwise, the result includes only debuggees that are active. | [optional] 
 **project** | **str**| Required. Project number of a Google Cloud project whose debuggees to list. | [optional] 

### Return type

[**ListDebuggeesResponse**](ListDebuggeesResponse.md)

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

