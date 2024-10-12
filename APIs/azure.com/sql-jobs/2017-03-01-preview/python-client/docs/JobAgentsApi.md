# openapi_client.JobAgentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_agents_create_or_update**](JobAgentsApi.md#job_agents_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName} | 
[**job_agents_delete**](JobAgentsApi.md#job_agents_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName} | 
[**job_agents_get**](JobAgentsApi.md#job_agents_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName} | 
[**job_agents_list_by_server**](JobAgentsApi.md#job_agents_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents | 
[**job_agents_update**](JobAgentsApi.md#job_agents_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName} | 


# **job_agents_create_or_update**
> JobAgent job_agents_create_or_update(resource_group_name, server_name, job_agent_name, subscription_id, api_version, parameters)



Creates or updates a job agent.

### Example


```python
import openapi_client
from openapi_client.models.job_agent import JobAgent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent to be created or updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.JobAgent() # JobAgent | The requested job agent resource state.

    try:
        api_response = api_instance.job_agents_create_or_update(resource_group_name, server_name, job_agent_name, subscription_id, api_version, parameters)
        print("The response of JobAgentsApi->job_agents_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobAgentsApi->job_agents_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent to be created or updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**JobAgent**](JobAgent.md)| The requested job agent resource state. | 

### Return type

[**JobAgent**](JobAgent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the job agent. |  -  |
**201** | Successfully created the job agent. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 400 MissingSkuName - Sku name is required.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 DatabaseDoesNotExist - The requested database was not found   * 400 JobAgentExceededQuota - Could not create job agent because it would exceed the quota.   * 400 JobAgentAlreadyExists - The job agent already exists on the server.   * 400 JobAgentDatabaseEditionUnsupported - The specified database&#39;s service level objective is not supported for use as a job agent database.   * 400 JobAgentDatabaseSecondary - A job agent cannot be linked to a geo-secondary database.   * 400 JobAgentDatabaseAlreadyLinked - The specified database is already linked to another job agent.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 SubscriptionNotFound - The requested subscription was not found.   * 404 PropertyChangeUnsupported - Property cannot be modified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_agents_delete**
> job_agents_delete(resource_group_name, server_name, job_agent_name, subscription_id, api_version)



Deletes a job agent.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent to be deleted.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.job_agents_delete(resource_group_name, server_name, job_agent_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling JobAgentsApi->job_agents_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent to be deleted. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted the job agent. |  -  |
**202** | Accepted |  -  |
**204** | The specified job agent does not exist. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_agents_get**
> JobAgent job_agents_get(resource_group_name, server_name, job_agent_name, subscription_id, api_version)



Gets a job agent.

### Example


```python
import openapi_client
from openapi_client.models.job_agent import JobAgent
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent to be retrieved.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_agents_get(resource_group_name, server_name, job_agent_name, subscription_id, api_version)
        print("The response of JobAgentsApi->job_agents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobAgentsApi->job_agents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent to be retrieved. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobAgent**](JobAgent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified job agent. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_agents_list_by_server**
> JobAgentListResult job_agents_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Gets a list of job agents in a server.

### Example


```python
import openapi_client
from openapi_client.models.job_agent_list_result import JobAgentListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.job_agents_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of JobAgentsApi->job_agents_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobAgentsApi->job_agents_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**JobAgentListResult**](JobAgentListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of job agents. |  -  |
**0** | *** Error Responses: ***   * 404 SubscriptionDoesNotHaveServer - The requested server was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_agents_update**
> JobAgent job_agents_update(resource_group_name, server_name, job_agent_name, subscription_id, api_version, parameters)



Updates a job agent.

### Example


```python
import openapi_client
from openapi_client.models.job_agent import JobAgent
from openapi_client.models.job_agent_update import JobAgentUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    job_agent_name = 'job_agent_name_example' # str | The name of the job agent to be updated.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.JobAgentUpdate() # JobAgentUpdate | The update to the job agent.

    try:
        api_response = api_instance.job_agents_update(resource_group_name, server_name, job_agent_name, subscription_id, api_version, parameters)
        print("The response of JobAgentsApi->job_agents_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JobAgentsApi->job_agents_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **job_agent_name** | **str**| The name of the job agent to be updated. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**JobAgentUpdate**](JobAgentUpdate.md)| The update to the job agent. | 

### Return type

[**JobAgent**](JobAgent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the job agent. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 InvalidResourceRequestBody - The resource or resource properties in the request body is empty or invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 JobAgentNotFound - Specified job agent does not exist in the specified logical server.   * 404 PropertyChangeUnsupported - Property cannot be modified. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

