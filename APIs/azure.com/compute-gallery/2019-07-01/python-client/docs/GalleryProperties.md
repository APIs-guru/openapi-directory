# GalleryProperties

Describes the properties of a Shared Image Gallery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this Shared Image Gallery resource. This property is updatable. | [optional] 
**identifier** | [**GalleryIdentifier**](GalleryIdentifier.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_properties import GalleryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryProperties from a JSON string
gallery_properties_instance = GalleryProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryProperties.to_json())

# convert the object into a dict
gallery_properties_dict = gallery_properties_instance.to_dict()
# create an instance of GalleryProperties from a dict
gallery_properties_from_dict = GalleryProperties.from_dict(gallery_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


