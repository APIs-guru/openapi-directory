# openapi_client.WorkspaceSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workspace_settings_create**](WorkspaceSettingsApi.md#workspace_settings_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName} | 
[**workspace_settings_delete**](WorkspaceSettingsApi.md#workspace_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName} | 
[**workspace_settings_get**](WorkspaceSettingsApi.md#workspace_settings_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName} | 
[**workspace_settings_list**](WorkspaceSettingsApi.md#workspace_settings_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings | 
[**workspace_settings_update**](WorkspaceSettingsApi.md#workspace_settings_update) | **PATCH** /subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName} | 


# **workspace_settings_create**
> WorkspaceSetting workspace_settings_create(api_version, subscription_id, workspace_setting_name, workspace_setting)



creating settings about where we should store your security data and logs

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_setting import WorkspaceSetting
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    workspace_setting_name = 'workspace_setting_name_example' # str | Name of the security setting
    workspace_setting = openapi_client.WorkspaceSetting() # WorkspaceSetting | Security data setting object

    try:
        api_response = api_instance.workspace_settings_create(api_version, subscription_id, workspace_setting_name, workspace_setting)
        print("The response of WorkspaceSettingsApi->workspace_settings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceSettingsApi->workspace_settings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **workspace_setting_name** | **str**| Name of the security setting | 
 **workspace_setting** | [**WorkspaceSetting**](WorkspaceSetting.md)| Security data setting object | 

### Return type

[**WorkspaceSetting**](WorkspaceSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_settings_delete**
> workspace_settings_delete(api_version, subscription_id, workspace_setting_name)



Deletes the custom workspace settings for this subscription. new VMs will report to the default workspace

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    workspace_setting_name = 'workspace_setting_name_example' # str | Name of the security setting

    try:
        api_instance.workspace_settings_delete(api_version, subscription_id, workspace_setting_name)
    except Exception as e:
        print("Exception when calling WorkspaceSettingsApi->workspace_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **workspace_setting_name** | **str**| Name of the security setting | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_settings_get**
> WorkspaceSetting workspace_settings_get(api_version, subscription_id, workspace_setting_name)



Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_setting import WorkspaceSetting
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    workspace_setting_name = 'workspace_setting_name_example' # str | Name of the security setting

    try:
        api_response = api_instance.workspace_settings_get(api_version, subscription_id, workspace_setting_name)
        print("The response of WorkspaceSettingsApi->workspace_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceSettingsApi->workspace_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **workspace_setting_name** | **str**| Name of the security setting | 

### Return type

[**WorkspaceSetting**](WorkspaceSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_settings_list**
> WorkspaceSettingList workspace_settings_list(api_version, subscription_id)



Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_setting_list import WorkspaceSettingList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.workspace_settings_list(api_version, subscription_id)
        print("The response of WorkspaceSettingsApi->workspace_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceSettingsApi->workspace_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**WorkspaceSettingList**](WorkspaceSettingList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workspace_settings_update**
> WorkspaceSetting workspace_settings_update(api_version, subscription_id, workspace_setting_name, workspace_setting)



Settings about where we should store your security data and logs

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.workspace_setting import WorkspaceSetting
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkspaceSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    workspace_setting_name = 'workspace_setting_name_example' # str | Name of the security setting
    workspace_setting = openapi_client.WorkspaceSetting() # WorkspaceSetting | Security data setting object

    try:
        api_response = api_instance.workspace_settings_update(api_version, subscription_id, workspace_setting_name, workspace_setting)
        print("The response of WorkspaceSettingsApi->workspace_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceSettingsApi->workspace_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **workspace_setting_name** | **str**| Name of the security setting | 
 **workspace_setting** | [**WorkspaceSetting**](WorkspaceSetting.md)| Security data setting object | 

### Return type

[**WorkspaceSetting**](WorkspaceSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

