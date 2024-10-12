# FileInfo

Information about a image store file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_size** | **str** | The size of file in bytes. | [optional] 
**file_version** | [**FileVersion**](FileVersion.md) |  | [optional] 
**modified_date** | **datetime** | The date and time when the image store file was last modified. | [optional] 
**store_relative_path** | **str** | The file path relative to the image store root path. | [optional] 

## Example

```python
from openapi_client.models.file_info import FileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FileInfo from a JSON string
file_info_instance = FileInfo.from_json(json)
# print the JSON string representation of the object
print(FileInfo.to_json())

# convert the object into a dict
file_info_dict = file_info_instance.to_dict()
# create an instance of FileInfo from a dict
file_info_from_dict = FileInfo.from_dict(file_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


