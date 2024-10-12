# GalleryImageVersionList

The List Gallery Image version operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of gallery Image Versions. Call ListNext() with this to fetch the next page of gallery Image Versions. | [optional] 
**value** | [**List[GalleryImageVersion]**](GalleryImageVersion.md) | A list of gallery Image Versions. | 

## Example

```python
from openapi_client.models.gallery_image_version_list import GalleryImageVersionList

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageVersionList from a JSON string
gallery_image_version_list_instance = GalleryImageVersionList.from_json(json)
# print the JSON string representation of the object
print(GalleryImageVersionList.to_json())

# convert the object into a dict
gallery_image_version_list_dict = gallery_image_version_list_instance.to_dict()
# create an instance of GalleryImageVersionList from a dict
gallery_image_version_list_from_dict = GalleryImageVersionList.from_dict(gallery_image_version_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


