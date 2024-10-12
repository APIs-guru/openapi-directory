# openapi_client.VirtualMachineScaleSetExtensionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machine_scale_set_extensions_create_or_update**](VirtualMachineScaleSetExtensionsApi.md#virtual_machine_scale_set_extensions_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName} | 
[**virtual_machine_scale_set_extensions_delete**](VirtualMachineScaleSetExtensionsApi.md#virtual_machine_scale_set_extensions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName} | 
[**virtual_machine_scale_set_extensions_get**](VirtualMachineScaleSetExtensionsApi.md#virtual_machine_scale_set_extensions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions/{vmssExtensionName} | 
[**virtual_machine_scale_set_extensions_list**](VirtualMachineScaleSetExtensionsApi.md#virtual_machine_scale_set_extensions_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{vmScaleSetName}/extensions | 


# **virtual_machine_scale_set_extensions_create_or_update**
> VirtualMachineScaleSetExtension virtual_machine_scale_set_extensions_create_or_update(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id, extension_parameters)



The operation to create or update an extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_extension import VirtualMachineScaleSetExtension
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
    api_instance = openapi_client.VirtualMachineScaleSetExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set where the extension should be create or updated.
    vmss_extension_name = 'vmss_extension_name_example' # str | The name of the VM scale set extension.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    extension_parameters = openapi_client.VirtualMachineScaleSetExtension() # VirtualMachineScaleSetExtension | Parameters supplied to the Create VM scale set Extension operation.

    try:
        api_response = api_instance.virtual_machine_scale_set_extensions_create_or_update(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id, extension_parameters)
        print("The response of VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set where the extension should be create or updated. | 
 **vmss_extension_name** | **str**| The name of the VM scale set extension. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **extension_parameters** | [**VirtualMachineScaleSetExtension**](VirtualMachineScaleSetExtension.md)| Parameters supplied to the Create VM scale set Extension operation. | 

### Return type

[**VirtualMachineScaleSetExtension**](VirtualMachineScaleSetExtension.md)

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

# **virtual_machine_scale_set_extensions_delete**
> virtual_machine_scale_set_extensions_delete(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id)



The operation to delete the extension.

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
    api_instance = openapi_client.VirtualMachineScaleSetExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set where the extension should be deleted.
    vmss_extension_name = 'vmss_extension_name_example' # str | The name of the VM scale set extension.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.virtual_machine_scale_set_extensions_delete(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set where the extension should be deleted. | 
 **vmss_extension_name** | **str**| The name of the VM scale set extension. | 
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

# **virtual_machine_scale_set_extensions_get**
> VirtualMachineScaleSetExtension virtual_machine_scale_set_extensions_get(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id, expand=expand)



The operation to get the extension.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_extension import VirtualMachineScaleSetExtension
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
    api_instance = openapi_client.VirtualMachineScaleSetExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set containing the extension.
    vmss_extension_name = 'vmss_extension_name_example' # str | The name of the VM scale set extension.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | The expand expression to apply on the operation. (optional)

    try:
        api_response = api_instance.virtual_machine_scale_set_extensions_get(resource_group_name, vm_scale_set_name, vmss_extension_name, api_version, subscription_id, expand=expand)
        print("The response of VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set containing the extension. | 
 **vmss_extension_name** | **str**| The name of the VM scale set extension. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| The expand expression to apply on the operation. | [optional] 

### Return type

[**VirtualMachineScaleSetExtension**](VirtualMachineScaleSetExtension.md)

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

# **virtual_machine_scale_set_extensions_list**
> VirtualMachineScaleSetExtensionListResult virtual_machine_scale_set_extensions_list(resource_group_name, vm_scale_set_name, api_version, subscription_id)



Gets a list of all extensions in a VM scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_scale_set_extension_list_result import VirtualMachineScaleSetExtensionListResult
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
    api_instance = openapi_client.VirtualMachineScaleSetExtensionsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    vm_scale_set_name = 'vm_scale_set_name_example' # str | The name of the VM scale set containing the extension.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.virtual_machine_scale_set_extensions_list(resource_group_name, vm_scale_set_name, api_version, subscription_id)
        print("The response of VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachineScaleSetExtensionsApi->virtual_machine_scale_set_extensions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **vm_scale_set_name** | **str**| The name of the VM scale set containing the extension. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**VirtualMachineScaleSetExtensionListResult**](VirtualMachineScaleSetExtensionListResult.md)

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

