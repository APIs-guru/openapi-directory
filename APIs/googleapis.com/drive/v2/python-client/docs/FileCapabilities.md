# FileCapabilities

Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_accept_ownership** | **bool** | Output only. Whether the current user is the pending owner of the file. Not populated for shared drive files. | [optional] 
**can_add_children** | **bool** | Output only. Whether the current user can add children to this folder. This is always false when the item is not a folder. | [optional] 
**can_add_folder_from_another_drive** | **bool** | Output only. Whether the current user can add a folder from another drive (different shared drive or My Drive) to this folder. This is false when the item is not a folder. Only populated for items in shared drives. | [optional] 
**can_add_my_drive_parent** | **bool** | Output only. Whether the current user can add a parent for the item without removing an existing parent in the same request. Not populated for shared drive files. | [optional] 
**can_change_copy_requires_writer_permission** | **bool** | Output only. Whether the current user can change the &#x60;copyRequiresWriterPermission&#x60; restriction of this file. | [optional] 
**can_change_restricted_download** | **bool** | Output only. Deprecated. | [optional] 
**can_change_security_update_enabled** | **bool** | Output only. Whether the current user can change the securityUpdateEnabled field on link share metadata. | [optional] 
**can_comment** | **bool** | Output only. Whether the current user can comment on this file. | [optional] 
**can_copy** | **bool** | Output only. Whether the current user can copy this file. For an item in a shared drive, whether the current user can copy non-folder descendants of this item, or this item itself if it is not a folder. | [optional] 
**can_delete** | **bool** | Output only. Whether the current user can delete this file. | [optional] 
**can_delete_children** | **bool** | Output only. Whether the current user can delete children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. | [optional] 
**can_download** | **bool** | Output only. Whether the current user can download this file. | [optional] 
**can_edit** | **bool** | Output only. Whether the current user can edit this file. Other factors may limit the type of changes a user can make to a file. For example, see &#x60;canChangeCopyRequiresWriterPermission&#x60; or &#x60;canModifyContent&#x60;. | [optional] 
**can_list_children** | **bool** | Output only. Whether the current user can list the children of this folder. This is always false when the item is not a folder. | [optional] 
**can_modify_content** | **bool** | Output only. Whether the current user can modify the content of this file. | [optional] 
**can_modify_content_restriction** | **bool** | Deprecated: Output only. Use one of &#x60;canModifyEditorContentRestriction&#x60;, &#x60;canModifyOwnerContentRestriction&#x60; or &#x60;canRemoveContentRestriction&#x60;. | [optional] 
**can_modify_editor_content_restriction** | **bool** | Output only. Whether the current user can add or modify content restrictions on the file which are editor restricted. | [optional] 
**can_modify_labels** | **bool** | Output only. Whether the current user can modify the labels on the file. | [optional] 
**can_modify_owner_content_restriction** | **bool** | Output only. Whether the current user can add or modify content restrictions which are owner restricted. | [optional] 
**can_move_children_out_of_drive** | **bool** | Output only. Whether the current user can move children of this folder outside of the shared drive. This is false when the item is not a folder. Only populated for items in shared drives. | [optional] 
**can_move_children_out_of_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canMoveChildrenOutOfDrive&#x60; instead. | [optional] 
**can_move_children_within_drive** | **bool** | Output only. Whether the current user can move children of this folder within this drive. This is false when the item is not a folder. Note that a request to move the child may still fail depending on the current user&#39;s access to the child and to the destination folder. | [optional] 
**can_move_children_within_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canMoveChildrenWithinDrive&#x60; instead. | [optional] 
**can_move_item_into_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canMoveItemOutOfDrive&#x60; instead. | [optional] 
**can_move_item_out_of_drive** | **bool** | Output only. Whether the current user can move this item outside of this drive by changing its parent. Note that a request to change the parent of the item may still fail depending on the new parent that is being added. | [optional] 
**can_move_item_out_of_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canMoveItemOutOfDrive&#x60; instead. | [optional] 
**can_move_item_within_drive** | **bool** | Output only. Whether the current user can move this item within this drive. Note that a request to change the parent of the item may still fail depending on the new parent that is being added and the parent that is being removed. | [optional] 
**can_move_item_within_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canMoveItemWithinDrive&#x60; instead. | [optional] 
**can_move_team_drive_item** | **bool** | Output only. Deprecated: Use &#x60;canMoveItemWithinDrive&#x60; or &#x60;canMoveItemOutOfDrive&#x60; instead. | [optional] 
**can_read_drive** | **bool** | Output only. Whether the current user can read the shared drive to which this file belongs. Only populated for items in shared drives. | [optional] 
**can_read_labels** | **bool** | Output only. Whether the current user can read the labels on the file. | [optional] 
**can_read_revisions** | **bool** | Output only. Whether the current user can read the revisions resource of this file. For a shared drive item, whether revisions of non-folder descendants of this item, or this item itself if it is not a folder, can be read. | [optional] 
**can_read_team_drive** | **bool** | Output only. Deprecated: Use &#x60;canReadDrive&#x60; instead. | [optional] 
**can_remove_children** | **bool** | Output only. Whether the current user can remove children from this folder. This is always false when the item is not a folder. For a folder in a shared drive, use &#x60;canDeleteChildren&#x60; or &#x60;canTrashChildren&#x60; instead. | [optional] 
**can_remove_content_restriction** | **bool** | Output only. Whether there is a content restriction on the file that can be removed by the current user. | [optional] 
**can_remove_my_drive_parent** | **bool** | Output only. Whether the current user can remove a parent from the item without adding another parent in the same request. Not populated for shared drive files. | [optional] 
**can_rename** | **bool** | Output only. Whether the current user can rename this file. | [optional] 
**can_share** | **bool** | Output only. Whether the current user can modify the sharing settings for this file. | [optional] 
**can_trash** | **bool** | Output only. Whether the current user can move this file to trash. | [optional] 
**can_trash_children** | **bool** | Output only. Whether the current user can trash children of this folder. This is false when the item is not a folder. Only populated for items in shared drives. | [optional] 
**can_untrash** | **bool** | Output only. Whether the current user can restore this file from trash. | [optional] 

## Example

```python
from openapi_client.models.file_capabilities import FileCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of FileCapabilities from a JSON string
file_capabilities_instance = FileCapabilities.from_json(json)
# print the JSON string representation of the object
print(FileCapabilities.to_json())

# convert the object into a dict
file_capabilities_dict = file_capabilities_instance.to_dict()
# create an instance of FileCapabilities from a dict
file_capabilities_from_dict = FileCapabilities.from_dict(file_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


