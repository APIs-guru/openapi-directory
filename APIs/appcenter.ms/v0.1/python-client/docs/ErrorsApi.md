# openapi_client.ErrorsApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**errors_app_builds_list**](ErrorsApi.md#errors_app_builds_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/availableAppBuilds | 
[**errors_available_versions**](ErrorsApi.md#errors_available_versions) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/available_versions | 
[**errors_counts_per_day**](ErrorsApi.md#errors_counts_per_day) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorCountsPerDay | 
[**errors_delete_error**](ErrorsApi.md#errors_delete_error) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId} | 
[**errors_error_attachment_location**](ErrorsApi.md#errors_error_attachment_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments/{attachmentId}/location | 
[**errors_error_attachment_text**](ErrorsApi.md#errors_error_attachment_text) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments/{attachmentId}/text | 
[**errors_error_attachments**](ErrorsApi.md#errors_error_attachments) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/attachments | 
[**errors_error_download**](ErrorsApi.md#errors_error_download) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/download | 
[**errors_error_free_device_percentages**](ErrorsApi.md#errors_error_free_device_percentages) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorfreeDevicePercentages | 
[**errors_error_groups_search**](ErrorsApi.md#errors_error_groups_search) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/search | 
[**errors_error_location**](ErrorsApi.md#errors_error_location) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/location | 
[**errors_error_search**](ErrorsApi.md#errors_error_search) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/search | 
[**errors_error_stack_trace**](ErrorsApi.md#errors_error_stack_trace) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId}/stacktrace | 
[**errors_get_error_details**](ErrorsApi.md#errors_get_error_details) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/{errorId} | 
[**errors_get_retention_settings**](ErrorsApi.md#errors_get_retention_settings) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/retention_settings | gets the retention settings in days
[**errors_group_counts_per_day**](ErrorsApi.md#errors_group_counts_per_day) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errorCountsPerDay | 
[**errors_group_details**](ErrorsApi.md#errors_group_details) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId} | 
[**errors_group_error_free_device_percentages**](ErrorsApi.md#errors_group_error_free_device_percentages) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errorfreeDevicePercentages | 
[**errors_group_error_stack_trace**](ErrorsApi.md#errors_group_error_stack_trace) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/stacktrace | 
[**errors_group_list**](ErrorsApi.md#errors_group_list) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups | 
[**errors_group_model_counts**](ErrorsApi.md#errors_group_model_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/models | 
[**errors_group_operating_system_counts**](ErrorsApi.md#errors_group_operating_system_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/operatingSystems | 
[**errors_latest_error_details**](ErrorsApi.md#errors_latest_error_details) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors/latest | 
[**errors_list_for_group**](ErrorsApi.md#errors_list_for_group) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId}/errors | 
[**errors_list_session_logs**](ErrorsApi.md#errors_list_session_logs) | **GET** /v0.1/apps/{owner_name}/{app_name}/errors/{errorId}/sessionLogs | 
[**errors_update_state**](ErrorsApi.md#errors_update_state) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/errors/errorGroups/{errorGroupId} | 


# **errors_app_builds_list**
> ErrorsAppBuildsList200Response errors_app_builds_list(version, start, owner_name, app_name, end=end, top=top, error_type=error_type)



List of app builds

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_app_builds_list200_response import ErrorsAppBuildsList200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    version = 'version_example' # str | 
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)
    error_type = 'error_type_example' # str | Type of error (handled vs unhandled), including All (optional)

    try:
        api_response = api_instance.errors_app_builds_list(version, start, owner_name, app_name, end=end, top=top, error_type=error_type)
        print("The response of ErrorsApi->errors_app_builds_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_app_builds_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **version** | **str**|  | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]
 **error_type** | **str**| Type of error (handled vs unhandled), including All | [optional] 

### Return type

[**ErrorsAppBuildsList200Response**](ErrorsAppBuildsList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of App builds |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_available_versions**
> ErrorsAvailableVersions200Response errors_available_versions(start, owner_name, app_name, end=end, top=top, skip=skip, filter=filter, inlinecount=inlinecount, error_type=error_type)



Get all available versions in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_available_versions200_response import ErrorsAvailableVersions200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)
    skip = 0 # int | The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. (optional) (default to 0)
    filter = 'filter_example' # str | A filter as specified in https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering. (optional)
    inlinecount = none # str | Controls whether or not to include a count of all the items across all pages. (optional) (default to none)
    error_type = 'error_type_example' # str | Type of error (handled vs unhandled), including All (optional)

    try:
        api_response = api_instance.errors_available_versions(start, owner_name, app_name, end=end, top=top, skip=skip, filter=filter, inlinecount=inlinecount, error_type=error_type)
        print("The response of ErrorsApi->errors_available_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_available_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]
 **skip** | **int**| The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. | [optional] [default to 0]
 **filter** | **str**| A filter as specified in https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md#97-filtering. | [optional] 
 **inlinecount** | **str**| Controls whether or not to include a count of all the items across all pages. | [optional] [default to none]
 **error_type** | **str**| Type of error (handled vs unhandled), including All | [optional] 

### Return type

[**ErrorsAvailableVersions200Response**](ErrorsAvailableVersions200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of available versions in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_counts_per_day**
> ErrorsCountsPerDay200Response errors_counts_per_day(start, owner_name, app_name, version=version, end=end, app_build=app_build, error_type=error_type)



Count of crashes or errors by day in the time range based the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_counts_per_day200_response import ErrorsCountsPerDay200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    version = 'version_example' # str |  (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    app_build = 'app_build_example' # str | app build (optional)
    error_type = 'error_type_example' # str | Type of error (handled vs unhandled), excluding All (optional)

    try:
        api_response = api_instance.errors_counts_per_day(start, owner_name, app_name, version=version, end=end, app_build=app_build, error_type=error_type)
        print("The response of ErrorsApi->errors_counts_per_day:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_counts_per_day: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **version** | **str**|  | [optional] 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **app_build** | **str**| app build | [optional] 
 **error_type** | **str**| Type of error (handled vs unhandled), excluding All | [optional] 

### Return type

[**ErrorsCountsPerDay200Response**](ErrorsCountsPerDay200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of crashes or errors by day in the time range, and total over the entire time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_delete_error**
> ErrorsDeleteError200Response errors_delete_error(error_group_id, error_id, owner_name, app_name)



Delete a specific error and related attachments and blobs for an app. Searchable data will not be deleted immediately and may take up to 30 days.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_delete_error200_response import ErrorsDeleteError200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_delete_error(error_group_id, error_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_delete_error:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_delete_error: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsDeleteError200Response**](ErrorsDeleteError200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_attachment_location**
> ErrorsErrorLocation200Response errors_error_attachment_location(error_id, attachment_id, owner_name, app_name)



Error attachment location.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_location200_response import ErrorsErrorLocation200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_id = 'error_id_example' # str | The id of the error
    attachment_id = 'attachment_id_example' # str | Error attachment id.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_error_attachment_location(error_id, attachment_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_error_attachment_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_attachment_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **str**| The id of the error | 
 **attachment_id** | **str**| Error attachment id. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsErrorLocation200Response**](ErrorsErrorLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error attachment location. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_attachment_text**
> ErrorsErrorAttachmentText200Response errors_error_attachment_text(error_id, attachment_id, owner_name, app_name)



Error attachment text.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_attachment_text200_response import ErrorsErrorAttachmentText200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_id = 'error_id_example' # str | The id of the error
    attachment_id = 'attachment_id_example' # str | Error attachment id.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_error_attachment_text(error_id, attachment_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_error_attachment_text:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_attachment_text: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **str**| The id of the error | 
 **attachment_id** | **str**| Error attachment id. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsErrorAttachmentText200Response**](ErrorsErrorAttachmentText200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error attachment text. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_attachments**
> List[ErrorsErrorAttachments200ResponseInner] errors_error_attachments(error_id, owner_name, app_name)



List error attachments.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_attachments200_response_inner import ErrorsErrorAttachments200ResponseInner
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_error_attachments(error_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_error_attachments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_attachments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[ErrorsErrorAttachments200ResponseInner]**](ErrorsErrorAttachments200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of error attachments. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_download**
> object errors_error_download(error_group_id, error_id, owner_name, app_name, format=format)



Download details for a specific error.

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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    format = 'format_example' # str | the format of the crash log (optional)

    try:
        api_response = api_instance.errors_error_download(error_group_id, error_id, owner_name, app_name, format=format)
        print("The response of ErrorsApi->errors_error_download:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_download: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **format** | **str**| the format of the crash log | [optional] 

### Return type

**object**

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error details. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_free_device_percentages**
> ErrorsGroupErrorFreeDevicePercentages200Response errors_error_free_device_percentages(start, owner_name, app_name, end=end, versions=versions, app_build=app_build, error_type=error_type)



Percentage of error-free devices by day in the time range based on the selected versions. If SingleErrorTypeParameter is not provided, defaults to handlederror. API will return -1 if crash devices is greater than active devices

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_error_free_device_percentages200_response import ErrorsGroupErrorFreeDevicePercentages200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    versions = ['versions_example'] # List[str] |  (optional)
    app_build = 'app_build_example' # str | app build (optional)
    error_type = 'error_type_example' # str | Type of error (handled vs unhandled), excluding All (optional)

    try:
        api_response = api_instance.errors_error_free_device_percentages(start, owner_name, app_name, end=end, versions=versions, app_build=app_build, error_type=error_type)
        print("The response of ErrorsApi->errors_error_free_device_percentages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_free_device_percentages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **versions** | [**List[str]**](str.md)|  | [optional] 
 **app_build** | **str**| app build | [optional] 
 **error_type** | **str**| Type of error (handled vs unhandled), excluding All | [optional] 

### Return type

[**ErrorsGroupErrorFreeDevicePercentages200Response**](ErrorsGroupErrorFreeDevicePercentages200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Percentage of error-free devices by day in the time range and overall percentage of the entire time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_groups_search**
> ErrorsErrorGroupsSearch200Response errors_error_groups_search(owner_name, app_name, filter=filter, q=q, order=order, sort=sort, top=top, skip=skip)



Error groups list based on search parameters

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_groups_search200_response import ErrorsErrorGroupsSearch200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    filter = 'filter_example' # str | A filter as specified in OData notation (optional)
    q = 'q_example' # str | A query string (optional)
    order = desc # str | It controls the order of sorting (optional) (default to desc)
    sort = matchingReportsCount # str | It controls the sort based on specified field (optional) (default to matchingReportsCount)
    top = 100 # int | The maximum number of results to return (optional) (default to 100)
    skip = 0 # int | The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. (optional) (default to 0)

    try:
        api_response = api_instance.errors_error_groups_search(owner_name, app_name, filter=filter, q=q, order=order, sort=sort, top=top, skip=skip)
        print("The response of ErrorsApi->errors_error_groups_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_groups_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **filter** | **str**| A filter as specified in OData notation | [optional] 
 **q** | **str**| A query string | [optional] 
 **order** | **str**| It controls the order of sorting | [optional] [default to desc]
 **sort** | **str**| It controls the sort based on specified field | [optional] [default to matchingReportsCount]
 **top** | **int**| The maximum number of results to return | [optional] [default to 100]
 **skip** | **int**| The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. | [optional] [default to 0]

### Return type

[**ErrorsErrorGroupsSearch200Response**](ErrorsErrorGroupsSearch200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of error groups |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_location**
> ErrorsErrorLocation200Response errors_error_location(error_group_id, error_id, owner_name, app_name)



Error location.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_location200_response import ErrorsErrorLocation200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_error_location(error_group_id, error_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_error_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsErrorLocation200Response**](ErrorsErrorLocation200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error location. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_search**
> ErrorsErrorSearch200Response errors_error_search(owner_name, app_name, filter=filter, q=q, order=order, sort=sort, top=top, skip=skip)



Errors list based on search parameters

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_error_search200_response import ErrorsErrorSearch200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    filter = 'filter_example' # str | A filter as specified in OData notation (optional)
    q = 'q_example' # str | A query string (optional)
    order = desc # str | It controls the order of sorting (optional) (default to desc)
    sort = timestamp # str | It controls the sort based on specified field (optional) (default to timestamp)
    top = 100 # int | The maximum number of results to return (optional) (default to 100)
    skip = 0 # int | The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. (optional) (default to 0)

    try:
        api_response = api_instance.errors_error_search(owner_name, app_name, filter=filter, q=q, order=order, sort=sort, top=top, skip=skip)
        print("The response of ErrorsApi->errors_error_search:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_search: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **filter** | **str**| A filter as specified in OData notation | [optional] 
 **q** | **str**| A query string | [optional] 
 **order** | **str**| It controls the order of sorting | [optional] [default to desc]
 **sort** | **str**| It controls the sort based on specified field | [optional] [default to timestamp]
 **top** | **int**| The maximum number of results to return | [optional] [default to 100]
 **skip** | **int**| The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. | [optional] [default to 0]

### Return type

[**ErrorsErrorSearch200Response**](ErrorsErrorSearch200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of errors |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_error_stack_trace**
> DiagnosticsStackTrace errors_error_stack_trace(error_group_id, error_id, owner_name, app_name)



Error Stacktrace details.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.diagnostics_stack_trace import DiagnosticsStackTrace
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_error_stack_trace(error_group_id, error_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_error_stack_trace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_error_stack_trace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**DiagnosticsStackTrace**](DiagnosticsStackTrace.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error stacktrace details. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_get_error_details**
> ErrorsLatestErrorDetails200Response errors_get_error_details(error_group_id, error_id, owner_name, app_name)



Error details.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_latest_error_details200_response import ErrorsLatestErrorDetails200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_get_error_details(error_group_id, error_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_get_error_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_get_error_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsLatestErrorDetails200Response**](ErrorsLatestErrorDetails200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error details. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_get_retention_settings**
> ErrorsGetRetentionSettings200Response errors_get_retention_settings(owner_name, app_name)

gets the retention settings in days

gets the retention settings in days

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_get_retention_settings200_response import ErrorsGetRetentionSettings200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        # gets the retention settings in days
        api_response = api_instance.errors_get_retention_settings(owner_name, app_name)
        print("The response of ErrorsApi->errors_get_retention_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_get_retention_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsGetRetentionSettings200Response**](ErrorsGetRetentionSettings200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_counts_per_day**
> ErrorsCountsPerDay200Response errors_group_counts_per_day(error_group_id, start, owner_name, app_name, version=version, end=end)



Count of errors by day in the time range of the selected error group with selected version

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_counts_per_day200_response import ErrorsCountsPerDay200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    version = 'version_example' # str |  (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)

    try:
        api_response = api_instance.errors_group_counts_per_day(error_group_id, start, owner_name, app_name, version=version, end=end)
        print("The response of ErrorsApi->errors_group_counts_per_day:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_counts_per_day: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **version** | **str**|  | [optional] 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 

### Return type

[**ErrorsCountsPerDay200Response**](ErrorsCountsPerDay200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of errors by day in the time range and total errors over the time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_details**
> ErrorsGroupDetails200Response errors_group_details(error_group_id, owner_name, app_name)



Error group details

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_details200_response import ErrorsGroupDetails200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_group_details(error_group_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_group_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsGroupDetails200Response**](ErrorsGroupDetails200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error group details |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_error_free_device_percentages**
> ErrorsGroupErrorFreeDevicePercentages200Response errors_group_error_free_device_percentages(error_group_id, start, owner_name, app_name, end=end)



Percentage of error-free devices by day in the time range. Api will return -1 if crash devices is greater than active devices

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_error_free_device_percentages200_response import ErrorsGroupErrorFreeDevicePercentages200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)

    try:
        api_response = api_instance.errors_group_error_free_device_percentages(error_group_id, start, owner_name, app_name, end=end)
        print("The response of ErrorsApi->errors_group_error_free_device_percentages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_error_free_device_percentages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 

### Return type

[**ErrorsGroupErrorFreeDevicePercentages200Response**](ErrorsGroupErrorFreeDevicePercentages200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Percentage of error-free devices by day in the time range and overall percentage of the time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_error_stack_trace**
> DiagnosticsStackTrace errors_group_error_stack_trace(error_group_id, owner_name, app_name)



Gets the stack trace for the error group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.diagnostics_stack_trace import DiagnosticsStackTrace
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_group_error_stack_trace(error_group_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_group_error_stack_trace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_error_stack_trace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**DiagnosticsStackTrace**](DiagnosticsStackTrace.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Gets the stack trace for the error group. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_list**
> ErrorsGroupList200Response errors_group_list(start, owner_name, app_name, version=version, app_build=app_build, group_state=group_state, end=end, orderby=orderby, top=top, error_type=error_type)



List of error groups

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_list200_response import ErrorsGroupList200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    version = 'version_example' # str |  (optional)
    app_build = 'app_build_example' # str | app build (optional)
    group_state = 'group_state_example' # str |  (optional)
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    orderby = 'count desc' # str | controls the sorting order and sorting based on which column (optional) (default to 'count desc')
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)
    error_type = 'error_type_example' # str | Type of error (handled vs unhandled), including All (optional)

    try:
        api_response = api_instance.errors_group_list(start, owner_name, app_name, version=version, app_build=app_build, group_state=group_state, end=end, orderby=orderby, top=top, error_type=error_type)
        print("The response of ErrorsApi->errors_group_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **version** | **str**|  | [optional] 
 **app_build** | **str**| app build | [optional] 
 **group_state** | **str**|  | [optional] 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **orderby** | **str**| controls the sorting order and sorting based on which column | [optional] [default to &#39;count desc&#39;]
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]
 **error_type** | **str**| Type of error (handled vs unhandled), including All | [optional] 

### Return type

[**ErrorsGroupList200Response**](ErrorsGroupList200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of error groups |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_model_counts**
> ErrorsGroupModelCounts200Response errors_group_model_counts(error_group_id, owner_name, app_name, top=top)



Top models of the selected error group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_model_counts200_response import ErrorsGroupModelCounts200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)

    try:
        api_response = api_instance.errors_group_model_counts(error_group_id, owner_name, app_name, top=top)
        print("The response of ErrorsApi->errors_group_model_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_model_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]

### Return type

[**ErrorsGroupModelCounts200Response**](ErrorsGroupModelCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Top Models with percentage in descending order |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_group_operating_system_counts**
> ErrorsGroupOperatingSystemCounts200Response errors_group_operating_system_counts(error_group_id, owner_name, app_name, top=top)



Top OSes of the selected error group.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_operating_system_counts200_response import ErrorsGroupOperatingSystemCounts200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)

    try:
        api_response = api_instance.errors_group_operating_system_counts(error_group_id, owner_name, app_name, top=top)
        print("The response of ErrorsApi->errors_group_operating_system_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_group_operating_system_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]

### Return type

[**ErrorsGroupOperatingSystemCounts200Response**](ErrorsGroupOperatingSystemCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Top OSes with percentage in descending order |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_latest_error_details**
> ErrorsLatestErrorDetails200Response errors_latest_error_details(error_group_id, owner_name, app_name)



Latest error details.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_latest_error_details200_response import ErrorsLatestErrorDetails200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.errors_latest_error_details(error_group_id, owner_name, app_name)
        print("The response of ErrorsApi->errors_latest_error_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_latest_error_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**ErrorsLatestErrorDetails200Response**](ErrorsLatestErrorDetails200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Latest error details. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_list_for_group**
> ErrorsListForGroup200Response errors_list_for_group(error_group_id, start, owner_name, app_name, end=end, top=top, model=model, os=os)



Get all errors for group

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_list_for_group200_response import ErrorsListForGroup200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results till the max number.) (optional) (default to 30)
    model = 'model_example' # str |  (optional)
    os = 'os_example' # str |  (optional)

    try:
        api_response = api_instance.errors_list_for_group(error_group_id, start, owner_name, app_name, end=end, top=top, model=model, os=os)
        print("The response of ErrorsApi->errors_list_for_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_list_for_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results till the max number.) | [optional] [default to 30]
 **model** | **str**|  | [optional] 
 **os** | **str**|  | [optional] 

### Return type

[**ErrorsListForGroup200Response**](ErrorsListForGroup200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all errors for group |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_list_session_logs**
> ErrorsListSessionLogs200Response errors_list_session_logs(error_id, owner_name, app_name, var_date=var_date)



Get session logs by error ID

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_list_session_logs200_response import ErrorsListSessionLogs200Response
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_id = 'error_id_example' # str | The id of the error
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    var_date = '2013-10-20T19:20:30+01:00' # datetime | Date of data requested (optional)

    try:
        api_response = api_instance.errors_list_session_logs(error_id, owner_name, app_name, var_date=var_date)
        print("The response of ErrorsApi->errors_list_session_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_list_session_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_id** | **str**| The id of the error | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **var_date** | **datetime**| Date of data requested | [optional] 

### Return type

[**ErrorsListSessionLogs200Response**](ErrorsListSessionLogs200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session logs of specific error |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **errors_update_state**
> ErrorsGroupDetails200Response errors_update_state(error_group_id, owner_name, app_name, errors_update_state_request)



Update error group state

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.errors_group_details200_response import ErrorsGroupDetails200Response
from openapi_client.models.errors_update_state_request import ErrorsUpdateStateRequest
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
    api_instance = openapi_client.ErrorsApi(api_client)
    error_group_id = 'error_group_id_example' # str | The id of the error group
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    errors_update_state_request = openapi_client.ErrorsUpdateStateRequest() # ErrorsUpdateStateRequest | The state of the error group

    try:
        api_response = api_instance.errors_update_state(error_group_id, owner_name, app_name, errors_update_state_request)
        print("The response of ErrorsApi->errors_update_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ErrorsApi->errors_update_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **error_group_id** | **str**| The id of the error group | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **errors_update_state_request** | [**ErrorsUpdateStateRequest**](ErrorsUpdateStateRequest.md)| The state of the error group | 

### Return type

[**ErrorsGroupDetails200Response**](ErrorsGroupDetails200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Error group details |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

