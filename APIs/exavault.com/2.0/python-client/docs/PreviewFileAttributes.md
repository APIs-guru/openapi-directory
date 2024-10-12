# PreviewFileAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** | Binary image content, base64 encoded. | [optional] 
**image_hash** | **str** | hash of the image. | [optional] 
**page_count** | **int** | Amount of pages available in the file. Used only for multipage documents. | [optional] 
**size** | **int** | Size of the image in bytes. | [optional] 

## Example

```python
from openapi_client.models.preview_file_attributes import PreviewFileAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PreviewFileAttributes from a JSON string
preview_file_attributes_instance = PreviewFileAttributes.from_json(json)
# print the JSON string representation of the object
print(PreviewFileAttributes.to_json())

# convert the object into a dict
preview_file_attributes_dict = preview_file_attributes_instance.to_dict()
# create an instance of PreviewFileAttributes from a dict
preview_file_attributes_from_dict = PreviewFileAttributes.from_dict(preview_file_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


