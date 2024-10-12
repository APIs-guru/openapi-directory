# VirtualMachineScaleSetVMReimageParameters

Describes a Virtual Machine Scale Set VM Reimage Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**temp_disk** | **bool** | Specifies whether to reimage temp disk. Default value: false. Note: This temp disk reimage parameter is only supported for VM/VMSS with Ephemeral OS disk. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_reimage_parameters import VirtualMachineScaleSetVMReimageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMReimageParameters from a JSON string
virtual_machine_scale_set_vm_reimage_parameters_instance = VirtualMachineScaleSetVMReimageParameters.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMReimageParameters.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_reimage_parameters_dict = virtual_machine_scale_set_vm_reimage_parameters_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMReimageParameters from a dict
virtual_machine_scale_set_vm_reimage_parameters_from_dict = VirtualMachineScaleSetVMReimageParameters.from_dict(virtual_machine_scale_set_vm_reimage_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


