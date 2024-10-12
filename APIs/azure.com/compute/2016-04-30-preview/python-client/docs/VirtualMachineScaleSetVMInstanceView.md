# VirtualMachineScaleSetVMInstanceView

The instance view of a virtual machine scale set VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_diagnostics** | [**BootDiagnosticsInstanceView**](BootDiagnosticsInstanceView.md) |  | [optional] 
**disks** | [**List[DiskInstanceView]**](DiskInstanceView.md) | The disks information. | [optional] 
**extensions** | [**List[VirtualMachineExtensionInstanceView]**](VirtualMachineExtensionInstanceView.md) | The extensions information. | [optional] 
**placement_group_id** | **str** | The placement group in which the VM is running. If the VM is deallocated it will not have a placementGroupId. | [optional] 
**platform_fault_domain** | **int** | The Fault Domain count. | [optional] 
**platform_update_domain** | **int** | The Update Domain count. | [optional] 
**rdp_thumb_print** | **str** | The Remote desktop certificate thumbprint. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**vm_agent** | [**VirtualMachineAgentInstanceView**](VirtualMachineAgentInstanceView.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_scale_set_vm_instance_view import VirtualMachineScaleSetVMInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineScaleSetVMInstanceView from a JSON string
virtual_machine_scale_set_vm_instance_view_instance = VirtualMachineScaleSetVMInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineScaleSetVMInstanceView.to_json())

# convert the object into a dict
virtual_machine_scale_set_vm_instance_view_dict = virtual_machine_scale_set_vm_instance_view_instance.to_dict()
# create an instance of VirtualMachineScaleSetVMInstanceView from a dict
virtual_machine_scale_set_vm_instance_view_from_dict = VirtualMachineScaleSetVMInstanceView.from_dict(virtual_machine_scale_set_vm_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


