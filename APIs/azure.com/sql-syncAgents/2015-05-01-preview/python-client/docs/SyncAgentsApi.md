# openapi_client.SyncAgentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sync_agents_create_or_update**](SyncAgentsApi.md#sync_agents_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName} | 
[**sync_agents_delete**](SyncAgentsApi.md#sync_agents_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName} | 
[**sync_agents_generate_key**](SyncAgentsApi.md#sync_agents_generate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/generateKey | 
[**sync_agents_get**](SyncAgentsApi.md#sync_agents_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName} | 
[**sync_agents_list_by_server**](SyncAgentsApi.md#sync_agents_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents | 
[**sync_agents_list_linked_databases**](SyncAgentsApi.md#sync_agents_list_linked_databases) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/syncAgents/{syncAgentName}/linkedDatabases | 


# **sync_agents_create_or_update**
> SyncAgent sync_agents_create_or_update(resource_group_name, server_name, sync_agent_name, subscription_id, api_version, parameters)



Creates or updates a sync agent.

### Example


```python
import openapi_client
from openapi_client.models.sync_agent import SyncAgent
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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    sync_agent_name = 'sync_agent_name_example' # str | The name of the sync agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SyncAgent() # SyncAgent | The requested sync agent resource state.

    try:
        api_response = api_instance.sync_agents_create_or_update(resource_group_name, server_name, sync_agent_name, subscription_id, api_version, parameters)
        print("The response of SyncAgentsApi->sync_agents_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **sync_agent_name** | **str**| The name of the sync agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SyncAgent**](SyncAgent.md)| The requested sync agent resource state. | 

### Return type

[**SyncAgent**](SyncAgent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sync agent. |  -  |
**201** | Successfully created the sync agent. |  -  |
**202** | Creating or updating the sync agent is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_agents_delete**
> sync_agents_delete(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)



Deletes a sync agent.

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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    sync_agent_name = 'sync_agent_name_example' # str | The name of the sync agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_agents_delete(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **sync_agent_name** | **str**| The name of the sync agent. | 
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
**200** | Successfully deleted the sync agent. |  -  |
**202** | Deleting the sync agent is in progress. |  -  |
**204** | The specified sync agent does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_agents_generate_key**
> SyncAgentKeyProperties sync_agents_generate_key(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)



Generates a sync agent key.

### Example


```python
import openapi_client
from openapi_client.models.sync_agent_key_properties import SyncAgentKeyProperties
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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    sync_agent_name = 'sync_agent_name_example' # str | The name of the sync agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_agents_generate_key(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)
        print("The response of SyncAgentsApi->sync_agents_generate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_generate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **sync_agent_name** | **str**| The name of the sync agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncAgentKeyProperties**](SyncAgentKeyProperties.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully generate a sync agent key. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_agents_get**
> SyncAgent sync_agents_get(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)



Gets a sync agent.

### Example


```python
import openapi_client
from openapi_client.models.sync_agent import SyncAgent
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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    sync_agent_name = 'sync_agent_name_example' # str | The name of the sync agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_agents_get(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)
        print("The response of SyncAgentsApi->sync_agents_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **sync_agent_name** | **str**| The name of the sync agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncAgent**](SyncAgent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified sync agent. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_agents_list_by_server**
> SyncAgentListResult sync_agents_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Lists sync agents in a server.

### Example


```python
import openapi_client
from openapi_client.models.sync_agent_list_result import SyncAgentListResult
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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_agents_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of SyncAgentsApi->sync_agents_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncAgentListResult**](SyncAgentListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of sync agents. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_agents_list_linked_databases**
> SyncAgentLinkedDatabaseListResult sync_agents_list_linked_databases(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)



Lists databases linked to a sync agent.

### Example


```python
import openapi_client
from openapi_client.models.sync_agent_linked_database_list_result import SyncAgentLinkedDatabaseListResult
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
    api_instance = openapi_client.SyncAgentsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server on which the sync agent is hosted.
    sync_agent_name = 'sync_agent_name_example' # str | The name of the sync agent.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_agents_list_linked_databases(resource_group_name, server_name, sync_agent_name, subscription_id, api_version)
        print("The response of SyncAgentsApi->sync_agents_list_linked_databases:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncAgentsApi->sync_agents_list_linked_databases: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server on which the sync agent is hosted. | 
 **sync_agent_name** | **str**| The name of the sync agent. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncAgentLinkedDatabaseListResult**](SyncAgentLinkedDatabaseListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved sync agent linked SQL server databases. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 CannotDeleteInUseSyncAgent - Cannot delete sync agent because it is used by sync member.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

