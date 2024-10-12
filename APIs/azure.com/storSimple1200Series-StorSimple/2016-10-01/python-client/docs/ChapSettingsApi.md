# openapi_client.ChapSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**chap_settings_create_or_update**](ChapSettingsApi.md#chap_settings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName} | 
[**chap_settings_delete**](ChapSettingsApi.md#chap_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName} | 
[**chap_settings_get**](ChapSettingsApi.md#chap_settings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings/{chapUserName} | 
[**chap_settings_list_by_device**](ChapSettingsApi.md#chap_settings_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/chapSettings | 


# **chap_settings_create_or_update**
> ChapSettings chap_settings_create_or_update(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version, chap_setting)



Creates or updates the chap setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.chap_settings import ChapSettings
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
    api_instance = openapi_client.ChapSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    chap_user_name = 'chap_user_name_example' # str | The chap user name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    chap_setting = openapi_client.ChapSettings() # ChapSettings | The chap setting to be added or updated.

    try:
        api_response = api_instance.chap_settings_create_or_update(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version, chap_setting)
        print("The response of ChapSettingsApi->chap_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChapSettingsApi->chap_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **chap_user_name** | **str**| The chap user name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **chap_setting** | [**ChapSettings**](ChapSettings.md)| The chap setting to be added or updated. | 

### Return type

[**ChapSettings**](ChapSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the chap setting. |  -  |
**202** | Accepted the request to create or update the chap setting. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chap_settings_delete**
> chap_settings_delete(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the chap setting.

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
    api_instance = openapi_client.ChapSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    chap_user_name = 'chap_user_name_example' # str | The chap user name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.chap_settings_delete(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling ChapSettingsApi->chap_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **chap_user_name** | **str**| The chap user name. | 
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
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted the request to delete the chap setting. |  -  |
**204** | Successfully deleted the chap setting. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chap_settings_get**
> ChapSettings chap_settings_get(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified chap setting name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.chap_settings import ChapSettings
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
    api_instance = openapi_client.ChapSettingsApi(api_client)
    device_name = 'device_name_example' # str | The device name.
    chap_user_name = 'chap_user_name_example' # str | The user name of chap to be fetched.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.chap_settings_get(device_name, chap_user_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of ChapSettingsApi->chap_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChapSettingsApi->chap_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name. | 
 **chap_user_name** | **str**| The user name of chap to be fetched. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**ChapSettings**](ChapSettings.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The chap setting. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **chap_settings_list_by_device**
> ChapSettingsList chap_settings_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the chap settings in a device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.chap_settings_list import ChapSettingsList
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
    api_instance = openapi_client.ChapSettingsApi(api_client)
    device_name = 'device_name_example' # str | The name of the device.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.chap_settings_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of ChapSettingsApi->chap_settings_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChapSettingsApi->chap_settings_list_by_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The name of the device. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**ChapSettingsList**](ChapSettingsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of chap settings. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

