# FolderPendingRenameInfo

Only present if the folder is part of an ongoing rename folder operation. Contains information which can be used to query the operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_id** | **str** | The ID of the rename folder operation. | [optional] 

## Example

```python
from openapi_client.models.folder_pending_rename_info import FolderPendingRenameInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FolderPendingRenameInfo from a JSON string
folder_pending_rename_info_instance = FolderPendingRenameInfo.from_json(json)
# print the JSON string representation of the object
print(FolderPendingRenameInfo.to_json())

# convert the object into a dict
folder_pending_rename_info_dict = folder_pending_rename_info_instance.to_dict()
# create an instance of FolderPendingRenameInfo from a dict
folder_pending_rename_info_from_dict = FolderPendingRenameInfo.from_dict(folder_pending_rename_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


