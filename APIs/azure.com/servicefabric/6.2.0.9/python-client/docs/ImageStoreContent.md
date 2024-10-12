# ImageStoreContent

Information about the image store content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**store_files** | [**List[FileInfo]**](FileInfo.md) | The list of image store file info objects represents files found under the given image store relative path. | [optional] 
**store_folders** | [**List[FolderInfo]**](FolderInfo.md) | The list of image store folder info objects represents subfolders found under the given image store relative path. | [optional] 

## Example

```python
from openapi_client.models.image_store_content import ImageStoreContent

# TODO update the JSON string below
json = "{}"
# create an instance of ImageStoreContent from a JSON string
image_store_content_instance = ImageStoreContent.from_json(json)
# print the JSON string representation of the object
print(ImageStoreContent.to_json())

# convert the object into a dict
image_store_content_dict = image_store_content_instance.to_dict()
# create an instance of ImageStoreContent from a dict
image_store_content_from_dict = ImageStoreContent.from_dict(image_store_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


