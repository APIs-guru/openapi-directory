# openapi_client.PortsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**machines_list_ports_0**](PortsApi.md#machines_list_ports_0) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports | 
[**ports_get**](PortsApi.md#ports_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName} | 
[**ports_get_liveness**](PortsApi.md#ports_get_liveness) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/liveness | 
[**ports_list_accepting_processes**](PortsApi.md#ports_list_accepting_processes) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/acceptingProcesses | 
[**ports_list_connections**](PortsApi.md#ports_list_connections) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}/features/serviceMap/machines/{machineName}/ports/{portName}/connections | 


# **machines_list_ports_0**
> PortCollection machines_list_ports_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)



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
    api_instance = openapi_client.PortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.machines_list_ports_0(subscription_id, resource_group_name, workspace_name, api_version, machine_name, start_time=start_time, end_time=end_time)
        print("The response of PortsApi->machines_list_ports_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->machines_list_ports_0: %s\n" % e)
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

# **ports_get**
> Port ports_get(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)



Returns the specified port. The port must be live during the specified time interval. If the port is not live during the interval, status 404 (Not Found) is returned.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.port import Port
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
    api_instance = openapi_client.PortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    port_name = 'port_name_example' # str | Port resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.ports_get(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)
        print("The response of PortsApi->ports_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **port_name** | **str**| Port resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

### Return type

[**Port**](Port.md)

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

# **ports_get_liveness**
> Liveness ports_get_liveness(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)



Obtains the liveness status of the port during the specified time interval.

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
    api_instance = openapi_client.PortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    port_name = 'port_name_example' # str | Port resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.ports_get_liveness(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)
        print("The response of PortsApi->ports_get_liveness:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_get_liveness: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **port_name** | **str**| Port resource name. | 
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

# **ports_list_accepting_processes**
> ProcessCollection ports_list_accepting_processes(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)



Returns a collection of processes accepting on the specified port

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
    api_instance = openapi_client.PortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    port_name = 'port_name_example' # str | Port resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.ports_list_accepting_processes(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)
        print("The response of PortsApi->ports_list_accepting_processes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_list_accepting_processes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **port_name** | **str**| Port resource name. | 
 **start_time** | **datetime**| UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m | [optional] 
 **end_time** | **datetime**| UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow | [optional] 

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

# **ports_list_connections**
> ConnectionCollection ports_list_connections(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)



Returns a collection of connections established via the specified port.

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
    api_instance = openapi_client.PortsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Azure subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name within the specified subscriptionId.
    workspace_name = 'workspace_name_example' # str | OMS workspace containing the resources of interest.
    api_version = 'api_version_example' # str | API version.
    machine_name = 'machine_name_example' # str | Machine resource name.
    port_name = 'port_name_example' # str | Port resource name.
    start_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the start time of an interval. When not specified the service uses DateTime.UtcNow - 10m (optional)
    end_time = '2013-10-20T19:20:30+01:00' # datetime | UTC date and time specifying the end time of an interval. When not specified the service uses DateTime.UtcNow (optional)

    try:
        api_response = api_instance.ports_list_connections(subscription_id, resource_group_name, workspace_name, api_version, machine_name, port_name, start_time=start_time, end_time=end_time)
        print("The response of PortsApi->ports_list_connections:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PortsApi->ports_list_connections: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Azure subscription identifier. | 
 **resource_group_name** | **str**| Resource group name within the specified subscriptionId. | 
 **workspace_name** | **str**| OMS workspace containing the resources of interest. | 
 **api_version** | **str**| API version. | 
 **machine_name** | **str**| Machine resource name. | 
 **port_name** | **str**| Port resource name. | 
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

