# Annotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after_selected_text** | **str** | Anchor text after excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. | [optional] 
**before_selected_text** | **str** | Anchor text before excerpt. For requests, if the user bookmarked a screen that has no flowing text on it, then this field should be empty. | [optional] 
**client_version_ranges** | [**AnnotationClientVersionRanges**](AnnotationClientVersionRanges.md) |  | [optional] 
**created** | **str** | Timestamp for the created time of this annotation. | [optional] 
**current_version_ranges** | [**AnnotationCurrentVersionRanges**](AnnotationCurrentVersionRanges.md) |  | [optional] 
**data** | **str** | User-created data for this annotation. | [optional] 
**deleted** | **bool** | Indicates that this annotation is deleted. | [optional] 
**highlight_style** | **str** | The highlight style for this annotation. | [optional] 
**id** | **str** | Id of this annotation, in the form of a GUID. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**layer_id** | **str** | The layer this annotation is for. | [optional] 
**layer_summary** | [**AnnotationLayerSummary**](AnnotationLayerSummary.md) |  | [optional] 
**page_ids** | **List[str]** | Pages that this annotation spans. | [optional] 
**selected_text** | **str** | Excerpt from the volume. | [optional] 
**self_link** | **str** | URL to this resource. | [optional] 
**updated** | **str** | Timestamp for the last time this annotation was modified. | [optional] 
**volume_id** | **str** | The volume that this annotation belongs to. | [optional] 

## Example

```python
from openapi_client.models.annotation import Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of Annotation from a JSON string
annotation_instance = Annotation.from_json(json)
# print the JSON string representation of the object
print(Annotation.to_json())

# convert the object into a dict
annotation_dict = annotation_instance.to_dict()
# create an instance of Annotation from a dict
annotation_from_dict = Annotation.from_dict(annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


