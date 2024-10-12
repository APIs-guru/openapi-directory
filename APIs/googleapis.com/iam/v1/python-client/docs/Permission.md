# Permission

A permission which can be included by a role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_disabled** | **bool** | The service API associated with the permission is not enabled. | [optional] 
**custom_roles_support_level** | **str** | The current custom role support level. | [optional] 
**description** | **str** | A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles. | [optional] 
**name** | **str** | The name of this Permission. | [optional] 
**only_in_predefined_roles** | **bool** |  | [optional] 
**primary_permission** | **str** | The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary_permission. | [optional] 
**stage** | **str** | The current launch stage of the permission. | [optional] 
**title** | **str** | The title of this Permission. | [optional] 

## Example

```python
from openapi_client.models.permission import Permission

# TODO update the JSON string below
json = "{}"
# create an instance of Permission from a JSON string
permission_instance = Permission.from_json(json)
# print the JSON string representation of the object
print(Permission.to_json())

# convert the object into a dict
permission_dict = permission_instance.to_dict()
# create an instance of Permission from a dict
permission_from_dict = Permission.from_dict(permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


