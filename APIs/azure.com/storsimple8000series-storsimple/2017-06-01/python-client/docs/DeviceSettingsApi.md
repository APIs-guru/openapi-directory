# openapi_client.DeviceSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_settings_create_or_update_alert_settings**](DeviceSettingsApi.md#device_settings_create_or_update_alert_settings) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/alertSettings/default | 
[**device_settings_create_or_update_time_settings**](DeviceSettingsApi.md#device_settings_create_or_update_time_settings) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/timeSettings/default | 
[**device_settings_get_alert_settings**](DeviceSettingsApi.md#device_settings_get_alert_settings) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/alertSettings/default | 
[**device_settings_get_network_settings**](DeviceSettingsApi.md#device_settings_get_network_settings) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/networkSettings/default | 
[**device_settings_get_security_settings**](DeviceSettingsApi.md#device_settings_get_security_settings) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default | 
[**device_settings_get_time_settings**](DeviceSettingsApi.md#device_settings_get_time_settings) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/timeSettings/default | 
[**device_settings_sync_remotemanagement_certificate**](DeviceSettingsApi.md#device_settings_sync_remotemanagement_certificate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default/syncRemoteManagementCertificate | 
[**device_settings_update_network_settings**](DeviceSettingsApi.md#device_settings_update_network_settings) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/networkSettings/default | 
[**device_settings_update_security_settings**](DeviceSettingsApi.md#device_settings_update_security_settings) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/securitySettings/default | 


# **device_settings_create_or_update_alert_settings**
> AlertSettings device_settings_create_or_update_alert_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the alert settings of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_settings import AlertSettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.AlertSettings() # AlertSettings | The alert settings to be added or updated.

    try:
        api_response = api_instance.device_settings_create_or_update_alert_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DeviceSettingsApi->device_settings_create_or_update_alert_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_create_or_update_alert_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**AlertSettings**](AlertSettings.md)| The alert settings to be added or updated. | 

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the alert settings. |  -  |
**202** | Accepted the request to create or update the alert settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_create_or_update_time_settings**
> TimeSettings device_settings_create_or_update_time_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the time settings of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.time_settings import TimeSettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.TimeSettings() # TimeSettings | The time settings to be added or updated.

    try:
        api_response = api_instance.device_settings_create_or_update_time_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DeviceSettingsApi->device_settings_create_or_update_time_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_create_or_update_time_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**TimeSettings**](TimeSettings.md)| The time settings to be added or updated. | 

### Return type

[**TimeSettings**](TimeSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the time settings. |  -  |
**202** | Accepted the request to create or update the time settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_get_alert_settings**
> AlertSettings device_settings_get_alert_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the alert settings of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.alert_settings import AlertSettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.device_settings_get_alert_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DeviceSettingsApi->device_settings_get_alert_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_get_alert_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**AlertSettings**](AlertSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Alert settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_get_network_settings**
> NetworkSettings device_settings_get_network_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the network settings of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_settings import NetworkSettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.device_settings_get_network_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DeviceSettingsApi->device_settings_get_network_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_get_network_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**NetworkSettings**](NetworkSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Network settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_get_security_settings**
> SecuritySettings device_settings_get_security_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the Security properties of the specified device name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_settings import SecuritySettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.device_settings_get_security_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DeviceSettingsApi->device_settings_get_security_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_get_security_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**SecuritySettings**](SecuritySettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Device Security settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_get_time_settings**
> TimeSettings device_settings_get_time_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the time settings of the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.time_settings import TimeSettings
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.device_settings_get_time_settings(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of DeviceSettingsApi->device_settings_get_time_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_get_time_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**TimeSettings**](TimeSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The time settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_sync_remotemanagement_certificate**
> device_settings_sync_remotemanagement_certificate(device_name, subscription_id, resource_group_name, manager_name, api_version)



sync Remote management Certificate between appliance and Service

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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.device_settings_sync_remotemanagement_certificate(device_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_sync_remotemanagement_certificate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to sync Remote Management certificate settings. |  -  |
**204** | Successfully synced Remote Management certificate settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_update_network_settings**
> NetworkSettings device_settings_update_network_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Updates the network settings on the specified device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_settings import NetworkSettings
from openapi_client.models.network_settings_patch import NetworkSettingsPatch
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.NetworkSettingsPatch() # NetworkSettingsPatch | The network settings to be updated.

    try:
        api_response = api_instance.device_settings_update_network_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DeviceSettingsApi->device_settings_update_network_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_update_network_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**NetworkSettingsPatch**](NetworkSettingsPatch.md)| The network settings to be updated. | 

### Return type

[**NetworkSettings**](NetworkSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The Network settings. |  -  |
**202** | Accepted the request to update network settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_settings_update_security_settings**
> SecuritySettings device_settings_update_security_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Patch Security properties of the specified device name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_settings import SecuritySettings
from openapi_client.models.security_settings_patch import SecuritySettingsPatch
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
    api_instance = openapi_client.DeviceSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.SecuritySettingsPatch() # SecuritySettingsPatch | The security settings properties to be patched.

    try:
        api_response = api_instance.device_settings_update_security_settings(device_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of DeviceSettingsApi->device_settings_update_security_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceSettingsApi->device_settings_update_security_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**SecuritySettingsPatch**](SecuritySettingsPatch.md)| The security settings properties to be patched. | 

### Return type

[**SecuritySettings**](SecuritySettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The device Security settings. |  -  |
**202** | Accepted the request to update device security settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

