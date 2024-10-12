# VirtualMachineInstanceView

The instance view of a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_diagnostics** | [**BootDiagnosticsInstanceView**](BootDiagnosticsInstanceView.md) |  | [optional] 
**computer_name** | **str** | The computer name assigned to the virtual machine. | [optional] 
**disks** | [**List[DiskInstanceView]**](DiskInstanceView.md) | The virtual machine disk information. | [optional] 
**extensions** | [**List[VirtualMachineExtensionInstanceView]**](VirtualMachineExtensionInstanceView.md) | The extensions information. | [optional] 
**hyper_v_generation** | **str** | Specifies the HyperVGeneration Type associated with a resource | [optional] 
**maintenance_redeploy_status** | [**MaintenanceRedeployStatus**](MaintenanceRedeployStatus.md) |  | [optional] 
**os_name** | **str** | The Operating System running on the virtual machine. | [optional] 
**os_version** | **str** | The version of Operating System running on the virtual machine. | [optional] 
**platform_fault_domain** | **int** | Specifies the fault domain of the virtual machine. | [optional] 
**platform_update_domain** | **int** | Specifies the update domain of the virtual machine. | [optional] 
**rdp_thumb_print** | **str** | The Remote desktop certificate thumbprint. | [optional] 
**statuses** | [**List[InstanceViewStatus]**](InstanceViewStatus.md) | The resource status information. | [optional] 
**vm_agent** | [**VirtualMachineAgentInstanceView**](VirtualMachineAgentInstanceView.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_instance_view import VirtualMachineInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineInstanceView from a JSON string
virtual_machine_instance_view_instance = VirtualMachineInstanceView.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineInstanceView.to_json())

# convert the object into a dict
virtual_machine_instance_view_dict = virtual_machine_instance_view_instance.to_dict()
# create an instance of VirtualMachineInstanceView from a dict
virtual_machine_instance_view_from_dict = VirtualMachineInstanceView.from_dict(virtual_machine_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


