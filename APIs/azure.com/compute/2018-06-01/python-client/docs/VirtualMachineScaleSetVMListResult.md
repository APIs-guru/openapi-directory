# VirtualMachineScaleSetVMListResult

The List Virtual Machine Scale Set VMs operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of Virtual Machine Scale Set VMs. Call ListNext() with this to fetch the next page of VMSS VMs | [optional] 
**value** | [**List[VirtualMachineScaleSetVM]**](VirtualMachineScaleSetVM.md) | The list of virtual machine scale sets VMs. | 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_list_result import VirtualMachineScaleSetVMListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMListResult from a JSON string
virtual_machine_scale_set_vm_list_result_instance = VirtualMachineScaleSetVMListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMListResult.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_list_result_dict = virtual_machine_scale_set_vm_list_result_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMListResult from a dict
virtual_machine_scale_set_vm_list_result_from_dict = VirtualMachineScaleSetVMListResult.from_dict(virtual_machine_scale_set_vm_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


