# VirtualMachineScaleSetVMProtectionPolicy

The protection policy of a virtual machine scale set VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protect_from_scale_in** | **bool** | Indicates that the virtual machine scale set VM shouldn&#39;t be considered for deletion during a scale-in operation. | [optional] 
**protect_from_scale_set_actions** | **bool** | Indicates that model updates or actions (including scale-in) initiated on the virtual machine scale set should not be applied to the virtual machine scale set VM. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_protection_policy import VirtualMachineScaleSetVMProtectionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMProtectionPolicy from a JSON string
virtual_machine_scale_set_vm_protection_policy_instance = VirtualMachineScaleSetVMProtectionPolicy.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMProtectionPolicy.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_protection_policy_dict = virtual_machine_scale_set_vm_protection_policy_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMProtectionPolicy from a dict
virtual_machine_scale_set_vm_protection_policy_from_dict = VirtualMachineScaleSetVMProtectionPolicy.from_dict(virtual_machine_scale_set_vm_protection_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


