# openapi_client.ProjectsApi

All URIs are relative to *https://cloudtrace.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloudtrace_projects_patch_traces**](ProjectsApi.md#cloudtrace_projects_patch_traces) | **PATCH** /v1/projects/{projectId}/traces | 
[**cloudtrace_projects_traces_get**](ProjectsApi.md#cloudtrace_projects_traces_get) | **GET** /v1/projects/{projectId}/traces/{traceId} | 
[**cloudtrace_projects_traces_list**](ProjectsApi.md#cloudtrace_projects_traces_list) | **GET** /v1/projects/{projectId}/traces | 


# **cloudtrace_projects_patch_traces**
> object cloudtrace_projects_patch_traces(project_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, traces=traces)



Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.traces import Traces
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudtrace.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudtrace.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | Required. ID of the Cloud project where the trace data is stored.
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
    traces = openapi_client.Traces() # Traces |  (optional)

    try:
        api_response = api_instance.cloudtrace_projects_patch_traces(project_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, traces=traces)
        print("The response of ProjectsApi->cloudtrace_projects_patch_traces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudtrace_projects_patch_traces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| Required. ID of the Cloud project where the trace data is stored. | 
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
 **traces** | [**Traces**](Traces.md)|  | [optional] 

### Return type

**object**

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

# **cloudtrace_projects_traces_get**
> Trace cloudtrace_projects_traces_get(project_id, trace_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Gets a single trace by its ID.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.trace import Trace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudtrace.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudtrace.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | Required. ID of the Cloud project where the trace data is stored.
    trace_id = 'trace_id_example' # str | Required. ID of the trace to return.
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

    try:
        api_response = api_instance.cloudtrace_projects_traces_get(project_id, trace_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->cloudtrace_projects_traces_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudtrace_projects_traces_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| Required. ID of the Cloud project where the trace data is stored. | 
 **trace_id** | **str**| Required. ID of the trace to return. | 
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

### Return type

[**Trace**](Trace.md)

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

# **cloudtrace_projects_traces_list**
> ListTracesResponse cloudtrace_projects_traces_list(project_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_time=end_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_time=start_time, view=view)



Returns a list of traces that match the specified filter conditions.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_traces_response import ListTracesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://cloudtrace.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://cloudtrace.googleapis.com"
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
    api_instance = openapi_client.ProjectsApi(api_client)
    project_id = 'project_id_example' # str | Required. ID of the Cloud project where the trace data is stored.
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
    end_time = 'end_time_example' # str | End of the time interval (inclusive) during which the trace data was collected from the application. (optional)
    filter = 'filter_example' # str | Optional. A filter against labels for the request. By default, searches use prefix matching. To specify exact match, prepend a plus symbol (`+`) to the search term. Multiple terms are ANDed. Syntax: * `root:NAME_PREFIX` or `NAME_PREFIX`: Return traces where any root span starts with `NAME_PREFIX`. * `+root:NAME` or `+NAME`: Return traces where any root span's name is exactly `NAME`. * `span:NAME_PREFIX`: Return traces where any span starts with `NAME_PREFIX`. * `+span:NAME`: Return traces where any span's name is exactly `NAME`. * `latency:DURATION`: Return traces whose overall latency is greater or equal to than `DURATION`. Accepted units are nanoseconds (`ns`), milliseconds (`ms`), and seconds (`s`). Default is `ms`. For example, `latency:24ms` returns traces whose overall latency is greater than or equal to 24 milliseconds. * `label:LABEL_KEY`: Return all traces containing the specified label key (exact match, case-sensitive) regardless of the key:value pair's value (including empty values). * `LABEL_KEY:VALUE_PREFIX`: Return all traces containing the specified label key (exact match, case-sensitive) whose value starts with `VALUE_PREFIX`. Both a key and a value must be specified. * `+LABEL_KEY:VALUE`: Return all traces containing a key:value pair exactly matching the specified text. Both a key and a value must be specified. * `method:VALUE`: Equivalent to `/http/method:VALUE`. * `url:VALUE`: Equivalent to `/http/url:VALUE`. (optional)
    order_by = 'order_by_example' # str | Optional. Field used to sort the returned traces. Can be one of the following: * `trace_id` * `name` (`name` field of root span in the trace) * `duration` (difference between `end_time` and `start_time` fields of the root span) * `start` (`start_time` field of the root span) Descending order can be specified by appending `desc` to the sort field (for example, `name desc`). Only one sort field is permitted. (optional)
    page_size = 56 # int | Optional. Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. (optional)
    page_token = 'page_token_example' # str | Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request. (optional)
    start_time = 'start_time_example' # str | Start of the time interval (inclusive) during which the trace data was collected from the application. (optional)
    view = 'view_example' # str | Optional. Type of data returned for traces in the list. Default is `MINIMAL`. (optional)

    try:
        api_response = api_instance.cloudtrace_projects_traces_list(project_id, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, end_time=end_time, filter=filter, order_by=order_by, page_size=page_size, page_token=page_token, start_time=start_time, view=view)
        print("The response of ProjectsApi->cloudtrace_projects_traces_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->cloudtrace_projects_traces_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| Required. ID of the Cloud project where the trace data is stored. | 
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
 **end_time** | **str**| End of the time interval (inclusive) during which the trace data was collected from the application. | [optional] 
 **filter** | **str**| Optional. A filter against labels for the request. By default, searches use prefix matching. To specify exact match, prepend a plus symbol (&#x60;+&#x60;) to the search term. Multiple terms are ANDed. Syntax: * &#x60;root:NAME_PREFIX&#x60; or &#x60;NAME_PREFIX&#x60;: Return traces where any root span starts with &#x60;NAME_PREFIX&#x60;. * &#x60;+root:NAME&#x60; or &#x60;+NAME&#x60;: Return traces where any root span&#39;s name is exactly &#x60;NAME&#x60;. * &#x60;span:NAME_PREFIX&#x60;: Return traces where any span starts with &#x60;NAME_PREFIX&#x60;. * &#x60;+span:NAME&#x60;: Return traces where any span&#39;s name is exactly &#x60;NAME&#x60;. * &#x60;latency:DURATION&#x60;: Return traces whose overall latency is greater or equal to than &#x60;DURATION&#x60;. Accepted units are nanoseconds (&#x60;ns&#x60;), milliseconds (&#x60;ms&#x60;), and seconds (&#x60;s&#x60;). Default is &#x60;ms&#x60;. For example, &#x60;latency:24ms&#x60; returns traces whose overall latency is greater than or equal to 24 milliseconds. * &#x60;label:LABEL_KEY&#x60;: Return all traces containing the specified label key (exact match, case-sensitive) regardless of the key:value pair&#39;s value (including empty values). * &#x60;LABEL_KEY:VALUE_PREFIX&#x60;: Return all traces containing the specified label key (exact match, case-sensitive) whose value starts with &#x60;VALUE_PREFIX&#x60;. Both a key and a value must be specified. * &#x60;+LABEL_KEY:VALUE&#x60;: Return all traces containing a key:value pair exactly matching the specified text. Both a key and a value must be specified. * &#x60;method:VALUE&#x60;: Equivalent to &#x60;/http/method:VALUE&#x60;. * &#x60;url:VALUE&#x60;: Equivalent to &#x60;/http/url:VALUE&#x60;. | [optional] 
 **order_by** | **str**| Optional. Field used to sort the returned traces. Can be one of the following: * &#x60;trace_id&#x60; * &#x60;name&#x60; (&#x60;name&#x60; field of root span in the trace) * &#x60;duration&#x60; (difference between &#x60;end_time&#x60; and &#x60;start_time&#x60; fields of the root span) * &#x60;start&#x60; (&#x60;start_time&#x60; field of the root span) Descending order can be specified by appending &#x60;desc&#x60; to the sort field (for example, &#x60;name desc&#x60;). Only one sort field is permitted. | [optional] 
 **page_size** | **int**| Optional. Maximum number of traces to return. If not specified or &lt;&#x3D; 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size. | [optional] 
 **page_token** | **str**| Token identifying the page of results to return. If provided, use the value of the &#x60;next_page_token&#x60; field from a previous request. | [optional] 
 **start_time** | **str**| Start of the time interval (inclusive) during which the trace data was collected from the application. | [optional] 
 **view** | **str**| Optional. Type of data returned for traces in the list. Default is &#x60;MINIMAL&#x60;. | [optional] 

### Return type

[**ListTracesResponse**](ListTracesResponse.md)

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

