# WritableFHRPGroupAssignment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**group** | **int** |  | 
**id** | **int** |  | [optional] [readonly] 
**interface** | **object** |  | [optional] [readonly] 
**interface_id** | **int** |  | 
**interface_type** | **str** |  | 
**last_updated** | **datetime** |  | [optional] [readonly] 
**priority** | **int** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_fhrp_group_assignment import WritableFHRPGroupAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of WritableFHRPGroupAssignment from a JSON string
writable_fhrp_group_assignment_instance = WritableFHRPGroupAssignment.from_json(json)
# print the JSON string representation of the object
print(WritableFHRPGroupAssignment.to_json())

# convert the object into a dict
writable_fhrp_group_assignment_dict = writable_fhrp_group_assignment_instance.to_dict()
# create an instance of WritableFHRPGroupAssignment from a dict
writable_fhrp_group_assignment_from_dict = WritableFHRPGroupAssignment.from_dict(writable_fhrp_group_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


