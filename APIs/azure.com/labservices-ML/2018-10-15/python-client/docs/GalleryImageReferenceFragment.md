# GalleryImageReferenceFragment

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
from openapi_client.models.gallery_image_reference_fragment import GalleryImageReferenceFragment

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageReferenceFragment from a JSON string
gallery_image_reference_fragment_instance = GalleryImageReferenceFragment.from_json(json)
# print the JSON string representation of the object
print(GalleryImageReferenceFragment.to_json())

# convert the object into a dict
gallery_image_reference_fragment_dict = gallery_image_reference_fragment_instance.to_dict()
# create an instance of GalleryImageReferenceFragment from a dict
gallery_image_reference_fragment_from_dict = GalleryImageReferenceFragment.from_dict(gallery_image_reference_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


