# GalleryImage

Represents an image from the Azure Marketplace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryImageProperties**](GalleryImageProperties.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_image import GalleryImage

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImage from a JSON string
gallery_image_instance = GalleryImage.from_json(json)
# print the JSON string representation of the object
print(GalleryImage.to_json())

# convert the object into a dict
gallery_image_dict = gallery_image_instance.to_dict()
# create an instance of GalleryImage from a dict
gallery_image_from_dict = GalleryImage.from_dict(gallery_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


