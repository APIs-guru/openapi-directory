# GoogleCloudVideointelligenceV1beta2FaceAnnotation

Deprecated. No effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frames** | [**List[GoogleCloudVideointelligenceV1beta2FaceFrame]**](GoogleCloudVideointelligenceV1beta2FaceFrame.md) | All video frames where a face was detected. | [optional] 
**segments** | [**List[GoogleCloudVideointelligenceV1beta2FaceSegment]**](GoogleCloudVideointelligenceV1beta2FaceSegment.md) | All video segments where a face was detected. | [optional] 
**thumbnail** | **bytearray** | Thumbnail of a representative face view (in JPEG format). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1beta2_face_annotation import GoogleCloudVideointelligenceV1beta2FaceAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1beta2FaceAnnotation from a JSON string
google_cloud_videointelligence_v1beta2_face_annotation_instance = GoogleCloudVideointelligenceV1beta2FaceAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1beta2FaceAnnotation.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1beta2_face_annotation_dict = google_cloud_videointelligence_v1beta2_face_annotation_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1beta2FaceAnnotation from a dict
google_cloud_videointelligence_v1beta2_face_annotation_from_dict = GoogleCloudVideointelligenceV1beta2FaceAnnotation.from_dict(google_cloud_videointelligence_v1beta2_face_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


