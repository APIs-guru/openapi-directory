# PreviewFile

Object with preview image properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**PreviewFileAttributes**](PreviewFileAttributes.md) |  | [optional] 
**id** | **int** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.preview_file import PreviewFile

# TODO update the JSON string below
json = "{}"
# create an instance of PreviewFile from a JSON string
preview_file_instance = PreviewFile.from_json(json)
# print the JSON string representation of the object
print(PreviewFile.to_json())

# convert the object into a dict
preview_file_dict = preview_file_instance.to_dict()
# create an instance of PreviewFile from a dict
preview_file_from_dict = PreviewFile.from_dict(preview_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


