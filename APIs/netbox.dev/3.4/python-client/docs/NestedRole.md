# NestedRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 
**vlan_count** | **int** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_role import NestedRole

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRole from a JSON string
nested_role_instance = NestedRole.from_json(json)
# print the JSON string representation of the object
print(NestedRole.to_json())

# convert the object into a dict
nested_role_dict = nested_role_instance.to_dict()
# create an instance of NestedRole from a dict
nested_role_from_dict = NestedRole.from_dict(nested_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


