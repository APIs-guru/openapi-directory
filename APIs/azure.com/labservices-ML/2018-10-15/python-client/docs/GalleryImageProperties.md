# GalleryImageProperties

The gallery image properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the gallery image. | [optional] [readonly] 
**created_date** | **datetime** | The creation date of the gallery image. | [optional] [readonly] 
**description** | **str** | The description of the gallery image. | [optional] [readonly] 
**icon** | **str** | The icon of the gallery image. | [optional] [readonly] 
**image_reference** | [**GalleryImageReference**](GalleryImageReference.md) |  | [optional] 
**is_enabled** | **bool** | Indicates whether this gallery image is enabled. | [optional] 
**is_override** | **bool** | Indicates whether this gallery has been overridden for this lab account | [optional] 
**is_plan_authorized** | **bool** | Indicates if the plan has been authorized for programmatic deployment. | [optional] 
**latest_operation_result** | [**LatestOperationResult**](LatestOperationResult.md) |  | [optional] 
**plan_id** | **str** | The third party plan that applies to this image | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 

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


