# openapi_client.MachineGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machine_groups_create**](MachineGroupsApi.md#machine_groups_create) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machineGroups | 
[**machine_groups_delete**](MachineGroupsApi.md#machine_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machineGroups/{machineGroupName} | 
[**machine_groups_get**](MachineGroupsApi.md#machine_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machineGroups/{machineGroupName} | 
[**machine_groups_list_by_workspace**](MachineGroupsApi.md#machine_groups_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machineGroups | 
[**machine_groups_update**](MachineGroupsApi.md#machine_groups_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machineGroups/{machineGroupName} | 
[**machines_list_machine_group_membership_0**](MachineGroupsApi.md#machines_list_machine_group_membership_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/machineGroups | 


# **machine_groups_create**
> MachineGroup machine_groups_create(subscription_id, resource_group_name, workspace_name, api_version, machine_group)



Creates a new machine group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_group import MachineGroup
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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_group = openapi_client.MachineGroup() # MachineGroup | Machine Group resource to create.

    try:
        api_response = api_instance.machine_groups_create(subscription_id, resource_group_name, workspace_name, api_version, machine_group)
        print("The response of MachineGroupsApi->machine_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machine_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_group** | [**MachineGroup**](MachineGroup.md)| Machine Group resource to create. | 

### Return type

[**MachineGroup**](MachineGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_groups_delete**
> machine_groups_delete(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name)



Deletes the specified Machine Group.

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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_group_name = 'machine_group_name_example' # str | Machine Group resource name.

    try:
        api_instance.machine_groups_delete(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machine_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_group_name** | **str**| Machine Group resource name. | 

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
**204** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_groups_get**
> MachineGroup machine_groups_get(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name, start_time=start_time, end_time=end_time)



Returns the specified machine group as it existed during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_group import MachineGroup
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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_group_name = 'machine_group_name_example' # str | Machine Group resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machine_groups_get(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name, start_time=start_time, end_time=end_time)
        print("The response of MachineGroupsApi->machine_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machine_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_group_name** | **str**| Machine Group resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**MachineGroup**](MachineGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_groups_list_by_workspace**
> MachineGroupCollection machine_groups_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, start_time=start_time, end_time=end_time)



Returns all machine groups during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_group_collection import MachineGroupCollection
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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machine_groups_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, start_time=start_time, end_time=end_time)
        print("The response of MachineGroupsApi->machine_groups_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machine_groups_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**MachineGroupCollection**](MachineGroupCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machine_groups_update**
> MachineGroup machine_groups_update(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name, machine_group)



Updates a machine group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_group import MachineGroup
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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_group_name = 'machine_group_name_example' # str | Machine Group resource name.
    machine_group = openapi_client.MachineGroup() # MachineGroup | Machine Group resource to update.

    try:
        api_response = api_instance.machine_groups_update(subscription_id, resource_group_name, workspace_name, api_version, machine_group_name, machine_group)
        print("The response of MachineGroupsApi->machine_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machine_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_group_name** | **str**| Machine Group resource name. | 
 **machine_group** | [**MachineGroup**](MachineGroup.md)| Machine Group resource to update. | 

### Return type

[**MachineGroup**](MachineGroup.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **machines_list_machine_group_membership_0**
> MachineGroupCollection machines_list_machine_group_membership_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



Returns a collection of machine groups this machine belongs to during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_group_collection import MachineGroupCollection
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
    api_instance = openapi_client.MachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_list_machine_group_membership_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of MachineGroupsApi->machines_list_machine_group_membership_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachineGroupsApi->machines_list_machine_group_membership_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**MachineGroupCollection**](MachineGroupCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

