# openapi_client.InstanceFailoverGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**instance_failover_groups_create_or_update**](InstanceFailoverGroupsApi.md#instance_failover_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName} | 
[**instance_failover_groups_delete**](InstanceFailoverGroupsApi.md#instance_failover_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName} | 
[**instance_failover_groups_failover**](InstanceFailoverGroupsApi.md#instance_failover_groups_failover) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/failover | 
[**instance_failover_groups_force_failover_allow_data_loss**](InstanceFailoverGroupsApi.md#instance_failover_groups_force_failover_allow_data_loss) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName}/forceFailoverAllowDataLoss | 
[**instance_failover_groups_get**](InstanceFailoverGroupsApi.md#instance_failover_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups/{failoverGroupName} | 
[**instance_failover_groups_list_by_location**](InstanceFailoverGroupsApi.md#instance_failover_groups_list_by_location) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/locations/{locationName}/instanceFailoverGroups | 


# **instance_failover_groups_create_or_update**
> InstanceFailoverGroup instance_failover_groups_create_or_update(resource_group_name, location_name, failover_group_name, subscription_id, api_version, parameters)



Creates or updates a failover group.

### Example


```python
import openapi_client
from openapi_client.models.instance_failover_group import InstanceFailoverGroup
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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.InstanceFailoverGroup() # InstanceFailoverGroup | The failover group parameters.

    try:
        api_response = api_instance.instance_failover_groups_create_or_update(resource_group_name, location_name, failover_group_name, subscription_id, api_version, parameters)
        print("The response of InstanceFailoverGroupsApi->instance_failover_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**InstanceFailoverGroup**](InstanceFailoverGroup.md)| The failover group parameters. | 

### Return type

[**InstanceFailoverGroup**](InstanceFailoverGroup.md)

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
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_failover_groups_delete**
> instance_failover_groups_delete(resource_group_name, location_name, failover_group_name, subscription_id, api_version)



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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.instance_failover_groups_delete(resource_group_name, location_name, failover_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
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
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_failover_groups_failover**
> InstanceFailoverGroup instance_failover_groups_failover(resource_group_name, location_name, failover_group_name, subscription_id, api_version)



Fails over from the current primary managed instance to this managed instance.

### Example


```python
import openapi_client
from openapi_client.models.instance_failover_group import InstanceFailoverGroup
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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_failover_groups_failover(resource_group_name, location_name, failover_group_name, subscription_id, api_version)
        print("The response of InstanceFailoverGroupsApi->instance_failover_groups_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstanceFailoverGroup**](InstanceFailoverGroup.md)

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
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_failover_groups_force_failover_allow_data_loss**
> InstanceFailoverGroup instance_failover_groups_force_failover_allow_data_loss(resource_group_name, location_name, failover_group_name, subscription_id, api_version)



Fails over from the current primary managed instance to this managed instance. This operation might result in data loss.

### Example


```python
import openapi_client
from openapi_client.models.instance_failover_group import InstanceFailoverGroup
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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_failover_groups_force_failover_allow_data_loss(resource_group_name, location_name, failover_group_name, subscription_id, api_version)
        print("The response of InstanceFailoverGroupsApi->instance_failover_groups_force_failover_allow_data_loss:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_force_failover_allow_data_loss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstanceFailoverGroup**](InstanceFailoverGroup.md)

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
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_failover_groups_get**
> InstanceFailoverGroup instance_failover_groups_get(resource_group_name, location_name, failover_group_name, subscription_id, api_version)



Gets a failover group.

### Example


```python
import openapi_client
from openapi_client.models.instance_failover_group import InstanceFailoverGroup
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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    failover_group_name = 'failover_group_name_example' # str | The name of the failover group.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_failover_groups_get(resource_group_name, location_name, failover_group_name, subscription_id, api_version)
        print("The response of InstanceFailoverGroupsApi->instance_failover_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
 **failover_group_name** | **str**| The name of the failover group. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstanceFailoverGroup**](InstanceFailoverGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified failover group. |  -  |
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **instance_failover_groups_list_by_location**
> InstanceFailoverGroupListResult instance_failover_groups_list_by_location(resource_group_name, location_name, subscription_id, api_version)



Lists the failover groups in a location.

### Example


```python
import openapi_client
from openapi_client.models.instance_failover_group_list_result import InstanceFailoverGroupListResult
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
    api_instance = openapi_client.InstanceFailoverGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    location_name = 'location_name_example' # str | The name of the region where the resource is located.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.instance_failover_groups_list_by_location(resource_group_name, location_name, subscription_id, api_version)
        print("The response of InstanceFailoverGroupsApi->instance_failover_groups_list_by_location:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InstanceFailoverGroupsApi->instance_failover_groups_list_by_location: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **location_name** | **str**| The name of the region where the resource is located. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**InstanceFailoverGroupListResult**](InstanceFailoverGroupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the failover groups. |  -  |
**0** | *** Error Responses: ***   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidPartner - The given partners field in create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestDuplicatePartner - One or more of the provided partner servers are already part of the instance failover group. Please make sure the primary server and all of the given partner servers are unique.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidManagedInstanceRegion - The provided partner managed instance region in the instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPartnerCount - Only one partner region is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestUnsupportedPairCount - Only one managed instance pair is supported.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpoint - The readWriteEndpoint field is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalid - The create or update instance failover group request body is empty or invalid.   * 400 InstanceFailoverGroupUpdateOrDeleteRequestOnSecondary - Modifications to the instance failover group are not allowed on a secondary server. Execute the request on the primary server.   * 400 InstanceFailoverGroupCreateOrUpdateRequestNegativeGracePeriodValues - Grace period value for the read-write endpoint must be non-negative.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFields - The property failoverWithDataLossGracePeriodMinutes must be provided when failover policy Automatic is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteFailoverPolicy - The failoverPolicy field for the read-write endpoint is required for create or update requests.   * 400 InstanceFailoverGroupCreateOrUpdateRequestInvalidReadWriteEndpointFieldsForManualPolicy - Grace period value should not be provided when failover policy Manual is selected for the read-write endpoint.   * 400 InstanceFailoverGroupCreateOrUpdateRequestReadOnlyPropertyModified - The create or update instance failover group request body should not modify the read-only property &#39;{0}&#39;.   * 400 InstanceFailoverGroupFailoverRequestOnPrimary - The failover request should be initiated on the secondary server of instance failover group.   * 400 InstanceFailoverGroupPartnerManagedInstanceFromDifferentSubscription - Primary server and the partner server of failover group are from different subscriptions. Cross subscription for servers of failover group is not allowed.   * 400 InvalidAddSecondaryPermission - User does not have sufficient permission to add secondary on the specified server.   * 400 InvalidSku - The user specified an invalid sku.   * 400 ServerNotFound - The requested server was not found.   * 400 FeatureDisabledOnSelectedEdition - User attempted to use a feature which is disabled on current database edition.   * 400 TokenTooLong - The provided token is too long.   * 400 InvalidTargetSubregion - The target server of a non-readable secondary is not in a DR paired Azure region.   * 400 IncorrectReplicationLinkState - The operation expects the database to be in an expected state on the replication link.   * 400 PlannedFailoverTimedOutForDatabase - User invoked planned failover, it timed out, and a specific database appears to be to blame.   * 400 PlannedFailoverTimedOut - User invoked planned failover, and it timed out while trying to contact the partner management service.   * 400 CannotUseReservedDatabaseName - Cannot use reserved database name in this operation.   * 400 InvalidFailoverGroupRegion - Servers specified in an Instance Failover Group need to reside in different regions to provide isolation.   * 400 InstanceFailoverGroupDoesNotExist - Failover group does not exist on a server.   * 400 InstanceFailoverGroupNotSecondary - Failover cannot be initiated from the primary server in a instance failover group.   * 400 InvalidServerName - Invalid server name specified.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 GeoReplicationDatabaseNotSecondary - The operation expects the database to be a replication target.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 RemoteDatabaseCopyPermission - User does not have sufficient permission to create a database copy on the specified server.   * 404 ResourceNotFound - The requested resource was not found.   * 404 ServerNotInSubscriptionResourceGroup - Specified server does not exist in the specified resource group and subscription.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 SourceDatabaseNotFound - The source database does not exist.   * 405 UnsupportedReplicationOperation - An unsupported replication operation was initiated on the database.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ConflictingSystemOperationInProgress - A system maintenance operation is in progress on the database and further operations need to wait until it is completed.   * 409 GeoReplicationCannotBecomePrimaryDuringUndo - User attempted to failover or force-terminate a geo-link while the secondary is in a state where it may not be physically consistent and so cannot enter the primary role.   * 409 UpdateSloInProgress - User tried to initiate an incompatible operation while a SLO update was in progress.   * 409 InstanceFailoverGroupAlreadyExists - Failover group already exists on a given server.   * 409 InstanceFailoverGroupBusy - Instance failover group is busy with another operation.   * 409 InstanceFailoverGroupDnsRecordInUse - A duplicate DNS record exists for the requested endpoint.   * 409 InvalidFailoverGroupName - Invalid Instance Failover Group name was supplied.   * 409 InvalidOperationForDatabaseNotInReplicationRelationship - A replication seeding operation was performed on a database that is already in a replication relationship.   * 409 InvalidDatabaseStateForOperation - The operation is not allowed on the database in its current replication state.   * 409 DuplicateGeoDrRelation - The databases are already in a replication relation. This is a duplicate request.   * 409 RemoteDatabaseExists - The destination database name already exists on the destination server.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

