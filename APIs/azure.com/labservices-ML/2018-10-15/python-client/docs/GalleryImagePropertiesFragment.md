# GalleryImagePropertiesFragment

The gallery image properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_enabled** | **bool** | Indicates whether this gallery image is enabled. | [optional] 
**is_override** | **bool** | Indicates whether this gallery has been overridden for this lab account | [optional] 
**is_plan_authorized** | **bool** | Indicates if the plan has been authorized for programmatic deployment. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

## Example

```python
from openapi_client.models.gallery_image_properties_fragment import GalleryImagePropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImagePropertiesFragment from a JSON string
gallery_image_properties_fragment_instance = GalleryImagePropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(GalleryImagePropertiesFragment.to_json())

# convert the object into a dict
gallery_image_properties_fragment_dict = gallery_image_properties_fragment_instance.to_dict()
# create an instance of GalleryImagePropertiesFragment from a dict
gallery_image_properties_fragment_from_dict = GalleryImagePropertiesFragment.from_dict(gallery_image_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


