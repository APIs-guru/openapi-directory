# PermissionChange

Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_permissions** | [**List[Permission]**](Permission.md) | Lists all Permission objects added. | [optional] 
**removed_permissions** | [**List[Permission]**](Permission.md) | Lists all Permission objects removed. | [optional] 

## Example

```python
from openapi_client.models.permission_change import PermissionChange

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionChange from a JSON string
permission_change_instance = PermissionChange.from_json(json)
# print the JSON string representation of the object
print(PermissionChange.to_json())

# convert the object into a dict
permission_change_dict = permission_change_instance.to_dict()
# create an instance of PermissionChange from a dict
permission_change_from_dict = PermissionChange.from_dict(permission_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


