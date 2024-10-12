# GoogleCloudVisionV1p2beta1FaceAnnotationLandmark

A face-specific landmark (for example, a face feature).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**position** | [**GoogleCloudVisionV1p2beta1Position**](GoogleCloudVisionV1p2beta1Position.md) |  | [optional] 
**type** | **str** | Face landmark type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p2beta1_face_annotation_landmark import GoogleCloudVisionV1p2beta1FaceAnnotationLandmark

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p2beta1FaceAnnotationLandmark from a JSON string
google_cloud_vision_v1p2beta1_face_annotation_landmark_instance = GoogleCloudVisionV1p2beta1FaceAnnotationLandmark.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p2beta1FaceAnnotationLandmark.to_json())

# convert the object into a dict
google_cloud_vision_v1p2beta1_face_annotation_landmark_dict = google_cloud_vision_v1p2beta1_face_annotation_landmark_instance.to_dict()
# create an instance of GoogleCloudVisionV1p2beta1FaceAnnotationLandmark from a dict
google_cloud_vision_v1p2beta1_face_annotation_landmark_from_dict = GoogleCloudVisionV1p2beta1FaceAnnotationLandmark.from_dict(google_cloud_vision_v1p2beta1_face_annotation_landmark_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


