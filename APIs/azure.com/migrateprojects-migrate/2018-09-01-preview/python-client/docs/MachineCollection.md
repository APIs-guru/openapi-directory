# MachineCollection

Collection of machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the value of nextLink. | [optional] 
**value** | [**List[Machine]**](Machine.md) | Gets or sets the machines. | [optional] 

## Example

```python
from openapi_client.models.machine_collection import MachineCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MachineCollection from a JSON string
machine_collection_instance = MachineCollection.from_json(json)
# print the JSON string representation of the object
print(MachineCollection.to_json())

# convert the object into a dict
machine_collection_dict = machine_collection_instance.to_dict()
# create an instance of MachineCollection from a dict
machine_collection_from_dict = MachineCollection.from_dict(machine_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


