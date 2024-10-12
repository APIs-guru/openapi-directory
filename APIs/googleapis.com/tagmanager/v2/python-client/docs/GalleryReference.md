# GalleryReference

Represents the link between a custom template and an entry on the Community Template Gallery site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | The name of the host for the community gallery template. | [optional] 
**is_modified** | **bool** | If a user has manually edited the community gallery template. | [optional] 
**owner** | **str** | The name of the owner for the community gallery template. | [optional] 
**repository** | **str** | The name of the repository for the community gallery template. | [optional] 
**signature** | **str** | The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery. | [optional] 
**version** | **str** | The version of the community gallery template. | [optional] 

## Example

```python
from openapi_client.models.gallery_reference import GalleryReference

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryReference from a JSON string
gallery_reference_instance = GalleryReference.from_json(json)
# print the JSON string representation of the object
print(GalleryReference.to_json())

# convert the object into a dict
gallery_reference_dict = gallery_reference_instance.to_dict()
# create an instance of GalleryReference from a dict
gallery_reference_from_dict = GalleryReference.from_dict(gallery_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


