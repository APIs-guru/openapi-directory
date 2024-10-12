# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**public_ip_addresses_get_virtual_machine_scale_set_public_ip_address**](DefaultApi.md#public_ip_addresses_get_virtual_machine_scale_set_public_ip_address) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses/{publicIpAddressName} | 
[**public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses**](DefaultApi.md#public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/publicipaddresses | 
[**public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses**](DefaultApi.md#public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/virtualMachineScaleSets/{virtualMachineScaleSetName}/virtualMachines/{virtualmachineIndex}/networkInterfaces/{networkInterfaceName}/ipconfigurations/{ipConfigurationName}/publicipaddresses | 


# **public_ip_addresses_get_virtual_machine_scale_set_public_ip_address**
> PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response public_ip_addresses_get_virtual_machine_scale_set_public_ip_address(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, public_ip_address_name, api_version, subscription_id, expand=expand)



Get the specified public IP address in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_addresses_get_virtual_machine_scale_set_public_ip_address200_response import PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The name of the network interface.
    ip_configuration_name = 'ip_configuration_name_example' # str | The name of the IP configuration.
    public_ip_address_name = 'public_ip_address_name_example' # str | The name of the public IP Address.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    expand = 'expand_example' # str | Expands referenced resources. (optional)

    try:
        api_response = api_instance.public_ip_addresses_get_virtual_machine_scale_set_public_ip_address(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, public_ip_address_name, api_version, subscription_id, expand=expand)
        print("The response of DefaultApi->public_ip_addresses_get_virtual_machine_scale_set_public_ip_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->public_ip_addresses_get_virtual_machine_scale_set_public_ip_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The name of the network interface. | 
 **ip_configuration_name** | **str**| The name of the IP configuration. | 
 **public_ip_address_name** | **str**| The name of the public IP Address. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **expand** | **str**| Expands referenced resources. | [optional] 

### Return type

[**PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response**](PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddress200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns the resulting PublicIPAddress resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses**
> PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)



Gets information about all public IP addresses on a virtual machine scale set level.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response import PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses(resource_group_name, virtual_machine_scale_set_name, api_version, subscription_id)
        print("The response of DefaultApi->public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response**](PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PublicIPInterface resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses**
> PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, api_version, subscription_id)



Gets information about all public IP addresses in a virtual machine IP configuration in a virtual machine scale set.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.public_ip_addresses_list_virtual_machine_scale_set_public_ip_addresses200_response import PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    virtual_machine_scale_set_name = 'virtual_machine_scale_set_name_example' # str | The name of the virtual machine scale set.
    virtualmachine_index = 'virtualmachine_index_example' # str | The virtual machine index.
    network_interface_name = 'network_interface_name_example' # str | The network interface name.
    ip_configuration_name = 'ip_configuration_name_example' # str | The IP configuration name.
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses(resource_group_name, virtual_machine_scale_set_name, virtualmachine_index, network_interface_name, ip_configuration_name, api_version, subscription_id)
        print("The response of DefaultApi->public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->public_ip_addresses_list_virtual_machine_scale_set_vm_public_ip_addresses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **virtual_machine_scale_set_name** | **str**| The name of the virtual machine scale set. | 
 **virtualmachine_index** | **str**| The virtual machine index. | 
 **network_interface_name** | **str**| The network interface name. | 
 **ip_configuration_name** | **str**| The IP configuration name. | 
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| The subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response**](PublicIPAddressesListVirtualMachineScaleSetPublicIPAddresses200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Request successful. The operation returns a list of PublicIPAddress resources. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

