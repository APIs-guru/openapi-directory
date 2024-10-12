# RoleRequestPartial

A new role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the role.  | [optional] 
**required_fields** | **List[str]** | A list of required field names.  | [optional] 

## Example

```python
from openapi_client.models.role_request_partial import RoleRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of RoleRequestPartial from a JSON string
role_request_partial_instance = RoleRequestPartial.from_json(json)
# print the JSON string representation of the object
print(RoleRequestPartial.to_json())

# convert the object into a dict
role_request_partial_dict = role_request_partial_instance.to_dict()
# create an instance of RoleRequestPartial from a dict
role_request_partial_from_dict = RoleRequestPartial.from_dict(role_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


