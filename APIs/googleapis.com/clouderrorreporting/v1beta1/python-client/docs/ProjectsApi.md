# openapi_client.ProjectsApi

All URIs are relative to *https://clouderrorreporting.googleapis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clouderrorreporting_projects_delete_events**](ProjectsApi.md#clouderrorreporting_projects_delete_events) | **DELETE** /v1beta1/{projectName}/events | 
[**clouderrorreporting_projects_events_list**](ProjectsApi.md#clouderrorreporting_projects_events_list) | **GET** /v1beta1/{projectName}/events | 
[**clouderrorreporting_projects_events_report**](ProjectsApi.md#clouderrorreporting_projects_events_report) | **POST** /v1beta1/{projectName}/events:report | 
[**clouderrorreporting_projects_group_stats_list**](ProjectsApi.md#clouderrorreporting_projects_group_stats_list) | **GET** /v1beta1/{projectName}/groupStats | 
[**clouderrorreporting_projects_groups_get**](ProjectsApi.md#clouderrorreporting_projects_groups_get) | **GET** /v1beta1/{groupName} | 
[**clouderrorreporting_projects_groups_update**](ProjectsApi.md#clouderrorreporting_projects_groups_update) | **PUT** /v1beta1/{name} | 


# **clouderrorreporting_projects_delete_events**
> object clouderrorreporting_projects_delete_events(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Deletes all error events of a given project.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    project_name = 'project_name_example' # str | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
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
        api_response = api_instance.clouderrorreporting_projects_delete_events(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->clouderrorreporting_projects_delete_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_delete_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| Required. The resource name of the Google Cloud Platform project. Written as &#x60;projects/{projectID}&#x60;, where &#x60;{projectID}&#x60; is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: &#x60;projects/my-project-123&#x60;. | 
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

# **clouderrorreporting_projects_events_list**
> ListEventsResponse clouderrorreporting_projects_events_list(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_id=group_id, page_size=page_size, page_token=page_token, service_filter_resource_type=service_filter_resource_type, service_filter_service=service_filter_service, service_filter_version=service_filter_version, time_range_period=time_range_period)



Lists the specified events.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_events_response import ListEventsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    project_name = 'project_name_example' # str | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: `projects/my-project-123`.
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
    group_id = 'group_id_example' # str | Required. The group for which events shall be returned. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). (optional)
    page_size = 56 # int | Optional. The maximum number of results to return per response. (optional)
    page_token = 'page_token_example' # str | Optional. A `next_page_token` provided by a previous response. (optional)
    service_filter_resource_type = 'service_filter_resource_type_example' # str | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). (optional)
    service_filter_service = 'service_filter_service_example' # str | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). (optional)
    service_filter_version = 'service_filter_version_example' # str | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). (optional)
    time_range_period = 'time_range_period_example' # str | Restricts the query to the specified time range. (optional)

    try:
        api_response = api_instance.clouderrorreporting_projects_events_list(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, group_id=group_id, page_size=page_size, page_token=page_token, service_filter_resource_type=service_filter_resource_type, service_filter_service=service_filter_service, service_filter_version=service_filter_version, time_range_period=time_range_period)
        print("The response of ProjectsApi->clouderrorreporting_projects_events_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_events_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| Required. The resource name of the Google Cloud Platform project. Written as &#x60;projects/{projectID}&#x60;, where &#x60;{projectID}&#x60; is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: &#x60;projects/my-project-123&#x60;. | 
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
 **group_id** | **str**| Required. The group for which events shall be returned. The &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). | [optional] 
 **page_size** | **int**| Optional. The maximum number of results to return per response. | [optional] 
 **page_token** | **str**| Optional. A &#x60;next_page_token&#x60; provided by a previous response. | [optional] 
 **service_filter_resource_type** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.resource_type&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). | [optional] 
 **service_filter_service** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.service&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). | [optional] 
 **service_filter_version** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.version&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). | [optional] 
 **time_range_period** | **str**| Restricts the query to the specified time range. | [optional] 

### Return type

[**ListEventsResponse**](ListEventsResponse.md)

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

# **clouderrorreporting_projects_events_report**
> object clouderrorreporting_projects_events_report(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, reported_error_event=reported_error_event)



Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a global service built on Cloud Logging and doesn't analyze logs stored in regional log buckets or logs routed to other Google Cloud projects.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.reported_error_event import ReportedErrorEvent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    project_name = 'project_name_example' # str | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`.
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
    reported_error_event = openapi_client.ReportedErrorEvent() # ReportedErrorEvent |  (optional)

    try:
        api_response = api_instance.clouderrorreporting_projects_events_report(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, reported_error_event=reported_error_event)
        print("The response of ProjectsApi->clouderrorreporting_projects_events_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_events_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| Required. The resource name of the Google Cloud Platform project. Written as &#x60;projects/{projectId}&#x60;, where &#x60;{projectId}&#x60; is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // &#x60;projects/my-project-123&#x60;. | 
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
 **reported_error_event** | [**ReportedErrorEvent**](ReportedErrorEvent.md)|  | [optional] 

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

# **clouderrorreporting_projects_group_stats_list**
> ListGroupStatsResponse clouderrorreporting_projects_group_stats_list(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, alignment=alignment, alignment_time=alignment_time, group_id=group_id, order=order, page_size=page_size, page_token=page_token, service_filter_resource_type=service_filter_resource_type, service_filter_service=service_filter_service, service_filter_version=service_filter_version, time_range_period=time_range_period, timed_count_duration=timed_count_duration)



Lists the specified groups.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.list_group_stats_response import ListGroupStatsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    project_name = 'project_name_example' # str | Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). Examples: `projects/my-project-123`, `projects/5551234`.
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
    alignment = 'alignment_example' # str | Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`. (optional)
    alignment_time = 'alignment_time_example' # str | Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC. (optional)
    group_id = ['group_id_example'] # List[str] | Optional. List all ErrorGroupStats with these IDs. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice). (optional)
    order = 'order_example' # str | Optional. The sort order in which the results are returned. Default is `COUNT_DESC`. (optional)
    page_size = 56 # int | Optional. The maximum number of results to return per response. Default is 20. (optional)
    page_token = 'page_token_example' # str | Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request. (optional)
    service_filter_resource_type = 'service_filter_resource_type_example' # str | Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). (optional)
    service_filter_service = 'service_filter_service_example' # str | Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). (optional)
    service_filter_version = 'service_filter_version_example' # str | Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). (optional)
    time_range_period = 'time_range_period_example' # str | Restricts the query to the specified time range. (optional)
    timed_count_duration = 'timed_count_duration_example' # str | Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned. (optional)

    try:
        api_response = api_instance.clouderrorreporting_projects_group_stats_list(project_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, alignment=alignment, alignment_time=alignment_time, group_id=group_id, order=order, page_size=page_size, page_token=page_token, service_filter_resource_type=service_filter_resource_type, service_filter_service=service_filter_service, service_filter_version=service_filter_version, time_range_period=time_range_period, timed_count_duration=timed_count_duration)
        print("The response of ProjectsApi->clouderrorreporting_projects_group_stats_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_group_stats_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_name** | **str**| Required. The resource name of the Google Cloud Platform project. Written as &#x60;projects/{projectID}&#x60; or &#x60;projects/{projectNumber}&#x60;, where &#x60;{projectID}&#x60; and &#x60;{projectNumber}&#x60; can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). Examples: &#x60;projects/my-project-123&#x60;, &#x60;projects/5551234&#x60;. | 
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
 **alignment** | **str**| Optional. The alignment of the timed counts to be returned. Default is &#x60;ALIGNMENT_EQUAL_AT_END&#x60;. | [optional] 
 **alignment_time** | **str**| Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC. | [optional] 
 **group_id** | [**List[str]**](str.md)| Optional. List all ErrorGroupStats with these IDs. The &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice). | [optional] 
 **order** | **str**| Optional. The sort order in which the results are returned. Default is &#x60;COUNT_DESC&#x60;. | [optional] 
 **page_size** | **int**| Optional. The maximum number of results to return per response. Default is 20. | [optional] 
 **page_token** | **str**| Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request. | [optional] 
 **service_filter_resource_type** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.resource_type&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type). | [optional] 
 **service_filter_service** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.service&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service). | [optional] 
 **service_filter_version** | **str**| Optional. The exact value to match against [&#x60;ServiceContext.version&#x60;](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version). | [optional] 
 **time_range_period** | **str**| Restricts the query to the specified time range. | [optional] 
 **timed_count_duration** | **str**| Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned. | [optional] 

### Return type

[**ListGroupStatsResponse**](ListGroupStatsResponse.md)

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

# **clouderrorreporting_projects_groups_get**
> ErrorGroup clouderrorreporting_projects_groups_get(group_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)



Get the specified group.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.error_group import ErrorGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    group_name = 'group_name_example' # str | Required. The group resource name. Written as `projects/{projectID}/groups/{group_id}`. Call groupStats.list to return a list of groups belonging to this project. Example: `projects/my-project-123/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).
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
        api_response = api_instance.clouderrorreporting_projects_groups_get(group_name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type)
        print("The response of ProjectsApi->clouderrorreporting_projects_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group_name** | **str**| Required. The group resource name. Written as &#x60;projects/{projectID}/groups/{group_id}&#x60;. Call groupStats.list to return a list of groups belonging to this project. Example: &#x60;projects/my-project-123/groups/my-group&#x60; In the group resource name, the &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). | 
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

[**ErrorGroup**](ErrorGroup.md)

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

# **clouderrorreporting_projects_groups_update**
> ErrorGroup clouderrorreporting_projects_groups_update(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, error_group=error_group)



Replace the data for the specified group. Fails if the group does not exist.

### Example

* OAuth Authentication (Oauth2c):
* OAuth Authentication (Oauth2):

```python
import openapi_client
from openapi_client.models.error_group import ErrorGroup
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://clouderrorreporting.googleapis.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://clouderrorreporting.googleapis.com"
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
    name = 'name_example' # str | The group resource name. Written as `projects/{projectID}/groups/{group_id}`. Example: `projects/my-project-123/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).
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
    error_group = openapi_client.ErrorGroup() # ErrorGroup |  (optional)

    try:
        api_response = api_instance.clouderrorreporting_projects_groups_update(name, xgafv=xgafv, access_token=access_token, alt=alt, param_callback=param_callback, fields=fields, key=key, oauth_token=oauth_token, pretty_print=pretty_print, quota_user=quota_user, upload_protocol=upload_protocol, upload_type=upload_type, error_group=error_group)
        print("The response of ProjectsApi->clouderrorreporting_projects_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectsApi->clouderrorreporting_projects_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| The group resource name. Written as &#x60;projects/{projectID}/groups/{group_id}&#x60;. Example: &#x60;projects/my-project-123/groups/my-group&#x60; In the group resource name, the &#x60;group_id&#x60; is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). | 
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
 **error_group** | [**ErrorGroup**](ErrorGroup.md)|  | [optional] 

### Return type

[**ErrorGroup**](ErrorGroup.md)

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

