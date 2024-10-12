# openapi_client.SqlServersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sql_servers_create_or_update**](SqlServersApi.md#sql_servers_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName} | 
[**sql_servers_delete**](SqlServersApi.md#sql_servers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName} | 
[**sql_servers_get**](SqlServersApi.md#sql_servers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers/{sqlServerName} | 
[**sql_servers_list_by_resource_group**](SqlServersApi.md#sql_servers_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzureData/sqlServerRegistrations/{sqlServerRegistrationName}/sqlServers | 


# **sql_servers_create_or_update**
> SqlServer sql_servers_create_or_update(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version, parameters)



Creates or updates a SQL Server.

### Example


```python
import openapi_client
from openapi_client.models.sql_server import SqlServer
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
    api_instance = openapi_client.SqlServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    sql_server_name = 'sql_server_name_example' # str | Name of the SQL Server.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlServer() # SqlServer | The SQL Server to be created or updated.

    try:
        api_response = api_instance.sql_servers_create_or_update(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version, parameters)
        print("The response of SqlServersApi->sql_servers_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServersApi->sql_servers_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **sql_server_name** | **str**| Name of the SQL Server. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlServer**](SqlServer.md)| The SQL Server to be created or updated. | 

### Return type

[**SqlServer**](SqlServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL Server. |  -  |
**201** | Successfully created the SQL Server. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidVmResourceIdChange - Server resource id property cannot be updated.   * 400 TinaAlreadyIncludedInGroup - SQL Server cannot be moved from one group to another in same operation.   * 400 TinaCannotRemoveFromGroup - SQL Server cannot be removed from group.   * 400 VmLocationMismatch - VM location does not match that of SQL Server.   * 400 SqlSkuMismatchWithGroup - SQL sku set on the SQL Server registration does not match that of the SQL Server.   * 400 VmInsufficientPermission - Insufficient permission to Vm.   * 400 SingleNicOnVmAllowed - Only Single NIC Servers are allowed.   * 400 InvalidTinaGroupResourceIdParameterValue - SQL Server registration resource id is not in correct format.   * 400 MismatchVmGroupSubscription - Subscription id for SQL Server and SQL Server registration are different.   * 400 IncompleteDomainCredentialsProperty - Incomplete input provided for domain credentials property.   * 400 BYOLChangeToPAYGNotSupported - The conversion from AHUB to PAYG is not supported for BYOL images   * 400 InvalidVmResourceIdParameterValue - Provided Server resource id is not valid.   * 400 MismatchInTinaAndVmResourceIdSubscription - Mismatch in subscription id for SQL Server and Server resource id property.   * 400 MismatchTinaAndVmName - SQL Server name is not same as the Server name provided on ServerResourceId property.   * 400 MismatchTinaAndVmRgName - SQL Server resource group name is not same as the Server resource group name provided on ServerResourceId property.   * 400 NotSupportedTinaOSVersion - Server OS type is not Windows. Only Windows OS versions are supported   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 SqlExtNotInstalled - Sql Iaas Extension is not installed on Server.   * 400 PAYGNotSupportedForNonGalleryVM - License type PAYG is invalid for this Server as this was not created from Azure marketplace image.   * 400 SqlVersionMismatchWithGroup - SQL version mismatch with SQL Server registration.   * 400 VmOSVersionMismatchWithGroup - OS version mismatch with group.   * 400 AutoBackupEncryptionPasswordNotSpecified - Password not provided when enabling encryption as auto backup setting.   * 400 BackupScheduleTypeNotSet - Backup schedule type needs to be set.   * 400 BackupStorageCredentialsNotSpecified - Backup storage credentials are not specified.   * 400 KeyVaultCredentialsNotSpecified - Key vault credentials not specified.   * 400 SqlCredentialsNotSpecified - SQL Server credentials are not specified.   * 400 IncompleteAutoPatchingSettings - Incomplete auto patching settings specified.   * 400 IncompleteAutoBackupSettings - Incomplete auto backup settings specified.   * 400 IncompleteSqlStorageSettings - Incomplete SQL storage settings specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotHaveTINAGroupInResourceGroup - Subscription does not have SQL Server registration in resource group.   * 404 SubscriptionDoesNotHaveTINAInResourceGroup - Subscription does not have SQL Server Instance in resource group.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_servers_delete**
> sql_servers_delete(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version)



Deletes a SQL Server.

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
    api_instance = openapi_client.SqlServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    sql_server_name = 'sql_server_name_example' # str | Name of the SQL Server.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_instance.sql_servers_delete(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SqlServersApi->sql_servers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **sql_server_name** | **str**| Name of the SQL Server. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

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
**200** | Successfully deleted the SQL Server. |  -  |
**204** | The specified SQL Server does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidVmResourceIdChange - Server resource id property cannot be updated.   * 400 TinaAlreadyIncludedInGroup - SQL Server cannot be moved from one group to another in same operation.   * 400 TinaCannotRemoveFromGroup - SQL Server cannot be removed from group.   * 400 VmLocationMismatch - VM location does not match that of SQL Server.   * 400 SqlSkuMismatchWithGroup - SQL sku set on the SQL Server registration does not match that of the SQL Server.   * 400 VmInsufficientPermission - Insufficient permission to Vm.   * 400 SingleNicOnVmAllowed - Only Single NIC Servers are allowed.   * 400 InvalidTinaGroupResourceIdParameterValue - SQL Server registration resource id is not in correct format.   * 400 MismatchVmGroupSubscription - Subscription id for SQL Server and SQL Server registration are different.   * 400 IncompleteDomainCredentialsProperty - Incomplete input provided for domain credentials property.   * 400 BYOLChangeToPAYGNotSupported - The conversion from AHUB to PAYG is not supported for BYOL images   * 400 InvalidVmResourceIdParameterValue - Provided Server resource id is not valid.   * 400 MismatchInTinaAndVmResourceIdSubscription - Mismatch in subscription id for SQL Server and Server resource id property.   * 400 MismatchTinaAndVmName - SQL Server name is not same as the Server name provided on ServerResourceId property.   * 400 MismatchTinaAndVmRgName - SQL Server resource group name is not same as the Server resource group name provided on ServerResourceId property.   * 400 NotSupportedTinaOSVersion - Server OS type is not Windows. Only Windows OS versions are supported   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 SqlExtNotInstalled - Sql Iaas Extension is not installed on Server.   * 400 PAYGNotSupportedForNonGalleryVM - License type PAYG is invalid for this Server as this was not created from Azure marketplace image.   * 400 SqlVersionMismatchWithGroup - SQL version mismatch with SQL Server registration.   * 400 VmOSVersionMismatchWithGroup - OS version mismatch with group.   * 400 AutoBackupEncryptionPasswordNotSpecified - Password not provided when enabling encryption as auto backup setting.   * 400 BackupScheduleTypeNotSet - Backup schedule type needs to be set.   * 400 BackupStorageCredentialsNotSpecified - Backup storage credentials are not specified.   * 400 KeyVaultCredentialsNotSpecified - Key vault credentials not specified.   * 400 SqlCredentialsNotSpecified - SQL Server credentials are not specified.   * 400 IncompleteAutoPatchingSettings - Incomplete auto patching settings specified.   * 400 IncompleteAutoBackupSettings - Incomplete auto backup settings specified.   * 400 IncompleteSqlStorageSettings - Incomplete SQL storage settings specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotHaveTINAGroupInResourceGroup - Subscription does not have SQL Server registration in resource group.   * 404 SubscriptionDoesNotHaveTINAInResourceGroup - Subscription does not have SQL Server Instance in resource group.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_servers_get**
> SqlServer sql_servers_get(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version, expand=expand)



Gets a SQL Server.

### Example


```python
import openapi_client
from openapi_client.models.sql_server import SqlServer
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
    api_instance = openapi_client.SqlServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    sql_server_name = 'sql_server_name_example' # str | Name of the SQL Server.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    expand = 'expand_example' # str | The child resources to include in the response. (optional)

    try:
        api_response = api_instance.sql_servers_get(resource_group_name, sql_server_registration_name, sql_server_name, subscription_id, api_version, expand=expand)
        print("The response of SqlServersApi->sql_servers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServersApi->sql_servers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **sql_server_name** | **str**| Name of the SQL Server. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **expand** | **str**| The child resources to include in the response. | [optional] 

### Return type

[**SqlServer**](SqlServer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the SQL Server. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 InvalidCrossSubscriptionVmMove - Invalid cross subscription move of resource.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_servers_list_by_resource_group**
> SqlServerListResult sql_servers_list_by_resource_group(resource_group_name, sql_server_registration_name, subscription_id, api_version, expand=expand)



Gets all SQL Servers in a SQL Server Registration.

### Example


```python
import openapi_client
from openapi_client.models.sql_server_list_result import SqlServerListResult
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
    api_instance = openapi_client.SqlServersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_server_registration_name = 'sql_server_registration_name_example' # str | Name of the SQL Server registration.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    expand = 'expand_example' # str | The child resources to include in the response. (optional)

    try:
        api_response = api_instance.sql_servers_list_by_resource_group(resource_group_name, sql_server_registration_name, subscription_id, api_version, expand=expand)
        print("The response of SqlServersApi->sql_servers_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlServersApi->sql_servers_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_server_registration_name** | **str**| Name of the SQL Server registration. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **expand** | **str**| The child resources to include in the response. | [optional] 

### Return type

[**SqlServerListResult**](SqlServerListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL Servers in the SQL Server Registration. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

