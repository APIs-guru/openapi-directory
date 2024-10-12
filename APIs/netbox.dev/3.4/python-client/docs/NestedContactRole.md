# NestedContactRole


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_contact_role import NestedContactRole

# TODO update the JSON string below
json = "{}"
# create an instance of NestedContactRole from a JSON string
nested_contact_role_instance = NestedContactRole.from_json(json)
# print the JSON string representation of the object
print(NestedContactRole.to_json())

# convert the object into a dict
nested_contact_role_dict = nested_contact_role_instance.to_dict()
# create an instance of NestedContactRole from a dict
nested_contact_role_from_dict = NestedContactRole.from_dict(nested_contact_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


