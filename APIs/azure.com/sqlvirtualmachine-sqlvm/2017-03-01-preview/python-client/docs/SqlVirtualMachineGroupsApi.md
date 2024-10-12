# openapi_client.SqlVirtualMachineGroupsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sql_virtual_machine_groups_create_or_update**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName} | 
[**sql_virtual_machine_groups_delete**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName} | 
[**sql_virtual_machine_groups_get**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName} | 
[**sql_virtual_machine_groups_list**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups | 
[**sql_virtual_machine_groups_list_by_resource_group**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups | 
[**sql_virtual_machine_groups_update**](SqlVirtualMachineGroupsApi.md#sql_virtual_machine_groups_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName} | 


# **sql_virtual_machine_groups_create_or_update**
> SqlVirtualMachineGroup sql_virtual_machine_groups_create_or_update(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version, parameters)



Creates or updates a SQL virtual machine group.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_group import SqlVirtualMachineGroup
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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlVirtualMachineGroup() # SqlVirtualMachineGroup | The SQL virtual machine group.

    try:
        api_response = api_instance.sql_virtual_machine_groups_create_or_update(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version, parameters)
        print("The response of SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlVirtualMachineGroup**](SqlVirtualMachineGroup.md)| The SQL virtual machine group. | 

### Return type

[**SqlVirtualMachineGroup**](SqlVirtualMachineGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL virtual machine group. |  -  |
**201** | Successfully created the SQL virtual machine group. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 SqlVmGroupNameTooLong - SQL virtual machine group name cannot exceed 15 characters.   * 400 InvalidSqlVmGroupName - Invalid SQL virtual machine group name.   * 400 InvalidStorageAccountCredentials - The storage account credentials provided are incorrect.   * 400 InvalidStorageAccountType - Only storage account of type &#39;General-Purpose V2&#39; is allowed for this operation.   * 400 SqlVmGroupNotEmpty - SQL virtual machine group is not empty.   * 400 SqlVmGroupUpdateNotAllowed - Update to SQL virtual machine group is not allowed.   * 400 SqlVmGroupUpdateFailVmAttached - SQL virtual machine group cannot be updated as it has attached a SQL virtual machine.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machine_groups_delete**
> sql_virtual_machine_groups_delete(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)



Deletes a SQL virtual machine group.

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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_instance.sql_virtual_machine_groups_delete(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
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
**200** | Successfully deleted the SQL virtual machine group. |  -  |
**202** | Deleting the SQL virtual machine group. |  -  |
**204** | The specified SQL virtual machine group does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 SqlVmGroupNameTooLong - SQL virtual machine group name cannot exceed 15 characters.   * 400 InvalidSqlVmGroupName - Invalid SQL virtual machine group name.   * 400 InvalidStorageAccountCredentials - The storage account credentials provided are incorrect.   * 400 InvalidStorageAccountType - Only storage account of type &#39;General-Purpose V2&#39; is allowed for this operation.   * 400 SqlVmGroupNotEmpty - SQL virtual machine group is not empty.   * 400 SqlVmGroupUpdateNotAllowed - Update to SQL virtual machine group is not allowed.   * 400 SqlVmGroupUpdateFailVmAttached - SQL virtual machine group cannot be updated as it has attached a SQL virtual machine.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machine_groups_get**
> SqlVirtualMachineGroup sql_virtual_machine_groups_get(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)



Gets a SQL virtual machine group.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_group import SqlVirtualMachineGroup
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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machine_groups_get(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)
        print("The response of SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineGroup**](SqlVirtualMachineGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the SQL virtual machine group. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machine_groups_list**
> SqlVirtualMachineGroupListResult sql_virtual_machine_groups_list(subscription_id, api_version)



Gets all SQL virtual machine groups in a subscription.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_group_list_result import SqlVirtualMachineGroupListResult
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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machine_groups_list(subscription_id, api_version)
        print("The response of SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineGroupListResult**](SqlVirtualMachineGroupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL virtual machine groups in the subscription. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machine_groups_list_by_resource_group**
> SqlVirtualMachineGroupListResult sql_virtual_machine_groups_list_by_resource_group(resource_group_name, subscription_id, api_version)



Gets all SQL virtual machine groups in a resource group.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_group_list_result import SqlVirtualMachineGroupListResult
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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.sql_virtual_machine_groups_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**SqlVirtualMachineGroupListResult**](SqlVirtualMachineGroupListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all SQL virtual machine groups in the resource group. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sql_virtual_machine_groups_update**
> SqlVirtualMachineGroup sql_virtual_machine_groups_update(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version, parameters)



Updates SQL virtual machine group tags.

### Example


```python
import openapi_client
from openapi_client.models.sql_virtual_machine_group import SqlVirtualMachineGroup
from openapi_client.models.sql_virtual_machine_group_update import SqlVirtualMachineGroupUpdate
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
    api_instance = openapi_client.SqlVirtualMachineGroupsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.SqlVirtualMachineGroupUpdate() # SqlVirtualMachineGroupUpdate | The SQL virtual machine group.

    try:
        api_response = api_instance.sql_virtual_machine_groups_update(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version, parameters)
        print("The response of SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SqlVirtualMachineGroupsApi->sql_virtual_machine_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**SqlVirtualMachineGroupUpdate**](SqlVirtualMachineGroupUpdate.md)| The SQL virtual machine group. | 

### Return type

[**SqlVirtualMachineGroup**](SqlVirtualMachineGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the SQL virtual machine group. |  -  |
**0** | *** Error Responses: ***   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 FileShareWitnessDisAllowed - For Windows Server 2016 and beyond setup, file share witness is not allowed.   * 400 InvalidStorageAccountUrl - Invalid storage account url.   * 400 SqlVmGroupNameTooLong - SQL virtual machine group name cannot exceed 15 characters.   * 400 InvalidSqlVmGroupName - Invalid SQL virtual machine group name.   * 400 InvalidStorageAccountCredentials - The storage account credentials provided are incorrect.   * 400 InvalidStorageAccountType - Only storage account of type &#39;General-Purpose V2&#39; is allowed for this operation.   * 400 SqlVmGroupNotEmpty - SQL virtual machine group is not empty.   * 400 SqlVmGroupUpdateNotAllowed - Update to SQL virtual machine group is not allowed.   * 400 SqlVmGroupUpdateFailVmAttached - SQL virtual machine group cannot be updated as it has attached a SQL virtual machine.   * 400 InvalidSqlImageOffer - Provided SQL image offer is invalid.   * 400 InvalidSqlSku - Provided SQL sku is invalid.   * 400 OuPathAndDomainMismatch - OU path is not within the domain provided.   * 400 InvalidAccountNameFormat - Account name format is invalid.   * 400 CloudWitnessUnsupported - For Windows Server 2012R2 setup cloud witness is not allowed.   * 403 AccessDenied - Access denied.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

