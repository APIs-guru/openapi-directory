# openapi_client.ProcessesApi

All URIs are relative to *https://script.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**script_processes_list**](ProcessesApi.md#script_processes_list) | **GET** /v1/processes | 
[**script_processes_list_script_processes**](ProcessesApi.md#script_processes_list_script_processes) | **GET** /v1/processes:listScriptProcesses | 


# **script_processes_list**
> ListUserProcessesResponse script_processes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, user_process_filter_deployment_id=user_process_filter_deployment_id, user_process_filter_end_time=user_process_filter_end_time, user_process_filter_function_name=user_process_filter_function_name, user_process_filter_project_name=user_process_filter_project_name, user_process_filter_script_id=user_process_filter_script_id, user_process_filter_start_time=user_process_filter_start_time, user_process_filter_statuses=user_process_filter_statuses, user_process_filter_types=user_process_filter_types, user_process_filter_user_access_levels=user_process_filter_user_access_levels)



List information about processes made by or on behalf of a user, such as process type and current status.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_user_processes_response import ListUserProcessesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://script.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://script.googleapis.com"
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
    api_instance = openapi_client.ProcessesApi(api_client)
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
    page_size = 56 # int | The maximum number of returned processes per page of results. Defaults to 50. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. (optional)
    user_process_filter_deployment_id = 'user_process_filter_deployment_id_example' # str | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. (optional)
    user_process_filter_end_time = 'user_process_filter_end_time_example' # str | Optional field used to limit returned processes to those that completed on or before the given timestamp. (optional)
    user_process_filter_function_name = 'user_process_filter_function_name_example' # str | Optional field used to limit returned processes to those originating from a script function with the given function name. (optional)
    user_process_filter_project_name = 'user_process_filter_project_name_example' # str | Optional field used to limit returned processes to those originating from projects with project names containing a specific string. (optional)
    user_process_filter_script_id = 'user_process_filter_script_id_example' # str | Optional field used to limit returned processes to those originating from projects with a specific script ID. (optional)
    user_process_filter_start_time = 'user_process_filter_start_time_example' # str | Optional field used to limit returned processes to those that were started on or after the given timestamp. (optional)
    user_process_filter_statuses = ['user_process_filter_statuses_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified process statuses. (optional)
    user_process_filter_types = ['user_process_filter_types_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified process types. (optional)
    user_process_filter_user_access_levels = ['user_process_filter_user_access_levels_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified user access levels. (optional)

    try:
        api_response = api_instance.script_processes_list(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, user_process_filter_deployment_id=user_process_filter_deployment_id, user_process_filter_end_time=user_process_filter_end_time, user_process_filter_function_name=user_process_filter_function_name, user_process_filter_project_name=user_process_filter_project_name, user_process_filter_script_id=user_process_filter_script_id, user_process_filter_start_time=user_process_filter_start_time, user_process_filter_statuses=user_process_filter_statuses, user_process_filter_types=user_process_filter_types, user_process_filter_user_access_levels=user_process_filter_user_access_levels)
        print("The response of ProcessesApi->script_processes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessesApi->script_processes_list: %s\n" % e)
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
 **page_size** | **int**| The maximum number of returned processes per page of results. Defaults to 50. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from a previous response. | [optional] 
 **user_process_filter_deployment_id** | **str**| Optional field used to limit returned processes to those originating from projects with a specific deployment ID. | [optional] 
 **user_process_filter_end_time** | **str**| Optional field used to limit returned processes to those that completed on or before the given timestamp. | [optional] 
 **user_process_filter_function_name** | **str**| Optional field used to limit returned processes to those originating from a script function with the given function name. | [optional] 
 **user_process_filter_project_name** | **str**| Optional field used to limit returned processes to those originating from projects with project names containing a specific string. | [optional] 
 **user_process_filter_script_id** | **str**| Optional field used to limit returned processes to those originating from projects with a specific script ID. | [optional] 
 **user_process_filter_start_time** | **str**| Optional field used to limit returned processes to those that were started on or after the given timestamp. | [optional] 
 **user_process_filter_statuses** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified process statuses. | [optional] 
 **user_process_filter_types** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified process types. | [optional] 
 **user_process_filter_user_access_levels** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified user access levels. | [optional] 

### Return type

[**ListUserProcessesResponse**](ListUserProcessesResponse.md)

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

# **script_processes_list_script_processes**
> ListScriptProcessesResponse script_processes_list_script_processes(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, script_id=script_id, script_process_filter_deployment_id=script_process_filter_deployment_id, script_process_filter_end_time=script_process_filter_end_time, script_process_filter_function_name=script_process_filter_function_name, script_process_filter_start_time=script_process_filter_start_time, script_process_filter_statuses=script_process_filter_statuses, script_process_filter_types=script_process_filter_types, script_process_filter_user_access_levels=script_process_filter_user_access_levels)



List information about a script's executed processes, such as process type and current status.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_script_processes_response import ListScriptProcessesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://script.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://script.googleapis.com"
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
    api_instance = openapi_client.ProcessesApi(api_client)
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
    page_size = 56 # int | The maximum number of returned processes per page of results. Defaults to 50. (optional)
    page_token = 'page_token_example' # str | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. (optional)
    script_id = 'script_id_example' # str | The script ID of the project whose processes are listed. (optional)
    script_process_filter_deployment_id = 'script_process_filter_deployment_id_example' # str | Optional field used to limit returned processes to those originating from projects with a specific deployment ID. (optional)
    script_process_filter_end_time = 'script_process_filter_end_time_example' # str | Optional field used to limit returned processes to those that completed on or before the given timestamp. (optional)
    script_process_filter_function_name = 'script_process_filter_function_name_example' # str | Optional field used to limit returned processes to those originating from a script function with the given function name. (optional)
    script_process_filter_start_time = 'script_process_filter_start_time_example' # str | Optional field used to limit returned processes to those that were started on or after the given timestamp. (optional)
    script_process_filter_statuses = ['script_process_filter_statuses_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified process statuses. (optional)
    script_process_filter_types = ['script_process_filter_types_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified process types. (optional)
    script_process_filter_user_access_levels = ['script_process_filter_user_access_levels_example'] # List[str] | Optional field used to limit returned processes to those having one of the specified user access levels. (optional)

    try:
        api_response = api_instance.script_processes_list_script_processes(xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, page_size=page_size, page_token=page_token, script_id=script_id, script_process_filter_deployment_id=script_process_filter_deployment_id, script_process_filter_end_time=script_process_filter_end_time, script_process_filter_function_name=script_process_filter_function_name, script_process_filter_start_time=script_process_filter_start_time, script_process_filter_statuses=script_process_filter_statuses, script_process_filter_types=script_process_filter_types, script_process_filter_user_access_levels=script_process_filter_user_access_levels)
        print("The response of ProcessesApi->script_processes_list_script_processes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProcessesApi->script_processes_list_script_processes: %s\n" % e)
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
 **page_size** | **int**| The maximum number of returned processes per page of results. Defaults to 50. | [optional] 
 **page_token** | **str**| The token for continuing a previous list request on the next page. This should be set to the value of &#x60;nextPageToken&#x60; from a previous response. | [optional] 
 **script_id** | **str**| The script ID of the project whose processes are listed. | [optional] 
 **script_process_filter_deployment_id** | **str**| Optional field used to limit returned processes to those originating from projects with a specific deployment ID. | [optional] 
 **script_process_filter_end_time** | **str**| Optional field used to limit returned processes to those that completed on or before the given timestamp. | [optional] 
 **script_process_filter_function_name** | **str**| Optional field used to limit returned processes to those originating from a script function with the given function name. | [optional] 
 **script_process_filter_start_time** | **str**| Optional field used to limit returned processes to those that were started on or after the given timestamp. | [optional] 
 **script_process_filter_statuses** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified process statuses. | [optional] 
 **script_process_filter_types** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified process types. | [optional] 
 **script_process_filter_user_access_levels** | [**List[str]**](str.md)| Optional field used to limit returned processes to those having one of the specified user access levels. | [optional] 

### Return type

[**ListScriptProcessesResponse**](ListScriptProcessesResponse.md)

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

