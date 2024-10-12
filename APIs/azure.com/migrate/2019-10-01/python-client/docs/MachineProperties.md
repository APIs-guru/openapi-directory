# MachineProperties

Properties of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_type** | **str** | Boot type of the machine. | [optional] [readonly] 
**created_timestamp** | **datetime** | Time when this machine was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**datacenter_management_server_arm_id** | **str** | ARM ID of the data center as tracked by the Microsoft.OffAzure. | [optional] [readonly] 
**datacenter_management_server_name** | **str** | Name of the server hosting the datacenter management solution. | [optional] [readonly] 
**description** | **str** | Description of the machine | [optional] [readonly] 
**discovery_machine_arm_id** | **str** | ARM ID of the machine as tracked by the Microsoft.OffAzure. | [optional] [readonly] 
**disks** | [**Dict[str, Disk]**](Disk.md) | Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object | [optional] [readonly] 
**display_name** | **str** | User readable name of the machine as defined by the user in their private datacenter. | [optional] [readonly] 
**groups** | **List[str]** | List of references to the groups that the machine is member of. | [optional] [readonly] 
**megabytes_of_memory** | **float** | Memory in Megabytes. | [optional] [readonly] 
**network_adapters** | [**Dict[str, NetworkAdapter]**](NetworkAdapter.md) | Dictionary of network adapters attached to the machine. Key is ID of network adapter. Value is a network adapter object | [optional] [readonly] 
**number_of_cores** | **int** | Processor count. | [optional] [readonly] 
**operating_system_name** | **str** | Operating System name of the machine. | [optional] [readonly] 
**operating_system_type** | **str** | Operating System type of the machine. | [optional] [readonly] 
**operating_system_version** | **str** | Operating System version of the machine. | [optional] [readonly] 
**updated_timestamp** | **datetime** | Time when this machine was last updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.machine_properties import MachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MachineProperties from a JSON string
machine_properties_instance = MachineProperties.from_json(json)
# print the JSON string representation of the object
print(MachineProperties.to_json())

# convert the object into a dict
machine_properties_dict = machine_properties_instance.to_dict()
# create an instance of MachineProperties from a dict
machine_properties_from_dict = MachineProperties.from_dict(machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


