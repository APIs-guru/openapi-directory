# VirtualMachineScaleSetNetworkConfigurationProperties

Describes a virtual machine scale set network profile's IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**VirtualMachineScaleSetNetworkConfigurationDnsSettings**](VirtualMachineScaleSetNetworkConfigurationDnsSettings.md) |  | [optional] 
**enable_accelerated_networking** | **bool** | Specifies whether the network interface is accelerated networking-enabled. | [optional] 
**enable_ip_forwarding** | **bool** | Whether IP forwarding enabled on this NIC. | [optional] 
**ip_configurations** | [**List[VirtualMachineScaleSetIPConfiguration]**](VirtualMachineScaleSetIPConfiguration.md) | Specifies the IP configurations of the network interface. | 
**network_security_group** | [**SubResource**](SubResource.md) |  | [optional] 
**primary** | **bool** | Specifies the primary network interface in case the virtual machine has more than 1 network interface. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_network_configuration_properties import VirtualMachineScaleSetNetworkConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetNetworkConfigurationProperties from a JSON string
virtual_machine_scale_set_network_configuration_properties_instance = VirtualMachineScaleSetNetworkConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetNetworkConfigurationProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_network_configuration_properties_dict = virtual_machine_scale_set_network_configuration_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetNetworkConfigurationProperties from a dict
virtual_machine_scale_set_network_configuration_properties_from_dict = VirtualMachineScaleSetNetworkConfigurationProperties.from_dict(virtual_machine_scale_set_network_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


