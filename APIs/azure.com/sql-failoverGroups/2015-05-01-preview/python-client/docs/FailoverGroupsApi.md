# openapi_client.FailoverGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**failover_groups_create_or_update**](FailoverGroupsApi.md#failover_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName} | 
[**failover_groups_delete**](FailoverGroupsApi.md#failover_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName} | 
[**failover_groups_failover**](FailoverGroupsApi.md#failover_groups_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}/failover | 
[**failover_groups_force_failover_allow_data_loss**](FailoverGroupsApi.md#failover_groups_force_failover_allow_data_loss) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss | 
[**failover_groups_get**](FailoverGroupsApi.md#failover_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName} | 
[**failover_groups_list_by_server**](FailoverGroupsApi.md#failover_groups_list_by_server) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups | 
[**failover_groups_update**](FailoverGroupsApi.md#failover_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/failoverGroups/{failoverGroupName} | 


# **failover_groups_create_or_update**
> FailoverGroup failover_groups_create_or_update(resource_group_name, server_name, failover_group_name, subscription_id, api_version, parameters)



Creates or updates a failover group.

### Example


```python
import openapi_client
from openapi_client.models.failover_group import FailoverGroup
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.FailoverGroup() # FailoverGroup | The failover group parameters.

    try:
        api_response = api_instance.failover_groups_create_or_update(resource_group_name, server_name, failover_group_name, subscription_id, api_version, parameters)
        print("The response of FailoverGroupsApi->failover_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**FailoverGroup**](FailoverGroup.md)| The failover group parameters. | 

### Return type

[**FailoverGroup**](FailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the failover group. |  -  |
**201** | Successfully created the failover group. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 FailoverGroupCreateOrUpdatePartiallySucceeded - Some databases could not be added or removed.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 FailoverGroupUnableToPerformGroupOperationOnDatabases - The list of databases to add/remove to/from Failover Group contains errors that are preventing operation to complete.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_delete**
> failover_groups_delete(resource_group_name, server_name, failover_group_name, subscription_id, api_version)



Deletes a failover group.

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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.failover_groups_delete(resource_group_name, server_name, failover_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
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
**200** | Successfully deleted the failover group. |  -  |
**202** | Accepted |  -  |
**204** | The specified failover group does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_failover**
> FailoverGroup failover_groups_failover(resource_group_name, server_name, failover_group_name, subscription_id, api_version)



Fails over from the current primary server to this server.

### Example


```python
import openapi_client
from openapi_client.models.failover_group import FailoverGroup
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.failover_groups_failover(resource_group_name, server_name, failover_group_name, subscription_id, api_version)
        print("The response of FailoverGroupsApi->failover_groups_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**FailoverGroup**](FailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully failed over. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_force_failover_allow_data_loss**
> FailoverGroup failover_groups_force_failover_allow_data_loss(resource_group_name, server_name, failover_group_name, subscription_id, api_version)



Fails over from the current primary server to this server. This operation might result in data loss.

### Example


```python
import openapi_client
from openapi_client.models.failover_group import FailoverGroup
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.failover_groups_force_failover_allow_data_loss(resource_group_name, server_name, failover_group_name, subscription_id, api_version)
        print("The response of FailoverGroupsApi->failover_groups_force_failover_allow_data_loss:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_force_failover_allow_data_loss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**FailoverGroup**](FailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully failed over. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_get**
> FailoverGroup failover_groups_get(resource_group_name, server_name, failover_group_name, subscription_id, api_version)



Gets a failover group.

### Example


```python
import openapi_client
from openapi_client.models.failover_group import FailoverGroup
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.failover_groups_get(resource_group_name, server_name, failover_group_name, subscription_id, api_version)
        print("The response of FailoverGroupsApi->failover_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**FailoverGroup**](FailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified failover group. |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_list_by_server**
> FailoverGroupListResult failover_groups_list_by_server(resource_group_name, server_name, subscription_id, api_version)



Lists the failover groups in a server.

### Example


```python
import openapi_client
from openapi_client.models.failover_group_list_result import FailoverGroupListResult
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.failover_groups_list_by_server(resource_group_name, server_name, subscription_id, api_version)
        print("The response of FailoverGroupsApi->failover_groups_list_by_server:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_list_by_server: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**FailoverGroupListResult**](FailoverGroupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the failover groups. |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **failover_groups_update**
> FailoverGroup failover_groups_update(resource_group_name, server_name, failover_group_name, subscription_id, api_version, parameters)



Updates a failover group.

### Example


```python
import openapi_client
from openapi_client.models.failover_group import FailoverGroup
from openapi_client.models.failover_group_update import FailoverGroupUpdate
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
    api_instance = openapi_client.FailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    server_name = 'server_name_example' # str | The name of the server containing the failover group.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.FailoverGroupUpdate() # FailoverGroupUpdate | The failover group parameters.

    try:
        api_response = api_instance.failover_groups_update(resource_group_name, server_name, failover_group_name, subscription_id, api_version, parameters)
        print("The response of FailoverGroupsApi->failover_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FailoverGroupsApi->failover_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **server_name** | **str**| The name of the server containing the failover group. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**FailoverGroupUpdate**](FailoverGroupUpdate.md)| The failover group parameters. | 

### Return type

[**FailoverGroup**](FailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the failover group. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabases - The provided databases in the request are not valid database resource IDs.   * 400 FailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update failover group request body is empty or invalid.   * 400 FailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 FailoverGroupCreateOrUpdateRequestInvalidDatabaseServer - One or more of the provided databases do not exist on the primary server of the failover group. Please make sure that all the databases exist on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner server is supported.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalid - The create or update failover group request body is empty or invalid.   * 400 FailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 FailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 FailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 FailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 FailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of failover group.   * 400 FailoverGroupPartnerServerFromDifferentSubscription - Primary server and the partner servers of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 400 InvalidFailoverGroupRegion - Servers specified in a Failover Group need to reside in different regions to provide isolation.   * 400 ServerNotFound - The requested server was not found.   * 400 FailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 FailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a Failover Group.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 DatabaseInFailoverGroupNotPrimary - GeoDR link for the database already exists, but its role is not &#39;Primary&#39; or it is not continuous copy link.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 InvalidSku - The user specified an invalid sku.   * 400 TokenTooLong - The provided token is too long.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 PartnerServerNotCompatible - The user is attempting to copy a database from a SAWA V1 server to a Sterling server or vice versa.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 ResourcePoolNotFound - Specified elastic pool does not exist in the specified logical server.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 GeoReplicaLimitReached - The per-replica replication limit was reached.   * 400 FailoverGroupCreateOrUpdatePartiallySucceeded - Some databases could not be added or removed.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 409 FailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 FailoverGroupBusy - Failover Group is busy with another operation.   * 409 DatabaseBelongsToOtherFailoverGroup - Database belongs to other Failover Group and cannot be consider a part of this one.   * 409 DatabaseBeingAddedToFailoverGroup - The database is currently being added to Failover Group, customer needs to wait for this operation to finish to issue remove.   * 409 DatabaseBeingRemovedFromFailoverGroup - The database is currently being removed from failover group, customer needs to wait for this operation to finish to issue add.   * 409 FailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Failover Group name was supplied.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 FailoverGroupUnableToPerformGroupOperationOnDatabases - The list of databases to add/remove to/from Failover Group contains errors that are preventing operation to complete.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingServerOperation - An operation is currently in progress for the server.   * 429 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

