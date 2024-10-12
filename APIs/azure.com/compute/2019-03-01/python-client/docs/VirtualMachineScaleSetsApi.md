# openapi_client.VirtualMachineScaleSetsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_scale_sets_convert_to_single_placement_group**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_convert_to_single_placement_group) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/convertToSinglePlacementGroup | 
[**virtual_machine_scale_sets_create_or_update**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName} | 
[**virtual_machine_scale_sets_deallocate**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_deallocate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/deallocate | 
[**virtual_machine_scale_sets_delete**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName} | 
[**virtual_machine_scale_sets_delete_instances**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_delete_instances) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/delete | 
[**virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/forceRecoveryServiceFabricPlatformUpdateDomainWalk | 
[**virtual_machine_scale_sets_get**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName} | 
[**virtual_machine_scale_sets_get_instance_view**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_get_instance_view) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/instanceView | 
[**virtual_machine_scale_sets_get_os_upgrade_history**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_get_os_upgrade_history) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/osUpgradeHistory | 
[**virtual_machine_scale_sets_list**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets | 
[**virtual_machine_scale_sets_list_all**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_list_all) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Compute/virtualMachineScaleSets | 
[**virtual_machine_scale_sets_list_skus**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_list_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/skus | 
[**virtual_machine_scale_sets_perform_maintenance**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_perform_maintenance) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/performMaintenance | 
[**virtual_machine_scale_sets_power_off**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_power_off) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/poweroff | 
[**virtual_machine_scale_sets_redeploy**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_redeploy) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/redeploy | 
[**virtual_machine_scale_sets_reimage**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_reimage) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimage | 
[**virtual_machine_scale_sets_reimage_all**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_reimage_all) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/reimageall | 
[**virtual_machine_scale_sets_restart**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/restart | 
[**virtual_machine_scale_sets_start**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/start | 
[**virtual_machine_scale_sets_update**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName} | 
[**virtual_machine_scale_sets_update_instances**](VirtualMachineScaleSetsApi.md#virtual_machine_scale_sets_update_instances) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/manualupgrade | 


# **virtual_machine_scale_sets_convert_to_single_placement_group**
> virtual_machine_scale_sets_convert_to_single_placement_group(resource_group_name, vm_scale_set_name, subscription_id, parameters)



Converts SinglePlacementGroup property to false for a existing virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vm_scale_set_convert_to_single_placement_group_input import VMScaleSetConvertToSinglePlacementGroupInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the virtual machine scale set to create or update.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VMScaleSetConvertToSinglePlacementGroupInput() # VMScaleSetConvertToSinglePlacementGroupInput | The input object for ConvertToSinglePlacementGroup API.

    try:
        api_instance.virtual_machine_scale_sets_convert_to_single_placement_group(resource_group_name, vm_scale_set_name, subscription_id, parameters)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_convert_to_single_placement_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the virtual machine scale set to create or update. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VMScaleSetConvertToSinglePlacementGroupInput**](VMScaleSetConvertToSinglePlacementGroupInput.md)| The input object for ConvertToSinglePlacementGroup API. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_create_or_update**
> VirtualMachineScaleSet virtual_machine_scale_sets_create_or_update(resource_group_name, vm_scale_set_name, api_version, subscription_id, parameters)



Create or update a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set import VirtualMachineScaleSet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualMachineScaleSet() # VirtualMachineScaleSet | The scale set object.

    try:
        api_response = api_instance.virtual_machine_scale_sets_create_or_update(resource_group_name, vm_scale_set_name, api_version, subscription_id, parameters)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualMachineScaleSet**](VirtualMachineScaleSet.md)| The scale set object. | 

### Return type

[**VirtualMachineScaleSet**](VirtualMachineScaleSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_deallocate**
> virtual_machine_scale_sets_deallocate(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and releases the compute resources. You are not billed for the compute resources that this virtual machine scale set deallocates.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_deallocate(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_deallocate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_delete**
> virtual_machine_scale_sets_delete(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Deletes a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_machine_scale_sets_delete(resource_group_name, vm_scale_set_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_delete_instances**
> virtual_machine_scale_sets_delete_instances(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids)



Deletes virtual machines in a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_required_ids import VirtualMachineScaleSetVMInstanceRequiredIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceRequiredIDs() # VirtualMachineScaleSetVMInstanceRequiredIDs | A list of virtual machine instance IDs from the VM scale set.

    try:
        api_instance.virtual_machine_scale_sets_delete_instances(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_delete_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceRequiredIDs**](VirtualMachineScaleSetVMInstanceRequiredIDs.md)| A list of virtual machine instance IDs from the VM scale set. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk**
> RecoveryWalkResponse virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk(resource_group_name, vm_scale_set_name, api_version, subscription_id, platform_update_domain)



Manual platform update domain walk to update virtual machines in a service fabric virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_walk_response import RecoveryWalkResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    platform_update_domain = 56 # int | The platform update domain for which a manual recovery walk is requested

    try:
        api_response = api_instance.virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk(resource_group_name, vm_scale_set_name, api_version, subscription_id, platform_update_domain)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_force_recovery_service_fabric_platform_update_domain_walk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **platform_update_domain** | **int**| The platform update domain for which a manual recovery walk is requested | 

### Return type

[**RecoveryWalkResponse**](RecoveryWalkResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_get**
> VirtualMachineScaleSet virtual_machine_scale_sets_get(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Display information about a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set import VirtualMachineScaleSet
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_get(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSet**](VirtualMachineScaleSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_get_instance_view**
> VirtualMachineScaleSetInstanceView virtual_machine_scale_sets_get_instance_view(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Gets the status of a VM scale set instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_instance_view import VirtualMachineScaleSetInstanceView
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_get_instance_view(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get_instance_view:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get_instance_view: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetInstanceView**](VirtualMachineScaleSetInstanceView.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_get_os_upgrade_history**
> VirtualMachineScaleSetListOSUpgradeHistory virtual_machine_scale_sets_get_os_upgrade_history(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Gets list of OS upgrades on a VM scale set instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_list_os_upgrade_history import VirtualMachineScaleSetListOSUpgradeHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_get_os_upgrade_history(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get_os_upgrade_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_get_os_upgrade_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetListOSUpgradeHistory**](VirtualMachineScaleSetListOSUpgradeHistory.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_list**
> VirtualMachineScaleSetListResult virtual_machine_scale_sets_list(resource_group_name, api_version, subscription_id)



Gets a list of all VM scale sets under a resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_list_result import VirtualMachineScaleSetListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_list(resource_group_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetListResult**](VirtualMachineScaleSetListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_list_all**
> VirtualMachineScaleSetListWithLinkResult virtual_machine_scale_sets_list_all(api_version, subscription_id)



Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group. Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink is null to fetch all the VM Scale Sets.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_list_with_link_result import VirtualMachineScaleSetListWithLinkResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_list_all(api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetListWithLinkResult**](VirtualMachineScaleSetListWithLinkResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_list_skus**
> VirtualMachineScaleSetListSkusResult virtual_machine_scale_sets_list_skus(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_list_skus_result import VirtualMachineScaleSetListSkusResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_sets_list_skus(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_list_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetListSkusResult**](VirtualMachineScaleSetListSkusResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_perform_maintenance**
> virtual_machine_scale_sets_perform_maintenance(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_perform_maintenance(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_perform_maintenance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_power_off**
> virtual_machine_scale_sets_power_off(resource_group_name, vm_scale_set_name, api_version, subscription_id, skip_shutdown=skip_shutdown, vm_instance_ids=vm_instance_ids)



Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still attached and you are getting charged for the resources. Instead, use deallocate to release resources and avoid charges.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    skip_shutdown = False # bool | The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified (optional) (default to False)
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_power_off(resource_group_name, vm_scale_set_name, api_version, subscription_id, skip_shutdown=skip_shutdown, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_power_off: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **skip_shutdown** | **bool**| The parameter to request non-graceful VM shutdown. True value for this flag indicates non-graceful shutdown whereas false indicates otherwise. Default value for this flag is false if not specified | [optional] [default to False]
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_redeploy**
> virtual_machine_scale_sets_redeploy(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and powers them back on.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_redeploy(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_redeploy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_reimage**
> virtual_machine_scale_sets_reimage(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_scale_set_reimage_input=vm_scale_set_reimage_input)



Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is reset to initial state.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_reimage_parameters import VirtualMachineScaleSetReimageParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_scale_set_reimage_input = openapi_client.VirtualMachineScaleSetReimageParameters() # VirtualMachineScaleSetReimageParameters | Parameters for Reimaging VM ScaleSet. (optional)

    try:
        api_instance.virtual_machine_scale_sets_reimage(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_scale_set_reimage_input=vm_scale_set_reimage_input)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_reimage: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_scale_set_reimage_input** | [**VirtualMachineScaleSetReimageParameters**](VirtualMachineScaleSetReimageParameters.md)| Parameters for Reimaging VM ScaleSet. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_reimage_all**
> virtual_machine_scale_sets_reimage_all(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This operation is only supported for managed disks.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_reimage_all(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_reimage_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_restart**
> virtual_machine_scale_sets_restart(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Restarts one or more virtual machines in a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_restart(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_start**
> virtual_machine_scale_sets_start(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)



Starts one or more virtual machines in a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceIDs() # VirtualMachineScaleSetVMInstanceIDs | A list of virtual machine instance IDs from the VM scale set. (optional)

    try:
        api_instance.virtual_machine_scale_sets_start(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids=vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceIDs**](VirtualMachineScaleSetVMInstanceIDs.md)| A list of virtual machine instance IDs from the VM scale set. | [optional] 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_update**
> VirtualMachineScaleSet virtual_machine_scale_sets_update(resource_group_name, vm_scale_set_name, api_version, subscription_id, parameters)



Update a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set import VirtualMachineScaleSet
from openapi_client.models.virtual_machine_scale_set_update import VirtualMachineScaleSetUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set to create or update.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.VirtualMachineScaleSetUpdate() # VirtualMachineScaleSetUpdate | The scale set object.

    try:
        api_response = api_instance.virtual_machine_scale_sets_update(resource_group_name, vm_scale_set_name, api_version, subscription_id, parameters)
        print("The response of VirtualMachineScaleSetsApi->virtual_machine_scale_sets_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set to create or update. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**VirtualMachineScaleSetUpdate**](VirtualMachineScaleSetUpdate.md)| The scale set object. | 

### Return type

[**VirtualMachineScaleSet**](VirtualMachineScaleSet.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machine_scale_sets_update_instances**
> virtual_machine_scale_sets_update_instances(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids)



Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_vm_instance_required_ids import VirtualMachineScaleSetVMInstanceRequiredIDs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.VirtualMachineScaleSetsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    vm_instance_ids = openapi_client.VirtualMachineScaleSetVMInstanceRequiredIDs() # VirtualMachineScaleSetVMInstanceRequiredIDs | A list of virtual machine instance IDs from the VM scale set.

    try:
        api_instance.virtual_machine_scale_sets_update_instances(resource_group_name, vm_scale_set_name, api_version, subscription_id, vm_instance_ids)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetsApi->virtual_machine_scale_sets_update_instances: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **vm_instance_ids** | [**VirtualMachineScaleSetVMInstanceRequiredIDs**](VirtualMachineScaleSetVMInstanceRequiredIDs.md)| A list of virtual machine instance IDs from the VM scale set. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

