# VirtualMachineScaleSetUpdateNetworkConfigurationProperties

Describes a virtual machine scale set updatable network profile's IP configuration.Use this object for updating network profile's IP Configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns_settings** | [**VirtualMachineScaleSetNetworkConfigurationDnsSettings**](VirtualMachineScaleSetNetworkConfigurationDnsSettings.md) |  | [optional] 
**enable_accelerated_networking** | **bool** | Specifies whether the network interface is accelerated networking-enabled. | [optional] 
**enable_ip_forwarding** | **bool** | Whether IP forwarding enabled on this NIC. | [optional] 
**ip_configurations** | [**List[VirtualMachineScaleSetUpdateIPConfiguration]**](VirtualMachineScaleSetUpdateIPConfiguration.md) | The virtual machine scale set IP Configuration. | [optional] 
**network_security_group** | [**SubResource**](SubResource.md) |  | [optional] 
**primary** | **bool** | Whether this is a primary NIC on a virtual machine. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_update_network_configuration_properties import VirtualMachineScaleSetUpdateNetworkConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetUpdateNetworkConfigurationProperties from a JSON string
virtual_machine_scale_set_update_network_configuration_properties_instance = VirtualMachineScaleSetUpdateNetworkConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetUpdateNetworkConfigurationProperties.to_json())

# convert the object into a dict
virtual_machine_scale_set_update_network_configuration_properties_dict = virtual_machine_scale_set_update_network_configuration_properties_instance.to_dict()
# create an instance of VirtualMachineScaleSetUpdateNetworkConfigurationProperties from a dict
virtual_machine_scale_set_update_network_configuration_properties_from_dict = VirtualMachineScaleSetUpdateNetworkConfigurationProperties.from_dict(virtual_machine_scale_set_update_network_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


