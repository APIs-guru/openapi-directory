# VirtualMachineScaleSetVMNetworkProfileConfiguration

Describes a virtual machine scale set VM network profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_interface_configurations** | [**List[VirtualMachineScaleSetNetworkConfiguration]**](VirtualMachineScaleSetNetworkConfiguration.md) | The list of network configurations. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_network_profile_configuration import VirtualMachineScaleSetVMNetworkProfileConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMNetworkProfileConfiguration from a JSON string
virtual_machine_scale_set_vm_network_profile_configuration_instance = VirtualMachineScaleSetVMNetworkProfileConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMNetworkProfileConfiguration.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_network_profile_configuration_dict = virtual_machine_scale_set_vm_network_profile_configuration_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMNetworkProfileConfiguration from a dict
virtual_machine_scale_set_vm_network_profile_configuration_from_dict = VirtualMachineScaleSetVMNetworkProfileConfiguration.from_dict(virtual_machine_scale_set_vm_network_profile_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


