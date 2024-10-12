# openapi_client.BandwidthSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bandwidth_settings_create_or_update**](BandwidthSettingsApi.md#bandwidth_settings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/bandwidthSettings/{bandwidthSettingName} | 
[**bandwidth_settings_delete**](BandwidthSettingsApi.md#bandwidth_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/bandwidthSettings/{bandwidthSettingName} | 
[**bandwidth_settings_get**](BandwidthSettingsApi.md#bandwidth_settings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/bandwidthSettings/{bandwidthSettingName} | 
[**bandwidth_settings_list_by_manager**](BandwidthSettingsApi.md#bandwidth_settings_list_by_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/bandwidthSettings | 


# **bandwidth_settings_create_or_update**
> BandwidthSetting bandwidth_settings_create_or_update(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the bandwidth setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.bandwidth_setting import BandwidthSetting
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
    api_instance = openapi_client.BandwidthSettingsApi(api_client)
    bandwidth_setting_name = 'bandwidth_setting_name_example' # str | The bandwidth setting name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.BandwidthSetting() # BandwidthSetting | The bandwidth setting to be added or updated.

    try:
        api_response = api_instance.bandwidth_settings_create_or_update(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of BandwidthSettingsApi->bandwidth_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BandwidthSettingsApi->bandwidth_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bandwidth_setting_name** | **str**| The bandwidth setting name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**BandwidthSetting**](BandwidthSetting.md)| The bandwidth setting to be added or updated. | 

### Return type

[**BandwidthSetting**](BandwidthSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the bandwidth setting. |  -  |
**202** | Accepted the request to create or update the bandwidth setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bandwidth_settings_delete**
> bandwidth_settings_delete(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the bandwidth setting

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
    api_instance = openapi_client.BandwidthSettingsApi(api_client)
    bandwidth_setting_name = 'bandwidth_setting_name_example' # str | The name of the bandwidth setting.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.bandwidth_settings_delete(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling BandwidthSettingsApi->bandwidth_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bandwidth_setting_name** | **str**| The name of the bandwidth setting. | 
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
**202** | Accepted the request to delete the bandwidth setting. |  -  |
**204** | Successfully deleted the bandwidth setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bandwidth_settings_get**
> BandwidthSetting bandwidth_settings_get(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified bandwidth setting name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.bandwidth_setting import BandwidthSetting
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
    api_instance = openapi_client.BandwidthSettingsApi(api_client)
    bandwidth_setting_name = 'bandwidth_setting_name_example' # str | The name of bandwidth setting to be fetched.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.bandwidth_settings_get(bandwidth_setting_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BandwidthSettingsApi->bandwidth_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BandwidthSettingsApi->bandwidth_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bandwidth_setting_name** | **str**| The name of bandwidth setting to be fetched. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**BandwidthSetting**](BandwidthSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The bandwidth setting. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bandwidth_settings_list_by_manager**
> BandwidthSettingList bandwidth_settings_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the bandwidth setting in a manager.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.bandwidth_setting_list import BandwidthSettingList
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
    api_instance = openapi_client.BandwidthSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.bandwidth_settings_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BandwidthSettingsApi->bandwidth_settings_list_by_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BandwidthSettingsApi->bandwidth_settings_list_by_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**BandwidthSettingList**](BandwidthSettingList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of bandwidth settings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

