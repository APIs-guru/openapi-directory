# Folder


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | Optional description of the folder | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** | The name of the folder | 
**owner** | [**Owner**](Owner.md) |  | [optional] 
**parent_folders** | [**List[LinkedFolder]**](LinkedFolder.md) | The parent folders of the file, starting from the root | 
**parent_folders_complete** | **bool** | Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder | [optional] [readonly] 
**path** | **str** | The full path of the folder (includes the folder name) | [optional] [readonly] 
**size** | **int** | The size of the folder in bytes | [optional] [readonly] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

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


