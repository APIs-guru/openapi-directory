# GoogleCloudVisionV1p4beta1FaceAnnotation

A face annotation object contains the results of face detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anger_likelihood** | **str** | Anger likelihood. | [optional] 
**blurred_likelihood** | **str** | Blurred likelihood. | [optional] 
**bounding_poly** | [**GoogleCloudVisionV1p4beta1BoundingPoly**](GoogleCloudVisionV1p4beta1BoundingPoly.md) |  | [optional] 
**detection_confidence** | **float** | Detection confidence. Range [0, 1]. | [optional] 
**fd_bounding_poly** | [**GoogleCloudVisionV1p4beta1BoundingPoly**](GoogleCloudVisionV1p4beta1BoundingPoly.md) |  | [optional] 
**headwear_likelihood** | **str** | Headwear likelihood. | [optional] 
**joy_likelihood** | **str** | Joy likelihood. | [optional] 
**landmarking_confidence** | **float** | Face landmarking confidence. Range [0, 1]. | [optional] 
**landmarks** | [**List[GoogleCloudVisionV1p4beta1FaceAnnotationLandmark]**](GoogleCloudVisionV1p4beta1FaceAnnotationLandmark.md) | Detected face landmarks. | [optional] 
**pan_angle** | **float** | Yaw angle, which indicates the leftward/rightward angle that the face is pointing relative to the vertical plane perpendicular to the image. Range [-180,180]. | [optional] 
**recognition_result** | [**List[GoogleCloudVisionV1p4beta1FaceRecognitionResult]**](GoogleCloudVisionV1p4beta1FaceRecognitionResult.md) | Additional recognition information. Only computed if image_context.face_recognition_params is provided, **and** a match is found to a Celebrity in the input CelebritySet. This field is sorted in order of decreasing confidence values. | [optional] 
**roll_angle** | **float** | Roll angle, which indicates the amount of clockwise/anti-clockwise rotation of the face relative to the image vertical about the axis perpendicular to the face. Range [-180,180]. | [optional] 
**sorrow_likelihood** | **str** | Sorrow likelihood. | [optional] 
**surprise_likelihood** | **str** | Surprise likelihood. | [optional] 
**tilt_angle** | **float** | Pitch angle, which indicates the upwards/downwards angle that the face is pointing relative to the image&#39;s horizontal plane. Range [-180,180]. | [optional] 
**under_exposed_likelihood** | **str** | Under-exposed likelihood. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_face_annotation import GoogleCloudVisionV1p4beta1FaceAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1FaceAnnotation from a JSON string
google_cloud_vision_v1p4beta1_face_annotation_instance = GoogleCloudVisionV1p4beta1FaceAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1FaceAnnotation.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_face_annotation_dict = google_cloud_vision_v1p4beta1_face_annotation_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1FaceAnnotation from a dict
google_cloud_vision_v1p4beta1_face_annotation_from_dict = GoogleCloudVisionV1p4beta1FaceAnnotation.from_dict(google_cloud_vision_v1p4beta1_face_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


