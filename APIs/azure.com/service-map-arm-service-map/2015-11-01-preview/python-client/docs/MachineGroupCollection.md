# MachineGroupCollection

Collection of Machine Group resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to the next set of resources. | [optional] 
**value** | [**List[MachineGroup]**](MachineGroup.md) | Collection of Machine Group resources. | [optional] 

## Example

```python
from openapi_client.models.machine_group_collection import MachineGroupCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MachineGroupCollection from a JSON string
machine_group_collection_instance = MachineGroupCollection.from_json(json)
# print the JSON string representation of the object
print(MachineGroupCollection.to_json())

# convert the object into a dict
machine_group_collection_dict = machine_group_collection_instance.to_dict()
# create an instance of MachineGroupCollection from a dict
machine_group_collection_from_dict = MachineGroupCollection.from_dict(machine_group_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


