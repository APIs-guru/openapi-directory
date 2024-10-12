# GoogleCloudVideointelligenceV1beta2TextAnnotation

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | [**List[GoogleCloudVideointelligenceV1beta2TextSegment]**](GoogleCloudVideointelligenceV1beta2TextSegment.md) | All video segments where OCR detected text appears. | [optional] 
**text** | **str** | The detected text. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_text_annotation import GoogleCloudVideointelligenceV1beta2TextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2TextAnnotation from a JSON string
google_cloud_videointelligence_v1beta2_text_annotation_instance = GoogleCloudVideointelligenceV1beta2TextAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2TextAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_text_annotation_dict = google_cloud_videointelligence_v1beta2_text_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2TextAnnotation from a dict
google_cloud_videointelligence_v1beta2_text_annotation_from_dict = GoogleCloudVideointelligenceV1beta2TextAnnotation.from_dict(google_cloud_videointelligence_v1beta2_text_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


