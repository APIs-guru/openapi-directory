# openapi_client.ConnectionMonitorsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connection_monitors_create_or_update**](ConnectionMonitorsApi.md#connection_monitors_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName} | 
[**connection_monitors_delete**](ConnectionMonitorsApi.md#connection_monitors_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName} | 
[**connection_monitors_get**](ConnectionMonitorsApi.md#connection_monitors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName} | 
[**connection_monitors_list**](ConnectionMonitorsApi.md#connection_monitors_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors | 
[**connection_monitors_query**](ConnectionMonitorsApi.md#connection_monitors_query) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/query | 
[**connection_monitors_start**](ConnectionMonitorsApi.md#connection_monitors_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/start | 
[**connection_monitors_stop**](ConnectionMonitorsApi.md#connection_monitors_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/connectionMonitors/{connectionMonitorName}/stop | 


# **connection_monitors_create_or_update**
> ConnectionMonitorResult connection_monitors_create_or_update(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id, parameters)



Create or update a connection monitor.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_monitor import ConnectionMonitor
from openapi_client.models.connection_monitor_result import ConnectionMonitorResult
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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name of the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.ConnectionMonitor() # ConnectionMonitor | Parameters that define the operation to create a connection monitor.

    try:
        api_response = api_instance.connection_monitors_create_or_update(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id, parameters)
        print("The response of ConnectionMonitorsApi->connection_monitors_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name of the connection monitor. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**ConnectionMonitor**](ConnectionMonitor.md)| Parameters that define the operation to create a connection monitor. | 

### Return type

[**ConnectionMonitorResult**](ConnectionMonitorResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting connection monitor resource. |  -  |
**201** | Create successful. The operation returns the resulting connection monitor resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_delete**
> connection_monitors_delete(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)



Deletes the specified connection monitor.

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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name of the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.connection_monitors_delete(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name of the connection monitor. | 
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
**202** | Accepted. The operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_get**
> ConnectionMonitorResult connection_monitors_get(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)



Gets a connection monitor by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_monitor_result import ConnectionMonitorResult
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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name of the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.connection_monitors_get(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)
        print("The response of ConnectionMonitorsApi->connection_monitors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name of the connection monitor. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConnectionMonitorResult**](ConnectionMonitorResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a connection monitor. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_list**
> ConnectionMonitorListResult connection_monitors_list(resource_group_name, network_watcher_name, api_version, subscription_id)



Lists all connection monitors for the specified Network Watcher.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_monitor_list_result import ConnectionMonitorListResult
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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.connection_monitors_list(resource_group_name, network_watcher_name, api_version, subscription_id)
        print("The response of ConnectionMonitorsApi->connection_monitors_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConnectionMonitorListResult**](ConnectionMonitorListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful connection monitor enumeration request. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_query**
> ConnectionMonitorQueryResult connection_monitors_query(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)



Query a snapshot of the most recent connection states.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.connection_monitor_query_result import ConnectionMonitorQueryResult
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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name given to the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.connection_monitors_query(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)
        print("The response of ConnectionMonitorsApi->connection_monitors_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name given to the connection monitor. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**ConnectionMonitorQueryResult**](ConnectionMonitorQueryResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful query of connection states. |  -  |
**202** | Accepted query of connection states. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_start**
> connection_monitors_start(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)



Starts the specified connection monitor.

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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name of the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.connection_monitors_start(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name of the connection monitor. | 
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
**200** | Request successful. The operation starts the connection monitor. |  -  |
**202** | Accepted. The operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connection_monitors_stop**
> connection_monitors_stop(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)



Stops the specified connection monitor.

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
    api_instance = openapi_client.ConnectionMonitorsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    connection_monitor_name = 'connection_monitor_name_example' # str | The name of the connection monitor.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.connection_monitors_stop(resource_group_name, network_watcher_name, connection_monitor_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling ConnectionMonitorsApi->connection_monitors_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **connection_monitor_name** | **str**| The name of the connection monitor. | 
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
**200** | Request successful. The operation stops the connection monitor. |  -  |
**202** | Accepted. The operation will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

