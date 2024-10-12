# PermissionGrant

Configuration for an Android permission and its grant state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission** | **str** | The Android permission or group, e.g. android.permission.READ_CALENDAR or android.permission_group.CALENDAR. | [optional] 
**policy** | **str** | The policy for granting the permission. | [optional] 

## Example

```python
from openapi_client.models.permission_grant import PermissionGrant

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionGrant from a JSON string
permission_grant_instance = PermissionGrant.from_json(json)
# print the JSON string representation of the object
print(PermissionGrant.to_json())

# convert the object into a dict
permission_grant_dict = permission_grant_instance.to_dict()
# create an instance of PermissionGrant from a dict
permission_grant_from_dict = PermissionGrant.from_dict(permission_grant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


