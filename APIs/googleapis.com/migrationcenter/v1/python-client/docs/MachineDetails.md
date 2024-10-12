# MachineDetails

Details of a machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | [**MachineArchitectureDetails**](MachineArchitectureDetails.md) |  | [optional] 
**core_count** | **int** | Number of CPU cores in the machine. Must be non-negative. | [optional] 
**create_time** | **str** | Machine creation time. | [optional] 
**disks** | [**MachineDiskDetails**](MachineDiskDetails.md) |  | [optional] 
**guest_os** | [**GuestOsDetails**](GuestOsDetails.md) |  | [optional] 
**machine_name** | **str** | Machine name. | [optional] 
**memory_mb** | **int** | The amount of memory in the machine. Must be non-negative. | [optional] 
**network** | [**MachineNetworkDetails**](MachineNetworkDetails.md) |  | [optional] 
**platform** | [**PlatformDetails**](PlatformDetails.md) |  | [optional] 
**power_state** | **str** | Power state of the machine. | [optional] 
**uuid** | **str** | Machine unique identifier. | [optional] 

## Example

```python
from openapi_client.models.machine_details import MachineDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MachineDetails from a JSON string
machine_details_instance = MachineDetails.from_json(json)
# print the JSON string representation of the object
print(MachineDetails.to_json())

# convert the object into a dict
machine_details_dict = machine_details_instance.to_dict()
# create an instance of MachineDetails from a dict
machine_details_from_dict = MachineDetails.from_dict(machine_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


