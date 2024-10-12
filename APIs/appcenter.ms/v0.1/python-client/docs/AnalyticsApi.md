# openapi_client.AnalyticsApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analytics_audience_name_exists**](AnalyticsApi.md#analytics_audience_name_exists) | **HEAD** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/{audience_name} | 
[**analytics_crash_counts**](AnalyticsApi.md#analytics_crash_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_counts | Available for UWP apps only.
[**analytics_crash_free_device_percentages**](AnalyticsApi.md#analytics_crash_free_device_percentages) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crashfree_device_percentages | 
[**analytics_crash_group_counts**](AnalyticsApi.md#analytics_crash_group_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_groups/{crash_group_id}/crash_counts | Available for UWP apps only.
[**analytics_crash_group_model_counts**](AnalyticsApi.md#analytics_crash_group_model_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_groups/{crash_group_id}/models | Available for UWP apps only.
[**analytics_crash_group_operating_system_counts**](AnalyticsApi.md#analytics_crash_group_operating_system_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_groups/{crash_group_id}/operating_systems | Available for UWP apps only.
[**analytics_crash_group_totals**](AnalyticsApi.md#analytics_crash_group_totals) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_groups/{crash_group_id}/overall | Available for UWP apps only.
[**analytics_crash_groups_totals**](AnalyticsApi.md#analytics_crash_groups_totals) | **POST** /v0.1/apps/{owner_name}/{app_name}/analytics/crash_groups | 
[**analytics_create_or_update_audience**](AnalyticsApi.md#analytics_create_or_update_audience) | **PUT** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/{audience_name} | 
[**analytics_delete_audience**](AnalyticsApi.md#analytics_delete_audience) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/{audience_name} | 
[**analytics_device_counts**](AnalyticsApi.md#analytics_device_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/active_device_counts | 
[**analytics_distribution_release_counts**](AnalyticsApi.md#analytics_distribution_release_counts) | **POST** /v0.1/apps/{owner_name}/{app_name}/analytics/distribution/release_counts | 
[**analytics_event_count**](AnalyticsApi.md#analytics_event_count) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/event_count | 
[**analytics_event_device_count**](AnalyticsApi.md#analytics_event_device_count) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/device_count | 
[**analytics_event_per_device_count**](AnalyticsApi.md#analytics_event_per_device_count) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/count_per_device | 
[**analytics_event_per_session_count**](AnalyticsApi.md#analytics_event_per_session_count) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/count_per_session | 
[**analytics_event_properties**](AnalyticsApi.md#analytics_event_properties) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/properties | 
[**analytics_event_property_counts**](AnalyticsApi.md#analytics_event_property_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name}/properties/{event_property_name}/counts | 
[**analytics_events**](AnalyticsApi.md#analytics_events) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/events | 
[**analytics_events_delete**](AnalyticsApi.md#analytics_events_delete) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/analytics/events/{event_name} | 
[**analytics_events_delete_logs**](AnalyticsApi.md#analytics_events_delete_logs) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/analytics/event_logs/{event_name} | 
[**analytics_generic_log_flow**](AnalyticsApi.md#analytics_generic_log_flow) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/generic_log_flow | 
[**analytics_get_audience**](AnalyticsApi.md#analytics_get_audience) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/{audience_name} | 
[**analytics_language_counts**](AnalyticsApi.md#analytics_language_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/languages | 
[**analytics_list_audiences**](AnalyticsApi.md#analytics_list_audiences) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences | 
[**analytics_list_custom_properties**](AnalyticsApi.md#analytics_list_custom_properties) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/metadata/custom_properties | 
[**analytics_list_device_properties**](AnalyticsApi.md#analytics_list_device_properties) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/metadata/device_properties | 
[**analytics_list_device_property_values**](AnalyticsApi.md#analytics_list_device_property_values) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/metadata/device_properties/{property_name}/values | 
[**analytics_log_flow**](AnalyticsApi.md#analytics_log_flow) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/log_flow | 
[**analytics_model_counts**](AnalyticsApi.md#analytics_model_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/models | 
[**analytics_operating_system_counts**](AnalyticsApi.md#analytics_operating_system_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/oses | 
[**analytics_per_device_counts**](AnalyticsApi.md#analytics_per_device_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/sessions_per_device | 
[**analytics_place_counts**](AnalyticsApi.md#analytics_place_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/places | 
[**analytics_session_counts**](AnalyticsApi.md#analytics_session_counts) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/session_counts | 
[**analytics_session_durations_distribution**](AnalyticsApi.md#analytics_session_durations_distribution) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/session_durations_distribution | 
[**analytics_test_audience**](AnalyticsApi.md#analytics_test_audience) | **POST** /v0.1/apps/{owner_name}/{app_name}/analytics/audiences/definition/test | 
[**analytics_versions**](AnalyticsApi.md#analytics_versions) | **GET** /v0.1/apps/{owner_name}/{app_name}/analytics/versions | 
[**app_block_logs**](AnalyticsApi.md#app_block_logs) | **PUT** /v0.1/apps/{owner_name}/{app_name}/devices/block_logs | 
[**crashes_list_session_logs**](AnalyticsApi.md#crashes_list_session_logs) | **GET** /v0.1/apps/{owner_name}/{app_name}/crashes/{crash_id}/session_logs | 
[**devices_block_logs**](AnalyticsApi.md#devices_block_logs) | **PUT** /v0.1/apps/{owner_name}/{app_name}/devices/block_logs/{install_id} | 


# **analytics_audience_name_exists**
> analytics_audience_name_exists(audience_name, owner_name, app_name)



Returns whether audience definition exists.

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    audience_name = 'audience_name_example' # str | The name of the audience
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.analytics_audience_name_exists(audience_name, owner_name, app_name)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_audience_name_exists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience_name** | **str**| The name of the audience | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Audiences exists. |  -  |
**404** | Audiences does not exist. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_counts**
> AnalyticsCrashCounts200Response analytics_crash_counts(start, owner_name, app_name, end=end, versions=versions)

Available for UWP apps only.

Count of crashes by day in the time range based the selected versions. Available for UWP apps only.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_counts200_response import AnalyticsCrashCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        # Available for UWP apps only.
        api_response = api_instance.analytics_crash_counts(start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_crash_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsCrashCounts200Response**](AnalyticsCrashCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of crashes by day in the time range and total crashes over the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_free_device_percentages**
> AnalyticsCrashFreeDevicePercentages200Response analytics_crash_free_device_percentages(start, version, owner_name, app_name, end=end)



Percentage of crash-free device by day in the time range based on the selected versions. Api will return -1 if crash devices is greater than active devices.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_free_device_percentages200_response import AnalyticsCrashFreeDevicePercentages200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    version = 'version_example' # str | 
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)

    try:
        api_response = api_instance.analytics_crash_free_device_percentages(start, version, owner_name, app_name, end=end)
        print("The response of AnalyticsApi->analytics_crash_free_device_percentages:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_free_device_percentages: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **version** | **str**|  | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 

### Return type

[**AnalyticsCrashFreeDevicePercentages200Response**](AnalyticsCrashFreeDevicePercentages200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Percentage of crash-free devices by day in the time range and overall percentage of the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_group_counts**
> AnalyticsCrashCounts200Response analytics_crash_group_counts(crash_group_id, version, start, owner_name, app_name, end=end)

Available for UWP apps only.

Count of crashes by day in the time range of the selected crash group with selected version. Available for UWP apps only.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_counts200_response import AnalyticsCrashCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | The id of the crash group.
    version = 'version_example' # str | 
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)

    try:
        # Available for UWP apps only.
        api_response = api_instance.analytics_crash_group_counts(crash_group_id, version, start, owner_name, app_name, end=end)
        print("The response of AnalyticsApi->analytics_crash_group_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_group_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| The id of the crash group. | 
 **version** | **str**|  | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 

### Return type

[**AnalyticsCrashCounts200Response**](AnalyticsCrashCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of crashes by day in the time range and total crashes over the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_group_model_counts**
> AnalyticsCrashGroupModelCounts200Response analytics_crash_group_model_counts(crash_group_id, version, owner_name, app_name, top=top)

Available for UWP apps only.

Top models of the selected crash group with selected version. Available for UWP apps only.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_group_model_counts200_response import AnalyticsCrashGroupModelCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | The id of the crash group.
    version = 'version_example' # str | 
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)

    try:
        # Available for UWP apps only.
        api_response = api_instance.analytics_crash_group_model_counts(crash_group_id, version, owner_name, app_name, top=top)
        print("The response of AnalyticsApi->analytics_crash_group_model_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_group_model_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| The id of the crash group. | 
 **version** | **str**|  | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]

### Return type

[**AnalyticsCrashGroupModelCounts200Response**](AnalyticsCrashGroupModelCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Top models with percentage in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_group_operating_system_counts**
> AnalyticsCrashGroupOperatingSystemCounts200Response analytics_crash_group_operating_system_counts(crash_group_id, version, owner_name, app_name, top=top)

Available for UWP apps only.

Top OSes of the selected crash group with selected version. Available for UWP apps only.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_group_operating_system_counts200_response import AnalyticsCrashGroupOperatingSystemCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | The id of the crash group.
    version = 'version_example' # str | 
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)

    try:
        # Available for UWP apps only.
        api_response = api_instance.analytics_crash_group_operating_system_counts(crash_group_id, version, owner_name, app_name, top=top)
        print("The response of AnalyticsApi->analytics_crash_group_operating_system_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_group_operating_system_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| The id of the crash group. | 
 **version** | **str**|  | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]

### Return type

[**AnalyticsCrashGroupOperatingSystemCounts200Response**](AnalyticsCrashGroupOperatingSystemCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Top OSes with percentage in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_group_totals**
> AnalyticsCrashGroupsTotals200ResponseInnerOverall analytics_crash_group_totals(crash_group_id, version, owner_name, app_name)

Available for UWP apps only.

Overall crashes and affected users count of the selected crash group with selected version. Available for UWP apps only.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_groups_totals200_response_inner_overall import AnalyticsCrashGroupsTotals200ResponseInnerOverall
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    crash_group_id = 'crash_group_id_example' # str | The id of the crash group.
    version = 'version_example' # str | 
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        # Available for UWP apps only.
        api_response = api_instance.analytics_crash_group_totals(crash_group_id, version, owner_name, app_name)
        print("The response of AnalyticsApi->analytics_crash_group_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_group_totals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_group_id** | **str**| The id of the crash group. | 
 **version** | **str**|  | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AnalyticsCrashGroupsTotals200ResponseInnerOverall**](AnalyticsCrashGroupsTotals200ResponseInnerOverall.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Overall crashes and affected users count. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_crash_groups_totals**
> List[AnalyticsCrashGroupsTotals200ResponseInner] analytics_crash_groups_totals(owner_name, app_name, analytics_crash_groups_totals_request)



Overall crashes and affected users count of the selected crash groups with selected versions.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_crash_groups_totals200_response_inner import AnalyticsCrashGroupsTotals200ResponseInner
from openapi_client.models.analytics_crash_groups_totals_request import AnalyticsCrashGroupsTotalsRequest
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    analytics_crash_groups_totals_request = openapi_client.AnalyticsCrashGroupsTotalsRequest() # AnalyticsCrashGroupsTotalsRequest | 

    try:
        api_response = api_instance.analytics_crash_groups_totals(owner_name, app_name, analytics_crash_groups_totals_request)
        print("The response of AnalyticsApi->analytics_crash_groups_totals:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_crash_groups_totals: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **analytics_crash_groups_totals_request** | [**AnalyticsCrashGroupsTotalsRequest**](AnalyticsCrashGroupsTotalsRequest.md)|  | 

### Return type

[**List[AnalyticsCrashGroupsTotals200ResponseInner]**](AnalyticsCrashGroupsTotals200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Overall crashes and affected users count for all selected crash groups. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_create_or_update_audience**
> AnalyticsGetAudience200Response analytics_create_or_update_audience(audience_name, owner_name, app_name, analytics_test_audience_request)



Creates or updates audience definition.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_get_audience200_response import AnalyticsGetAudience200Response
from openapi_client.models.analytics_test_audience_request import AnalyticsTestAudienceRequest
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    audience_name = 'audience_name_example' # str | The name of the audience
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    analytics_test_audience_request = openapi_client.AnalyticsTestAudienceRequest() # AnalyticsTestAudienceRequest | Audience definition

    try:
        api_response = api_instance.analytics_create_or_update_audience(audience_name, owner_name, app_name, analytics_test_audience_request)
        print("The response of AnalyticsApi->analytics_create_or_update_audience:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_create_or_update_audience: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience_name** | **str**| The name of the audience | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **analytics_test_audience_request** | [**AnalyticsTestAudienceRequest**](AnalyticsTestAudienceRequest.md)| Audience definition | 

### Return type

[**AnalyticsGetAudience200Response**](AnalyticsGetAudience200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated audiences definition. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_delete_audience**
> analytics_delete_audience(audience_name, owner_name, app_name)



Deletes audience definition.

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    audience_name = 'audience_name_example' # str | The name of the audience
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.analytics_delete_audience(audience_name, owner_name, app_name)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_delete_audience: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience_name** | **str**| The name of the audience | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Audiences exists. |  -  |
**404** | Audiences does not exist. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_device_counts**
> AnalyticsDeviceCounts200Response analytics_device_counts(start, owner_name, app_name, end=end, versions=versions, app_build=app_build)



Count of active devices by interval in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_device_counts200_response import AnalyticsDeviceCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)
    app_build = 'app_build_example' # str | Application build number. If build number is specified than multiple versions are not allowed. (optional)

    try:
        api_response = api_instance.analytics_device_counts(start, owner_name, app_name, end=end, versions=versions, app_build=app_build)
        print("The response of AnalyticsApi->analytics_device_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_device_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 
 **app_build** | **str**| Application build number. If build number is specified than multiple versions are not allowed. | [optional] 

### Return type

[**AnalyticsDeviceCounts200Response**](AnalyticsDeviceCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of active devices by interval in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_distribution_release_counts**
> AnalyticsDistributionReleaseCounts200Response analytics_distribution_release_counts(owner_name, app_name, analytics_distribution_release_counts_request)



Count of total downloads for the provided distribution releases.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_distribution_release_counts200_response import AnalyticsDistributionReleaseCounts200Response
from openapi_client.models.analytics_distribution_release_counts_request import AnalyticsDistributionReleaseCountsRequest
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    analytics_distribution_release_counts_request = openapi_client.AnalyticsDistributionReleaseCountsRequest() # AnalyticsDistributionReleaseCountsRequest | The releases to retrieve.

    try:
        api_response = api_instance.analytics_distribution_release_counts(owner_name, app_name, analytics_distribution_release_counts_request)
        print("The response of AnalyticsApi->analytics_distribution_release_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_distribution_release_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **analytics_distribution_release_counts_request** | [**AnalyticsDistributionReleaseCountsRequest**](AnalyticsDistributionReleaseCountsRequest.md)| The releases to retrieve. | 

### Return type

[**AnalyticsDistributionReleaseCounts200Response**](AnalyticsDistributionReleaseCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of total downloads for the provided distribution release(s). |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_count**
> AnalyticsEventCount200Response analytics_event_count(event_name, start, owner_name, app_name, end=end, versions=versions)



Count of events by interval in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_count200_response import AnalyticsEventCount200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_event_count(event_name, start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_event_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsEventCount200Response**](AnalyticsEventCount200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of events by interval in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_device_count**
> AnalyticsEventDeviceCount200Response analytics_event_device_count(event_name, start, owner_name, app_name, end=end, versions=versions)



Count of devices for an event by interval in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_device_count200_response import AnalyticsEventDeviceCount200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_event_device_count(event_name, start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_event_device_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_device_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsEventDeviceCount200Response**](AnalyticsEventDeviceCount200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of devices for an event by interval in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_per_device_count**
> AnalyticsEventPerDeviceCount200Response analytics_event_per_device_count(event_name, start, owner_name, app_name, end=end, versions=versions)



Count of events per device by interval in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_per_device_count200_response import AnalyticsEventPerDeviceCount200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_event_per_device_count(event_name, start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_event_per_device_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_per_device_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsEventPerDeviceCount200Response**](AnalyticsEventPerDeviceCount200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of events per device by interval in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_per_session_count**
> AnalyticsEventPerSessionCount200Response analytics_event_per_session_count(event_name, start, owner_name, app_name, end=end, versions=versions)



Count of events per session by interval in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_per_session_count200_response import AnalyticsEventPerSessionCount200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_event_per_session_count(event_name, start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_event_per_session_count:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_per_session_count: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsEventPerSessionCount200Response**](AnalyticsEventPerSessionCount200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of events per session by interval in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_properties**
> AnalyticsEventProperties200Response analytics_event_properties(event_name, owner_name, app_name)



Event properties.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_properties200_response import AnalyticsEventProperties200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.analytics_event_properties(event_name, owner_name, app_name)
        print("The response of AnalyticsApi->analytics_event_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AnalyticsEventProperties200Response**](AnalyticsEventProperties200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event properties. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_event_property_counts**
> AnalyticsEventPropertyCounts200Response analytics_event_property_counts(event_name, event_property_name, start, owner_name, app_name, end=end, versions=versions, top=top)



Event properties value counts during the time range in descending order.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_event_property_counts200_response import AnalyticsEventPropertyCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    event_property_name = 'event_property_name_example' # str | The id of the event property.
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)
    top = 10 # int | The number of property values to return. Set to 0 in order to fetch all results available. (optional) (default to 10)

    try:
        api_response = api_instance.analytics_event_property_counts(event_name, event_property_name, start, owner_name, app_name, end=end, versions=versions, top=top)
        print("The response of AnalyticsApi->analytics_event_property_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_event_property_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **event_property_name** | **str**| The id of the event property. | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 
 **top** | **int**| The number of property values to return. Set to 0 in order to fetch all results available. | [optional] [default to 10]

### Return type

[**AnalyticsEventPropertyCounts200Response**](AnalyticsEventPropertyCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event properties value counts during the time range in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_events**
> AnalyticsEvents200Response analytics_events(start, owner_name, app_name, end=end, versions=versions, event_name=event_name, top=top, skip=skip, inlinecount=inlinecount, orderby=orderby)



Count of active events in the time range ordered by event.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_events200_response import AnalyticsEvents200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)
    event_name = ['event_name_example'] # List[str] | To select the specific events. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    skip = 0 # int | The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. (optional) (default to 0)
    inlinecount = none # str | Controls whether or not to include a count of all the items across all pages. (optional) (default to none)
    orderby = 'count desc' # str | controls the sorting order and sorting based on which column (optional) (default to 'count desc')

    try:
        api_response = api_instance.analytics_events(start, owner_name, app_name, end=end, versions=versions, event_name=event_name, top=top, skip=skip, inlinecount=inlinecount, orderby=orderby)
        print("The response of AnalyticsApi->analytics_events:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_events: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 
 **event_name** | [**List[str]**](str.md)| To select the specific events. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **skip** | **int**| The offset (starting at 0) of the first result to return. This parameter along with limit is used to perform pagination. | [optional] [default to 0]
 **inlinecount** | **str**| Controls whether or not to include a count of all the items across all pages. | [optional] [default to none]
 **orderby** | **str**| controls the sorting order and sorting based on which column | [optional] [default to &#39;count desc&#39;]

### Return type

[**AnalyticsEvents200Response**](AnalyticsEvents200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of active events in the time range ordered by event. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_events_delete**
> analytics_events_delete(event_name, owner_name, app_name)



Delete the set of Events with the specified event names.

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.analytics_events_delete(event_name, owner_name, app_name)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_events_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event successfully deleted. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_events_delete_logs**
> analytics_events_delete_logs(event_name, owner_name, app_name)



Delete the set of Events with the specified event names.

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    event_name = 'event_name_example' # str | The id of the event.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.analytics_events_delete_logs(event_name, owner_name, app_name)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_events_delete_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **event_name** | **str**| The id of the event. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Event successfully deleted. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_generic_log_flow**
> AnalyticsGenericLogFlow200Response analytics_generic_log_flow(owner_name, app_name, start=start)



Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_generic_log_flow200_response import AnalyticsGenericLogFlow200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone. (optional)

    try:
        api_response = api_instance.analytics_generic_log_flow(owner_name, app_name, start=start)
        print("The response of AnalyticsApi->analytics_generic_log_flow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_generic_log_flow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone. | [optional] 

### Return type

[**AnalyticsGenericLogFlow200Response**](AnalyticsGenericLogFlow200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of logs for the requested time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_get_audience**
> AnalyticsGetAudience200Response analytics_get_audience(audience_name, owner_name, app_name)



Gets audience definition.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_get_audience200_response import AnalyticsGetAudience200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    audience_name = 'audience_name_example' # str | The name of the audience
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.analytics_get_audience(audience_name, owner_name, app_name)
        print("The response of AnalyticsApi->analytics_get_audience:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_get_audience: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **audience_name** | **str**| The name of the audience | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AnalyticsGetAudience200Response**](AnalyticsGetAudience200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Audiences definition. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_language_counts**
> AnalyticsLanguageCounts200Response analytics_language_counts(start, owner_name, app_name, end=end, top=top, versions=versions)



Languages in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_language_counts200_response import AnalyticsLanguageCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_language_counts(start, owner_name, app_name, end=end, top=top, versions=versions)
        print("The response of AnalyticsApi->analytics_language_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_language_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsLanguageCounts200Response**](AnalyticsLanguageCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Languages with count during the time range in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_list_audiences**
> AnalyticsListAudiences200Response analytics_list_audiences(owner_name, app_name, include_disabled=include_disabled)



Get list of audiences.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_list_audiences200_response import AnalyticsListAudiences200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    include_disabled = True # bool | Include disabled audience definitions (optional)

    try:
        api_response = api_instance.analytics_list_audiences(owner_name, app_name, include_disabled=include_disabled)
        print("The response of AnalyticsApi->analytics_list_audiences:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_list_audiences: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **include_disabled** | **bool**| Include disabled audience definitions | [optional] 

### Return type

[**AnalyticsListAudiences200Response**](AnalyticsListAudiences200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of audiences. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_list_custom_properties**
> AnalyticsListCustomProperties200Response analytics_list_custom_properties(owner_name, app_name)



Get list of custom properties.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_list_custom_properties200_response import AnalyticsListCustomProperties200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.analytics_list_custom_properties(owner_name, app_name)
        print("The response of AnalyticsApi->analytics_list_custom_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_list_custom_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AnalyticsListCustomProperties200Response**](AnalyticsListCustomProperties200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of device properties. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_list_device_properties**
> AnalyticsListCustomProperties200Response analytics_list_device_properties(owner_name, app_name)



Get list of device properties.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_list_custom_properties200_response import AnalyticsListCustomProperties200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.analytics_list_device_properties(owner_name, app_name)
        print("The response of AnalyticsApi->analytics_list_device_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_list_device_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**AnalyticsListCustomProperties200Response**](AnalyticsListCustomProperties200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of device properties. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_list_device_property_values**
> AnalyticsListDevicePropertyValues200Response analytics_list_device_property_values(property_name, owner_name, app_name, contains=contains)



Get list of device property values.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_list_device_property_values200_response import AnalyticsListDevicePropertyValues200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    property_name = 'property_name_example' # str | Device property
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    contains = 'contains_example' # str | Contains string (optional)

    try:
        api_response = api_instance.analytics_list_device_property_values(property_name, owner_name, app_name, contains=contains)
        print("The response of AnalyticsApi->analytics_list_device_property_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_list_device_property_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **property_name** | **str**| Device property | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **contains** | **str**| Contains string | [optional] 

### Return type

[**AnalyticsListDevicePropertyValues200Response**](AnalyticsListDevicePropertyValues200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of supported device property values. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_log_flow**
> AnalyticsLogFlow200Response analytics_log_flow(owner_name, app_name, start=start)



Logs received between the specified start time and the current time. The API will return a maximum of 100 logs per call.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_log_flow200_response import AnalyticsLogFlow200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone. (optional)

    try:
        api_response = api_instance.analytics_log_flow(owner_name, app_name, start=start)
        print("The response of AnalyticsApi->analytics_log_flow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_log_flow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. It must be within the current day in the UTC timezone. The default value is the start time of the current day in UTC timezone. | [optional] 

### Return type

[**AnalyticsLogFlow200Response**](AnalyticsLogFlow200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of logs for the requested time range. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_model_counts**
> AnalyticsModelCounts200Response analytics_model_counts(start, owner_name, app_name, end=end, top=top, versions=versions)



Models in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_model_counts200_response import AnalyticsModelCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_model_counts(start, owner_name, app_name, end=end, top=top, versions=versions)
        print("The response of AnalyticsApi->analytics_model_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_model_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsModelCounts200Response**](AnalyticsModelCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Models with count during the time range in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_operating_system_counts**
> AnalyticsOperatingSystemCounts200Response analytics_operating_system_counts(start, owner_name, app_name, end=end, top=top, versions=versions)



OSes in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_operating_system_counts200_response import AnalyticsOperatingSystemCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_operating_system_counts(start, owner_name, app_name, end=end, top=top, versions=versions)
        print("The response of AnalyticsApi->analytics_operating_system_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_operating_system_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsOperatingSystemCounts200Response**](AnalyticsOperatingSystemCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OSes with count during the time range in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_per_device_counts**
> AnalyticsPerDeviceCounts200Response analytics_per_device_counts(start, owner_name, app_name, end=end, versions=versions)



Count of sessions per device in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_per_device_counts200_response import AnalyticsPerDeviceCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_per_device_counts(start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_per_device_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_per_device_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsPerDeviceCounts200Response**](AnalyticsPerDeviceCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of sessions per device in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_place_counts**
> AnalyticsPlaceCounts200Response analytics_place_counts(start, owner_name, app_name, end=end, top=top, versions=versions)



Places in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_place_counts200_response import AnalyticsPlaceCounts200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_place_counts(start, owner_name, app_name, end=end, top=top, versions=versions)
        print("The response of AnalyticsApi->analytics_place_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_place_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsPlaceCounts200Response**](AnalyticsPlaceCounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Places with count during the time range in descending order. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_session_counts**
> List[AnalyticsDeviceCounts200ResponseDailyInner] analytics_session_counts(start, owner_name, app_name, end=end, versions=versions)



Count of sessions in the time range.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_device_counts200_response_daily_inner import AnalyticsDeviceCounts200ResponseDailyInner
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_session_counts(start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_session_counts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_session_counts: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**List[AnalyticsDeviceCounts200ResponseDailyInner]**](AnalyticsDeviceCounts200ResponseDailyInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of sessions in the time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_session_durations_distribution**
> AnalyticsSessionDurationsDistribution200Response analytics_session_durations_distribution(start, owner_name, app_name, end=end, versions=versions)



Gets session duration.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_session_durations_distribution200_response import AnalyticsSessionDurationsDistribution200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_session_durations_distribution(start, owner_name, app_name, end=end, versions=versions)
        print("The response of AnalyticsApi->analytics_session_durations_distribution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_session_durations_distribution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsSessionDurationsDistribution200Response**](AnalyticsSessionDurationsDistribution200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of  session durations for requested time range. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_test_audience**
> AnalyticsTestAudience200Response analytics_test_audience(owner_name, app_name, analytics_test_audience_request)



Tests audience definition.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_test_audience200_response import AnalyticsTestAudience200Response
from openapi_client.models.analytics_test_audience_request import AnalyticsTestAudienceRequest
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    analytics_test_audience_request = openapi_client.AnalyticsTestAudienceRequest() # AnalyticsTestAudienceRequest | Audience definition

    try:
        api_response = api_instance.analytics_test_audience(owner_name, app_name, analytics_test_audience_request)
        print("The response of AnalyticsApi->analytics_test_audience:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_test_audience: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **analytics_test_audience_request** | [**AnalyticsTestAudienceRequest**](AnalyticsTestAudienceRequest.md)| Audience definition | 

### Return type

[**AnalyticsTestAudience200Response**](AnalyticsTestAudience200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tests audience definition. |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analytics_versions**
> AnalyticsVersions200Response analytics_versions(start, owner_name, app_name, end=end, top=top, versions=versions)



Count of active versions in the time range ordered by version.

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.analytics_versions200_response import AnalyticsVersions200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    start = '2013-10-20T19:20:30+01:00' # datetime | Start date time in data in ISO 8601 date time format.
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    end = '2013-10-20T19:20:30+01:00' # datetime | Last date time in data in ISO 8601 date time format. (optional)
    top = 30 # int | The maximum number of results to return. (0 will fetch all results) (optional) (default to 30)
    versions = ['versions_example'] # List[str] | To select specific application versions (optional)

    try:
        api_response = api_instance.analytics_versions(start, owner_name, app_name, end=end, top=top, versions=versions)
        print("The response of AnalyticsApi->analytics_versions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->analytics_versions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **datetime**| Start date time in data in ISO 8601 date time format. | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **end** | **datetime**| Last date time in data in ISO 8601 date time format. | [optional] 
 **top** | **int**| The maximum number of results to return. (0 will fetch all results) | [optional] [default to 30]
 **versions** | [**List[str]**](str.md)| To select specific application versions | [optional] 

### Return type

[**AnalyticsVersions200Response**](AnalyticsVersions200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count of active versions in the time range ordered by version. |  -  |
**0** | Error code with reason. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **app_block_logs**
> str app_block_logs(owner_name, app_name)



**Warning, this operation is not reversible.**   A successful call to this API will permanently stop ingesting any logs received via SDK by app_id, and cannot be restored. We advise caution when using this API, it is designed to permanently disable an app_id. 

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.app_block_logs(owner_name, app_name)
        print("The response of AnalyticsApi->app_block_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->app_block_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
**200** | Operation successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **crashes_list_session_logs**
> CrashesListSessionLogs200Response crashes_list_session_logs(crash_id, owner_name, app_name, var_date=var_date)



Get session logs by crash ID

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.crashes_list_session_logs200_response import CrashesListSessionLogs200Response
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
    api_instance = openapi_client.AnalyticsApi(api_client)
    crash_id = 'crash_id_example' # str | The id of the a crash
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    var_date = '2013-10-20T19:20:30+01:00' # datetime | Date of data requested (optional)

    try:
        api_response = api_instance.crashes_list_session_logs(crash_id, owner_name, app_name, var_date=var_date)
        print("The response of AnalyticsApi->crashes_list_session_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->crashes_list_session_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **crash_id** | **str**| The id of the a crash | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **var_date** | **datetime**| Date of data requested | [optional] 

### Return type

[**CrashesListSessionLogs200Response**](CrashesListSessionLogs200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session logs of specific crash |  -  |
**0** | Error code with reason |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_block_logs**
> str devices_block_logs(install_id, owner_name, app_name)



**Warning, this operation is not reversible.**   A successful call to this API will permanently stop ingesting any logs received via SDK for the given installation ID, and cannot be restored. We advise caution when using this API, it is designed to permanently disable collection from a specific installation of the app on a device, usually following the request from a user. 

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
    api_instance = openapi_client.AnalyticsApi(api_client)
    install_id = 'install_id_example' # str | The id of the device
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.devices_block_logs(install_id, owner_name, app_name)
        print("The response of AnalyticsApi->devices_block_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AnalyticsApi->devices_block_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **install_id** | **str**| The id of the device | 
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
**200** | Operation successful |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

