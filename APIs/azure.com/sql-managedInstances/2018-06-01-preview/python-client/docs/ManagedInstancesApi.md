# openapi_client.ManagedInstancesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**managed_instances_create_or_update**](ManagedInstancesApi.md#managed_instances_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName} | 
[**managed_instances_delete**](ManagedInstancesApi.md#managed_instances_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName} | 
[**managed_instances_get**](ManagedInstancesApi.md#managed_instances_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName} | 
[**managed_instances_list**](ManagedInstancesApi.md#managed_instances_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Sql/managedInstances | 
[**managed_instances_list_by_instance_pool**](ManagedInstancesApi.md#managed_instances_list_by_instance_pool) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/instancePools/{instancePoolName}/managedInstances | 
[**managed_instances_list_by_resource_group**](ManagedInstancesApi.md#managed_instances_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances | 
[**managed_instances_update**](ManagedInstancesApi.md#managed_instances_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName} | 


# **managed_instances_create_or_update**
> ManagedInstance managed_instances_create_or_update(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)



Creates or updates a managed instance.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance import ManagedInstance
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedInstance() # ManagedInstance | The requested managed instance resource state.

    try:
        api_response = api_instance.managed_instances_create_or_update(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)
        print("The response of ManagedInstancesApi->managed_instances_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedInstance**](ManagedInstance.md)| The requested managed instance resource state. | 

### Return type

[**ManagedInstance**](ManagedInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the managed instance. |  -  |
**201** | Successfully created the managed instance. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 HkCannotSwitchToInactive - The database cannot proceed with pricing-tier update as it has memory-optimized objects. Please drop such objects and try again.   * 400 ManagedInstanceInvalidStorageSizeLessThenCurrentSizeUsed - Invalid storage size: Storage size limit ({0} GB) is less that current storage used ({1} GB). Please specify higher storage size limit.   * 400 InstanceTimezoneUpdateNotSupported - Instance timezone update not supported.   * 400 CreateManagedInstanceWithNonDefaultTimezoneNotSupported - Create Managed Instance with non-default timezone not supported.   * 400 ManagedInstanceIpAddressRangeLimit - Cannot create a Managed Instance as there are not enough available ip addresses in the selected subnet   * 400 VnetDelegationNotAllowed - User tried to inject Managed Server to subnet which is delegated.   * 400 SubnetHasResourcesOfDifferentType - User tried to create MI in subnet that has resources of different type.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InstancePoolNotEnoughCapacity - An instance pool does not have enough vCore capacity   * 400 ServerNotFound - The requested server was not found.   * 400 TokenTooLong - The provided token is too long.   * 400 ManagedInstanceSloUpdateFailed - SLO &#39;{0}&#39; operation cannot succeed as the memory usage of &#39;{1}&#39; exceeds the quota.   * 400 ManagedInstanceLocalStorageUpdateSloDisabled - Update SLO for managed instances with local storage is not supported yet.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 PasswordTooShort - The provided password is too short   * 400 PasswordTooLong - The provided password is too long.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 GatewayInvalidEdition - &#39;{0}&#39; is not a valid database edition in this version of SQL Server.   * 400 InvalidSubnetResourceId - The provided subnet resource ID for the managed instance create or update is invalid.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidLocation - An invalid location was specified.   * 400 VnetInWrongRegion - Virtual network is in wrong region.   * 400 InvalidServerName - Invalid server name specified.   * 400 VnetAddressRangeError - Virtual network address range is invalid.   * 400 VnetConfigIsNotAllowed - Virtual network configuration is not allowed.   * 400 InvalidCollation - Invalid collation.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 ManagedInstanceClassicVnetNotSupported - Managed Instance cannot be joined to a classic virtual network.   * 400 AlterDbDeactivatedNotSupported - Database Operation failed for Server &#39;{0}&#39;, Database &#39;{1}&#39; due to unexpected delay. Please try again.   * 400 RegionDoesNotAllowProvisioning - The selected location is not accepting new Windows Azure SQL Database servers. This may change at a later time.   * 400 VnetConfigHasNsg - User tried to inject Managed Server subnet with Network Security Groups.   * 400 VnetConfigHasNoUdr - User tried to inject Managed Server subnet without default User Defined Route Table.   * 400 VnetConfigHasInvalidUdr - User tried to inject Managed Server subnet with invalid User Defined Route Table.   * 400 VnetConfigHasInvalidDns - User tried to inject Managed Server subnet with invalid custom DNS.   * 400 VnetConfigHasServiceEndpoints - User tried to inject Managed Server subnet with service endpoints.   * 400 VnetSubnetIsInUse - User tried to inject Managed Server subnet that is not empty.   * 400 VnetSubnetIsLocked - User tried to inject Managed Server subnet that is in locked scope.   * 400 VnetSubnetIsGateway - User tried to inject Managed Server subnet that is Gateway subnet.   * 400 VnetSubnetIsUnknown - User tried to inject Managed Server subnet that does not exist.   * 400 VnetSubnetConflictWithIntendedPolicy - User tried to inject Managed Server subnet that has a conflict with IntendedPolicy.   * 400 NameAlreadyExists - The provided name already exists.   * 400 ManagedInstanceInvalidEditionForSku - The specified edition {0} is not consistent with the specified SKU {1}.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ManagedInstanceInvalidLicenseType - The specified license type {0} is not valid.   * 400 ManagedInstanceUpdateSloInProgress - \&quot;The operation could not be completed because a service tier change is in progress for managed instance &#39;{0}.&#39; Please wait for the operation in progress to complete and try again.\&quot;   * 400 VnetResourceNotFound - Resource not found: &#39;{0}&#39;.   * 400 InvalidTimezone - Invalid timezone.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 InstanceCollationUpdateNotSupported - User cannot change instance collation on Managed Instance.   * 400 CreateManagedInstanceWithNonDefaultCollationNotSupported - User can create a Managed Instance only with collation &#39;SQL_Latin1_General_CP1_CI_AS&#39;.   * 400 ManagedInstanceOperationInProgress - The operation could not be completed because {0} operation is in progress. Please wait for the operation in progress to complete and try again.   * 400 ManagedInstanceExceedMaxAzureStorage - The operation could not be completed because total allocated storage size for General Purpose instance would exceed {0}. Please reduce the number of database files and retry operation.   * 400 ManagedInstanceHasGeoReplica - The operation could not be completed because instance has configured geo replicated secondary instance.   * 400 InvalidManagedServerDnsZonePartner - Invalid DNS zone partner resource id specified in properties.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 ResourceNotFound - The requested resource was not found.   * 405 InvalidVcoreValue - vCore value {0} is not valid. Please specify a valid vCore value.   * 405 InvalidHardwareGenerationValue - HardwareGeneration {0} is not valid. Please specify a valid HardwareGeneration value.   * 405 InvalidStorageSizeValue - \&quot;Invalid storage size: {0} GB. Storage size must be specified between {1} and {2} gigabytes, in increments of {3} GB.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ServerAlreadyExists - Duplicate server name.   * 409 ServerOverridePreconditionFailed - Failed to apply server override on category &#39;{0}&#39;, because physical db or instance &#39;{1}&#39; in server &#39;{2}&#39; is currently not in &#39;Ready&#39; or &#39;Deactivated&#39; state.   * 409 ServerDisabled - Server is disabled.   * 409 ManagedInstanceIsBusy - The server &#39;{0}&#39; is currently busy.  Please wait a few minutes before trying again.   * 409 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 409 ConflictingManagedInstanceOperation - An operation is currently in progress for the managed instance.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 GatewayInternalServerError - The server encountered an unexpected exception.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_delete**
> managed_instances_delete(resource_group_name, managed_instance_name, subscription_id, api_version)



Deletes a managed instance.

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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_instance.managed_instances_delete(resource_group_name, managed_instance_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
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
**200** | Successfully deleted the managed instance. |  -  |
**202** | Accepted |  -  |
**204** | The specified managed instance does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingManagedInstanceOperation - An operation is currently in progress for the managed instance.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_get**
> ManagedInstance managed_instances_get(resource_group_name, managed_instance_name, subscription_id, api_version)



Gets a managed instance.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance import ManagedInstance
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instances_get(resource_group_name, managed_instance_name, subscription_id, api_version)
        print("The response of ManagedInstancesApi->managed_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstance**](ManagedInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the specified managed instance. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingManagedInstanceOperation - An operation is currently in progress for the managed instance.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_list**
> ManagedInstanceListResult managed_instances_list(subscription_id, api_version)



Gets a list of all managed instances in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_list_result import ManagedInstanceListResult
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instances_list(subscription_id, api_version)
        print("The response of ManagedInstancesApi->managed_instances_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceListResult**](ManagedInstanceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of managed instances. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_list_by_instance_pool**
> ManagedInstanceListResult managed_instances_list_by_instance_pool(resource_group_name, instance_pool_name, subscription_id, api_version)



Gets a list of all managed instances in an instance pool.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_list_result import ManagedInstanceListResult
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    instance_pool_name = 'instance_pool_name_example' # str | The instance pool name.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instances_list_by_instance_pool(resource_group_name, instance_pool_name, subscription_id, api_version)
        print("The response of ManagedInstancesApi->managed_instances_list_by_instance_pool:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_list_by_instance_pool: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **instance_pool_name** | **str**| The instance pool name. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceListResult**](ManagedInstanceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of managed instances. |  -  |
**0** | *** Error Responses: ***   * 404 InstancePoolNotFound - An instance pool cannot be found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_list_by_resource_group**
> ManagedInstanceListResult managed_instances_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets a list of managed instances in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance_list_result import ManagedInstanceListResult
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.

    try:
        api_response = api_instance.managed_instances_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of ManagedInstancesApi->managed_instances_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 

### Return type

[**ManagedInstanceListResult**](ManagedInstanceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of managed instances. |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 ManagementServiceFeatureDisabled - User attempted to use a feature which is disabled.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 ResourceNotFound - The requested resource was not found.   * 409 ConflictingManagedInstanceOperation - An operation is currently in progress for the managed instance.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **managed_instances_update**
> ManagedInstance managed_instances_update(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)



Updates a managed instance.

### Example


```python
import openapi_client
from openapi_client.models.managed_instance import ManagedInstance
from openapi_client.models.managed_instance_update import ManagedInstanceUpdate
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
    api_instance = openapi_client.ManagedInstancesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    managed_instance_name = 'managed_instance_name_example' # str | The name of the managed instance.
    subscription_id = 'subscription_id_example' # str | The subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | The API version to use for the request.
    parameters = openapi_client.ManagedInstanceUpdate() # ManagedInstanceUpdate | The requested managed instance resource state.

    try:
        api_response = api_instance.managed_instances_update(resource_group_name, managed_instance_name, subscription_id, api_version, parameters)
        print("The response of ManagedInstancesApi->managed_instances_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ManagedInstancesApi->managed_instances_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **managed_instance_name** | **str**| The name of the managed instance. | 
 **subscription_id** | **str**| The subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| The API version to use for the request. | 
 **parameters** | [**ManagedInstanceUpdate**](ManagedInstanceUpdate.md)| The requested managed instance resource state. | 

### Return type

[**ManagedInstance**](ManagedInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the managed instance. |  -  |
**202** | Accepted |  -  |
**0** | *** Error Responses: ***   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 HkCannotSwitchToInactive - The database cannot proceed with pricing-tier update as it has memory-optimized objects. Please drop such objects and try again.   * 400 ManagedInstanceInvalidStorageSizeLessThenCurrentSizeUsed - Invalid storage size: Storage size limit ({0} GB) is less that current storage used ({1} GB). Please specify higher storage size limit.   * 400 InstanceTimezoneUpdateNotSupported - Instance timezone update not supported.   * 400 CreateManagedInstanceWithNonDefaultTimezoneNotSupported - Create Managed Instance with non-default timezone not supported.   * 400 ManagedInstanceIpAddressRangeLimit - Cannot create a Managed Instance as there are not enough available ip addresses in the selected subnet   * 400 VnetDelegationNotAllowed - User tried to inject Managed Server to subnet which is delegated.   * 400 SubnetHasResourcesOfDifferentType - User tried to create MI in subnet that has resources of different type.   * 400 InvalidUsername - Supplied user name contains invalid characters.   * 400 InvalidParameterValue - An invalid value was given to a parameter.   * 400 InstancePoolNotEnoughCapacity - An instance pool does not have enough vCore capacity   * 400 ServerNotFound - The requested server was not found.   * 400 TokenTooLong - The provided token is too long.   * 400 ManagedInstanceSloUpdateFailed - SLO &#39;{0}&#39; operation cannot succeed as the memory usage of &#39;{1}&#39; exceeds the quota.   * 400 ManagedInstanceLocalStorageUpdateSloDisabled - Update SLO for managed instances with local storage is not supported yet.   * 400 InvalidLoginName - The provided login name is invalid.   * 400 RegionDoesNotSupportVersion - A user attempted to create a server of a specified version in a location where that server version isn&#39;t supported.   * 400 PasswordTooShort - The provided password is too short   * 400 PasswordTooLong - The provided password is too long.   * 400 PasswordNotComplex - The provided password is not complex enough.   * 400 GatewayInvalidEdition - &#39;{0}&#39; is not a valid database edition in this version of SQL Server.   * 400 InvalidSubnetResourceId - The provided subnet resource ID for the managed instance create or update is invalid.   * 400 SubscriptionNotFound - The requested subscription was not found.   * 400 InvalidLocation - An invalid location was specified.   * 400 VnetInWrongRegion - Virtual network is in wrong region.   * 400 InvalidServerName - Invalid server name specified.   * 400 VnetAddressRangeError - Virtual network address range is invalid.   * 400 VnetConfigIsNotAllowed - Virtual network configuration is not allowed.   * 400 InvalidCollation - Invalid collation.   * 400 InvalidIdentifier - The identifier contains NULL or an invalid unicode character.   * 400 ManagedInstanceClassicVnetNotSupported - Managed Instance cannot be joined to a classic virtual network.   * 400 AlterDbDeactivatedNotSupported - Database Operation failed for Server &#39;{0}&#39;, Database &#39;{1}&#39; due to unexpected delay. Please try again.   * 400 RegionDoesNotAllowProvisioning - The selected location is not accepting new Windows Azure SQL Database servers. This may change at a later time.   * 400 VnetConfigHasNsg - User tried to inject Managed Server subnet with Network Security Groups.   * 400 VnetConfigHasNoUdr - User tried to inject Managed Server subnet without default User Defined Route Table.   * 400 VnetConfigHasInvalidUdr - User tried to inject Managed Server subnet with invalid User Defined Route Table.   * 400 VnetConfigHasInvalidDns - User tried to inject Managed Server subnet with invalid custom DNS.   * 400 VnetConfigHasServiceEndpoints - User tried to inject Managed Server subnet with service endpoints.   * 400 VnetSubnetIsInUse - User tried to inject Managed Server subnet that is not empty.   * 400 VnetSubnetIsLocked - User tried to inject Managed Server subnet that is in locked scope.   * 400 VnetSubnetIsGateway - User tried to inject Managed Server subnet that is Gateway subnet.   * 400 VnetSubnetIsUnknown - User tried to inject Managed Server subnet that does not exist.   * 400 VnetSubnetConflictWithIntendedPolicy - User tried to inject Managed Server subnet that has a conflict with IntendedPolicy.   * 400 NameAlreadyExists - The provided name already exists.   * 400 ManagedInstanceInvalidEditionForSku - The specified edition {0} is not consistent with the specified SKU {1}.   * 400 ProvisioningDisabled - Displays error message from resources operation authorizer as is, without changes   * 400 ManagedInstanceInvalidLicenseType - The specified license type {0} is not valid.   * 400 ManagedInstanceUpdateSloInProgress - \&quot;The operation could not be completed because a service tier change is in progress for managed instance &#39;{0}.&#39; Please wait for the operation in progress to complete and try again.\&quot;   * 400 VnetResourceNotFound - Resource not found: &#39;{0}&#39;.   * 400 InvalidTimezone - Invalid timezone.   * 400 UnableToResolveRemoteServer - The remote partner server name could not be resolved due to an invalid server name or DNS connectivity issues.   * 400 InstanceCollationUpdateNotSupported - User cannot change instance collation on Managed Instance.   * 400 CreateManagedInstanceWithNonDefaultCollationNotSupported - User can create a Managed Instance only with collation &#39;SQL_Latin1_General_CP1_CI_AS&#39;.   * 400 ManagedInstanceOperationInProgress - The operation could not be completed because {0} operation is in progress. Please wait for the operation in progress to complete and try again.   * 400 ManagedInstanceExceedMaxAzureStorage - The operation could not be completed because total allocated storage size for General Purpose instance would exceed {0}. Please reduce the number of database files and retry operation.   * 400 ManagedInstanceHasGeoReplica - The operation could not be completed because instance has configured geo replicated secondary instance.   * 400 MismatchingResourceGroupNameWithUrl - The provided resource group name did not match the name in the Url.   * 400 MismatchingSubscriptionWithUrl - The provided subscription did not match the subscription in the Url.   * 404 ServerNotInSubscription - Specified server does not exist on the specified subscription.   * 404 ManagedInstanceNotInSubscriptionResourceGroup - Specified managed instance does not exist in the specified resource group and subscription.   * 404 OperationIdNotFound - The operation with Id does not exist.   * 404 ResourceDoesNotExist - Resource with the name &#39;{0}&#39; does not exist. To continue, specify a valid resource name.   * 404 ResourceNotFound - The requested resource was not found.   * 405 InvalidVcoreValue - vCore value {0} is not valid. Please specify a valid vCore value.   * 405 InvalidHardwareGenerationValue - HardwareGeneration {0} is not valid. Please specify a valid HardwareGeneration value.   * 405 InvalidStorageSizeValue - \&quot;Invalid storage size: {0} GB. Storage size must be specified between {1} and {2} gigabytes, in increments of {3} GB.   * 409 OperationCancelled - The operation has been cancelled by user.   * 409 OperationInterrupted - The operation on the resource could not be completed because it was interrupted by another operation on the same resource.   * 409 ConflictingServerOperation - An operation is currently in progress for the server.   * 409 SubscriptionDisabled - Subscription is disabled.   * 409 ServerAlreadyExists - Duplicate server name.   * 409 ServerOverridePreconditionFailed - Failed to apply server override on category &#39;{0}&#39;, because physical db or instance &#39;{1}&#39; in server &#39;{2}&#39; is currently not in &#39;Ready&#39; or &#39;Deactivated&#39; state.   * 409 ServerDisabled - Server is disabled.   * 409 ManagedInstanceIsBusy - The server &#39;{0}&#39; is currently busy.  Please wait a few minutes before trying again.   * 409 ServerQuotaExceeded - Server cannot be added to a subscription because it will exceed quota.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 429 ConflictingSubscriptionOperation - An operation is currently in progress for the subscription.   * 429 SubscriptionTooManyCreateUpdateRequests - Requests beyond max requests that can be processed by available resources.   * 429 SubscriptionTooManyRequests - Requests beyond max requests that can be processed by available resources.   * 500 OperationTimedOut - The operation timed out and automatically rolled back. Please retry the operation.   * 500 GatewayInternalServerError - The server encountered an unexpected exception.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 503 TooManyRequests - Requests beyond max requests that can be processed by available resources.   * 504 RequestTimeout - Service request exceeded the allowed timeout.   * 504 RequestTimeout - Service request exceeded the allowed timeout. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

