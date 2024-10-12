# openapi_client.BackupSchedulesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**backup_schedules_create_or_update**](BackupSchedulesApi.md#backup_schedules_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName} | 
[**backup_schedules_delete**](BackupSchedulesApi.md#backup_schedules_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName} | 
[**backup_schedules_get**](BackupSchedulesApi.md#backup_schedules_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules/{backupScheduleName} | 
[**backup_schedules_list_by_backup_policy**](BackupSchedulesApi.md#backup_schedules_list_by_backup_policy) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backupPolicies/{backupPolicyName}/schedules | 


# **backup_schedules_create_or_update**
> BackupSchedule backup_schedules_create_or_update(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version, parameters)



Creates or updates the backup schedule.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule import BackupSchedule
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
    api_instance = openapi_client.BackupSchedulesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    backup_policy_name = 'backup_policy_name_example' # str | The backup policy name.
    backup_schedule_name = 'backup_schedule_name_example' # str | The backup schedule name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    parameters = openapi_client.BackupSchedule() # BackupSchedule | The backup schedule.

    try:
        api_response = api_instance.backup_schedules_create_or_update(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version, parameters)
        print("The response of BackupSchedulesApi->backup_schedules_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupSchedulesApi->backup_schedules_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **backup_policy_name** | **str**| The backup policy name. | 
 **backup_schedule_name** | **str**| The backup schedule name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **parameters** | [**BackupSchedule**](BackupSchedule.md)| The backup schedule. | 

### Return type

[**BackupSchedule**](BackupSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the backup schedule. |  -  |
**202** | Accepted the request to create or update the backup schedule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedules_delete**
> backup_schedules_delete(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the backup schedule.

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
    api_instance = openapi_client.BackupSchedulesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    backup_policy_name = 'backup_policy_name_example' # str | The backup policy name.
    backup_schedule_name = 'backup_schedule_name_example' # str | The name the backup schedule.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.backup_schedules_delete(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling BackupSchedulesApi->backup_schedules_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **backup_policy_name** | **str**| The backup policy name. | 
 **backup_schedule_name** | **str**| The name the backup schedule. | 
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
**202** | Accepted the request to delete the backup schedule. |  -  |
**204** | Successfully deleted the backup schedule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedules_get**
> BackupSchedule backup_schedules_get(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version)



Gets the properties of the specified backup schedule name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule import BackupSchedule
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
    api_instance = openapi_client.BackupSchedulesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    backup_policy_name = 'backup_policy_name_example' # str | The backup policy name.
    backup_schedule_name = 'backup_schedule_name_example' # str | The name of the backup schedule to be fetched
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.backup_schedules_get(device_name, backup_policy_name, backup_schedule_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BackupSchedulesApi->backup_schedules_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupSchedulesApi->backup_schedules_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **backup_policy_name** | **str**| The backup policy name. | 
 **backup_schedule_name** | **str**| The name of the backup schedule to be fetched | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**BackupSchedule**](BackupSchedule.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The backup schedule. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **backup_schedules_list_by_backup_policy**
> BackupScheduleList backup_schedules_list_by_backup_policy(device_name, backup_policy_name, subscription_id, resource_group_name, manager_name, api_version)



Gets all the backup schedules in a backup policy.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.backup_schedule_list import BackupScheduleList
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
    api_instance = openapi_client.BackupSchedulesApi(api_client)
    device_name = 'device_name_example' # str | The device name
    backup_policy_name = 'backup_policy_name_example' # str | The backup policy name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.backup_schedules_list_by_backup_policy(device_name, backup_policy_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of BackupSchedulesApi->backup_schedules_list_by_backup_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BackupSchedulesApi->backup_schedules_list_by_backup_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_name** | **str**| The device name | 
 **backup_policy_name** | **str**| The backup policy name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**BackupScheduleList**](BackupScheduleList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of backup schedules. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

