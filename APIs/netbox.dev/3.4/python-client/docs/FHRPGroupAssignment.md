# FHRPGroupAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**group** | [**NestedFHRPGroup**](NestedFHRPGroup.md) |  | 
**id** | **int** |  | [optional] [readonly] 
**interface** | **object** |  | [optional] [readonly] 
**interface_id** | **int** |  | 
**interface_type** | **str** |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**priority** | **int** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.fhrp_group_assignment import FHRPGroupAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of FHRPGroupAssignment from a JSON string
fhrp_group_assignment_instance = FHRPGroupAssignment.from_json(json)
# print the JSON string representation of the object
print(FHRPGroupAssignment.to_json())

# convert the object into a dict
fhrp_group_assignment_dict = fhrp_group_assignment_instance.to_dict()
# create an instance of FHRPGroupAssignment from a dict
fhrp_group_assignment_from_dict = FHRPGroupAssignment.from_dict(fhrp_group_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


