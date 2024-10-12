# VirtualMachineScaleSetVMInstanceIDs

Specifies a list of virtual machine instance IDs from the VM scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_ids** | **List[str]** | The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_instance_ids import VirtualMachineScaleSetVMInstanceIDs

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMInstanceIDs from a JSON string
virtual_machine_scale_set_vm_instance_ids_instance = VirtualMachineScaleSetVMInstanceIDs.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMInstanceIDs.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_instance_ids_dict = virtual_machine_scale_set_vm_instance_ids_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMInstanceIDs from a dict
virtual_machine_scale_set_vm_instance_ids_from_dict = VirtualMachineScaleSetVMInstanceIDs.from_dict(virtual_machine_scale_set_vm_instance_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


