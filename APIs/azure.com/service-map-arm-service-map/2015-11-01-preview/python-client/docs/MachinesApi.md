# openapi_client.MachinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machines_get**](MachinesApi.md#machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName} | 
[**machines_get_liveness**](MachinesApi.md#machines_get_liveness) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/liveness | 
[**machines_list_by_workspace**](MachinesApi.md#machines_list_by_workspace) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines | 
[**machines_list_connections**](MachinesApi.md#machines_list_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/connections | 
[**machines_list_machine_group_membership**](MachinesApi.md#machines_list_machine_group_membership) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/machineGroups | 
[**machines_list_ports**](MachinesApi.md#machines_list_ports) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports | 
[**machines_list_processes_0**](MachinesApi.md#machines_list_processes_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/processes | 


# **machines_get**
> Machine machines_get(subscription_id, resource_group_name, workspace_name, api_version, machine_name, timestamp=timestamp)



Returns the specified machine.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine import Machine
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying a time instance relative to which to evaluate the machine resource. When not specified, the service uses DateTime.UtcNow. (optional)

    try:
        api_response = api_instance.machines_get(subscription_id, resource_group_name, workspace_name, api_version, machine_name, timestamp=timestamp)
        print("The response of MachinesApi->machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **timestamp** | **datetime**| UTC date and time specifying a time instance relative to which to evaluate the machine resource. When not specified, the service uses DateTime.UtcNow. | [optional] 

### Return type

[**Machine**](Machine.md)

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

# **machines_get_liveness**
> Liveness machines_get_liveness(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



Obtains the liveness status of the machine during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.liveness import Liveness
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_get_liveness(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of MachinesApi->machines_get_liveness:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_get_liveness: %s\n" % e)
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

[**Liveness**](Liveness.md)

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

# **machines_list_by_workspace**
> MachineCollection machines_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, live=live, start_time=start_time, end_time=end_time, timestamp=timestamp, top=top)



Returns a collection of machines matching the specified conditions.  The returned collection represents either machines that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.machine_collection import MachineCollection
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    live = True # bool | Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp. (optional) (default to True)
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying a time instance relative to which to evaluate each machine resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow. (optional)
    top = 56 # int | Page size to use. When not specified, the default page size is 100 records. (optional)

    try:
        api_response = api_instance.machines_list_by_workspace(subscription_id, resource_group_name, workspace_name, api_version, live=live, start_time=start_time, end_time=end_time, timestamp=timestamp, top=top)
        print("The response of MachinesApi->machines_list_by_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_list_by_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **live** | **bool**| Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (&#x60;startTime&#x60;) and end time (&#x60;endTime&#x60;) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (&#x60;timestamp&#x60;) parameter can be specified to return the version of each resource closest (not-after) that timestamp. | [optional] [default to True]
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 
 **timestamp** | **datetime**| UTC date and time specifying a time instance relative to which to evaluate each machine resource. Only applies when &#x60;live&#x3D;false&#x60;. When not specified, the service uses DateTime.UtcNow. | [optional] 
 **top** | **int**| Page size to use. When not specified, the default page size is 100 records. | [optional] 

### Return type

[**MachineCollection**](MachineCollection.md)

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

# **machines_list_connections**
> ConnectionCollection machines_list_connections(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



Returns a collection of connections terminating or originating at the specified machine

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_collection import ConnectionCollection
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_list_connections(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of MachinesApi->machines_list_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_list_connections: %s\n" % e)
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

[**ConnectionCollection**](ConnectionCollection.md)

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

# **machines_list_machine_group_membership**
> MachineGroupCollection machines_list_machine_group_membership(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_list_machine_group_membership(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of MachinesApi->machines_list_machine_group_membership:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_list_machine_group_membership: %s\n" % e)
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

# **machines_list_ports**
> PortCollection machines_list_ports(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



Returns a collection of live ports on the specified machine during the specified time interval.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.port_collection import PortCollection
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_list_ports(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of MachinesApi->machines_list_ports:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_list_ports: %s\n" % e)
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

[**PortCollection**](PortCollection.md)

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

# **machines_list_processes_0**
> ProcessCollection machines_list_processes_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, live=live, start_time=start_time, end_time=end_time, timestamp=timestamp)



Returns a collection of processes on the specified machine matching the specified conditions. The returned collection represents either processes that are active/live during the specified interval  of time (`live=true` and `startTime`/`endTime` are specified) or that are known to have existed at or  some time prior to the specified point in time (`live=false` and `timestamp` is specified).        

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.process_collection import ProcessCollection
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
    api_instance = openapi_client.MachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    live = True # bool | Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (`startTime`) and end time (`endTime`) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (`timestamp`) parameter can be specified to return the version of each resource closest (not-after) that timestamp. (optional) (default to True)
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)
    timestamp = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying a time instance relative to which to evaluate all process resource. Only applies when `live=false`. When not specified, the service uses DateTime.UtcNow. (optional)

    try:
        api_response = api_instance.machines_list_processes_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, live=live, start_time=start_time, end_time=end_time, timestamp=timestamp)
        print("The response of MachinesApi->machines_list_processes_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MachinesApi->machines_list_processes_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **live** | **bool**| Specifies whether to return live resources (true) or inventory resources (false). Defaults to **true**. When retrieving live resources, the start time (&#x60;startTime&#x60;) and end time (&#x60;endTime&#x60;) of the desired interval should be included. When retrieving inventory resources, an optional timestamp (&#x60;timestamp&#x60;) parameter can be specified to return the version of each resource closest (not-after) that timestamp. | [optional] [default to True]
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 
 **timestamp** | **datetime**| UTC date and time specifying a time instance relative to which to evaluate all process resource. Only applies when &#x60;live&#x3D;false&#x60;. When not specified, the service uses DateTime.UtcNow. | [optional] 

### Return type

[**ProcessCollection**](ProcessCollection.md)

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

