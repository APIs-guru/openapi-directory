# NestedGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_group import NestedGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NestedGroup from a JSON string
nested_group_instance = NestedGroup.from_json(json)
# print the JSON string representation of the object
print(NestedGroup.to_json())

# convert the object into a dict
nested_group_dict = nested_group_instance.to_dict()
# create an instance of NestedGroup from a dict
nested_group_from_dict = NestedGroup.from_dict(nested_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


