# VirtualMachineConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_configuration** | [**ContainerConfiguration**](ContainerConfiguration.md) |  | [optional] 
**data_disks** | [**List[DataDisk]**](DataDisk.md) | This property must be specified if the Compute Nodes in the Pool need to have empty data disks attached to them. This cannot be updated. Each Compute Node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the Compute Node is removed from the Pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine. | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | 
**license_type** | **str** | This only applies to Images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the Compute Nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:   Windows_Server - The on-premises license is for Windows Server.  Windows_Client - The on-premises license is for Windows Client.  | [optional] 
**node_agent_skuid** | **str** | The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the &#39;List supported Compute Node agent SKUs&#39; operation. | 
**windows_configuration** | [**WindowsConfiguration**](WindowsConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_machine_configuration import VirtualMachineConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualMachineConfiguration from a JSON string
virtual_machine_configuration_instance = VirtualMachineConfiguration.from_json(json)
# print the JSON string representation of the object
print(VirtualMachineConfiguration.to_json())

# convert the object into a dict
virtual_machine_configuration_dict = virtual_machine_configuration_instance.to_dict()
# create an instance of VirtualMachineConfiguration from a dict
virtual_machine_configuration_from_dict = VirtualMachineConfiguration.from_dict(virtual_machine_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


