# openapi_client.SyncMembersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sync_members_create_or_update**](SyncMembersApi.md#sync_members_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName} | 
[**sync_members_delete**](SyncMembersApi.md#sync_members_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName} | 
[**sync_members_get**](SyncMembersApi.md#sync_members_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName} | 
[**sync_members_list_by_sync_group**](SyncMembersApi.md#sync_members_list_by_sync_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers | 
[**sync_members_list_member_schemas**](SyncMembersApi.md#sync_members_list_member_schemas) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/schemas | 
[**sync_members_refresh_member_schema**](SyncMembersApi.md#sync_members_refresh_member_schema) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName}/refreshSchema | 
[**sync_members_update**](SyncMembersApi.md#sync_members_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/syncGroups/{syncGroupName}/syncMembers/{syncMemberName} | 


# **sync_members_create_or_update**
> SyncMember sync_members_create_or_update(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version, parameters)



Creates or updates a sync member.

### Example


```python
import openapi_client
from openapi_client.models.sync_member import SyncMember
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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SyncMember() # SyncMember | The requested sync member resource state.

    try:
        api_response = api_instance.sync_members_create_or_update(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version, parameters)
        print("The response of SyncMembersApi->sync_members_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SyncMember**](SyncMember.md)| The requested sync member resource state. | 

### Return type

[**SyncMember**](SyncMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sync member. |  -  |
**201** | Successfully created the sync member. |  -  |
**202** | Creating or updating the sync member is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_delete**
> sync_members_delete(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)



Deletes a sync member.

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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_members_delete(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
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
**200** | Successfully deleted the sync member. |  -  |
**202** | Deleting the sync member is in progress. |  -  |
**204** | The specified sync member does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_get**
> SyncMember sync_members_get(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)



Gets a sync member.

### Example


```python
import openapi_client
from openapi_client.models.sync_member import SyncMember
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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_members_get(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)
        print("The response of SyncMembersApi->sync_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**SyncMember**](SyncMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified sync member. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_list_by_sync_group**
> SyncMemberListResult sync_members_list_by_sync_group(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)



Lists sync members in the given sync group.

### Example


```python
import openapi_client
from openapi_client.models.sync_member_list_result import SyncMemberListResult
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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_members_list_by_sync_group(resource_group_name, server_name, database_name, sync_group_name, subscription_id, api_version)
        print("The response of SyncMembersApi->sync_members_list_by_sync_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_list_by_sync_group: %s\n" % e)
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

[**SyncMemberListResult**](SyncMemberListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of sync members. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_list_member_schemas**
> SyncFullSchemaPropertiesListResult sync_members_list_member_schemas(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)



Gets a sync member database schema.

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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.sync_members_list_member_schemas(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)
        print("The response of SyncMembersApi->sync_members_list_member_schemas:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_list_member_schemas: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
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
**200** | Successfully get a sync member schema. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_refresh_member_schema**
> sync_members_refresh_member_schema(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)



Refreshes a sync member database schema.

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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.sync_members_refresh_member_schema(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_refresh_member_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
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
**200** | Successfully refreshed a sync member schema. |  -  |
**202** | The sync member schema refresh operation is on going. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sync_members_update**
> SyncMember sync_members_update(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version, parameters)



Updates an existing sync member.

### Example


```python
import openapi_client
from openapi_client.models.sync_member import SyncMember
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
    api_instance = openapi_client.SyncMembersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server.
    database_name = 'database_name_example' # str | The name of the database on which the sync group is hosted.
    sync_group_name = 'sync_group_name_example' # str | The name of the sync group on which the sync member is hosted.
    sync_member_name = 'sync_member_name_example' # str | The name of the sync member.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.SyncMember() # SyncMember | The requested sync member resource state.

    try:
        api_response = api_instance.sync_members_update(resource_group_name, server_name, database_name, sync_group_name, sync_member_name, subscription_id, api_version, parameters)
        print("The response of SyncMembersApi->sync_members_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SyncMembersApi->sync_members_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server. | 
 **database_name** | **str**| The name of the database on which the sync group is hosted. | 
 **sync_group_name** | **str**| The name of the sync group on which the sync member is hosted. | 
 **sync_member_name** | **str**| The name of the sync member. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**SyncMember**](SyncMember.md)| The requested sync member resource state. | 

### Return type

[**SyncMember**](SyncMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the sync member. |  -  |
**202** | Updating the sync member is in progress. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidSyncGroupCreateOrUpdateRequest - The create or update sync group request body is empty.   * 400 InvalidSyncMemberCreateOrUpdateRequest - The create or update sync member request body is empty.   * 400 InvalidSyncAgentCreateOrUpdateRequest - The create or update sync agent request body is empty.   * 400 InvalidDatabaseResourceId - Invalid database resource identifier.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 400 InvalidSyncAgentResourceId - Invalid sync agent resource identifier.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingServerNameWithUrl - The provided server name did not match the name in the Url.   * 400 InvalidSyncGroup - Sync group is invalid.   * 400 InvalidSyncMember - Sync member is invalid.   * 400 InvalidSyncAgent - Sync agent is invalid.   * 400 InvalidSyncMetadataDatabase - Sync metadata database is invalid.   * 404 SubscriptionDoesNotHaveServer - The requested server was not found   * 404 DatabaseDoesNotExist - User has specified a database name that does not exist on this server instance.   * 409 CannotCreateSyncMemberDueToQuotaExceeded - Cannot create sync member due to quota exceeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

