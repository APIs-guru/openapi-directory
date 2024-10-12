# VirtualMachineConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_disks** | [**List[DataDisk]**](DataDisk.md) | This property must be specified if the compute nodes in the pool need to have empty data disks attached to them. | [optional] 
**image_reference** | [**ImageReference**](ImageReference.md) |  | 
**license_type** | **str** | This only applies to images that contain the Windows operating system, and should only be used when you hold valid on-premises licenses for the nodes which will be deployed. If omitted, no on-premises licensing discount is applied. Values are:   Windows_Server - The on-premises license is for Windows Server.  Windows_Client - The on-premises license is for Windows Client.  | [optional] 
**node_agent_sku_id** | **str** | The Batch node agent is a program that runs on each node in the pool, and provides the command-and-control interface between the node and the Batch service. There are different implementations of the node agent, known as SKUs, for different operating systems. You must specify a node agent SKU which matches the selected image reference. To get the list of supported node agent SKUs along with their list of verified image references, see the &#39;List supported node agent SKUs&#39; operation. | 
**os_disk** | [**OSDisk**](OSDisk.md) |  | [optional] 
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


