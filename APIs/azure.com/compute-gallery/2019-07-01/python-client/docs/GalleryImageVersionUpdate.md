# GalleryImageVersionUpdate

Specifies information about the gallery Image Version that you want to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryImageVersionProperties**](GalleryImageVersionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_image_version_update import GalleryImageVersionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageVersionUpdate from a JSON string
gallery_image_version_update_instance = GalleryImageVersionUpdate.from_json(json)
# print the JSON string representation of the object
print(GalleryImageVersionUpdate.to_json())

# convert the object into a dict
gallery_image_version_update_dict = gallery_image_version_update_instance.to_dict()
# create an instance of GalleryImageVersionUpdate from a dict
gallery_image_version_update_from_dict = GalleryImageVersionUpdate.from_dict(gallery_image_version_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


