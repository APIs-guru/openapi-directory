# VirtualMachineScaleSetNetworkConfigurationProperties

Describes a virtual machine scale set network profile's IP configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_configurations** | [**List[VirtualMachineScaleSetIPConfiguration]**](VirtualMachineScaleSetIPConfiguration.md) | The virtual machine scale set IP Configuration. | 
**primary** | **bool** | Whether this is a primary NIC on a virtual machine. | [optional] 

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


