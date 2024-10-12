# AssessedMachineProperties

Properties of an assessed machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boot_type** | **str** | Boot type of the machine. | [optional] [readonly] 
**created_timestamp** | **datetime** | Time when this machine was created. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**datacenter_container** | **str** | Container defined in the management solution that this machine is part of in the datacenter. | [optional] [readonly] 
**datacenter_machine_id** | **str** | ID of the machine as tracked by the datacenter management solution. | [optional] [readonly] 
**datacenter_management_server** | **str** | Name of the server hosting the datacenter management solution. | [optional] [readonly] 
**datacenter_management_server_id** | **str** | ID of the server hosting the datacenter management solution. | [optional] [readonly] 
**description** | **str** | Description of the machine | [optional] [readonly] 
**discovered_timestamp** | **datetime** | Time when this machine was discovered by Azure Migrate agent. Date-Time represented in ISO-8601 format. | [optional] [readonly] 
**disks** | [**Dict[str, AssessedDisk]**](AssessedDisk.md) | Dictionary of disks attached to the machine. Key is ID of disk. Value is a disk object. | [optional] [readonly] 
**display_name** | **str** | User readable name of the machine as defined by the user in their private datacenter. | [optional] [readonly] 
**groups** | **List[str]** | List of references to the groups that the machine is member of. | [optional] [readonly] 
**megabytes_of_memory** | **float** | Memory in Megabytes. | [optional] [readonly] 
**megabytes_of_memory_for_recommended_size** | **float** | Megabytes of memory in the Recommended Azure VM Size. | [optional] [readonly] 
**monthly_bandwidth_cost** | **float** | Monthly network cost estimate for the network adapters that are attached to this machine as a group, for a 31-day month. | [optional] [readonly] 
**monthly_compute_cost_for_recommended_size** | **float** | Compute Cost for a 31-day month, if the machine is migrated to Azure with the Recommended Size. | [optional] [readonly] 
**monthly_storage_cost** | **float** | Monthly storage cost estimate for the disks that are attached to this machine as a group, for a 31-day month. | [optional] [readonly] 
**network_adapters** | [**Dict[str, AssessedNetworkAdapter]**](AssessedNetworkAdapter.md) | Dictionary of network adapters attached to the machine. Key is name of the adapter. Value is a network adapter object. | [optional] [readonly] 
**number_of_cores** | **int** | Processor count. | [optional] [readonly] 
**number_of_cores_for_recommended_size** | **int** | Number of CPU cores in the Recommended Azure VM Size. | [optional] [readonly] 
**operating_system** | **str** | Operating System of the machine. | [optional] [readonly] 
**percentage_cores_utilization** | **float** | Utilization percentage of the processor core as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment. | [optional] [readonly] 
**percentage_cores_utilization_data_points_expected** | **int** | Expected data points for percentage of cores utilization. | [optional] [readonly] 
**percentage_cores_utilization_data_points_received** | **int** | Received data points for percentage of cores utilization. | [optional] [readonly] 
**percentage_memory_utilization** | **float** | Utilization percentage of the memory as observed in the private data center, in the Time Range selected on Assessment, reported as the Percentile value based on the percentile number selected in assessment. | [optional] [readonly] 
**percentage_memory_utilization_data_points_expected** | **int** | Expected data points for percentage of memory utilization. | [optional] [readonly] 
**percentage_memory_utilization_data_points_received** | **int** | Received data points for percentage of memory utilization. | [optional] [readonly] 
**recommended_size** | **str** | Recommended Azure size for this machine. | [optional] [readonly] 
**suitability** | **str** | Whether machine is suitable for migration to Azure. | [optional] [readonly] 
**suitability_explanation** | **str** | If machine is not ready to be migrated, this explains the reasons and mitigation steps. | [optional] [readonly] 
**updated_timestamp** | **datetime** | Time when this machine was last updated. Date-Time represented in ISO-8601 format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assessed_machine_properties import AssessedMachineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssessedMachineProperties from a JSON string
assessed_machine_properties_instance = AssessedMachineProperties.from_json(json)
# print the JSON string representation of the object
print(AssessedMachineProperties.to_json())

# convert the object into a dict
assessed_machine_properties_dict = assessed_machine_properties_instance.to_dict()
# create an instance of AssessedMachineProperties from a dict
assessed_machine_properties_from_dict = AssessedMachineProperties.from_dict(assessed_machine_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


