# openapi_client.AvailabilityGroupListenersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**availability_group_listeners_create_or_update**](AvailabilityGroupListenersApi.md#availability_group_listeners_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName} | 
[**availability_group_listeners_delete**](AvailabilityGroupListenersApi.md#availability_group_listeners_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName} | 
[**availability_group_listeners_get**](AvailabilityGroupListenersApi.md#availability_group_listeners_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners/{availabilityGroupListenerName} | 
[**availability_group_listeners_list_by_group**](AvailabilityGroupListenersApi.md#availability_group_listeners_list_by_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/{sqlVirtualMachineGroupName}/availabilityGroupListeners | 


# **availability_group_listeners_create_or_update**
> AvailabilityGroupListener availability_group_listeners_create_or_update(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version, parameters)



Creates or updates an availability group listener.

### Example


```python
import openapi_client
from openapi_client.models.availability_group_listener import AvailabilityGroupListener
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
    api_instance = openapi_client.AvailabilityGroupListenersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    availability_group_listener_name = 'availability_group_listener_name_example' # str | Name of the availability group listener.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.
    parameters = openapi_client.AvailabilityGroupListener() # AvailabilityGroupListener | The availability group listener.

    try:
        api_response = api_instance.availability_group_listeners_create_or_update(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version, parameters)
        print("The response of AvailabilityGroupListenersApi->availability_group_listeners_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityGroupListenersApi->availability_group_listeners_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **availability_group_listener_name** | **str**| Name of the availability group listener. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 
 **parameters** | [**AvailabilityGroupListener**](AvailabilityGroupListener.md)| The availability group listener. | 

### Return type

[**AvailabilityGroupListener**](AvailabilityGroupListener.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully updated the availability group listener. |  -  |
**201** | Successfully created the availability group listener. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 AgDoesNotExist - Availability group does not exist.   * 400 AgListDoesNotMatch - SQL Availability group list does not match the list of virtual machines in SQL Virtual machine group.   * 400 NoIpProvided - At least one IP needs to be provided.   * 400 MoreIpProvided - Only one IP needs to be provided.   * 400 SqlVmGroupDoesNotHaveAGListener - SQL virtual machine group does not have the AG listener.   * 400 AgListenerUpdateNotAllowed - Only handful properties of availability group listener can be updated.   * 400 SqlVmNotInGroup - SQL virtual machine is not part of the group.   * 400 SqlVmListCannotBeEmpty - SQL virtual machines list cannot be empty.   * 400 PublicIpNotIPv4 - Public IP must be IPv4 address.   * 400 PublicIPDynamicAllocation - Public IP allocation mode must be static   * 400 PublicLBInvalid - Load balancer specified is not public.   * 400 SubnetMissingFromPrivateIP - Subnet must be provided with private IP.   * 400 IPNotInSubnet - IP not part of subnet.   * 400 NoActivePrimaryInAG - None of the nodes in AvailabilityGroup are Primary   * 400 MultipleListenerSameAG - Multiple availability group listeners for same availability group are not allowed.   * 400 AgListenerNotEmpty - Availability group listener not empty.   * 400 AgListenerVnetMismatch - Provided VNet for Availability group listener does not match Vnet of internal load balancer.   * 400 InternalLBInvalid - Load balancer specified is not internal.   * 400 InvalidSqlVmResourceIdParameterValue - SQL virtual machine resource id provided is invalid.   * 400 DifferentSubSqlVmList - All SQL virtual machines should be under same subscription.   * 400 OnlyStandardPublicIp - Every virtual machine should have standard public IP.   * 400 ListenerNameTooLong - Listener name should not exceed 15 characters.   * 400 InvalidListenerName - Invalid listener name.   * 400 InvalidLBResourceIdParameterValue - Load balancer resource id is invalid.   * 400 InvalidPublicIpResourceIdParameterValue - Public IP resource id is invalid.   * 400 InvalidSubnetIdParameterValue - Invalid resource id provided for subnet parameter.   * 400 InvalidPrivateIpParameterValue - Invalid address given for private IP address.   * 400 VmNicVnetMismatch - Virtual machine NIC VNet mismatch.   * 400 NoAvailabilitySet - Vm is not associated with any availability set.   * 400 AvailabilitySetMismatch - Availability set of virtual machines does not match.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 NoIpAvailable - No available IP.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out.   * 500 SqlVmGroupIsBusy - SQL virtual machine group is busy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_group_listeners_delete**
> availability_group_listeners_delete(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version)



Deletes an availability group listener.

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
    api_instance = openapi_client.AvailabilityGroupListenersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    availability_group_listener_name = 'availability_group_listener_name_example' # str | Name of the availability group listener.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_instance.availability_group_listeners_delete(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling AvailabilityGroupListenersApi->availability_group_listeners_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **availability_group_listener_name** | **str**| Name of the availability group listener. | 
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
**200** | Successfully deleted the availability group listener. |  -  |
**202** | Deleting the availability group listener. |  -  |
**204** | The availability group listener does not exist. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 AgDoesNotExist - Availability group does not exist.   * 400 AgListDoesNotMatch - SQL Availability group list does not match the list of virtual machines in SQL Virtual machine group.   * 400 NoIpProvided - At least one IP needs to be provided.   * 400 MoreIpProvided - Only one IP needs to be provided.   * 400 SqlVmGroupDoesNotHaveAGListener - SQL virtual machine group does not have the AG listener.   * 400 AgListenerUpdateNotAllowed - Only handful properties of availability group listener can be updated.   * 400 SqlVmNotInGroup - SQL virtual machine is not part of the group.   * 400 SqlVmListCannotBeEmpty - SQL virtual machines list cannot be empty.   * 400 PublicIpNotIPv4 - Public IP must be IPv4 address.   * 400 PublicIPDynamicAllocation - Public IP allocation mode must be static   * 400 PublicLBInvalid - Load balancer specified is not public.   * 400 SubnetMissingFromPrivateIP - Subnet must be provided with private IP.   * 400 IPNotInSubnet - IP not part of subnet.   * 400 NoActivePrimaryInAG - None of the nodes in AvailabilityGroup are Primary   * 400 MultipleListenerSameAG - Multiple availability group listeners for same availability group are not allowed.   * 400 AgListenerNotEmpty - Availability group listener not empty.   * 400 AgListenerVnetMismatch - Provided VNet for Availability group listener does not match Vnet of internal load balancer.   * 400 InternalLBInvalid - Load balancer specified is not internal.   * 400 InvalidSqlVmResourceIdParameterValue - SQL virtual machine resource id provided is invalid.   * 400 DifferentSubSqlVmList - All SQL virtual machines should be under same subscription.   * 400 OnlyStandardPublicIp - Every virtual machine should have standard public IP.   * 400 ListenerNameTooLong - Listener name should not exceed 15 characters.   * 400 InvalidListenerName - Invalid listener name.   * 400 InvalidLBResourceIdParameterValue - Load balancer resource id is invalid.   * 400 InvalidPublicIpResourceIdParameterValue - Public IP resource id is invalid.   * 400 InvalidSubnetIdParameterValue - Invalid resource id provided for subnet parameter.   * 400 InvalidPrivateIpParameterValue - Invalid address given for private IP address.   * 400 VmNicVnetMismatch - Virtual machine NIC VNet mismatch.   * 400 NoAvailabilitySet - Vm is not associated with any availability set.   * 400 AvailabilitySetMismatch - Availability set of virtual machines does not match.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 NoIpAvailable - No available IP.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out.   * 500 SqlVmGroupIsBusy - SQL virtual machine group is busy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_group_listeners_get**
> AvailabilityGroupListener availability_group_listeners_get(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version)



Gets an availability group listener.

### Example


```python
import openapi_client
from openapi_client.models.availability_group_listener import AvailabilityGroupListener
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
    api_instance = openapi_client.AvailabilityGroupListenersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    availability_group_listener_name = 'availability_group_listener_name_example' # str | Name of the availability group listener.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.availability_group_listeners_get(resource_group_name, sql_virtual_machine_group_name, availability_group_listener_name, subscription_id, api_version)
        print("The response of AvailabilityGroupListenersApi->availability_group_listeners_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityGroupListenersApi->availability_group_listeners_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **availability_group_listener_name** | **str**| Name of the availability group listener. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**AvailabilityGroupListener**](AvailabilityGroupListener.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the availability group listener. |  -  |
**0** | *** Error Responses: ***   * 400 InvalidParameterValue - An invalid value was given to parameter.   * 400 RPGenericUser - User Failure when calling other Resource Provider.   * 400 RPResponseMissingAsyncOperationHeader - Response is missing Async operation header information   * 400 InvalidArgument - Invalid argument &#39;{0}&#39;.   * 400 ArgumentNotInRange - Argument &#39;{0}&#39; not in range.   * 400 ResourceNotProvisioned - As the resource: {0} is not in a provisioned state, the request cannot be proceeded forward   * 400 CRPNotAllowedOperation - Operation cannot be completed due to the following error: {0}   * 400 InvalidRgResourceId - Invalid Resourcegroup resource id specified.   * 400 AgDoesNotExist - Availability group does not exist.   * 400 AgListDoesNotMatch - SQL Availability group list does not match the list of virtual machines in SQL Virtual machine group.   * 400 NoIpProvided - At least one IP needs to be provided.   * 400 MoreIpProvided - Only one IP needs to be provided.   * 400 SqlVmGroupDoesNotHaveAGListener - SQL virtual machine group does not have the AG listener.   * 400 AgListenerUpdateNotAllowed - Only handful properties of availability group listener can be updated.   * 400 SqlVmNotInGroup - SQL virtual machine is not part of the group.   * 400 SqlVmListCannotBeEmpty - SQL virtual machines list cannot be empty.   * 400 PublicIpNotIPv4 - Public IP must be IPv4 address.   * 400 PublicIPDynamicAllocation - Public IP allocation mode must be static   * 400 PublicLBInvalid - Load balancer specified is not public.   * 400 SubnetMissingFromPrivateIP - Subnet must be provided with private IP.   * 400 IPNotInSubnet - IP not part of subnet.   * 400 NoActivePrimaryInAG - None of the nodes in AvailabilityGroup are Primary   * 400 MultipleListenerSameAG - Multiple availability group listeners for same availability group are not allowed.   * 400 AgListenerNotEmpty - Availability group listener not empty.   * 400 AgListenerVnetMismatch - Provided VNet for Availability group listener does not match Vnet of internal load balancer.   * 400 InternalLBInvalid - Load balancer specified is not internal.   * 400 InvalidSqlVmResourceIdParameterValue - SQL virtual machine resource id provided is invalid.   * 400 DifferentSubSqlVmList - All SQL virtual machines should be under same subscription.   * 400 OnlyStandardPublicIp - Every virtual machine should have standard public IP.   * 400 ListenerNameTooLong - Listener name should not exceed 15 characters.   * 400 InvalidListenerName - Invalid listener name.   * 400 InvalidLBResourceIdParameterValue - Load balancer resource id is invalid.   * 400 InvalidPublicIpResourceIdParameterValue - Public IP resource id is invalid.   * 400 InvalidSubnetIdParameterValue - Invalid resource id provided for subnet parameter.   * 400 InvalidPrivateIpParameterValue - Invalid address given for private IP address.   * 400 VmNicVnetMismatch - Virtual machine NIC VNet mismatch.   * 400 NoAvailabilitySet - Vm is not associated with any availability set.   * 400 AvailabilitySetMismatch - Availability set of virtual machines does not match.   * 400 MismatchVmGroupSubscription - Subscription id for SQL virtual machine and SQL virtual machine group are different.   * 400 VmNotRunning - The VM is not in running state.   * 400 VmAgentNotRunning - The VM agent is not installed or in running state.   * 400 NoIpAvailable - No available IP.   * 403 AccessDenied - Access denied.   * 404 ResourceNotFound - The requested resource was not found.   * 404 SubscriptionDoesNotExist - Subscription id does not exist.   * 404 ResourceDoesNotExist - Resource does not exist.   * 404 RPOperationNotFound - Operation not found   * 404 OperationIdNotFound - Operation id could not be found.   * 404 OperationTypeNotFound - Operation Type not found.   * 404 SubscriptionDoesNotHaveSqlVMGroupInResourceGroup - Subscription does not have SQL virtual machine group in resource group.   * 409 ResourceAlreadyExists - Resource already exists.   * 409 LBGenericErrors - LB operation failed   * 409 NICGenericError - NIC operation failed   * 409 SqlExtensionNotInstalled - SQL extension not installed.   * 409 RPPluginSubstatusMissing - RP plugin substatus missing   * 409 MissingMoveResources - Cannot move resources(s) because some resources are missing in the request.   * 409 ResourceExists - There was an internal error in cleaning up of resources.   * 409 SubscriptionOperationInProgress - An operation on subscription is already in progress   * 409 OperationInProgress - Operation in progress on resource already.   * 409 OperationCanceled - Operation Cancelled.   * 500 RPGenericSystem - System Failure when calling other Resource Provider.   * 500 UnExpectedErrorOccurred - Unexpected error occurred.   * 500 OperationTimeout - Operation timed out.   * 500 SqlVmGroupIsBusy - SQL virtual machine group is busy. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **availability_group_listeners_list_by_group**
> AvailabilityGroupListenerListResult availability_group_listeners_list_by_group(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)



Lists all availability group listeners in a SQL virtual machine group.

### Example


```python
import openapi_client
from openapi_client.models.availability_group_listener_list_result import AvailabilityGroupListenerListResult
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
    api_instance = openapi_client.AvailabilityGroupListenersApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
    sql_virtual_machine_group_name = 'sql_virtual_machine_group_name_example' # str | Name of the SQL virtual machine group.
    subscription_id = 'subscription_id_example' # str | Subscription ID that identifies an Azure subscription.
    api_version = 'api_version_example' # str | API version to use for the request.

    try:
        api_response = api_instance.availability_group_listeners_list_by_group(resource_group_name, sql_virtual_machine_group_name, subscription_id, api_version)
        print("The response of AvailabilityGroupListenersApi->availability_group_listeners_list_by_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AvailabilityGroupListenersApi->availability_group_listeners_list_by_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal. | 
 **sql_virtual_machine_group_name** | **str**| Name of the SQL virtual machine group. | 
 **subscription_id** | **str**| Subscription ID that identifies an Azure subscription. | 
 **api_version** | **str**| API version to use for the request. | 

### Return type

[**AvailabilityGroupListenerListResult**](AvailabilityGroupListenerListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved all availability group listeners in a SQL virtual machine group. |  -  |
**0** | *** Error Responses: *** |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

