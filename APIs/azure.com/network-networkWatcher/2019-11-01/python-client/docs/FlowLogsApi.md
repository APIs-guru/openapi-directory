# openapi_client.FlowLogsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**flow_logs_create_or_update**](FlowLogsApi.md#flow_logs_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName} | 
[**flow_logs_delete**](FlowLogsApi.md#flow_logs_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName} | 
[**flow_logs_get**](FlowLogsApi.md#flow_logs_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs/{flowLogName} | 
[**flow_logs_list**](FlowLogsApi.md#flow_logs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/flowLogs | 


# **flow_logs_create_or_update**
> FlowLog flow_logs_create_or_update(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id, parameters)



Create or update a flow log for the specified network security group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log import FlowLog
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
    api_instance = openapi_client.FlowLogsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    flow_log_name = 'flow_log_name_example' # str | The name of the flow log.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.FlowLog() # FlowLog | Parameters that define the create or update flow log resource.

    try:
        api_response = api_instance.flow_logs_create_or_update(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id, parameters)
        print("The response of FlowLogsApi->flow_logs_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowLogsApi->flow_logs_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **flow_log_name** | **str**| The name of the flow log. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**FlowLog**](FlowLog.md)| Parameters that define the create or update flow log resource. | 

### Return type

[**FlowLog**](FlowLog.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Update successful. The operation returns the resulting flow log resource. |  -  |
**201** | Request successful. The operation returns the resulting flow log resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flow_logs_delete**
> flow_logs_delete(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id)



Deletes the specified flow log resource.

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
    api_instance = openapi_client.FlowLogsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    flow_log_name = 'flow_log_name_example' # str | The name of the flow log resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.flow_logs_delete(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling FlowLogsApi->flow_logs_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **flow_log_name** | **str**| The name of the flow log resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**202** | Accepted and the operation will complete asynchronously. |  -  |
**204** | Delete successful. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flow_logs_get**
> FlowLog flow_logs_get(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id)



Gets a flow log resource by name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log import FlowLog
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
    api_instance = openapi_client.FlowLogsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the network watcher.
    flow_log_name = 'flow_log_name_example' # str | The name of the flow log resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.flow_logs_get(resource_group_name, network_watcher_name, flow_log_name, api_version, subscription_id)
        print("The response of FlowLogsApi->flow_logs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowLogsApi->flow_logs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **network_watcher_name** | **str**| The name of the network watcher. | 
 **flow_log_name** | **str**| The name of the flow log resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FlowLog**](FlowLog.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a flow log resource. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **flow_logs_list**
> FlowLogListResult flow_logs_list(resource_group_name, network_watcher_name, api_version, subscription_id)



Lists all flow log resources for the specified Network Watcher.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.flow_log_list_result import FlowLogListResult
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
    api_instance = openapi_client.FlowLogsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group containing Network Watcher.
    network_watcher_name = 'network_watcher_name_example' # str | The name of the Network Watcher resource.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.flow_logs_list(resource_group_name, network_watcher_name, api_version, subscription_id)
        print("The response of FlowLogsApi->flow_logs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FlowLogsApi->flow_logs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group containing Network Watcher. | 
 **network_watcher_name** | **str**| The name of the Network Watcher resource. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**FlowLogListResult**](FlowLogListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful flow log enumeration request. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

