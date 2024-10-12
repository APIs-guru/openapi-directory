# Folder

A folder. Only available in buckets with hierarchical namespace enabled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | **str** | The name of the bucket containing this folder. | [optional] 
**create_time** | **datetime** | The creation time of the folder in RFC 3339 format. | [optional] 
**id** | **str** | The ID of the folder, including the bucket name, folder name. | [optional] 
**kind** | **str** | The kind of item this is. For folders, this is always storage#folder. | [optional] [default to 'storage#folder']
**metageneration** | **str** | The version of the metadata for this folder. Used for preconditions and for detecting changes in metadata. | [optional] 
**name** | **str** | The name of the folder. Required if not specified by URL parameter. | [optional] 
**pending_rename_info** | [**FolderPendingRenameInfo**](FolderPendingRenameInfo.md) |  | [optional] 
**self_link** | **str** | The link to this folder. | [optional] 
**update_time** | **datetime** | The modification time of the folder metadata in RFC 3339 format. | [optional] 

## Example

```python
from openapi_client.models.folder import Folder

# TODO update the JSON string below
json = "{}"
# create an instance of Folder from a JSON string
folder_instance = Folder.from_json(json)
# print the JSON string representation of the object
print(Folder.to_json())

# convert the object into a dict
folder_dict = folder_instance.to_dict()
# create an instance of Folder from a dict
folder_from_dict = Folder.from_dict(folder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


