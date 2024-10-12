# GalleryImageUpdate

Specifies information about the gallery Image Definition that you want to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryImageProperties**](GalleryImageProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_image_update import GalleryImageUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageUpdate from a JSON string
gallery_image_update_instance = GalleryImageUpdate.from_json(json)
# print the JSON string representation of the object
print(GalleryImageUpdate.to_json())

# convert the object into a dict
gallery_image_update_dict = gallery_image_update_instance.to_dict()
# create an instance of GalleryImageUpdate from a dict
gallery_image_update_from_dict = GalleryImageUpdate.from_dict(gallery_image_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


