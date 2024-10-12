# openapi_client.AutoProvisioningSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auto_provisioning_settings_create**](AutoProvisioningSettingsApi.md#auto_provisioning_settings_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName} | 
[**auto_provisioning_settings_get**](AutoProvisioningSettingsApi.md#auto_provisioning_settings_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName} | 
[**auto_provisioning_settings_list**](AutoProvisioningSettingsApi.md#auto_provisioning_settings_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings | 


# **auto_provisioning_settings_create**
> AutoProvisioningSetting auto_provisioning_settings_create(api_version, subscription_id, setting_name, setting)



Details of a specific setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_provisioning_setting import AutoProvisioningSetting
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
    api_instance = openapi_client.AutoProvisioningSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    setting_name = 'setting_name_example' # str | Auto provisioning setting key
    setting = openapi_client.AutoProvisioningSetting() # AutoProvisioningSetting | Auto provisioning setting key

    try:
        api_response = api_instance.auto_provisioning_settings_create(api_version, subscription_id, setting_name, setting)
        print("The response of AutoProvisioningSettingsApi->auto_provisioning_settings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoProvisioningSettingsApi->auto_provisioning_settings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **setting_name** | **str**| Auto provisioning setting key | 
 **setting** | [**AutoProvisioningSetting**](AutoProvisioningSetting.md)| Auto provisioning setting key | 

### Return type

[**AutoProvisioningSetting**](AutoProvisioningSetting.md)

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

# **auto_provisioning_settings_get**
> AutoProvisioningSetting auto_provisioning_settings_get(api_version, subscription_id, setting_name)



Details of a specific setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_provisioning_setting import AutoProvisioningSetting
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
    api_instance = openapi_client.AutoProvisioningSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID
    setting_name = 'setting_name_example' # str | Auto provisioning setting key

    try:
        api_response = api_instance.auto_provisioning_settings_get(api_version, subscription_id, setting_name)
        print("The response of AutoProvisioningSettingsApi->auto_provisioning_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoProvisioningSettingsApi->auto_provisioning_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 
 **setting_name** | **str**| Auto provisioning setting key | 

### Return type

[**AutoProvisioningSetting**](AutoProvisioningSetting.md)

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

# **auto_provisioning_settings_list**
> AutoProvisioningSettingList auto_provisioning_settings_list(api_version, subscription_id)



Exposes the auto provisioning settings of the subscriptions

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.auto_provisioning_setting_list import AutoProvisioningSettingList
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
    api_instance = openapi_client.AutoProvisioningSettingsApi(api_client)
    api_version = 'api_version_example' # str | API version for the operation
    subscription_id = 'subscription_id_example' # str | Azure subscription ID

    try:
        api_response = api_instance.auto_provisioning_settings_list(api_version, subscription_id)
        print("The response of AutoProvisioningSettingsApi->auto_provisioning_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AutoProvisioningSettingsApi->auto_provisioning_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version for the operation | 
 **subscription_id** | **str**| Azure subscription ID | 

### Return type

[**AutoProvisioningSettingList**](AutoProvisioningSettingList.md)

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

