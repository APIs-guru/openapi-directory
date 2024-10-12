# openapi_client.TestApi

All URIs are relative to *https://api.appcenter.ms*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_archive_test_run**](TestApi.md#test_archive_test_run) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id} | 
[**test_create_device_selection**](TestApi.md#test_create_device_selection) | **POST** /v0.1/apps/{owner_name}/{app_name}/device_selection | 
[**test_create_device_set_of_owner**](TestApi.md#test_create_device_set_of_owner) | **POST** /v0.1/apps/{owner_name}/{app_name}/owner/device_sets | 
[**test_create_device_set_of_user**](TestApi.md#test_create_device_set_of_user) | **POST** /v0.1/apps/{owner_name}/{app_name}/user/device_sets | 
[**test_create_subscription**](TestApi.md#test_create_subscription) | **POST** /v0.1/apps/{owner_name}/{app_name}/subscriptions | 
[**test_create_test_run**](TestApi.md#test_create_test_run) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_runs | 
[**test_create_test_series**](TestApi.md#test_create_test_series) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_series | 
[**test_delete_device_set_of_owner**](TestApi.md#test_delete_device_set_of_owner) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/owner/device_sets/{id} | 
[**test_delete_device_set_of_user**](TestApi.md#test_delete_device_set_of_user) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/user/device_sets/{id} | 
[**test_delete_test_series**](TestApi.md#test_delete_test_series) | **DELETE** /v0.1/apps/{owner_name}/{app_name}/test_series/{test_series_slug} | 
[**test_gdpr_export_account**](TestApi.md#test_gdpr_export_account) | **GET** /v0.1/account/test/export/accounts | 
[**test_gdpr_export_accounts**](TestApi.md#test_gdpr_export_accounts) | **GET** /v0.1/account/test/export | 
[**test_gdpr_export_app**](TestApi.md#test_gdpr_export_app) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export/apps | 
[**test_gdpr_export_apps**](TestApi.md#test_gdpr_export_apps) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export | 
[**test_gdpr_export_feature_flag**](TestApi.md#test_gdpr_export_feature_flag) | **GET** /v0.1/account/test/export/featureFlags | 
[**test_gdpr_export_file_set_file**](TestApi.md#test_gdpr_export_file_set_file) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export/fileSetFiles | 
[**test_gdpr_export_hash_file**](TestApi.md#test_gdpr_export_hash_file) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export/hashFiles | 
[**test_gdpr_export_pipeline_test**](TestApi.md#test_gdpr_export_pipeline_test) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export/pipelineTests | 
[**test_gdpr_export_test_run**](TestApi.md#test_gdpr_export_test_run) | **GET** /v0.1/apps/{owner_name}/{app_name}/test/export/testRuns | 
[**test_get_all_test_runs_for_series**](TestApi.md#test_get_all_test_runs_for_series) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_series/{test_series_slug}/test_runs | 
[**test_get_all_test_series**](TestApi.md#test_get_all_test_series) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_series | 
[**test_get_device_configurations**](TestApi.md#test_get_device_configurations) | **GET** /v0.1/apps/{owner_name}/{app_name}/device_configurations | 
[**test_get_device_set_of_owner**](TestApi.md#test_get_device_set_of_owner) | **GET** /v0.1/apps/{owner_name}/{app_name}/owner/device_sets/{id} | 
[**test_get_device_set_of_user**](TestApi.md#test_get_device_set_of_user) | **GET** /v0.1/apps/{owner_name}/{app_name}/user/device_sets/{id} | 
[**test_get_subscriptions**](TestApi.md#test_get_subscriptions) | **GET** /v0.1/apps/{owner_name}/{app_name}/subscriptions | 
[**test_get_test_report**](TestApi.md#test_get_test_report) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/report | 
[**test_get_test_run**](TestApi.md#test_get_test_run) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id} | 
[**test_get_test_run_state**](TestApi.md#test_get_test_run_state) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/state | 
[**test_get_test_runs**](TestApi.md#test_get_test_runs) | **GET** /v0.1/apps/{owner_name}/{app_name}/test_runs | 
[**test_list_device_sets_of_owner**](TestApi.md#test_list_device_sets_of_owner) | **GET** /v0.1/apps/{owner_name}/{app_name}/owner/device_sets | 
[**test_list_device_sets_of_user**](TestApi.md#test_list_device_sets_of_user) | **GET** /v0.1/apps/{owner_name}/{app_name}/user/device_sets | 
[**test_patch_test_series**](TestApi.md#test_patch_test_series) | **PATCH** /v0.1/apps/{owner_name}/{app_name}/test_series/{test_series_slug} | 
[**test_start_test_run**](TestApi.md#test_start_test_run) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/start | 
[**test_start_uploading_file**](TestApi.md#test_start_uploading_file) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/files | 
[**test_stop_test_run**](TestApi.md#test_stop_test_run) | **PUT** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/stop | 
[**test_update_device_set_of_owner**](TestApi.md#test_update_device_set_of_owner) | **PUT** /v0.1/apps/{owner_name}/{app_name}/owner/device_sets/{id} | 
[**test_update_device_set_of_user**](TestApi.md#test_update_device_set_of_user) | **PUT** /v0.1/apps/{owner_name}/{app_name}/user/device_sets/{id} | 
[**test_upload_hash**](TestApi.md#test_upload_hash) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/hashes | 
[**test_upload_hashes_batch**](TestApi.md#test_upload_hashes_batch) | **POST** /v0.1/apps/{owner_name}/{app_name}/test_runs/{test_run_id}/hashes/batch | 


# **test_archive_test_run**
> TestRun test_archive_test_run(test_run_id, owner_name, app_name)



Logically deletes a test run

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run import TestRun
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_archive_test_run(test_run_id, owner_name, app_name)
        print("The response of TestApi->test_archive_test_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_archive_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestRun**](TestRun.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Test run with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_device_selection**
> DeviceSelection test_create_device_selection(owner_name, app_name, device_list)



Creates a short ID for a list of devices

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_list import DeviceList
from openapi_client.models.device_selection import DeviceSelection
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    device_list = openapi_client.DeviceList() # DeviceList | 

    try:
        api_response = api_instance.test_create_device_selection(owner_name, app_name, device_list)
        print("The response of TestApi->test_create_device_selection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_create_device_selection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **device_list** | [**DeviceList**](DeviceList.md)|  | 

### Return type

[**DeviceSelection**](DeviceSelection.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Invalid list of device IDs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_device_set_of_owner**
> DeviceSet test_create_device_set_of_owner(owner_name, app_name, device_set_update_information)



Creates a device set belonging to the owner

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
from openapi_client.models.device_set_update_information import DeviceSetUpdateInformation
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    device_set_update_information = openapi_client.DeviceSetUpdateInformation() # DeviceSetUpdateInformation | 

    try:
        api_response = api_instance.test_create_device_set_of_owner(owner_name, app_name, device_set_update_information)
        print("The response of TestApi->test_create_device_set_of_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_create_device_set_of_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **device_set_update_information** | [**DeviceSetUpdateInformation**](DeviceSetUpdateInformation.md)|  | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Invalid list of device IDs or conflicting name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_device_set_of_user**
> DeviceSet test_create_device_set_of_user(owner_name, app_name, device_set_update_information)



Creates a device set belonging to the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
from openapi_client.models.device_set_update_information import DeviceSetUpdateInformation
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    device_set_update_information = openapi_client.DeviceSetUpdateInformation() # DeviceSetUpdateInformation | 

    try:
        api_response = api_instance.test_create_device_set_of_user(owner_name, app_name, device_set_update_information)
        print("The response of TestApi->test_create_device_set_of_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_create_device_set_of_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **device_set_update_information** | [**DeviceSetUpdateInformation**](DeviceSetUpdateInformation.md)|  | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Invalid list of device IDs or conflicting name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_subscription**
> Subscription1 test_create_subscription(owner_name, app_name)



Accept a free trial subscription

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.subscription1 import Subscription1
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_create_subscription(owner_name, app_name)
        print("The response of TestApi->test_create_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_create_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**Subscription1**](Subscription1.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_test_run**
> test_create_test_run(owner_name, app_name)



Creates a new test run

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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.test_create_test_run(owner_name, app_name)
    except Exception as e:
        print("Exception when calling TestApi->test_create_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * Location - Link to get details about the cancel export. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_create_test_series**
> TestSeries test_create_test_series(owner_name, app_name, name_of_the_test_series)



Creates new test series for an application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.name_of_the_test_series import NameOfTheTestSeries
from openapi_client.models.test_series import TestSeries
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    name_of_the_test_series = openapi_client.NameOfTheTestSeries() # NameOfTheTestSeries | 

    try:
        api_response = api_instance.test_create_test_series(owner_name, app_name, name_of_the_test_series)
        print("The response of TestApi->test_create_test_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_create_test_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **name_of_the_test_series** | [**NameOfTheTestSeries**](NameOfTheTestSeries.md)|  | 

### Return type

[**TestSeries**](TestSeries.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid test series name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_delete_device_set_of_owner**
> test_delete_device_set_of_owner(id, owner_name, app_name)



Deletes a device set belonging to the owner

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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.test_delete_device_set_of_owner(id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling TestApi->test_delete_device_set_of_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_delete_device_set_of_user**
> test_delete_device_set_of_user(id, owner_name, app_name)



Deletes a device set belonging to the user

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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.test_delete_device_set_of_user(id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling TestApi->test_delete_device_set_of_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_delete_test_series**
> test_delete_test_series(test_series_slug, owner_name, app_name)



Deletes a single test series

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
    api_instance = openapi_client.TestApi(api_client)
    test_series_slug = 'test_series_slug_example' # str | The slug of the test series
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.test_delete_test_series(test_series_slug, owner_name, app_name)
    except Exception as e:
        print("Exception when calling TestApi->test_delete_test_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_series_slug** | **str**| The slug of the test series | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test series was successfully removed |  -  |
**404** | The test series was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_account**
> TestGdprExportAccount200Response test_gdpr_export_account()



Lists account data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_account200_response import TestGdprExportAccount200Response
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
    api_instance = openapi_client.TestApi(api_client)

    try:
        api_response = api_instance.test_gdpr_export_account()
        print("The response of TestApi->test_gdpr_export_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_account: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestGdprExportAccount200Response**](TestGdprExportAccount200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_accounts**
> TestGdprExportAccounts200Response test_gdpr_export_accounts()



Lists all the endpoints available for Test accounts data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_accounts200_response import TestGdprExportAccounts200Response
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
    api_instance = openapi_client.TestApi(api_client)

    try:
        api_response = api_instance.test_gdpr_export_accounts()
        print("The response of TestApi->test_gdpr_export_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_accounts: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestGdprExportAccounts200Response**](TestGdprExportAccounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_app**
> TestGdprExportApp200Response test_gdpr_export_app(owner_name, app_name)



Lists app data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_app200_response import TestGdprExportApp200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_app(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportApp200Response**](TestGdprExportApp200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_apps**
> TestGdprExportAccounts200Response test_gdpr_export_apps(owner_name, app_name)



Lists all the endpoints available for Test apps data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_accounts200_response import TestGdprExportAccounts200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_apps(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_apps: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportAccounts200Response**](TestGdprExportAccounts200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_feature_flag**
> TestGdprExportFeatureFlag200Response test_gdpr_export_feature_flag()



Lists feature flag data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_feature_flag200_response import TestGdprExportFeatureFlag200Response
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
    api_instance = openapi_client.TestApi(api_client)

    try:
        api_response = api_instance.test_gdpr_export_feature_flag()
        print("The response of TestApi->test_gdpr_export_feature_flag:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_feature_flag: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TestGdprExportFeatureFlag200Response**](TestGdprExportFeatureFlag200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_file_set_file**
> TestGdprExportFileSetFile200Response test_gdpr_export_file_set_file(owner_name, app_name)



Lists file set file data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_file_set_file200_response import TestGdprExportFileSetFile200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_file_set_file(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_file_set_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_file_set_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportFileSetFile200Response**](TestGdprExportFileSetFile200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_hash_file**
> TestGdprExportHashFile200Response test_gdpr_export_hash_file(owner_name, app_name)



Lists hash file data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_hash_file200_response import TestGdprExportHashFile200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_hash_file(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_hash_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_hash_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportHashFile200Response**](TestGdprExportHashFile200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_pipeline_test**
> TestGdprExportPipelineTest200Response test_gdpr_export_pipeline_test(owner_name, app_name)



Lists pipeline test data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_pipeline_test200_response import TestGdprExportPipelineTest200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_pipeline_test(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_pipeline_test:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_pipeline_test: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportPipelineTest200Response**](TestGdprExportPipelineTest200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_gdpr_export_test_run**
> TestGdprExportTestRun200Response test_gdpr_export_test_run(owner_name, app_name)



Lists test run data

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_gdpr_export_test_run200_response import TestGdprExportTestRun200Response
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_gdpr_export_test_run(owner_name, app_name)
        print("The response of TestApi->test_gdpr_export_test_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_gdpr_export_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGdprExportTestRun200Response**](TestGdprExportTestRun200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_all_test_runs_for_series**
> List[TestRun] test_get_all_test_runs_for_series(test_series_slug, owner_name, app_name)



Returns list of all test runs for a given test series

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run import TestRun
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
    api_instance = openapi_client.TestApi(api_client)
    test_series_slug = 'test_series_slug_example' # str | The slug of the test series
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_all_test_runs_for_series(test_series_slug, owner_name, app_name)
        print("The response of TestApi->test_get_all_test_runs_for_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_all_test_runs_for_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_series_slug** | **str**| The slug of the test series | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[TestRun]**](TestRun.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_all_test_series**
> List[TestSeries] test_get_all_test_series(owner_name, app_name, query=query)



Returns list of all test series for an application

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_series import TestSeries
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    query = 'query_example' # str | A query string to filter test series (optional)

    try:
        api_response = api_instance.test_get_all_test_series(owner_name, app_name, query=query)
        print("The response of TestApi->test_get_all_test_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_all_test_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **query** | **str**| A query string to filter test series | [optional] 

### Return type

[**List[TestSeries]**](TestSeries.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_device_configurations**
> List[TestGetDeviceConfigurations200ResponseInner] test_get_device_configurations(owner_name, app_name, app_upload_id=app_upload_id)



Returns a list of available devices

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_get_device_configurations200_response_inner import TestGetDeviceConfigurations200ResponseInner
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    app_upload_id = 'app_upload_id_example' # str | The ID of the test run (optional)

    try:
        api_response = api_instance.test_get_device_configurations(owner_name, app_name, app_upload_id=app_upload_id)
        print("The response of TestApi->test_get_device_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_device_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **app_upload_id** | **str**| The ID of the test run | [optional] 

### Return type

[**List[TestGetDeviceConfigurations200ResponseInner]**](TestGetDeviceConfigurations200ResponseInner.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_device_set_of_owner**
> DeviceSet test_get_device_set_of_owner(id, owner_name, app_name)



Gets a device set belonging to the owner

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_device_set_of_owner(id, owner_name, app_name)
        print("The response of TestApi->test_get_device_set_of_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_device_set_of_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_device_set_of_user**
> DeviceSet test_get_device_set_of_user(id, owner_name, app_name)



Gets a device set belonging to the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_device_set_of_user(id, owner_name, app_name)
        print("The response of TestApi->test_get_device_set_of_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_device_set_of_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_subscriptions**
> Subscription1 test_get_subscriptions(owner_name, app_name)



Get information about the currently active subscriptions, if any

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.subscription1 import Subscription1
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_subscriptions(owner_name, app_name)
        print("The response of TestApi->test_get_subscriptions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_subscriptions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**Subscription1**](Subscription1.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_test_report**
> TestGetTestReport200Response test_get_test_report(test_run_id, owner_name, app_name)



Returns a single test report

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_get_test_report200_response import TestGetTestReport200Response
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_test_report(test_run_id, owner_name, app_name)
        print("The response of TestApi->test_get_test_report:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_test_report: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestGetTestReport200Response**](TestGetTestReport200Response.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_test_run**
> TestRun test_get_test_run(test_run_id, owner_name, app_name)



Returns a single test runs

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run import TestRun
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_test_run(test_run_id, owner_name, app_name)
        print("The response of TestApi->test_get_test_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestRun**](TestRun.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_test_run_state**
> TestRunState test_get_test_run_state(test_run_id, owner_name, app_name)



Gets state of the test run

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run_state import TestRunState
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_test_run_state(test_run_id, owner_name, app_name)
        print("The response of TestApi->test_get_test_run_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_test_run_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestRunState**](TestRunState.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_get_test_runs**
> List[TestRun] test_get_test_runs(owner_name, app_name)



Returns a list of test runs

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run import TestRun
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_get_test_runs(owner_name, app_name)
        print("The response of TestApi->test_get_test_runs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_get_test_runs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[TestRun]**](TestRun.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_list_device_sets_of_owner**
> List[DeviceSet] test_list_device_sets_of_owner(owner_name, app_name)



Lists device sets belonging to the owner

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_list_device_sets_of_owner(owner_name, app_name)
        print("The response of TestApi->test_list_device_sets_of_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_list_device_sets_of_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[DeviceSet]**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_list_device_sets_of_user**
> List[DeviceSet] test_list_device_sets_of_user(owner_name, app_name)



Lists device sets belonging to the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
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
    api_instance = openapi_client.TestApi(api_client)
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_list_device_sets_of_user(owner_name, app_name)
        print("The response of TestApi->test_list_device_sets_of_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_list_device_sets_of_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**List[DeviceSet]**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_patch_test_series**
> TestSeries test_patch_test_series(test_series_slug, owner_name, app_name, name_of_the_test_series)



Updates name and slug of a test series

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.name_of_the_test_series import NameOfTheTestSeries
from openapi_client.models.test_series import TestSeries
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
    api_instance = openapi_client.TestApi(api_client)
    test_series_slug = 'test_series_slug_example' # str | The slug of the test series
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    name_of_the_test_series = openapi_client.NameOfTheTestSeries() # NameOfTheTestSeries | 

    try:
        api_response = api_instance.test_patch_test_series(test_series_slug, owner_name, app_name, name_of_the_test_series)
        print("The response of TestApi->test_patch_test_series:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_patch_test_series: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_series_slug** | **str**| The slug of the test series | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **name_of_the_test_series** | [**NameOfTheTestSeries**](NameOfTheTestSeries.md)|  | 

### Return type

[**TestSeries**](TestSeries.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test series was successfully patched |  -  |
**400** | The new test series name is incorrect |  -  |
**404** | Test series with the given slug name was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_start_test_run**
> TestCloudTestRunStartResult test_start_test_run(test_run_id, owner_name, app_name, test_cloud_start_test_run_options)



Starts test run

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_cloud_start_test_run_options import TestCloudStartTestRunOptions
from openapi_client.models.test_cloud_test_run_start_result import TestCloudTestRunStartResult
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    test_cloud_start_test_run_options = openapi_client.TestCloudStartTestRunOptions() # TestCloudStartTestRunOptions | Option required to start the test run

    try:
        api_response = api_instance.test_start_test_run(test_run_id, owner_name, app_name, test_cloud_start_test_run_options)
        print("The response of TestApi->test_start_test_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_start_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **test_cloud_start_test_run_options** | [**TestCloudStartTestRunOptions**](TestCloudStartTestRunOptions.md)| Option required to start the test run | 

### Return type

[**TestCloudTestRunStartResult**](TestCloudTestRunStartResult.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_start_uploading_file**
> test_start_uploading_file(test_run_id, owner_name, app_name)



Uploads file for a test run

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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_instance.test_start_uploading_file(test_run_id, owner_name, app_name)
    except Exception as e:
        print("Exception when calling TestApi->test_start_uploading_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | File was created and can be uploaded |  * Location - Link to get details about the cancel export. <br>  |
**400** | Bad request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_stop_test_run**
> TestRun test_stop_test_run(test_run_id, owner_name, app_name)



Stop a test run execution

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_run import TestRun
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run to be stopped
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application

    try:
        api_response = api_instance.test_stop_test_run(test_run_id, owner_name, app_name)
        print("The response of TestApi->test_stop_test_run:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_stop_test_run: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run to be stopped | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 

### Return type

[**TestRun**](TestRun.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Test run with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_update_device_set_of_owner**
> DeviceSet test_update_device_set_of_owner(id, owner_name, app_name, device_set_update_information)



Updates a device set belonging to the owner

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
from openapi_client.models.device_set_update_information import DeviceSetUpdateInformation
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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    device_set_update_information = openapi_client.DeviceSetUpdateInformation() # DeviceSetUpdateInformation | 

    try:
        api_response = api_instance.test_update_device_set_of_owner(id, owner_name, app_name, device_set_update_information)
        print("The response of TestApi->test_update_device_set_of_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_update_device_set_of_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **device_set_update_information** | [**DeviceSetUpdateInformation**](DeviceSetUpdateInformation.md)|  | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid list of device IDs or conflicting name |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_update_device_set_of_user**
> DeviceSet test_update_device_set_of_user(id, owner_name, app_name, device_set_update_information)



Updates a device set belonging to the user

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.device_set import DeviceSet
from openapi_client.models.device_set_update_information import DeviceSetUpdateInformation
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
    api_instance = openapi_client.TestApi(api_client)
    id = 'id_example' # str | The UUID of the device set
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    device_set_update_information = openapi_client.DeviceSetUpdateInformation() # DeviceSetUpdateInformation | 

    try:
        api_response = api_instance.test_update_device_set_of_user(id, owner_name, app_name, device_set_update_information)
        print("The response of TestApi->test_update_device_set_of_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_update_device_set_of_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the device set | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **device_set_update_information** | [**DeviceSetUpdateInformation**](DeviceSetUpdateInformation.md)|  | 

### Return type

[**DeviceSet**](DeviceSet.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid list of device IDs or conflicting name |  -  |
**404** | Device set with the given ID was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_upload_hash**
> test_upload_hash(test_run_id, owner_name, app_name, test_cloud_file_hash)



Adds file with the given hash to a test run

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_cloud_file_hash import TestCloudFileHash
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    test_cloud_file_hash = openapi_client.TestCloudFileHash() # TestCloudFileHash | File hash information

    try:
        api_instance.test_upload_hash(test_run_id, owner_name, app_name, test_cloud_file_hash)
    except Exception as e:
        print("Exception when calling TestApi->test_upload_hash: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **test_cloud_file_hash** | [**TestCloudFileHash**](TestCloudFileHash.md)| File hash information | 

### Return type

void (empty response body)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**401** | Byte range verification required for given SHA256 hash |  * X-Challenge-Bytes - Byte range required to authenticate the request <br>  |
**412** | File with given SHA256 hash doesn&#39;t exist and must be uploaded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_upload_hashes_batch**
> List[TestCloudFileHashResponse] test_upload_hashes_batch(test_run_id, owner_name, app_name, test_cloud_file_hash1)



Adds file with the given hash to a test run

### Example

* Api Key Authentication (APIToken):

```python
import openapi_client
from openapi_client.models.test_cloud_file_hash1 import TestCloudFileHash1
from openapi_client.models.test_cloud_file_hash_response import TestCloudFileHashResponse
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
    api_instance = openapi_client.TestApi(api_client)
    test_run_id = 'test_run_id_example' # str | The ID of the test run
    owner_name = 'owner_name_example' # str | The name of the owner
    app_name = 'app_name_example' # str | The name of the application
    test_cloud_file_hash1 = [openapi_client.TestCloudFileHash1()] # List[TestCloudFileHash1] | File hash information

    try:
        api_response = api_instance.test_upload_hashes_batch(test_run_id, owner_name, app_name, test_cloud_file_hash1)
        print("The response of TestApi->test_upload_hashes_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TestApi->test_upload_hashes_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **test_run_id** | **str**| The ID of the test run | 
 **owner_name** | **str**| The name of the owner | 
 **app_name** | **str**| The name of the application | 
 **test_cloud_file_hash1** | [**List[TestCloudFileHash1]**](TestCloudFileHash1.md)| File hash information | 

### Return type

[**List[TestCloudFileHashResponse]**](TestCloudFileHashResponse.md)

### Authorization

[APIToken](../README.md#APIToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

