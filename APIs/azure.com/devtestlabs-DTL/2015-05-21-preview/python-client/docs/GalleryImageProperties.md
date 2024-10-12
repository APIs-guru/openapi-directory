# GalleryImageProperties

Properties of a gallery image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the gallery image. | [optional] 
**created_date** | **datetime** | The creation date of the gallery image. | [optional] 
**description** | **str** | The description of the gallery image. | [optional] 
**enabled** | **bool** | Indicates whether this gallery image is enabled. | [optional] 
**icon** | **str** | The icon of the gallery image. | [optional] 
**image_reference** | [**GalleryImageReference**](GalleryImageReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.gallery_image_properties import GalleryImageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageProperties from a JSON string
gallery_image_properties_instance = GalleryImageProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryImageProperties.to_json())

# convert the object into a dict
gallery_image_properties_dict = gallery_image_properties_instance.to_dict()
# create an instance of GalleryImageProperties from a dict
gallery_image_properties_from_dict = GalleryImageProperties.from_dict(gallery_image_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


