# GoogleCloudVideointelligenceV1p2beta1FaceFrame

Deprecated. No effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_bounding_boxes** | [**List[GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBox]**](GoogleCloudVideointelligenceV1p2beta1NormalizedBoundingBox.md) | Normalized Bounding boxes in a frame. There can be more than one boxes if the same face is detected in multiple locations within the current frame. | [optional] 
**time_offset** | **str** | Time-offset, relative to the beginning of the video, corresponding to the video frame for this location. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p2beta1_face_frame import GoogleCloudVideointelligenceV1p2beta1FaceFrame

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p2beta1FaceFrame from a JSON string
google_cloud_videointelligence_v1p2beta1_face_frame_instance = GoogleCloudVideointelligenceV1p2beta1FaceFrame.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p2beta1FaceFrame.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p2beta1_face_frame_dict = google_cloud_videointelligence_v1p2beta1_face_frame_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p2beta1FaceFrame from a dict
google_cloud_videointelligence_v1p2beta1_face_frame_from_dict = GoogleCloudVideointelligenceV1p2beta1FaceFrame.from_dict(google_cloud_videointelligence_v1p2beta1_face_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


