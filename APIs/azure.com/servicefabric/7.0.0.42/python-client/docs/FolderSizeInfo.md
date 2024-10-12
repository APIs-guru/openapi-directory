# FolderSizeInfo

Information of a image store folder size

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**folder_size** | **str** | The size of folder in bytes. | [optional] 
**store_relative_path** | **str** | The remote location within image store. This path is relative to the image store root. | [optional] 

## Example

```python
from openapi_client.models.folder_size_info import FolderSizeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FolderSizeInfo from a JSON string
folder_size_info_instance = FolderSizeInfo.from_json(json)
# print the JSON string representation of the object
print(FolderSizeInfo.to_json())

# convert the object into a dict
folder_size_info_dict = folder_size_info_instance.to_dict()
# create an instance of FolderSizeInfo from a dict
folder_size_info_from_dict = FolderSizeInfo.from_dict(folder_size_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


