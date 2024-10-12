# openapi_client.NetworkInterfacesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**network_interfaces_get_virtual_machine_scale_set_ip_configuration**](NetworkInterfacesApi.md#network_interfaces_get_virtual_machine_scale_set_ip_configuration) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipConfigurations/{ipConfigurationName} | 
[**network_interfaces_get_virtual_machine_scale_set_network_interface**](NetworkInterfacesApi.md#network_interfaces_get_virtual_machine_scale_set_network_interface) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName} | 
[**network_interfaces_list_virtual_machine_scale_set_ip_configurations**](NetworkInterfacesApi.md#network_interfaces_list_virtual_machine_scale_set_ip_configurations) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipConfigurations | 
[**network_interfaces_list_virtual_machine_scale_set_network_interfaces**](NetworkInterfacesApi.md#network_interfaces_list_virtual_machine_scale_set_network_interfaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/networkInterfaces | 
[**network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces**](NetworkInterfacesApi.md#network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces | 


# **network_interfaces_get_virtual_machine_scale_set_ip_configuration**
> NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response network_interfaces_get_virtual_machine_scale_set_ip_configuration(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, api_version, subscription_id, expand=expand)



Get the specified network interface ip configuration in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interfaces_get_virtual_machine_scale_set_ip_configuration200_response import NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    ip_configuration_name = 'ip_configuration_name_example' # str | The name of the ip configuration.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.network_interfaces_get_virtual_machine_scale_set_ip_configuration(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, api_version, subscription_id, expand=expand)
        print("The response of NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_ip_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_ip_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **ip_configuration_name** | **str**| The name of the ip configuration. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response**](NetworkInterfacesGetVirtualMachineScaleSetIpConfiguration200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting NetworkInterfaceIPConfiguration resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_get_virtual_machine_scale_set_network_interface**
> NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response network_interfaces_get_virtual_machine_scale_set_network_interface(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)



Get the specified network interface in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interfaces_get_virtual_machine_scale_set_network_interface200_response import NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.network_interfaces_get_virtual_machine_scale_set_network_interface(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)
        print("The response of NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_network_interface:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_get_virtual_machine_scale_set_network_interface: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response**](NetworkInterfacesGetVirtualMachineScaleSetNetworkInterface200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting NetworkInterface resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_list_virtual_machine_scale_set_ip_configurations**
> NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response network_interfaces_list_virtual_machine_scale_set_ip_configurations(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)



Get the specified network interface ip configuration in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_ip_configurations200_response import NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.network_interfaces_list_virtual_machine_scale_set_ip_configurations(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, api_version, subscription_id, expand=expand)
        print("The response of NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_ip_configurations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_ip_configurations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response**](NetworkInterfacesListVirtualMachineScaleSetIpConfigurations200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the list of resulting NetworkInterfaceIPConfigurations resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_list_virtual_machine_scale_set_network_interfaces**
> NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response network_interfaces_list_virtual_machine_scale_set_network_interfaces(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)



Gets all network interfaces in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response import NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list_virtual_machine_scale_set_network_interfaces(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_network_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_network_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response**](NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of NetworkInterface resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces**
> NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, api_version, subscription_id)



Gets information about all network interfaces in a virtual machine in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.network_interfaces_list_virtual_machine_scale_set_network_interfaces200_response import NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response
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
    api_instance = openapi_client.NetworkInterfacesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, api_version, subscription_id)
        print("The response of NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NetworkInterfacesApi->network_interfaces_list_virtual_machine_scale_set_vm_network_interfaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response**](NetworkInterfacesListVirtualMachineScaleSetNetworkInterfaces200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of NetworkInterface resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

