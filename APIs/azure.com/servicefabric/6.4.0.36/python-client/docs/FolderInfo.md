# FolderInfo

Information about a image store folder. It includes how many files this folder contains and its image store relative path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_count** | **str** | The number of files from within the image store folder. | [optional] 
**store_relative_path** | **str** | The remote location within image store. This path is relative to the image store root. | [optional] 

## Example

```python
from openapi_client.models.folder_info import FolderInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FolderInfo from a JSON string
folder_info_instance = FolderInfo.from_json(json)
# print the JSON string representation of the object
print(FolderInfo.to_json())

# convert the object into a dict
folder_info_dict = folder_info_instance.to_dict()
# create an instance of FolderInfo from a dict
folder_info_from_dict = FolderInfo.from_dict(folder_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


