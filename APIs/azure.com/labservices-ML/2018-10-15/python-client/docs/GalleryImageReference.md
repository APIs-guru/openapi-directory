# GalleryImageReference

The reference information for an Azure Marketplace image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | The offer of the gallery image. | [optional] 
**os_type** | **str** | The OS type of the gallery image. | [optional] 
**publisher** | **str** | The publisher of the gallery image. | [optional] 
**sku** | **str** | The SKU of the gallery image. | [optional] 
**version** | **str** | The version of the gallery image. | [optional] 

## Example

```python
from openapi_client.models.gallery_image_reference import GalleryImageReference

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageReference from a JSON string
gallery_image_reference_instance = GalleryImageReference.from_json(json)
# print the JSON string representation of the object
print(GalleryImageReference.to_json())

# convert the object into a dict
gallery_image_reference_dict = gallery_image_reference_instance.to_dict()
# create an instance of GalleryImageReference from a dict
gallery_image_reference_from_dict = GalleryImageReference.from_dict(gallery_image_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


