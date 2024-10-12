# MachineListMapRequest

Specifies the computation of a one hope dependency map for a list of machines. The resulting map includes all direct dependencies for the specified machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_ids** | **List[str]** | a list of URIs of machine resources for which to generate the map. | 

## Example

```python
from openapi_client.models.machine_list_map_request import MachineListMapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MachineListMapRequest from a JSON string
machine_list_map_request_instance = MachineListMapRequest.from_json(json)
# print the JSON string representation of the object
print(MachineListMapRequest.to_json())

# convert the object into a dict
machine_list_map_request_dict = machine_list_map_request_instance.to_dict()
# create an instance of MachineListMapRequest from a dict
machine_list_map_request_from_dict = MachineListMapRequest.from_dict(machine_list_map_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


