# openapi_client.AgentPoolsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**agent_pools_create_or_update**](AgentPoolsApi.md#agent_pools_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName} | Creates or updates an agent pool.
[**agent_pools_delete**](AgentPoolsApi.md#agent_pools_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName} | Deletes an agent pool.
[**agent_pools_get**](AgentPoolsApi.md#agent_pools_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName} | Gets the agent pool.
[**agent_pools_list**](AgentPoolsApi.md#agent_pools_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools | Gets a list of agent pools in the specified managed cluster.


# **agent_pools_create_or_update**
> AgentPool agent_pools_create_or_update(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name, parameters)

Creates or updates an agent pool.

Creates or updates an agent pool in the specified managed cluster.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agent_pool import AgentPool
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
    api_instance = openapi_client.AgentPoolsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_cluster_name = 'managed_cluster_name_example' # str | The name of the managed cluster resource.
    agent_pool_name = 'agent_pool_name_example' # str | The name of the agent pool.
    parameters = openapi_client.AgentPool() # AgentPool | Parameters supplied to the Create or Update an agent pool operation.

    try:
        # Creates or updates an agent pool.
        api_response = api_instance.agent_pools_create_or_update(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name, parameters)
        print("The response of AgentPoolsApi->agent_pools_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentPoolsApi->agent_pools_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_cluster_name** | **str**| The name of the managed cluster resource. | 
 **agent_pool_name** | **str**| The name of the agent pool. | 
 **parameters** | [**AgentPool**](AgentPool.md)| Parameters supplied to the Create or Update an agent pool operation. | 

### Return type

[**AgentPool**](AgentPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_pools_delete**
> agent_pools_delete(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name)

Deletes an agent pool.

Deletes the agent pool in the specified managed cluster.

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
    api_instance = openapi_client.AgentPoolsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_cluster_name = 'managed_cluster_name_example' # str | The name of the managed cluster resource.
    agent_pool_name = 'agent_pool_name_example' # str | The name of the agent pool.

    try:
        # Deletes an agent pool.
        api_instance.agent_pools_delete(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name)
    except Exception as e:
        print("Exception when calling AgentPoolsApi->agent_pools_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_cluster_name** | **str**| The name of the managed cluster resource. | 
 **agent_pool_name** | **str**| The name of the agent pool. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_pools_get**
> AgentPool agent_pools_get(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name)

Gets the agent pool.

Gets the details of the agent pool by managed cluster and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agent_pool import AgentPool
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
    api_instance = openapi_client.AgentPoolsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_cluster_name = 'managed_cluster_name_example' # str | The name of the managed cluster resource.
    agent_pool_name = 'agent_pool_name_example' # str | The name of the agent pool.

    try:
        # Gets the agent pool.
        api_response = api_instance.agent_pools_get(api_version, subscription_id, resource_group_name, managed_cluster_name, agent_pool_name)
        print("The response of AgentPoolsApi->agent_pools_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentPoolsApi->agent_pools_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_cluster_name** | **str**| The name of the managed cluster resource. | 
 **agent_pool_name** | **str**| The name of the agent pool. | 

### Return type

[**AgentPool**](AgentPool.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **agent_pools_list**
> AgentPoolListResult agent_pools_list(api_version, subscription_id, resource_group_name, managed_cluster_name)

Gets a list of agent pools in the specified managed cluster.

Gets a list of agent pools in the specified managed cluster. The operation returns properties of each agent pool.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.agent_pool_list_result import AgentPoolListResult
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
    api_instance = openapi_client.AgentPoolsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    managed_cluster_name = 'managed_cluster_name_example' # str | The name of the managed cluster resource.

    try:
        # Gets a list of agent pools in the specified managed cluster.
        api_response = api_instance.agent_pools_list(api_version, subscription_id, resource_group_name, managed_cluster_name)
        print("The response of AgentPoolsApi->agent_pools_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentPoolsApi->agent_pools_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **managed_cluster_name** | **str**| The name of the managed cluster resource. | 

### Return type

[**AgentPoolListResult**](AgentPoolListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

