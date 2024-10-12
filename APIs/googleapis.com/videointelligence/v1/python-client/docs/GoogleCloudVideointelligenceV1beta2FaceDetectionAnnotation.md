# GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation

Face detection annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnail** | **bytearray** | The thumbnail of a person&#39;s face. | [optional] 
**tracks** | [**List[GoogleCloudVideointelligenceV1beta2Track]**](GoogleCloudVideointelligenceV1beta2Track.md) | The face tracks with attributes. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_face_detection_annotation import GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation from a JSON string
google_cloud_videointelligence_v1beta2_face_detection_annotation_instance = GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_face_detection_annotation_dict = google_cloud_videointelligence_v1beta2_face_detection_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation from a dict
google_cloud_videointelligence_v1beta2_face_detection_annotation_from_dict = GoogleCloudVideointelligenceV1beta2FaceDetectionAnnotation.from_dict(google_cloud_videointelligence_v1beta2_face_detection_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


