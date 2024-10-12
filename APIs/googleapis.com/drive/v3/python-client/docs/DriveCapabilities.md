# DriveCapabilities

Output only. Capabilities the current user has on this shared drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_add_children** | **bool** | Output only. Whether the current user can add children to folders in this shared drive. | [optional] 
**can_change_copy_requires_writer_permission_restriction** | **bool** | Output only. Whether the current user can change the &#x60;copyRequiresWriterPermission&#x60; restriction of this shared drive. | [optional] 
**can_change_domain_users_only_restriction** | **bool** | Output only. Whether the current user can change the &#x60;domainUsersOnly&#x60; restriction of this shared drive. | [optional] 
**can_change_drive_background** | **bool** | Output only. Whether the current user can change the background of this shared drive. | [optional] 
**can_change_drive_members_only_restriction** | **bool** | Output only. Whether the current user can change the &#x60;driveMembersOnly&#x60; restriction of this shared drive. | [optional] 
**can_change_sharing_folders_requires_organizer_permission_restriction** | **bool** | Output only. Whether the current user can change the &#x60;sharingFoldersRequiresOrganizerPermission&#x60; restriction of this shared drive. | [optional] 
**can_comment** | **bool** | Output only. Whether the current user can comment on files in this shared drive. | [optional] 
**can_copy** | **bool** | Output only. Whether the current user can copy files in this shared drive. | [optional] 
**can_delete_children** | **bool** | Output only. Whether the current user can delete children from folders in this shared drive. | [optional] 
**can_delete_drive** | **bool** | Output only. Whether the current user can delete this shared drive. Attempting to delete the shared drive may still fail if there are untrashed items inside the shared drive. | [optional] 
**can_download** | **bool** | Output only. Whether the current user can download files in this shared drive. | [optional] 
**can_edit** | **bool** | Output only. Whether the current user can edit files in this shared drive | [optional] 
**can_list_children** | **bool** | Output only. Whether the current user can list the children of folders in this shared drive. | [optional] 
**can_manage_members** | **bool** | Output only. Whether the current user can add members to this shared drive or remove them or change their role. | [optional] 
**can_read_revisions** | **bool** | Output only. Whether the current user can read the revisions resource of files in this shared drive. | [optional] 
**can_rename** | **bool** | Output only. Whether the current user can rename files or folders in this shared drive. | [optional] 
**can_rename_drive** | **bool** | Output only. Whether the current user can rename this shared drive. | [optional] 
**can_reset_drive_restrictions** | **bool** | Output only. Whether the current user can reset the shared drive restrictions to defaults. | [optional] 
**can_share** | **bool** | Output only. Whether the current user can share files or folders in this shared drive. | [optional] 
**can_trash_children** | **bool** | Output only. Whether the current user can trash children from folders in this shared drive. | [optional] 

## Example

```python
from openapi_client.models.drive_capabilities import DriveCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of DriveCapabilities from a JSON string
drive_capabilities_instance = DriveCapabilities.from_json(json)
# print the JSON string representation of the object
print(DriveCapabilities.to_json())

# convert the object into a dict
drive_capabilities_dict = drive_capabilities_instance.to_dict()
# create an instance of DriveCapabilities from a dict
drive_capabilities_from_dict = DriveCapabilities.from_dict(drive_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


