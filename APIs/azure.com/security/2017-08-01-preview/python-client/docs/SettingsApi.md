# openapi_client.SettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settings_get**](SettingsApi.md#settings_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName} | 
[**settings_list**](SettingsApi.md#settings_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/settings | 
[**settings_update**](SettingsApi.md#settings_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName} | 


# **settings_get**
> Setting settings_get(api_version, subscription_id, setting_name)



Settings of different configurations in security center

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.setting import Setting
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
    api_instance = openapi_client.SettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    setting_name = 'setting_name_example' # str | Name of setting: (MCAS/WDATP)

    try:
        api_response = api_instance.settings_get(api_version, subscription_id, setting_name)
        print("The response of SettingsApi->settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **setting_name** | **str**| Name of setting: (MCAS/WDATP) | 

### Return type

[**Setting**](Setting.md)

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

# **settings_list**
> SettingsList settings_list(api_version, subscription_id)



Settings about different configurations in security center

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.settings_list import SettingsList
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
    api_instance = openapi_client.SettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.settings_list(api_version, subscription_id)
        print("The response of SettingsApi->settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**SettingsList**](SettingsList.md)

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

# **settings_update**
> Setting settings_update(api_version, subscription_id, setting_name, setting)



updating settings about different configurations in security center

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.setting import Setting
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
    api_instance = openapi_client.SettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    setting_name = 'setting_name_example' # str | Name of setting: (MCAS/WDATP)
    setting = openapi_client.Setting() # Setting | Setting object

    try:
        api_response = api_instance.settings_update(api_version, subscription_id, setting_name, setting)
        print("The response of SettingsApi->settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SettingsApi->settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **setting_name** | **str**| Name of setting: (MCAS/WDATP) | 
 **setting** | [**Setting**](Setting.md)| Setting object | 

### Return type

[**Setting**](Setting.md)

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

