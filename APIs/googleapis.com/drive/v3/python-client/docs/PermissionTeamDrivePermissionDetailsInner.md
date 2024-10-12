# PermissionTeamDrivePermissionDetailsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inherited** | **bool** | Deprecated: Output only. Use &#x60;permissionDetails/inherited&#x60; instead. | [optional] 
**inherited_from** | **str** | Deprecated: Output only. Use &#x60;permissionDetails/inheritedFrom&#x60; instead. | [optional] 
**role** | **str** | Deprecated: Output only. Use &#x60;permissionDetails/role&#x60; instead. | [optional] 
**team_drive_permission_type** | **str** | Deprecated: Output only. Use &#x60;permissionDetails/permissionType&#x60; instead. | [optional] 

## Example

```python
from openapi_client.models.permission_team_drive_permission_details_inner import PermissionTeamDrivePermissionDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PermissionTeamDrivePermissionDetailsInner from a JSON string
permission_team_drive_permission_details_inner_instance = PermissionTeamDrivePermissionDetailsInner.from_json(json)
# print the JSON string representation of the object
print(PermissionTeamDrivePermissionDetailsInner.to_json())

# convert the object into a dict
permission_team_drive_permission_details_inner_dict = permission_team_drive_permission_details_inner_instance.to_dict()
# create an instance of PermissionTeamDrivePermissionDetailsInner from a dict
permission_team_drive_permission_details_inner_from_dict = PermissionTeamDrivePermissionDetailsInner.from_dict(permission_team_drive_permission_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


