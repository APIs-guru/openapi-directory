# MachineCountsByOperatingSystem

Machines by operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linux** | **int** | Number of live Linux machines. | 
**windows** | **int** | Number of live Windows machines. | 

## Example

```python
from openapi_client.models.machine_counts_by_operating_system import MachineCountsByOperatingSystem

# TODO update the JSON string below
json = "{}"
# create an instance of MachineCountsByOperatingSystem from a JSON string
machine_counts_by_operating_system_instance = MachineCountsByOperatingSystem.from_json(json)
# print the JSON string representation of the object
print(MachineCountsByOperatingSystem.to_json())

# convert the object into a dict
machine_counts_by_operating_system_dict = machine_counts_by_operating_system_instance.to_dict()
# create an instance of MachineCountsByOperatingSystem from a dict
machine_counts_by_operating_system_from_dict = MachineCountsByOperatingSystem.from_dict(machine_counts_by_operating_system_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


