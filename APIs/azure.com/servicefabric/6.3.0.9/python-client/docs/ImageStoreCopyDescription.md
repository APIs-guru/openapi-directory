# ImageStoreCopyDescription

Information about how to copy image store content from one image store relative path to another image store relative path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_mark_file** | **bool** | Indicates whether to check mark file during copying. The property is true if checking mark file is required, false otherwise. The mark file is used to check whether the folder is well constructed. If the property is true and mark file does not exist, the copy is skipped. | [optional] 
**remote_destination** | **str** | The relative path of destination image store content to be copied to. | 
**remote_source** | **str** | The relative path of source image store content to be copied from. | 
**skip_files** | **List[str]** | The list of the file names to be skipped for copying. | [optional] 

## Example

```python
from openapi_client.models.image_store_copy_description import ImageStoreCopyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ImageStoreCopyDescription from a JSON string
image_store_copy_description_instance = ImageStoreCopyDescription.from_json(json)
# print the JSON string representation of the object
print(ImageStoreCopyDescription.to_json())

# convert the object into a dict
image_store_copy_description_dict = image_store_copy_description_instance.to_dict()
# create an instance of ImageStoreCopyDescription from a dict
image_store_copy_description_from_dict = ImageStoreCopyDescription.from_dict(image_store_copy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


