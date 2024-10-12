# GalleryImageIdentifier

This is the gallery Image Definition identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | **str** | The name of the gallery Image Definition offer. | 
**publisher** | **str** | The name of the gallery Image Definition publisher. | 
**sku** | **str** | The name of the gallery Image Definition SKU. | 

## Example

```python
from openapi_client.models.gallery_image_identifier import GalleryImageIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageIdentifier from a JSON string
gallery_image_identifier_instance = GalleryImageIdentifier.from_json(json)
# print the JSON string representation of the object
print(GalleryImageIdentifier.to_json())

# convert the object into a dict
gallery_image_identifier_dict = gallery_image_identifier_instance.to_dict()
# create an instance of GalleryImageIdentifier from a dict
gallery_image_identifier_from_dict = GalleryImageIdentifier.from_dict(gallery_image_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


