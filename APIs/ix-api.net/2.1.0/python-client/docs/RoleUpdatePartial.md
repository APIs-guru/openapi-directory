# RoleUpdatePartial

A role update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the role.  | [optional] 
**required_fields** | **List[str]** | A list of required field names.  | [optional] 

## Example

```python
from openapi_client.models.role_update_partial import RoleUpdatePartial

# TODO update the JSON string below
json = "{}"
# create an instance of RoleUpdatePartial from a JSON string
role_update_partial_instance = RoleUpdatePartial.from_json(json)
# print the JSON string representation of the object
print(RoleUpdatePartial.to_json())

# convert the object into a dict
role_update_partial_dict = role_update_partial_instance.to_dict()
# create an instance of RoleUpdatePartial from a dict
role_update_partial_from_dict = RoleUpdatePartial.from_dict(role_update_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


