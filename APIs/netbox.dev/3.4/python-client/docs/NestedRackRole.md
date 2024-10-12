# NestedRackRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**rack_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_rack_role import NestedRackRole

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRackRole from a JSON string
nested_rack_role_instance = NestedRackRole.from_json(json)
# print the JSON string representation of the object
print(NestedRackRole.to_json())

# convert the object into a dict
nested_rack_role_dict = nested_rack_role_instance.to_dict()
# create an instance of NestedRackRole from a dict
nested_rack_role_from_dict = NestedRackRole.from_dict(nested_rack_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


