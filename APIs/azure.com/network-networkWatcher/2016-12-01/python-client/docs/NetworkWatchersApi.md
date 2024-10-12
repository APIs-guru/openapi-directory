# openapi_client.NetworkWatchersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_watchers_create_or_update**](NetworkWatchersApi.md#network_watchers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName} | 
[**network_watchers_delete**](NetworkWatchersApi.md#network_watchers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName} | 
[**network_watchers_get**](NetworkWatchersApi.md#network_watchers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName} | 
[**network_watchers_get_flow_log_status**](NetworkWatchersApi.md#network_watchers_get_flow_log_status) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/queryFlowLogStatus | 
[**network_watchers_get_next_hop**](NetworkWatchersApi.md#network_watchers_get_next_hop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/nextHop | 
[**network_watchers_get_topology**](NetworkWatchersApi.md#network_watchers_get_topology) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/topology | 
[**network_watchers_get_troubleshooting**](NetworkWatchersApi.md#network_watchers_get_troubleshooting) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/troubleshoot | 
[**network_watchers_get_troubleshooting_result**](NetworkWatchersApi.md#network_watchers_get_troubleshooting_result) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/queryTroubleshootResult | 
[**network_watchers_get_vm_security_rules**](NetworkWatchersApi.md#network_watchers_get_vm_security_rules) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/securityGroupView | 
[**network_watchers_list**](NetworkWatchersApi.md#network_watchers_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers | 
[**network_watchers_list_all**](NetworkWatchersApi.md#network_watchers_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Network/networkWatchers | 
[**network_watchers_set_flow_log_configuration**](NetworkWatchersApi.md#network_watchers_set_flow_log_configuration) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/configureFlowLog | 
[**network_watchers_verify_ip_flow**](NetworkWatchersApi.md#network_watchers_verify_ip_flow) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/ipFlowVerify | 


# **network_watchers_create_or_update**
> NetworkWatcher network_watchers_create_or_update(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Creates or updates a network watcher in the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_watcher import NetworkWatcher
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NetworkWatcher() # NetworkWatcher | Parameters that define the network watcher resource.

    try:
        api_response = api_instance.network_watchers_create_or_update(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NetworkWatcher**](NetworkWatcher.md)| Parameters that define the network watcher resource. | 

### Return type

[**NetworkWatcher**](NetworkWatcher.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting network watcher resource. |  -  |
**201** | Create successful. The operation returns the resulting network watcher resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_delete**
> network_watchers_delete(resource_group_name, network_watcher_name, api_version, subscription_id)



Deletes the specified network watcher resource.

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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.network_watchers_delete(resource_group_name, network_watcher_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get**
> NetworkWatcher network_watchers_get(resource_group_name, network_watcher_name, api_version, subscription_id)



Gets the specified network watcher by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_watcher import NetworkWatcher
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_watchers_get(resource_group_name, network_watcher_name, api_version, subscription_id)
        print("The response of NetworkWatchersApi->network_watchers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkWatcher**](NetworkWatcher.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a network watcher resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_flow_log_status**
> FlowLogInformation network_watchers_get_flow_log_status(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Queries status of flow log on a specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log_information import FlowLogInformation
from openapi_client.models.flow_log_status_parameters import FlowLogStatusParameters
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the network watcher resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FlowLogStatusParameters() # FlowLogStatusParameters | Parameters that define a resource to query flow log status.

    try:
        api_response = api_instance.network_watchers_get_flow_log_status(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_flow_log_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_flow_log_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the network watcher resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FlowLogStatusParameters**](FlowLogStatusParameters.md)| Parameters that define a resource to query flow log status. | 

### Return type

[**FlowLogInformation**](FlowLogInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for query flow log status. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_next_hop**
> NextHopResult network_watchers_get_next_hop(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Gets the next hop from the specified VM.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.next_hop_parameters import NextHopParameters
from openapi_client.models.next_hop_result import NextHopResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.NextHopParameters() # NextHopParameters | Parameters that define the source and destination endpoint.

    try:
        api_response = api_instance.network_watchers_get_next_hop(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_next_hop:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_next_hop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**NextHopParameters**](NextHopParameters.md)| Parameters that define the source and destination endpoint. | 

### Return type

[**NextHopResult**](NextHopResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the next hop from the VM. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_topology**
> Topology network_watchers_get_topology(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Gets the current network topology by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.topology import Topology
from openapi_client.models.topology_parameters import TopologyParameters
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.TopologyParameters() # TopologyParameters | Parameters that define the representation of topology.

    try:
        api_response = api_instance.network_watchers_get_topology(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_topology:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_topology: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**TopologyParameters**](TopologyParameters.md)| Parameters that define the representation of topology. | 

### Return type

[**Topology**](Topology.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the topology of resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_troubleshooting**
> TroubleshootingResult network_watchers_get_troubleshooting(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Initiate troubleshooting on a specified resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.troubleshooting_parameters import TroubleshootingParameters
from openapi_client.models.troubleshooting_result import TroubleshootingResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.TroubleshootingParameters() # TroubleshootingParameters | Parameters that define the resource to troubleshoot.

    try:
        api_response = api_instance.network_watchers_get_troubleshooting(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_troubleshooting:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_troubleshooting: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**TroubleshootingParameters**](TroubleshootingParameters.md)| Parameters that define the resource to troubleshoot. | 

### Return type

[**TroubleshootingResult**](TroubleshootingResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful troubleshooting request |  -  |
**202** | Accepted get troubleshooting request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_troubleshooting_result**
> TroubleshootingResult network_watchers_get_troubleshooting_result(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Get the last completed troubleshooting result on a specified resource

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.query_troubleshooting_parameters import QueryTroubleshootingParameters
from openapi_client.models.troubleshooting_result import TroubleshootingResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.QueryTroubleshootingParameters() # QueryTroubleshootingParameters | Parameters that define the resource to query the troubleshooting result.

    try:
        api_response = api_instance.network_watchers_get_troubleshooting_result(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_troubleshooting_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_troubleshooting_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**QueryTroubleshootingParameters**](QueryTroubleshootingParameters.md)| Parameters that define the resource to query the troubleshooting result. | 

### Return type

[**TroubleshootingResult**](TroubleshootingResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful get troubleshooting result request |  -  |
**202** | Accepted get troubleshooting result request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_get_vm_security_rules**
> SecurityGroupViewResult network_watchers_get_vm_security_rules(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Gets the configured and effective security group rules on the specified VM.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.security_group_view_parameters import SecurityGroupViewParameters
from openapi_client.models.security_group_view_result import SecurityGroupViewResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.SecurityGroupViewParameters() # SecurityGroupViewParameters | Parameters that define the VM to check security groups for.

    try:
        api_response = api_instance.network_watchers_get_vm_security_rules(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_get_vm_security_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_get_vm_security_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**SecurityGroupViewParameters**](SecurityGroupViewParameters.md)| Parameters that define the VM to check security groups for. | 

### Return type

[**SecurityGroupViewResult**](SecurityGroupViewResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns security group rules on the VM. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_list**
> NetworkWatcherListResult network_watchers_list(resource_group_name, api_version, subscription_id)



Gets all network watchers by resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_watcher_list_result import NetworkWatcherListResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_watchers_list(resource_group_name, api_version, subscription_id)
        print("The response of NetworkWatchersApi->network_watchers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkWatcherListResult**](NetworkWatcherListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of network watcher resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_list_all**
> NetworkWatcherListResult network_watchers_list_all(api_version, subscription_id)



Gets all network watchers by subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_watcher_list_result import NetworkWatcherListResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_watchers_list_all(api_version, subscription_id)
        print("The response of NetworkWatchersApi->network_watchers_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkWatcherListResult**](NetworkWatcherListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of network watcher resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_set_flow_log_configuration**
> FlowLogInformation network_watchers_set_flow_log_configuration(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Configures flow log on a specified resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log_information import FlowLogInformation
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the network watcher resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FlowLogInformation() # FlowLogInformation | Parameters that define the configuration of flow log.

    try:
        api_response = api_instance.network_watchers_set_flow_log_configuration(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_set_flow_log_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_set_flow_log_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the network watcher resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FlowLogInformation**](FlowLogInformation.md)| Parameters that define the configuration of flow log. | 

### Return type

[**FlowLogInformation**](FlowLogInformation.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful request for setting flow log configuration. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_watchers_verify_ip_flow**
> VerificationIPFlowResult network_watchers_verify_ip_flow(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)



Verify IP flow from the specified VM to a location given the currently configured NSG rules.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.verification_ip_flow_parameters import VerificationIPFlowParameters
from openapi_client.models.verification_ip_flow_result import VerificationIPFlowResult
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
    api_instance = openapi_client.NetworkWatchersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VerificationIPFlowParameters() # VerificationIPFlowParameters | Parameters that define the IP flow to be verified.

    try:
        api_response = api_instance.network_watchers_verify_ip_flow(resource_group_name, network_watcher_name, api_version, subscription_id, parameters)
        print("The response of NetworkWatchersApi->network_watchers_verify_ip_flow:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkWatchersApi->network_watchers_verify_ip_flow: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VerificationIPFlowParameters**](VerificationIPFlowParameters.md)| Parameters that define the IP flow to be verified. | 

### Return type

[**VerificationIPFlowResult**](VerificationIPFlowResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the result of IP flow verification. |  -  |
**202** | Accepted and the operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

