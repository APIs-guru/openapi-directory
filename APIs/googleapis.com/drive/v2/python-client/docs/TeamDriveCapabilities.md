# TeamDriveCapabilities

Capabilities the current user has on this Team Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_add_children** | **bool** | Whether the current user can add children to folders in this Team Drive. | [optional] 
**can_change_copy_requires_writer_permission_restriction** | **bool** | Whether the current user can change the &#x60;copyRequiresWriterPermission&#x60; restriction of this Team Drive. | [optional] 
**can_change_domain_users_only_restriction** | **bool** | Whether the current user can change the &#x60;domainUsersOnly&#x60; restriction of this Team Drive. | [optional] 
**can_change_sharing_folders_requires_organizer_permission_restriction** | **bool** | Whether the current user can change the &#x60;sharingFoldersRequiresOrganizerPermission&#x60; restriction of this Team Drive. | [optional] 
**can_change_team_drive_background** | **bool** | Whether the current user can change the background of this Team Drive. | [optional] 
**can_change_team_members_only_restriction** | **bool** | Whether the current user can change the &#x60;teamMembersOnly&#x60; restriction of this Team Drive. | [optional] 
**can_comment** | **bool** | Whether the current user can comment on files in this Team Drive. | [optional] 
**can_copy** | **bool** | Whether the current user can copy files in this Team Drive. | [optional] 
**can_delete_children** | **bool** | Whether the current user can delete children from folders in this Team Drive. | [optional] 
**can_delete_team_drive** | **bool** | Whether the current user can delete this Team Drive. Attempting to delete the Team Drive may still fail if there are untrashed items inside the Team Drive. | [optional] 
**can_download** | **bool** | Whether the current user can download files in this Team Drive. | [optional] 
**can_edit** | **bool** | Whether the current user can edit files in this Team Drive | [optional] 
**can_list_children** | **bool** | Whether the current user can list the children of folders in this Team Drive. | [optional] 
**can_manage_members** | **bool** | Whether the current user can add members to this Team Drive or remove them or change their role. | [optional] 
**can_read_revisions** | **bool** | Whether the current user can read the revisions resource of files in this Team Drive. | [optional] 
**can_remove_children** | **bool** | Deprecated: Use &#x60;canDeleteChildren&#x60; or &#x60;canTrashChildren&#x60; instead. | [optional] 
**can_rename** | **bool** | Whether the current user can rename files or folders in this Team Drive. | [optional] 
**can_rename_team_drive** | **bool** | Whether the current user can rename this Team Drive. | [optional] 
**can_reset_team_drive_restrictions** | **bool** | Whether the current user can reset the Team Drive restrictions to defaults. | [optional] 
**can_share** | **bool** | Whether the current user can share files or folders in this Team Drive. | [optional] 
**can_trash_children** | **bool** | Whether the current user can trash children from folders in this Team Drive. | [optional] 

## Example

```python
from openapi_client.models.team_drive_capabilities import TeamDriveCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of TeamDriveCapabilities from a JSON string
team_drive_capabilities_instance = TeamDriveCapabilities.from_json(json)
# print the JSON string representation of the object
print(TeamDriveCapabilities.to_json())

# convert the object into a dict
team_drive_capabilities_dict = team_drive_capabilities_instance.to_dict()
# create an instance of TeamDriveCapabilities from a dict
team_drive_capabilities_from_dict = TeamDriveCapabilities.from_dict(team_drive_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


