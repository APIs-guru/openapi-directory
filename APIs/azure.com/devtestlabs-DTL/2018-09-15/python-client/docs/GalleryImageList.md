# GalleryImageList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[GalleryImage]**](GalleryImage.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.gallery_image_list import GalleryImageList

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageList from a JSON string
gallery_image_list_instance = GalleryImageList.from_json(json)
# print the JSON string representation of the object
print(GalleryImageList.to_json())

# convert the object into a dict
gallery_image_list_dict = gallery_image_list_instance.to_dict()
# create an instance of GalleryImageList from a dict
gallery_image_list_from_dict = GalleryImageList.from_dict(gallery_image_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


