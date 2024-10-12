# UnifiedFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | Optional description of the file | [optional] 
**downloadable** | **bool** | Whether the current user can download this file | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**export_formats** | **List[str]** | The available file formats when exporting this file. | [optional] 
**exportable** | **bool** | Whether the current file is exportable to other file formats. This property is relevant for proprietary file formats such as Google Docs or Dropbox Paper. | [optional] 
**id** | **str** | A unique identifier for an object. | [readonly] 
**mime_type** | **str** | The MIME type of the file. | [optional] 
**name** | **str** | The name of the file | 
**owner** | [**Owner**](Owner.md) |  | [optional] 
**parent_folders** | [**List[LinkedFolder]**](LinkedFolder.md) | The parent folders of the file, starting from the root | [optional] 
**parent_folders_complete** | **bool** | Whether the list of parent folders is complete. Some connectors only return the direct parent of a file | [optional] 
**path** | **str** | The full path of the file or folder (includes the file name) | [optional] 
**permissions** | [**UnifiedFilePermissions**](UnifiedFilePermissions.md) |  | [optional] 
**size** | **int** | The size of the file in bytes | [optional] 
**type** | [**FileType**](FileType.md) |  | 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.unified_file import UnifiedFile

# TODO update the JSON string below
json = "{}"
# create an instance of UnifiedFile from a JSON string
unified_file_instance = UnifiedFile.from_json(json)
# print the JSON string representation of the object
print(UnifiedFile.to_json())

# convert the object into a dict
unified_file_dict = unified_file_instance.to_dict()
# create an instance of UnifiedFile from a dict
unified_file_from_dict = UnifiedFile.from_dict(unified_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


