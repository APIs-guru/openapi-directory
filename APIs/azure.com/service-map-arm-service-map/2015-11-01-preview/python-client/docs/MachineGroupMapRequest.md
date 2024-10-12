# MachineGroupMapRequest

Specifies the computation of a machine group dependency map. A machine group dependency map includes all direct dependencies the machines in the group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_group_id** | **str** | URI of machine group resource for which to generate the map. | 

## Example

```python
from openapi_client.models.machine_group_map_request import MachineGroupMapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MachineGroupMapRequest from a JSON string
machine_group_map_request_instance = MachineGroupMapRequest.from_json(json)
# print the JSON string representation of the object
print(MachineGroupMapRequest.to_json())

# convert the object into a dict
machine_group_map_request_dict = machine_group_map_request_instance.to_dict()
# create an instance of MachineGroupMapRequest from a dict
machine_group_map_request_from_dict = MachineGroupMapRequest.from_dict(machine_group_map_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


