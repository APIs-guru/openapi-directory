# GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation

Face detection annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thumbnail** | **bytearray** | The thumbnail of a person&#39;s face. | [optional] 
**tracks** | [**List[GoogleCloudVideointelligenceV1p1beta1Track]**](GoogleCloudVideointelligenceV1p1beta1Track.md) | The face tracks with attributes. | [optional] 
**version** | **str** | Feature version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p1beta1_face_detection_annotation import GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation from a JSON string
google_cloud_videointelligence_v1p1beta1_face_detection_annotation_instance = GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p1beta1_face_detection_annotation_dict = google_cloud_videointelligence_v1p1beta1_face_detection_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation from a dict
google_cloud_videointelligence_v1p1beta1_face_detection_annotation_from_dict = GoogleCloudVideointelligenceV1p1beta1FaceDetectionAnnotation.from_dict(google_cloud_videointelligence_v1p1beta1_face_detection_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


