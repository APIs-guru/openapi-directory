# GoogleCloudVisionV1p4beta1FaceRecognitionResult

Information about a face's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**celebrity** | [**GoogleCloudVisionV1p4beta1Celebrity**](GoogleCloudVisionV1p4beta1Celebrity.md) |  | [optional] 
**confidence** | **float** | Recognition confidence. Range [0, 1]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_vision_v1p4beta1_face_recognition_result import GoogleCloudVisionV1p4beta1FaceRecognitionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudVisionV1p4beta1FaceRecognitionResult from a JSON string
google_cloud_vision_v1p4beta1_face_recognition_result_instance = GoogleCloudVisionV1p4beta1FaceRecognitionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudVisionV1p4beta1FaceRecognitionResult.to_json())

# convert the object into a dict
google_cloud_vision_v1p4beta1_face_recognition_result_dict = google_cloud_vision_v1p4beta1_face_recognition_result_instance.to_dict()
# create an instance of GoogleCloudVisionV1p4beta1FaceRecognitionResult from a dict
google_cloud_vision_v1p4beta1_face_recognition_result_from_dict = GoogleCloudVisionV1p4beta1FaceRecognitionResult.from_dict(google_cloud_vision_v1p4beta1_face_recognition_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


