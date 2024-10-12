# VirtualMachineScaleSetVMInstanceRequiredIDs

Specifies a list of virtual machine instance IDs from the VM scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_ids** | **List[str]** | The virtual machine scale set instance ids. | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_instance_required_ids import VirtualMachineScaleSetVMInstanceRequiredIDs

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMInstanceRequiredIDs from a JSON string
virtual_machine_scale_set_vm_instance_required_ids_instance = VirtualMachineScaleSetVMInstanceRequiredIDs.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMInstanceRequiredIDs.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_instance_required_ids_dict = virtual_machine_scale_set_vm_instance_required_ids_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMInstanceRequiredIDs from a dict
virtual_machine_scale_set_vm_instance_required_ids_from_dict = VirtualMachineScaleSetVMInstanceRequiredIDs.from_dict(virtual_machine_scale_set_vm_instance_required_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


