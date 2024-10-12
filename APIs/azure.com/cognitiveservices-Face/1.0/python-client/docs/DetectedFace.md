# DetectedFace

Detected Face object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_attributes** | [**FaceAttributes**](FaceAttributes.md) |  | [optional] 
**face_id** | **str** |  | [optional] 
**face_landmarks** | [**FaceLandmarks**](FaceLandmarks.md) |  | [optional] 
**face_rectangle** | [**FaceRectangle**](FaceRectangle.md) |  | 
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]

## Example

```python
from openapi_client.models.detected_face import DetectedFace

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedFace from a JSON string
detected_face_instance = DetectedFace.from_json(json)
# print the JSON string representation of the object
print(DetectedFace.to_json())

# convert the object into a dict
detected_face_dict = detected_face_instance.to_dict()
# create an instance of DetectedFace from a dict
detected_face_from_dict = DetectedFace.from_dict(detected_face_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


