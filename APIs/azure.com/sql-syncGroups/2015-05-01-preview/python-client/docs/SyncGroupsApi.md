# openapi_client.SyncGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sync_groups_cancel_sync**](SyncGroupsApi.md#sync_groups_cancel_sync) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/cancelSync | 
[**sync_groups_create_or_update**](SyncGroupsApi.md#sync_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName} | 
[**sync_groups_delete**](SyncGroupsApi.md#sync_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName} | 
[**sync_groups_get**](SyncGroupsApi.md#sync_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName} | 
[**sync_groups_list_by_database**](SyncGroupsApi.md#sync_groups_list_by_database) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups | 
[**sync_groups_list_hub_schemas**](SyncGroupsApi.md#sync_groups_list_hub_schemas) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/hubSchemas | 
[**sync_groups_list_logs**](SyncGroupsApi.md#sync_groups_list_logs) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/logs | 
[**sync_groups_list_sync_database_ids**](SyncGroupsApi.md#sync_groups_list_sync_database_ids) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/syncDatabaseIds | 
[**sync_groups_refresh_hub_schema**](SyncGroupsApi.md#sync_groups_refresh_hub_schema) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/refreshHubSchema | 
[**sync_groups_trigger_sync**](SyncGroupsApi.md#sync_groups_trigger_sync) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/triggerSync | 
[**sync_groups_update**](SyncGroupsApi.md#sync_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName} | 


# **sync_groups_cancel_sync**
> sync_groups_cancel_sync(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Cancels a sync group synchronization.

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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_groups_cancel_sync(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_cancel_sync: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
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
**200** | Successfully cancel a sync group synchronization. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_create_or_update**
> SyncGroup sync_groups_create_or_update(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version, parameters)



Creates or updates a sync group.

### Example


```python
import openapi_client
from openapi_client.models.sync_group import SyncGroup
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SyncGroup() # SyncGroup | The requested sync group resource state.

    try:
        api_response = api_instance.sync_groups_create_or_update(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version, parameters)
        print("The response of SyncGroupsApi->sync_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SyncGroup**](SyncGroup.md)| The requested sync group resource state. | 

### Return type

[**SyncGroup**](SyncGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sync group. |  -  |
**201** | Successfully created the sync group. |  -  |
**202** | Creating or updating the sync group is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_delete**
> sync_groups_delete(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Deletes a sync group.

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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_groups_delete(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
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
**200** | Successfully deleted the sync group. |  -  |
**202** | Deleting the sync group is in progress. |  -  |
**204** | The specified sync group does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_get**
> SyncGroup sync_groups_get(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Gets a sync group.

### Example


```python
import openapi_client
from openapi_client.models.sync_group import SyncGroup
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_groups_get(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
        print("The response of SyncGroupsApi->sync_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncGroup**](SyncGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified sync group. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_list_by_database**
> SyncGroupListResult sync_groups_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)



Lists sync groups under a hub database.

### Example


```python
import openapi_client
from openapi_client.models.sync_group_list_result import SyncGroupListResult
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_groups_list_by_database(resource_group_name, server_name, database_name, subscription_id, api_version)
        print("The response of SyncGroupsApi->sync_groups_list_by_database:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_list_by_database: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncGroupListResult**](SyncGroupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of sync groups. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_list_hub_schemas**
> SyncFullSchemaPropertiesListResult sync_groups_list_hub_schemas(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Gets a collection of hub database schemas.

### Example


```python
import openapi_client
from openapi_client.models.sync_full_schema_properties_list_result import SyncFullSchemaPropertiesListResult
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_groups_list_hub_schemas(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
        print("The response of SyncGroupsApi->sync_groups_list_hub_schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_list_hub_schemas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncFullSchemaPropertiesListResult**](SyncFullSchemaPropertiesListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully get a sync group hub database schema. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_list_logs**
> SyncGroupLogListResult sync_groups_list_logs(resource_group_name, server_name, database_name, sync_group_name, start_time, end_time, type, subscription_id, api_version, continuation_token=continuation_token)



Gets a collection of sync group logs.

### Example


```python
import openapi_client
from openapi_client.models.sync_group_log_list_result import SyncGroupLogListResult
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    start_time = 'start_time_example' # str | Get logs generated after this time.
    end_time = 'end_time_example' # str | Get logs generated before this time.
    type = 'type_example' # str | The types of logs to retrieve.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    continuation_token = 'continuation_token_example' # str | The continuation token for this operation. (optional)

    try:
        api_response = api_instance.sync_groups_list_logs(resource_group_name, server_name, database_name, sync_group_name, start_time, end_time, type, subscription_id, api_version, continuation_token=continuation_token)
        print("The response of SyncGroupsApi->sync_groups_list_logs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_list_logs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
 **start_time** | **str**| Get logs generated after this time. | 
 **end_time** | **str**| Get logs generated before this time. | 
 **type** | **str**| The types of logs to retrieve. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **continuation_token** | **str**| The continuation token for this operation. | [optional] 

### Return type

[**SyncGroupLogListResult**](SyncGroupLogListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved sync group logs. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_list_sync_database_ids**
> SyncDatabaseIdListResult sync_groups_list_sync_database_ids(location_name, subscription_id, api_version)



Gets a collection of sync database ids.

### Example


```python
import openapi_client
from openapi_client.models.sync_database_id_list_result import SyncDatabaseIdListResult
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_groups_list_sync_database_ids(location_name, subscription_id, api_version)
        print("The response of SyncGroupsApi->sync_groups_list_sync_database_ids:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_list_sync_database_ids: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location_name** | **str**| The name of the region where the resource is located. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncDatabaseIdListResult**](SyncDatabaseIdListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved collection of sync database ids. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_refresh_hub_schema**
> sync_groups_refresh_hub_schema(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Refreshes a hub database schema.

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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_groups_refresh_hub_schema(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_refresh_hub_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
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
**200** | Successfully refreshed a sync hub schema. |  -  |
**202** | The sync hub schema refresh operation is on going. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_trigger_sync**
> sync_groups_trigger_sync(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Triggers a sync group synchronization.

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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_groups_trigger_sync(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_trigger_sync: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
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
**200** | Successfully triggered a sync group synchronization. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_groups_update**
> SyncGroup sync_groups_update(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version, parameters)



Updates a sync group.

### Example


```python
import openapi_client
from openapi_client.models.sync_group import SyncGroup
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
    api_instance = openapi_client.SyncGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SyncGroup() # SyncGroup | The requested sync group resource state.

    try:
        api_response = api_instance.sync_groups_update(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version, parameters)
        print("The response of SyncGroupsApi->sync_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncGroupsApi->sync_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SyncGroup**](SyncGroup.md)| The requested sync group resource state. | 

### Return type

[**SyncGroup**](SyncGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sync group. |  -  |
**202** | Updating the sync group is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncGroupDueToQuotaExceeded - Cannot create sync group due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

