# RolePartial

A role for a contact

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** | The name of the role.  | [optional] 
**required_fields** | **List[str]** | A list of required field names.  | [optional] 

## Example

```python
from openapi_client.models.role_partial import RolePartial

# TODO update the JSON string below
json = "{}"
# create an instance of RolePartial from a JSON string
role_partial_instance = RolePartial.from_json(json)
# print the JSON string representation of the object
print(RolePartial.to_json())

# convert the object into a dict
role_partial_dict = role_partial_instance.to_dict()
# create an instance of RolePartial from a dict
role_partial_from_dict = RolePartial.from_dict(role_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


