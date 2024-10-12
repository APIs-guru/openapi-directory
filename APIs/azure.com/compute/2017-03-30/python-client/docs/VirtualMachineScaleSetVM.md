# VirtualMachineScaleSetVM

Describes a virtual machine scale set virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | The virtual machine instance ID. | [optional] [readonly] 
**plan** | [**Plan**](Plan.md) |  | [optional] 
**properties** | [**VirtualMachineScaleSetVMProperties**](VirtualMachineScaleSetVMProperties.md) |  | [optional] 
**resources** | [**List[VirtualMachineExtension]**](VirtualMachineExtension.md) | The virtual machine child extension resources. | [optional] [readonly] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm import VirtualMachineScaleSetVM

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVM from a JSON string
virtual_machine_scale_set_vm_instance = VirtualMachineScaleSetVM.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVM.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_dict = virtual_machine_scale_set_vm_instance.to_dict()
# create an instance of VirtualMachineScaleSetVM from a dict
virtual_machine_scale_set_vm_from_dict = VirtualMachineScaleSetVM.from_dict(virtual_machine_scale_set_vm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


