# openapi_client.BackupScheduleGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_schedule_groups_create_or_update**](BackupScheduleGroupsApi.md#backup_schedule_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupScheduleGroups/{scheduleGroupName} | 
[**backup_schedule_groups_delete**](BackupScheduleGroupsApi.md#backup_schedule_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupScheduleGroups/{scheduleGroupName} | 
[**backup_schedule_groups_get**](BackupScheduleGroupsApi.md#backup_schedule_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupScheduleGroups/{scheduleGroupName} | 
[**backup_schedule_groups_list_by_device**](BackupScheduleGroupsApi.md#backup_schedule_groups_list_by_device) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupScheduleGroups | 


# **backup_schedule_groups_create_or_update**
> BackupScheduleGroup backup_schedule_groups_create_or_update(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version, schedule_group)



Creates or Updates the backup schedule Group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule_group import BackupScheduleGroup
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
    api_instance = openapi_client.BackupScheduleGroupsApi(api_client)
    device_name = 'device_name_example' # str | The name of the device.
    schedule_group_name = 'schedule_group_name_example' # str | The name of the schedule group.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    schedule_group = openapi_client.BackupScheduleGroup() # BackupScheduleGroup | The schedule group to be created

    try:
        api_response = api_instance.backup_schedule_groups_create_or_update(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version, schedule_group)
        print("The response of BackupScheduleGroupsApi->backup_schedule_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupScheduleGroupsApi->backup_schedule_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The name of the device. | 
 **schedule_group_name** | **str**| The name of the schedule group. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **schedule_group** | [**BackupScheduleGroup**](BackupScheduleGroup.md)| The schedule group to be created | 

### Return type

[**BackupScheduleGroup**](BackupScheduleGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the backup schedule group. |  -  |
**202** | Accepted the request to create or update the backup schedule group. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedule_groups_delete**
> backup_schedule_groups_delete(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the backup schedule group.

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
    api_instance = openapi_client.BackupScheduleGroupsApi(api_client)
    device_name = 'device_name_example' # str | The name of the device.
    schedule_group_name = 'schedule_group_name_example' # str | The name of the schedule group.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.backup_schedule_groups_delete(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling BackupScheduleGroupsApi->backup_schedule_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The name of the device. | 
 **schedule_group_name** | **str**| The name of the schedule group. | 
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
**202** | Accepted the request to delete the backup schedule group. |  -  |
**204** | Successfully deleted the backup schedule group. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedule_groups_get**
> BackupScheduleGroup backup_schedule_groups_get(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified backup schedule group name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule_group import BackupScheduleGroup
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
    api_instance = openapi_client.BackupScheduleGroupsApi(api_client)
    device_name = 'device_name_example' # str | The name of the device.
    schedule_group_name = 'schedule_group_name_example' # str | The name of the schedule group.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.backup_schedule_groups_get(device_name, schedule_group_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BackupScheduleGroupsApi->backup_schedule_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupScheduleGroupsApi->backup_schedule_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The name of the device. | 
 **schedule_group_name** | **str**| The name of the schedule group. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**BackupScheduleGroup**](BackupScheduleGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup schedule group. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedule_groups_list_by_device**
> BackupScheduleGroupList backup_schedule_groups_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the backup schedule groups in a device.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule_group_list import BackupScheduleGroupList
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
    api_instance = openapi_client.BackupScheduleGroupsApi(api_client)
    device_name = 'device_name_example' # str | The name of the device.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.backup_schedule_groups_list_by_device(device_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BackupScheduleGroupsApi->backup_schedule_groups_list_by_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupScheduleGroupsApi->backup_schedule_groups_list_by_device: %s\n" % e)
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

[**BackupScheduleGroupList**](BackupScheduleGroupList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of backup schedule groups. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

