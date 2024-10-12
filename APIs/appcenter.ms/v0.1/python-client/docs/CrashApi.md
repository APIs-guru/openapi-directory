# openapi_client.CrashApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**crash_groups_get**](CrashApi.md#crash_groups_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id} | 
[**crash_groups_get_stacktrace**](CrashApi.md#crash_groups_get_stacktrace) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/stacktrace | 
[**crash_groups_list**](CrashApi.md#crash_groups_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups | 
[**crash_groups_update**](CrashApi.md#crash_groups_update) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id} | 
[**crashes_delete**](CrashApi.md#crashes_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id} | 
[**crashes_get**](CrashApi.md#crashes_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id} | 
[**crashes_get_app_crashes_info**](CrashApi.md#crashes_get_app_crashes_info) | **GET** /v0.1/apps/{owner_name}/{app_name}/crashes_info | 
[**crashes_get_app_versions**](CrashApi.md#crashes_get_app_versions) | **GET** /v0.1/apps/{owner_name}/{app_name}/versions | 
[**crashes_get_crash_attachment_location**](CrashApi.md#crashes_get_crash_attachment_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/crashes/{crash_id}/attachments/{attachment_id}/location | 
[**crashes_get_crash_text_attachment_content**](CrashApi.md#crashes_get_crash_text_attachment_content) | **GET** /v0.1/apps/{owner_name}/{app_name}/crashes/{crash_id}/attachments/{attachment_id}/text | 
[**crashes_get_native_crash**](CrashApi.md#crashes_get_native_crash) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id}/native | 
[**crashes_get_native_crash_download**](CrashApi.md#crashes_get_native_crash_download) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id}/native/download | 
[**crashes_get_raw_crash_location**](CrashApi.md#crashes_get_raw_crash_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id}/raw/location | 
[**crashes_get_stacktrace**](CrashApi.md#crashes_get_stacktrace) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes/{crash_id}/stacktrace | 
[**crashes_list**](CrashApi.md#crashes_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/crash_groups/{crash_group_id}/crashes | 
[**crashes_list_attachments**](CrashApi.md#crashes_list_attachments) | **GET** /v0.1/apps/{owner_name}/{app_name}/crashes/{crash_id}/attachments | 
[**missing_symbol_groups_get**](CrashApi.md#missing_symbol_groups_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups/{symbol_group_id} | Gets missing symbol crash group by its id
[**missing_symbol_groups_info**](CrashApi.md#missing_symbol_groups_info) | **GET** /v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups_info | Gets application level statistics for all missing symbol groups
[**missing_symbol_groups_list**](CrashApi.md#missing_symbol_groups_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/diagnostics/symbol_groups | Gets top N (ordered by crash count) of crash groups by missing symbol
[**symbol_uploads_complete**](CrashApi.md#symbol_uploads_complete) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id} | 
[**symbol_uploads_create**](CrashApi.md#symbol_uploads_create) | **POST** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads | 
[**symbol_uploads_delete**](CrashApi.md#symbol_uploads_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id} | 
[**symbol_uploads_get**](CrashApi.md#symbol_uploads_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id} | 
[**symbol_uploads_get_location**](CrashApi.md#symbol_uploads_get_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads/{symbol_upload_id}/location | 
[**symbol_uploads_list**](CrashApi.md#symbol_uploads_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbol_uploads | 
[**symbols_get**](CrashApi.md#symbols_get) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id} | 
[**symbols_get_location**](CrashApi.md#symbols_get_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/location | 
[**symbols_get_status**](CrashApi.md#symbols_get_status) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/status | 
[**symbols_ignore**](CrashApi.md#symbols_ignore) | **POST** /v0.1/apps/{owner_name}/{app_name}/symbols/{symbol_id}/ignore | 
[**symbols_list**](CrashApi.md#symbols_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/symbols | 


# **crash_groups_get**
> CrashGroupsList200ResponseCrashGroupsInner crash_groups_get(crash_group_id, owner_name, app_name)



Gets a specific group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crash_groups_list200_response_crash_groups_inner import CrashGroupsList200ResponseCrashGroupsInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crash_groups_get(crash_group_id, owner_name, app_name)
        print("The response of CrashApi->crash_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crash_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CrashGroupsList200ResponseCrashGroupsInner**](CrashGroupsList200ResponseCrashGroupsInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crash_groups_get_stacktrace**
> Stacktrace crash_groups_get_stacktrace(crash_group_id, owner_name, app_name, grouping_only=grouping_only)



Gets a stacktrace for a specific crash.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stacktrace import Stacktrace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    grouping_only = False # bool | true if the stacktrace should be only the relevant thread / exception. Default is false (optional) (default to False)

    try:
        api_response = api_instance.crash_groups_get_stacktrace(crash_group_id, owner_name, app_name, grouping_only=grouping_only)
        print("The response of CrashApi->crash_groups_get_stacktrace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crash_groups_get_stacktrace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **grouping_only** | **bool**| true if the stacktrace should be only the relevant thread / exception. Default is false | [optional] [default to False]

### Return type

[**Stacktrace**](Stacktrace.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crash_groups_list**
> CrashGroupsList200Response crash_groups_list(owner_name, app_name, last_occurrence_from=last_occurrence_from, last_occurrence_to=last_occurrence_to, app_version=app_version, group_type=group_type, group_status=group_status, group_text_search=group_text_search, orderby=orderby, continuation_token=continuation_token)



Gets a list of crash groups and whether the list contains all available groups.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crash_groups_list200_response import CrashGroupsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    last_occurrence_from = '2013-10-20T19:20:30+01:00' # datetime | Earliest date when the last time a crash occured in a crash group (optional)
    last_occurrence_to = '2013-10-20T19:20:30+01:00' # datetime | Latest date when the last time a crash occured in a crash group (optional)
    app_version = 'app_version_example' # str | version (optional)
    group_type = 'group_type_example' # str |  (optional)
    group_status = 'group_status_example' # str |  (optional)
    group_text_search = 'group_text_search_example' # str | A freetext search that matches in crash, crash types, crash stack_traces and crash user (optional)
    orderby = last_occurrence desc # str | the OData-like $orderby argument (optional) (default to last_occurrence desc)
    continuation_token = 'continuation_token_example' # str | Cassandra request continuation token. The token is used for pagination. (optional)

    try:
        api_response = api_instance.crash_groups_list(owner_name, app_name, last_occurrence_from=last_occurrence_from, last_occurrence_to=last_occurrence_to, app_version=app_version, group_type=group_type, group_status=group_status, group_text_search=group_text_search, orderby=orderby, continuation_token=continuation_token)
        print("The response of CrashApi->crash_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crash_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **last_occurrence_from** | **datetime**| Earliest date when the last time a crash occured in a crash group | [optional] 
 **last_occurrence_to** | **datetime**| Latest date when the last time a crash occured in a crash group | [optional] 
 **app_version** | **str**| version | [optional] 
 **group_type** | **str**|  | [optional] 
 **group_status** | **str**|  | [optional] 
 **group_text_search** | **str**| A freetext search that matches in crash, crash types, crash stack_traces and crash user | [optional] 
 **orderby** | **str**| the OData-like $orderby argument | [optional] [default to last_occurrence desc]
 **continuation_token** | **str**| Cassandra request continuation token. The token is used for pagination. | [optional] 

### Return type

[**CrashGroupsList200Response**](CrashGroupsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crash_groups_update**
> CrashGroupsList200ResponseCrashGroupsInner crash_groups_update(crash_group_id, owner_name, app_name, crash_groups_update_request)



Updates a group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crash_groups_list200_response_crash_groups_inner import CrashGroupsList200ResponseCrashGroupsInner
from openapi_client.models.crash_groups_update_request import CrashGroupsUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    crash_groups_update_request = openapi_client.CrashGroupsUpdateRequest() # CrashGroupsUpdateRequest | Group change object. All fields are optional and only provided fields will get updated.

    try:
        api_response = api_instance.crash_groups_update(crash_group_id, owner_name, app_name, crash_groups_update_request)
        print("The response of CrashApi->crash_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crash_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **crash_groups_update_request** | [**CrashGroupsUpdateRequest**](CrashGroupsUpdateRequest.md)| Group change object. All fields are optional and only provided fields will get updated. | 

### Return type

[**CrashGroupsList200ResponseCrashGroupsInner**](CrashGroupsList200ResponseCrashGroupsInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_delete**
> CrashesDelete200Response crashes_delete(crash_group_id, crash_id, owner_name, app_name, retention_delete=retention_delete)



Delete a specific crash and related attachments and blobs for an app.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_delete200_response import CrashesDelete200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    retention_delete = False # bool | true in that case if the method should skip update counts (optional) (default to False)

    try:
        api_response = api_instance.crashes_delete(crash_group_id, crash_id, owner_name, app_name, retention_delete=retention_delete)
        print("The response of CrashApi->crashes_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **retention_delete** | **bool**| true in that case if the method should skip update counts | [optional] [default to False]

### Return type

[**CrashesDelete200Response**](CrashesDelete200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get**
> Crash crashes_get(crash_group_id, crash_id, owner_name, app_name, include_report=include_report, include_log=include_log, include_details=include_details, include_stacktrace=include_stacktrace, grouping_only=grouping_only)



Gets a specific crash for an app.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crash import Crash
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    include_report = False # bool | true if the crash should include the raw crash report. Default is false (optional) (default to False)
    include_log = False # bool | true if the crash should include the custom log report. Default is false (optional) (default to False)
    include_details = False # bool | true if the crash should include in depth crash details (optional) (default to False)
    include_stacktrace = False # bool | true if the crash should include the stacktrace information (optional) (default to False)
    grouping_only = False # bool | true if the stacktrace should be only the relevant thread / exception. Default is false (optional) (default to False)

    try:
        api_response = api_instance.crashes_get(crash_group_id, crash_id, owner_name, app_name, include_report=include_report, include_log=include_log, include_details=include_details, include_stacktrace=include_stacktrace, grouping_only=grouping_only)
        print("The response of CrashApi->crashes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **include_report** | **bool**| true if the crash should include the raw crash report. Default is false | [optional] [default to False]
 **include_log** | **bool**| true if the crash should include the custom log report. Default is false | [optional] [default to False]
 **include_details** | **bool**| true if the crash should include in depth crash details | [optional] [default to False]
 **include_stacktrace** | **bool**| true if the crash should include the stacktrace information | [optional] [default to False]
 **grouping_only** | **bool**| true if the stacktrace should be only the relevant thread / exception. Default is false | [optional] [default to False]

### Return type

[**Crash**](Crash.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_app_crashes_info**
> CrashesGetAppCrashesInfo200Response crashes_get_app_crashes_info(owner_name, app_name)



Gets whether the application has any crashes.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_get_app_crashes_info200_response import CrashesGetAppCrashesInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_app_crashes_info(owner_name, app_name)
        print("The response of CrashApi->crashes_get_app_crashes_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_app_crashes_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CrashesGetAppCrashesInfo200Response**](CrashesGetAppCrashesInfo200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_app_versions**
> List[CrashesGetAppVersions200ResponseInner] crashes_get_app_versions(owner_name, app_name)



Gets a list of application versions.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_get_app_versions200_response_inner import CrashesGetAppVersions200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_app_versions(owner_name, app_name)
        print("The response of CrashApi->crashes_get_app_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_app_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CrashesGetAppVersions200ResponseInner]**](CrashesGetAppVersions200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_crash_attachment_location**
> CrashesGetCrashAttachmentLocation200Response crashes_get_crash_attachment_location(crash_id, attachment_id, owner_name, app_name)



Gets the URI location to download crash attachment.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_get_crash_attachment_location200_response import CrashesGetCrashAttachmentLocation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_id = 'crash_id_example' # str | id of a specific crash
    attachment_id = 'attachment_id_example' # str | attachment id
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_crash_attachment_location(crash_id, attachment_id, owner_name, app_name)
        print("The response of CrashApi->crashes_get_crash_attachment_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_crash_attachment_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_id** | **str**| id of a specific crash | 
 **attachment_id** | **str**| attachment id | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CrashesGetCrashAttachmentLocation200Response**](CrashesGetCrashAttachmentLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_crash_text_attachment_content**
> str crashes_get_crash_text_attachment_content(crash_id, attachment_id, owner_name, app_name)



Gets content of the text attachment.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_id = 'crash_id_example' # str | id of a specific crash
    attachment_id = 'attachment_id_example' # str | attachment id
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_crash_text_attachment_content(crash_id, attachment_id, owner_name, app_name)
        print("The response of CrashApi->crashes_get_crash_text_attachment_content:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_crash_text_attachment_content: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_id** | **str**| id of a specific crash | 
 **attachment_id** | **str**| attachment id | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

**str**

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_native_crash**
> str crashes_get_native_crash(crash_group_id, crash_id, owner_name, app_name)



Gets the native log of a specific crash.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_native_crash(crash_group_id, crash_id, owner_name, app_name)
        print("The response of CrashApi->crashes_get_native_crash:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_native_crash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

**str**

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_native_crash_download**
> str crashes_get_native_crash_download(crash_group_id, crash_id, owner_name, app_name)



Gets the native log of a specific crash as a text attachment.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_native_crash_download(crash_group_id, crash_id, owner_name, app_name)
        print("The response of CrashApi->crashes_get_native_crash_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_native_crash_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

**str**

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_raw_crash_location**
> CrashesGetRawCrashLocation200Response crashes_get_raw_crash_location(crash_group_id, crash_id, owner_name, app_name)



Gets the URI location to download json of a specific crash.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_get_raw_crash_location200_response import CrashesGetRawCrashLocation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_get_raw_crash_location(crash_group_id, crash_id, owner_name, app_name)
        print("The response of CrashApi->crashes_get_raw_crash_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_raw_crash_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**CrashesGetRawCrashLocation200Response**](CrashesGetRawCrashLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_get_stacktrace**
> Stacktrace crashes_get_stacktrace(crash_group_id, crash_id, owner_name, app_name, grouping_only=grouping_only)



Gets a stacktrace for a specific crash.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.stacktrace import Stacktrace
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    grouping_only = False # bool | true if the stacktrace should be only the relevant thread / exception. Default is false (optional) (default to False)

    try:
        api_response = api_instance.crashes_get_stacktrace(crash_group_id, crash_id, owner_name, app_name, grouping_only=grouping_only)
        print("The response of CrashApi->crashes_get_stacktrace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_get_stacktrace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **grouping_only** | **bool**| true if the stacktrace should be only the relevant thread / exception. Default is false | [optional] [default to False]

### Return type

[**Stacktrace**](Stacktrace.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_list**
> List[Crash] crashes_list(crash_group_id, owner_name, app_name, include_report=include_report, include_log=include_log, date_from=date_from, date_to=date_to, app_version=app_version, error_type=error_type)



Gets all crashes of a group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crash import Crash
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | id of a specific group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    include_report = False # bool | true if the crash should include the raw crash report. Default is false (optional) (default to False)
    include_log = False # bool | true if the crash should include the custom log report. Default is false (optional) (default to False)
    date_from = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    date_to = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    app_version = 'app_version_example' # str | version (optional)
    error_type = 'error_type_example' # str |  (optional)

    try:
        api_response = api_instance.crashes_list(crash_group_id, owner_name, app_name, include_report=include_report, include_log=include_log, date_from=date_from, date_to=date_to, app_version=app_version, error_type=error_type)
        print("The response of CrashApi->crashes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| id of a specific group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **include_report** | **bool**| true if the crash should include the raw crash report. Default is false | [optional] [default to False]
 **include_log** | **bool**| true if the crash should include the custom log report. Default is false | [optional] [default to False]
 **date_from** | **datetime**|  | [optional] 
 **date_to** | **datetime**|  | [optional] 
 **app_version** | **str**| version | [optional] 
 **error_type** | **str**|  | [optional] 

### Return type

[**List[Crash]**](Crash.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_list_attachments**
> List[CrashesListAttachments200ResponseInner] crashes_list_attachments(crash_id, owner_name, app_name)



Gets all attachments for a specific crash.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_list_attachments200_response_inner import CrashesListAttachments200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    crash_id = 'crash_id_example' # str | id of a specific crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.crashes_list_attachments(crash_id, owner_name, app_name)
        print("The response of CrashApi->crashes_list_attachments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->crashes_list_attachments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_id** | **str**| id of a specific crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[CrashesListAttachments200ResponseInner]**](CrashesListAttachments200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **missing_symbol_groups_get**
> MissingSymbolGroupsList200Response missing_symbol_groups_get(symbol_group_id, owner_name, app_name)

Gets missing symbol crash group by its id

Gets missing symbol crash group by its id

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.missing_symbol_groups_list200_response import MissingSymbolGroupsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_group_id = 'symbol_group_id_example' # str | missing symbol crash group id
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        # Gets missing symbol crash group by its id
        api_response = api_instance.missing_symbol_groups_get(symbol_group_id, owner_name, app_name)
        print("The response of CrashApi->missing_symbol_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->missing_symbol_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_group_id** | **str**| missing symbol crash group id | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**MissingSymbolGroupsList200Response**](MissingSymbolGroupsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **missing_symbol_groups_info**
> MissingSymbolGroupsInfo200Response missing_symbol_groups_info(owner_name, app_name)

Gets application level statistics for all missing symbol groups

Gets application level statistics for all missing symbol groups

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.missing_symbol_groups_info200_response import MissingSymbolGroupsInfo200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        # Gets application level statistics for all missing symbol groups
        api_response = api_instance.missing_symbol_groups_info(owner_name, app_name)
        print("The response of CrashApi->missing_symbol_groups_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->missing_symbol_groups_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**MissingSymbolGroupsInfo200Response**](MissingSymbolGroupsInfo200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **missing_symbol_groups_list**
> MissingSymbolGroupsList200Response missing_symbol_groups_list(top, owner_name, app_name)

Gets top N (ordered by crash count) of crash groups by missing symbol

Gets top N (ordered by crash count) of crash groups by missing symbol

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.missing_symbol_groups_list200_response import MissingSymbolGroupsList200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    top = 56 # int | top N elements
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        # Gets top N (ordered by crash count) of crash groups by missing symbol
        api_response = api_instance.missing_symbol_groups_list(top, owner_name, app_name)
        print("The response of CrashApi->missing_symbol_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->missing_symbol_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **top** | **int**| top N elements | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**MissingSymbolGroupsList200Response**](MissingSymbolGroupsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_complete**
> SymbolUploadsList200ResponseInner symbol_uploads_complete(symbol_upload_id, owner_name, app_name, symbol_uploads_complete_request)



Commits or aborts the symbol upload process for a new set of symbols for the specified application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_complete_request import SymbolUploadsCompleteRequest
from openapi_client.models.symbol_uploads_list200_response_inner import SymbolUploadsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_upload_id = 'symbol_upload_id_example' # str | The ID of the symbol upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    symbol_uploads_complete_request = openapi_client.SymbolUploadsCompleteRequest() # SymbolUploadsCompleteRequest | The symbol information

    try:
        api_response = api_instance.symbol_uploads_complete(symbol_upload_id, owner_name, app_name, symbol_uploads_complete_request)
        print("The response of CrashApi->symbol_uploads_complete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_complete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_upload_id** | **str**| The ID of the symbol upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **symbol_uploads_complete_request** | [**SymbolUploadsCompleteRequest**](SymbolUploadsCompleteRequest.md)| The symbol information | 

### Return type

[**SymbolUploadsList200ResponseInner**](SymbolUploadsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**403** | Unauthorized |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_create**
> SymbolUploadsCreate200Response symbol_uploads_create(owner_name, app_name, symbol_uploads_create_request)



Begins the symbol upload process for a new set of symbols for the specified application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_create200_response import SymbolUploadsCreate200Response
from openapi_client.models.symbol_uploads_create_request import SymbolUploadsCreateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    symbol_uploads_create_request = openapi_client.SymbolUploadsCreateRequest() # SymbolUploadsCreateRequest | The symbol information

    try:
        api_response = api_instance.symbol_uploads_create(owner_name, app_name, symbol_uploads_create_request)
        print("The response of CrashApi->symbol_uploads_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **symbol_uploads_create_request** | [**SymbolUploadsCreateRequest**](SymbolUploadsCreateRequest.md)| The symbol information | 

### Return type

[**SymbolUploadsCreate200Response**](SymbolUploadsCreate200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**403** | Unauthorized |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_delete**
> SymbolUploadsList200ResponseInner symbol_uploads_delete(symbol_upload_id, owner_name, app_name)



Deletes a symbol upload by id for the specified application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_list200_response_inner import SymbolUploadsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_upload_id = 'symbol_upload_id_example' # str | The ID of the symbol upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbol_uploads_delete(symbol_upload_id, owner_name, app_name)
        print("The response of CrashApi->symbol_uploads_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_upload_id** | **str**| The ID of the symbol upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolUploadsList200ResponseInner**](SymbolUploadsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_get**
> SymbolUploadsList200ResponseInner symbol_uploads_get(symbol_upload_id, owner_name, app_name)



Gets a symbol upload by id for the specified application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_list200_response_inner import SymbolUploadsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_upload_id = 'symbol_upload_id_example' # str | The ID of the symbol upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbol_uploads_get(symbol_upload_id, owner_name, app_name)
        print("The response of CrashApi->symbol_uploads_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_upload_id** | **str**| The ID of the symbol upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolUploadsList200ResponseInner**](SymbolUploadsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_get_location**
> SymbolUploadsGetLocation200Response symbol_uploads_get_location(symbol_upload_id, owner_name, app_name)



Gets the URL to download the symbol upload

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_get_location200_response import SymbolUploadsGetLocation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_upload_id = 'symbol_upload_id_example' # str | The ID of the symbol upload
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbol_uploads_get_location(symbol_upload_id, owner_name, app_name)
        print("The response of CrashApi->symbol_uploads_get_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_get_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_upload_id** | **str**| The ID of the symbol upload | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolUploadsGetLocation200Response**](SymbolUploadsGetLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbol_uploads_list**
> List[SymbolUploadsList200ResponseInner] symbol_uploads_list(owner_name, app_name, top=top, status=status, symbol_type=symbol_type)



Gets a list of all uploads for the specified application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbol_uploads_list200_response_inner import SymbolUploadsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    top = 30 # int | The maximum number of results to return. (optional) (default to 30)
    status = 'status_example' # str | Filter results by the current status of a symbol upload: * all: all states in the symbol upload process. Includes created, aborted, committed, processing, indexed and failed states * uploaded: all states after package is uploaded. Includes committed, processing, indexed and failed states * processed: symbol upload processing is completed. Includes indexed and failed states.  (optional)
    symbol_type = 'symbol_type_example' # str | The type of symbols (optional)

    try:
        api_response = api_instance.symbol_uploads_list(owner_name, app_name, top=top, status=status, symbol_type=symbol_type)
        print("The response of CrashApi->symbol_uploads_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbol_uploads_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **top** | **int**| The maximum number of results to return. | [optional] [default to 30]
 **status** | **str**| Filter results by the current status of a symbol upload: * all: all states in the symbol upload process. Includes created, aborted, committed, processing, indexed and failed states * uploaded: all states after package is uploaded. Includes committed, processing, indexed and failed states * processed: symbol upload processing is completed. Includes indexed and failed states.  | [optional] 
 **symbol_type** | **str**| The type of symbols | [optional] 

### Return type

[**List[SymbolUploadsList200ResponseInner]**](SymbolUploadsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbols_get**
> SymbolsList200ResponseInner symbols_get(symbol_id, owner_name, app_name)



Returns a particular symbol by id (uuid) for the provided application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbols_list200_response_inner import SymbolsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_id = 'symbol_id_example' # str | The ID of the symbol (uuid of the symbol)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbols_get(symbol_id, owner_name, app_name)
        print("The response of CrashApi->symbols_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbols_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_id** | **str**| The ID of the symbol (uuid of the symbol) | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolsList200ResponseInner**](SymbolsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbols_get_location**
> SymbolsGetLocation200Response symbols_get_location(symbol_id, owner_name, app_name)



Gets the URL to download the symbol

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbols_get_location200_response import SymbolsGetLocation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_id = 'symbol_id_example' # str | The ID of the symbol (uuid of the symbol)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbols_get_location(symbol_id, owner_name, app_name)
        print("The response of CrashApi->symbols_get_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbols_get_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_id** | **str**| The ID of the symbol (uuid of the symbol) | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolsGetLocation200Response**](SymbolsGetLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbols_get_status**
> SymbolsGetStatus200Response symbols_get_status(symbol_id, owner_name, app_name)



Returns a particular symbol by id (uuid) for the provided application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbols_get_status200_response import SymbolsGetStatus200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_id = 'symbol_id_example' # str | The ID of the symbol (uuid of the symbol)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbols_get_status(symbol_id, owner_name, app_name)
        print("The response of CrashApi->symbols_get_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbols_get_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_id** | **str**| The ID of the symbol (uuid of the symbol) | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolsGetStatus200Response**](SymbolsGetStatus200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbols_ignore**
> SymbolsList200ResponseInner symbols_ignore(symbol_id, owner_name, app_name)



Marks a symbol by id (uuid) as ignored

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbols_list200_response_inner import SymbolsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    symbol_id = 'symbol_id_example' # str | The ID of the symbol (uuid of the symbol)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbols_ignore(symbol_id, owner_name, app_name)
        print("The response of CrashApi->symbols_ignore:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbols_ignore: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **symbol_id** | **str**| The ID of the symbol (uuid of the symbol) | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**SymbolsList200ResponseInner**](SymbolsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **symbols_list**
> List[SymbolsList200ResponseInner] symbols_list(owner_name, app_name)



Returns the list of all symbols for the provided application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.symbols_list200_response_inner import SymbolsList200ResponseInner
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appcenter.ms
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appcenter.ms"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: APIToken
configuration.api_key['APIToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['APIToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CrashApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.symbols_list(owner_name, app_name)
        print("The response of CrashApi->symbols_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CrashApi->symbols_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[SymbolsList200ResponseInner]**](SymbolsList200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**403** | Unauthorized |  -  |
**500** | Internal error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

