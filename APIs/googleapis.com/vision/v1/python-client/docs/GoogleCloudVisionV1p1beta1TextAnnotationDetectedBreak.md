# GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak

Detected start or end of a structural component.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_prefix** | **bool** | True if break prepends the element. | [optional] 
**type** | **str** | Detected break type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p1beta1_text_annotation_detected_break import GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak from a JSON string
google_cloud_vision_v1p1beta1_text_annotation_detected_break_instance = GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak.to_json())

# convert the object into a dict
google_cloud_vision_v1p1beta1_text_annotation_detected_break_dict = google_cloud_vision_v1p1beta1_text_annotation_detected_break_instance.to_dict()
# create an instance of GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak from a dict
google_cloud_vision_v1p1beta1_text_annotation_detected_break_from_dict = GoogleCloudVisionV1p1beta1TextAnnotationDetectedBreak.from_dict(google_cloud_vision_v1p1beta1_text_annotation_detected_break_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


