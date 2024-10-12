# VirtualMachineDetails

Details of a VirtualMachine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**core_count** | **int** | Number of CPU cores in the VirtualMachine. Must be non-negative. | [optional] 
**create_time** | **str** | VM creation timestamp. | [optional] 
**guest_os** | [**GuestOsDetails**](GuestOsDetails.md) |  | [optional] 
**memory_mb** | **int** | The amount of memory in the VirtualMachine. Must be non-negative. | [optional] 
**os_family** | **str** | What family the OS belong to, if known. | [optional] 
**os_name** | **str** | The name of the operating system running on the VirtualMachine. | [optional] 
**os_version** | **str** | The version of the operating system running on the virtual machine. | [optional] 
**platform** | [**PlatformDetails**](PlatformDetails.md) |  | [optional] 
**power_state** | **str** | Power state of VM (poweredOn or poweredOff). | [optional] 
**vcenter_folder** | **str** | Folder name in vCenter where asset resides. | [optional] 
**vcenter_url** | **str** | vCenter URL used in collection. | [optional] 
**vcenter_vm_id** | **str** | vCenter VM ID. | [optional] 
**vm_architecture** | [**VirtualMachineArchitectureDetails**](VirtualMachineArchitectureDetails.md) |  | [optional] 
**vm_disks** | [**VirtualMachineDiskDetails**](VirtualMachineDiskDetails.md) |  | [optional] 
**vm_name** | **str** | Virtual Machine display name. | [optional] 
**vm_network** | [**VirtualMachineNetworkDetails**](VirtualMachineNetworkDetails.md) |  | [optional] 
**vm_uuid** | **str** | Virtual Machine unique identifier. | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_details import VirtualMachineDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineDetails from a JSON string
virtual_machine_details_instance = VirtualMachineDetails.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineDetails.to_json())

# convert the object into a dict
virtual_machine_details_dict = virtual_machine_details_instance.to_dict()
# create an instance of VirtualMachineDetails from a dict
virtual_machine_details_from_dict = VirtualMachineDetails.from_dict(virtual_machine_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


