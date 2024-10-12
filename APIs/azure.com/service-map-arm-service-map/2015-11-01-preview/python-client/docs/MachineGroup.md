# MachineGroup

A user-defined logical grouping of machines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Resource ETAG. | [optional] 
**properties** | **object** | Resource properties. | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.machine_group import MachineGroup

# TODO update the JSON string below
json = "{}"
# create an instance of MachineGroup from a JSON string
machine_group_instance = MachineGroup.from_json(json)
# print the JSON string representation of the object
print(MachineGroup.to_json())

# convert the object into a dict
machine_group_dict = machine_group_instance.to_dict()
# create an instance of MachineGroup from a dict
machine_group_from_dict = MachineGroup.from_dict(machine_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


