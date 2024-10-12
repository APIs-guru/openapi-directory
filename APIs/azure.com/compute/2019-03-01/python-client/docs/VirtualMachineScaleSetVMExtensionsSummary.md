# VirtualMachineScaleSetVMExtensionsSummary

Extensions summary for virtual machines of a virtual machine scale set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The extension name. | [optional] [readonly] 
**statuses_summary** | [**List[VirtualMachineStatusCodeCount]**](VirtualMachineStatusCodeCount.md) | The extensions information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_extensions_summary import VirtualMachineScaleSetVMExtensionsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMExtensionsSummary from a JSON string
virtual_machine_scale_set_vm_extensions_summary_instance = VirtualMachineScaleSetVMExtensionsSummary.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMExtensionsSummary.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_extensions_summary_dict = virtual_machine_scale_set_vm_extensions_summary_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMExtensionsSummary from a dict
virtual_machine_scale_set_vm_extensions_summary_from_dict = VirtualMachineScaleSetVMExtensionsSummary.from_dict(virtual_machine_scale_set_vm_extensions_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


