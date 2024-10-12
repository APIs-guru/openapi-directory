# GoogleCloudVideointelligenceV1p3beta1TextAnnotation

Annotations related to one detected OCR text snippet. This will contain the corresponding text, confidence value, and frame level information for each detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segments** | [**List[GoogleCloudVideointelligenceV1p3beta1TextSegment]**](GoogleCloudVideointelligenceV1p3beta1TextSegment.md) | All video segments where OCR detected text appears. | [optional] 
**text** | **str** | The detected text. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_text_annotation import GoogleCloudVideointelligenceV1p3beta1TextAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1TextAnnotation from a JSON string
google_cloud_videointelligence_v1p3beta1_text_annotation_instance = GoogleCloudVideointelligenceV1p3beta1TextAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1TextAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_text_annotation_dict = google_cloud_videointelligence_v1p3beta1_text_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1TextAnnotation from a dict
google_cloud_videointelligence_v1p3beta1_text_annotation_from_dict = GoogleCloudVideointelligenceV1p3beta1TextAnnotation.from_dict(google_cloud_videointelligence_v1p3beta1_text_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


