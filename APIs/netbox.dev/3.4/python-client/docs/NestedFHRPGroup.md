# NestedFHRPGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**group_id** | **int** |  | 
**id** | **int** |  | [optional] [readonly] 
**protocol** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_fhrp_group import NestedFHRPGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedFHRPGroup from a JSON string
nested_fhrp_group_instance = NestedFHRPGroup.from_json(json)
# print the JSON string representation of the object
print(NestedFHRPGroup.to_json())

# convert the object into a dict
nested_fhrp_group_dict = nested_fhrp_group_instance.to_dict()
# create an instance of NestedFHRPGroup from a dict
nested_fhrp_group_from_dict = NestedFHRPGroup.from_dict(nested_fhrp_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


