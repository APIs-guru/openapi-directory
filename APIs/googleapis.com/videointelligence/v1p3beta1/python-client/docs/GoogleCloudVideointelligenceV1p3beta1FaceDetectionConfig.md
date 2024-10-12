# GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig

Config for FACE_DETECTION.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_attributes** | **bool** | Whether to enable face attributes detection, such as glasses, dark_glasses, mouth_open etc. Ignored if &#39;include_bounding_boxes&#39; is set to false. | [optional] 
**include_bounding_boxes** | **bool** | Whether bounding boxes are included in the face annotation output. | [optional] 
**model** | **str** | Model to use for face detection. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_videointelligence_v1p3beta1_face_detection_config import GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig from a JSON string
google_cloud_videointelligence_v1p3beta1_face_detection_config_instance = GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig.to_json())

# convert the object into a dict
google_cloud_videointelligence_v1p3beta1_face_detection_config_dict = google_cloud_videointelligence_v1p3beta1_face_detection_config_instance.to_dict()
# create an instance of GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig from a dict
google_cloud_videointelligence_v1p3beta1_face_detection_config_from_dict = GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig.from_dict(google_cloud_videointelligence_v1p3beta1_face_detection_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


