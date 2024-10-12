# openapi_client.SqlVirtualMachinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sql_virtual_machines_create_or_update**](SqlVirtualMachinesApi.md#sql_virtual_machines_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName} | 
[**sql_virtual_machines_delete**](SqlVirtualMachinesApi.md#sql_virtual_machines_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName} | 
[**sql_virtual_machines_get**](SqlVirtualMachinesApi.md#sql_virtual_machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName} | 
[**sql_virtual_machines_list**](SqlVirtualMachinesApi.md#sql_virtual_machines_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines | 
[**sql_virtual_machines_list_by_resource_group**](SqlVirtualMachinesApi.md#sql_virtual_machines_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines | 
[**sql_virtual_machines_list_by_sql_vm_group**](SqlVirtualMachinesApi.md#sql_virtual_machines_list_by_sql_vm_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/sqlVirtualMachines | 
[**sql_virtual_machines_update**](SqlVirtualMachinesApi.md#sql_virtual_machines_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/{sqlVirtualMachineName} | 


# **sql_virtual_machines_create_or_update**
> SqlVirtualMachine sql_virtual_machines_create_or_update(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, parameters)



Creates or updates a SQL virtual machine.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine import SqlVirtualMachine
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_name = 'sql_virtual_machine_name_example' # str | Name of the SQL virtual machine.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlVirtualMachine() # SqlVirtualMachine | The SQL virtual machine.

    try:
        api_response = api_instance.sql_virtual_machines_create_or_update(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, parameters)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_name** | **str**| Name of the SQL virtual machine. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlVirtualMachine**](SqlVirtualMachine.md)| The SQL virtual machine. | 

### Return type

[**SqlVirtualMachine**](SqlVirtualMachine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL virtual machine. |  -  |
**201** | Successfully created the SQL virtual machine. |  -  |
**0** | *** Error Responses: ***   * 400 SqlLicenseTypeNotSupported - SqlLicenseType NotSet incorrectly provided   * 400 UnsupportedSqlManagementMode - Cannot update the SQL management mode to {0}, only {1} mode is supported for Windows Server 2008.   * 400 SqlSkuMismatchWithGroup - SQL sku set on the SQL virtual machine group does not match that of the SQL virtual machine.   * 400 SubscriptionDoesNotExist - Subscription id does not exist.   * 400 SubscriptionNotReady - Subscription not ready   * 400 AutoBackupEncryptionPasswordNotSpecified - Password not provided when enabling encryption as auto backup setting.   * 400 BackupScheduleTypeNotSet - Backup schedule type needs to be set.   * 400 BackupStorageCredentialsNotSpecified - Backup storage credentials are not specified.   * 400 KeyVaultCredentialsNotSpecified - Key vault credentials not specified.   * 400 SqlCredentialsNotSpecified - SQL Server credentials are not specified.   * 400 IncompleteAutoPatchingSettings - Incomplete auto patching settings specified.   * 400 IncompleteAutoBackupSettings - Incomplete auto backup settings specified.   * 400 IncompleteSqlStorageSettings - Incomplete SQL storage settings specified.   * 400 InvalidVmResourceIdChange - Virtual machine resource id property cannot be updated.   * 400 SqlVmAlreadyIncludedInGroup - SQL virtual machine cannot be moved from one group to another in same operation.   * 400 SqlVmCannotRemoveFromGroup - SQL virtual machine cannot be removed from group.   * 400 VmLocationMismatch - VM location does not match that of SQL virtual machine.   * 400 VmInsufficientPermission - Insufficient permission to Vm.   * 400 SingleNicOnVmAllowed - Only Single NIC virtual machines are allowed in a SQL VM Group.   * 400 InvalidSqlVmGroupResourceIdParameterValue - SQL virtual machine group resource id is not in correct format.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 IncompleteDomainCredentialsProperty - Incomplete input provided for domain credentials property.   * 400 BYOLChangeToPAYGNotSupported - The conversion from AHUB to PAYG is not supported for BYOL images   * 400 InvalidVmResourceIdParameterValue - Provided virtual machine resource id is not valid.   * 400 MismatchInSqlVmAndVmResourceIdSubscription - Mismatch in subscription id for SQL virtual machine and virtual machine resource id property.   * 400 MismatchSqlVmAndVmName - SQL virtual machine name is not same as the virtual machine name provided on VirtualMachineResourceId property.   * 400 MismatchSqlVmAndVmRgName - SQL virtual machine resource group name is not same as the virtual machine resource group name provided on VirtualMachineResourceId property.   * 400 NotSupportedSqlVmOSVersion - Virtual machine OS type is not Windows. Only Windows OS versions are supported   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 PAYGNotSupportedForNonGalleryVM - License type PAYG is invalid for this Virtual Machine as this was not created from Azure marketplace image.   * 400 CannotDetermineSqlVersionAndEditionFromVm - Sql IaaS Extension cannot determine the SQL version and edition from the vm.   * 400 MismatchSqlVmSku - Sql virtual machine sku mismatch.   * 400 CannotConvertToFreeBenefit - Cannot convert Free SQL editions to {0}.    * 400 SqlEvaluationSkuNotSupported - SQL Evaluation version does not support licensing changes.   * 400 IncompleteStorageConfigurationSettings - Incomplete Storage Configuration Settings   * 400 InvalidDefaultFilePath - Invalid Default File Path    * 400 InvalidLUNSpecified - Invalid Logical Unit number specified, Logical Unit number should be a non-negative number.   * 400 BothStorageV1V2Specified - Invalid Request. Only one of SQL Storage Storage Setting or Storage Configuration Settings should be specified   * 400 InvalidLUNsSpecifiedForSameDrive - Invalid Logical Unit numbers specified. Logical Unit number used for the same drive need to be the same.   * 400 InvalidLUNsSpecifiedForDifferentDrives - Invalid Logical Unit numbers specified. Different drive could not reuse the same Logical Unit number.   * 400 InvalidExtendPayload - Invalid Sql Storage Settings Extend Payload. Only support extend one drive at a time.   * 400 SqlVersionMismatchWithGroup - SQL version mismatch with SQL virtual machine group.   * 400 SqlLicenseTypeMissing - Please specify license type for Sql Virtual Machine. The property is &#39;SqlServerLicenceType&#39; and allowed values are PAYG, AHUB and DR.   * 400 VmOSVersionMismatchWithGroup - OS version mismatch with group.   * 400 VmAgentIsRunningForNoAgent - Cannot create or update as NoAgent model while the Guest Agent is running.   * 400 InvalidSqlManagementMode - Cannot update the SQL management mode to {0}, the current mode is {1}.   * 400 CannotDetermineSqlEditionFromRequest - Cannot determine the SQL edition.   * 400 SqlManagementMissing - Please specify the Management Mode for Sql Virtual Machine. The property is &#39;SqlManagement&#39; and allowed values are LightWeight or Full.   * 400 SqlImageSkuMissingNoAgent - Please specify the Sql Server Edition for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageSku&#39; and allowed values are Developer, Express, Web, Standard, or Enterprise.   * 400 SqlImageOfferMissingNoAgent - Please specify the Sql Server Version and OS Version for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageOffer&#39; and allowed values are SQL2008-WS2008 and SQL2008R2-WS2008.   * 400 InvalidSqlImageOfferChange - SqlImageOffer property cannot be updated.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotHaveSqlVMInResourceGroup - Subscription does not have SQL virtual machine Instance in resource group.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_delete**
> sql_virtual_machines_delete(resource_group_name, sql_virtual_machine_name, subscription_id, api_version)



Deletes a SQL virtual machine.

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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_name = 'sql_virtual_machine_name_example' # str | Name of the SQL virtual machine.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_instance.sql_virtual_machines_delete(resource_group_name, sql_virtual_machine_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_name** | **str**| Name of the SQL virtual machine. | 
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
**200** | Successfully deleted the SQL virtual machine. |  -  |
**202** | Deleting the SQL virtual machine. |  -  |
**204** | The specified SQL virtual machine does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 SqlLicenseTypeNotSupported - SqlLicenseType NotSet incorrectly provided   * 400 UnsupportedSqlManagementMode - Cannot update the SQL management mode to {0}, only {1} mode is supported for Windows Server 2008.   * 400 SqlSkuMismatchWithGroup - SQL sku set on the SQL virtual machine group does not match that of the SQL virtual machine.   * 400 SubscriptionDoesNotExist - Subscription id does not exist.   * 400 SubscriptionNotReady - Subscription not ready   * 400 AutoBackupEncryptionPasswordNotSpecified - Password not provided when enabling encryption as auto backup setting.   * 400 BackupScheduleTypeNotSet - Backup schedule type needs to be set.   * 400 BackupStorageCredentialsNotSpecified - Backup storage credentials are not specified.   * 400 KeyVaultCredentialsNotSpecified - Key vault credentials not specified.   * 400 SqlCredentialsNotSpecified - SQL Server credentials are not specified.   * 400 IncompleteAutoPatchingSettings - Incomplete auto patching settings specified.   * 400 IncompleteAutoBackupSettings - Incomplete auto backup settings specified.   * 400 IncompleteSqlStorageSettings - Incomplete SQL storage settings specified.   * 400 InvalidVmResourceIdChange - Virtual machine resource id property cannot be updated.   * 400 SqlVmAlreadyIncludedInGroup - SQL virtual machine cannot be moved from one group to another in same operation.   * 400 SqlVmCannotRemoveFromGroup - SQL virtual machine cannot be removed from group.   * 400 VmLocationMismatch - VM location does not match that of SQL virtual machine.   * 400 VmInsufficientPermission - Insufficient permission to Vm.   * 400 SingleNicOnVmAllowed - Only Single NIC virtual machines are allowed in a SQL VM Group.   * 400 InvalidSqlVmGroupResourceIdParameterValue - SQL virtual machine group resource id is not in correct format.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 IncompleteDomainCredentialsProperty - Incomplete input provided for domain credentials property.   * 400 BYOLChangeToPAYGNotSupported - The conversion from AHUB to PAYG is not supported for BYOL images   * 400 InvalidVmResourceIdParameterValue - Provided virtual machine resource id is not valid.   * 400 MismatchInSqlVmAndVmResourceIdSubscription - Mismatch in subscription id for SQL virtual machine and virtual machine resource id property.   * 400 MismatchSqlVmAndVmName - SQL virtual machine name is not same as the virtual machine name provided on VirtualMachineResourceId property.   * 400 MismatchSqlVmAndVmRgName - SQL virtual machine resource group name is not same as the virtual machine resource group name provided on VirtualMachineResourceId property.   * 400 NotSupportedSqlVmOSVersion - Virtual machine OS type is not Windows. Only Windows OS versions are supported   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 PAYGNotSupportedForNonGalleryVM - License type PAYG is invalid for this Virtual Machine as this was not created from Azure marketplace image.   * 400 CannotDetermineSqlVersionAndEditionFromVm - Sql IaaS Extension cannot determine the SQL version and edition from the vm.   * 400 MismatchSqlVmSku - Sql virtual machine sku mismatch.   * 400 CannotConvertToFreeBenefit - Cannot convert Free SQL editions to {0}.    * 400 SqlEvaluationSkuNotSupported - SQL Evaluation version does not support licensing changes.   * 400 IncompleteStorageConfigurationSettings - Incomplete Storage Configuration Settings   * 400 InvalidDefaultFilePath - Invalid Default File Path    * 400 InvalidLUNSpecified - Invalid Logical Unit number specified, Logical Unit number should be a non-negative number.   * 400 BothStorageV1V2Specified - Invalid Request. Only one of SQL Storage Storage Setting or Storage Configuration Settings should be specified   * 400 InvalidLUNsSpecifiedForSameDrive - Invalid Logical Unit numbers specified. Logical Unit number used for the same drive need to be the same.   * 400 InvalidLUNsSpecifiedForDifferentDrives - Invalid Logical Unit numbers specified. Different drive could not reuse the same Logical Unit number.   * 400 InvalidExtendPayload - Invalid Sql Storage Settings Extend Payload. Only support extend one drive at a time.   * 400 SqlVersionMismatchWithGroup - SQL version mismatch with SQL virtual machine group.   * 400 SqlLicenseTypeMissing - Please specify license type for Sql Virtual Machine. The property is &#39;SqlServerLicenceType&#39; and allowed values are PAYG, AHUB and DR.   * 400 VmOSVersionMismatchWithGroup - OS version mismatch with group.   * 400 VmAgentIsRunningForNoAgent - Cannot create or update as NoAgent model while the Guest Agent is running.   * 400 InvalidSqlManagementMode - Cannot update the SQL management mode to {0}, the current mode is {1}.   * 400 CannotDetermineSqlEditionFromRequest - Cannot determine the SQL edition.   * 400 SqlManagementMissing - Please specify the Management Mode for Sql Virtual Machine. The property is &#39;SqlManagement&#39; and allowed values are LightWeight or Full.   * 400 SqlImageSkuMissingNoAgent - Please specify the Sql Server Edition for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageSku&#39; and allowed values are Developer, Express, Web, Standard, or Enterprise.   * 400 SqlImageOfferMissingNoAgent - Please specify the Sql Server Version and OS Version for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageOffer&#39; and allowed values are SQL2008-WS2008 and SQL2008R2-WS2008.   * 400 InvalidSqlImageOfferChange - SqlImageOffer property cannot be updated.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotHaveSqlVMInResourceGroup - Subscription does not have SQL virtual machine Instance in resource group.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_get**
> SqlVirtualMachine sql_virtual_machines_get(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, expand=expand)



Gets a SQL virtual machine.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine import SqlVirtualMachine
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_name = 'sql_virtual_machine_name_example' # str | Name of the SQL virtual machine.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    expand = 'expand_example' # str | The child resources to include in the response. (optional)

    try:
        api_response = api_instance.sql_virtual_machines_get(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, expand=expand)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_name** | **str**| Name of the SQL virtual machine. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **expand** | **str**| The child resources to include in the response. | [optional] 

### Return type

[**SqlVirtualMachine**](SqlVirtualMachine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the SQL virtual machine. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_list**
> SqlVirtualMachineListResult sql_virtual_machines_list(subscription_id, api_version)



Gets all SQL virtual machines in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_list_result import SqlVirtualMachineListResult
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machines_list(subscription_id, api_version)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineListResult**](SqlVirtualMachineListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL virtual machines in the subscription. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_list_by_resource_group**
> SqlVirtualMachineListResult sql_virtual_machines_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets all SQL virtual machines in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_list_result import SqlVirtualMachineListResult
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machines_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineListResult**](SqlVirtualMachineListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL virtual machines in the resource group. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_list_by_sql_vm_group**
> SqlVirtualMachineListResult sql_virtual_machines_list_by_sql_vm_group(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)



Gets the list of sql virtual machines in a SQL virtual machine group.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_list_result import SqlVirtualMachineListResult
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machines_list_by_sql_vm_group(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_list_by_sql_vm_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_list_by_sql_vm_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineListResult**](SqlVirtualMachineListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of sql virtual machines in a SQL virtual machine group. |  -  |
**0** | *** Error Responses: ***   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 SqlVmGroupNameTooLong - SQL virtual machine group name cannot exceed 15 characters.   * 400 InvalidSqlVmGroupName - Invalid SQL virtual machine group name.   * 400 InvalidStorageAccountCredentials - The storage account credentials provided are incorrect.   * 400 InvalidStorageAccountType - Only storage account of type &#39;General-Purpose V2&#39; is allowed for this operation.   * 400 SqlVmGroupNotEmpty - SQL virtual machine group is not empty.   * 400 SqlVmGroupUpdateNotAllowed - Update to SQL virtual machine group is not allowed.   * 400 SqlVmGroupUpdateFailVmAttached - SQL virtual machine group cannot be updated as it has attached a SQL virtual machine.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machines_update**
> SqlVirtualMachine sql_virtual_machines_update(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, parameters)



Updates a SQL virtual machine.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine import SqlVirtualMachine
from openapi_client.models.sql_virtual_machine_update import SqlVirtualMachineUpdate
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
    api_instance = openapi_client.SqlVirtualMachinesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_name = 'sql_virtual_machine_name_example' # str | Name of the SQL virtual machine.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlVirtualMachineUpdate() # SqlVirtualMachineUpdate | The SQL virtual machine.

    try:
        api_response = api_instance.sql_virtual_machines_update(resource_group_name, sql_virtual_machine_name, subscription_id, api_version, parameters)
        print("The response of SqlVirtualMachinesApi->sql_virtual_machines_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachinesApi->sql_virtual_machines_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_name** | **str**| Name of the SQL virtual machine. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlVirtualMachineUpdate**](SqlVirtualMachineUpdate.md)| The SQL virtual machine. | 

### Return type

[**SqlVirtualMachine**](SqlVirtualMachine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL virtual machine. |  -  |
**0** | *** Error Responses: ***   * 400 SqlLicenseTypeNotSupported - SqlLicenseType NotSet incorrectly provided   * 400 UnsupportedSqlManagementMode - Cannot update the SQL management mode to {0}, only {1} mode is supported for Windows Server 2008.   * 400 SqlSkuMismatchWithGroup - SQL sku set on the SQL virtual machine group does not match that of the SQL virtual machine.   * 400 SubscriptionDoesNotExist - Subscription id does not exist.   * 400 SubscriptionNotReady - Subscription not ready   * 400 AutoBackupEncryptionPasswordNotSpecified - Password not provided when enabling encryption as auto backup setting.   * 400 BackupScheduleTypeNotSet - Backup schedule type needs to be set.   * 400 BackupStorageCredentialsNotSpecified - Backup storage credentials are not specified.   * 400 KeyVaultCredentialsNotSpecified - Key vault credentials not specified.   * 400 SqlCredentialsNotSpecified - SQL Server credentials are not specified.   * 400 IncompleteAutoPatchingSettings - Incomplete auto patching settings specified.   * 400 IncompleteAutoBackupSettings - Incomplete auto backup settings specified.   * 400 IncompleteSqlStorageSettings - Incomplete SQL storage settings specified.   * 400 InvalidVmResourceIdChange - Virtual machine resource id property cannot be updated.   * 400 SqlVmAlreadyIncludedInGroup - SQL virtual machine cannot be moved from one group to another in same operation.   * 400 SqlVmCannotRemoveFromGroup - SQL virtual machine cannot be removed from group.   * 400 VmLocationMismatch - VM location does not match that of SQL virtual machine.   * 400 VmInsufficientPermission - Insufficient permission to Vm.   * 400 SingleNicOnVmAllowed - Only Single NIC virtual machines are allowed in a SQL VM Group.   * 400 InvalidSqlVmGroupResourceIdParameterValue - SQL virtual machine group resource id is not in correct format.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 IncompleteDomainCredentialsProperty - Incomplete input provided for domain credentials property.   * 400 BYOLChangeToPAYGNotSupported - The conversion from AHUB to PAYG is not supported for BYOL images   * 400 InvalidVmResourceIdParameterValue - Provided virtual machine resource id is not valid.   * 400 MismatchInSqlVmAndVmResourceIdSubscription - Mismatch in subscription id for SQL virtual machine and virtual machine resource id property.   * 400 MismatchSqlVmAndVmName - SQL virtual machine name is not same as the virtual machine name provided on VirtualMachineResourceId property.   * 400 MismatchSqlVmAndVmRgName - SQL virtual machine resource group name is not same as the virtual machine resource group name provided on VirtualMachineResourceId property.   * 400 NotSupportedSqlVmOSVersion - Virtual machine OS type is not Windows. Only Windows OS versions are supported   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 PAYGNotSupportedForNonGalleryVM - License type PAYG is invalid for this Virtual Machine as this was not created from Azure marketplace image.   * 400 CannotDetermineSqlVersionAndEditionFromVm - Sql IaaS Extension cannot determine the SQL version and edition from the vm.   * 400 MismatchSqlVmSku - Sql virtual machine sku mismatch.   * 400 CannotConvertToFreeBenefit - Cannot convert Free SQL editions to {0}.    * 400 SqlEvaluationSkuNotSupported - SQL Evaluation version does not support licensing changes.   * 400 IncompleteStorageConfigurationSettings - Incomplete Storage Configuration Settings   * 400 InvalidDefaultFilePath - Invalid Default File Path    * 400 InvalidLUNSpecified - Invalid Logical Unit number specified, Logical Unit number should be a non-negative number.   * 400 BothStorageV1V2Specified - Invalid Request. Only one of SQL Storage Storage Setting or Storage Configuration Settings should be specified   * 400 InvalidLUNsSpecifiedForSameDrive - Invalid Logical Unit numbers specified. Logical Unit number used for the same drive need to be the same.   * 400 InvalidLUNsSpecifiedForDifferentDrives - Invalid Logical Unit numbers specified. Different drive could not reuse the same Logical Unit number.   * 400 InvalidExtendPayload - Invalid Sql Storage Settings Extend Payload. Only support extend one drive at a time.   * 400 SqlVersionMismatchWithGroup - SQL version mismatch with SQL virtual machine group.   * 400 SqlLicenseTypeMissing - Please specify license type for Sql Virtual Machine. The property is &#39;SqlServerLicenceType&#39; and allowed values are PAYG, AHUB and DR.   * 400 VmOSVersionMismatchWithGroup - OS version mismatch with group.   * 400 VmAgentIsRunningForNoAgent - Cannot create or update as NoAgent model while the Guest Agent is running.   * 400 InvalidSqlManagementMode - Cannot update the SQL management mode to {0}, the current mode is {1}.   * 400 CannotDetermineSqlEditionFromRequest - Cannot determine the SQL edition.   * 400 SqlManagementMissing - Please specify the Management Mode for Sql Virtual Machine. The property is &#39;SqlManagement&#39; and allowed values are LightWeight or Full.   * 400 SqlImageSkuMissingNoAgent - Please specify the Sql Server Edition for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageSku&#39; and allowed values are Developer, Express, Web, Standard, or Enterprise.   * 400 SqlImageOfferMissingNoAgent - Please specify the Sql Server Version and OS Version for Sql Virtual Machine in NoAgent Mode. The property is &#39;SqlImageOffer&#39; and allowed values are SQL2008-WS2008 and SQL2008R2-WS2008.   * 400 InvalidSqlImageOfferChange - SqlImageOffer property cannot be updated.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotHaveSqlVMInResourceGroup - Subscription does not have SQL virtual machine Instance in resource group.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

