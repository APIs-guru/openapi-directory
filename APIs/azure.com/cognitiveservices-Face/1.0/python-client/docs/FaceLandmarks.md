# FaceLandmarks

A collection of 27-point face landmarks pointing to the important positions of face components.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eye_left_bottom** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_left_inner** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_left_outer** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_left_top** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_right_bottom** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_right_inner** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_right_outer** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eye_right_top** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eyebrow_left_inner** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eyebrow_left_outer** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eyebrow_right_inner** | [**Coordinate**](Coordinate.md) |  | [optional] 
**eyebrow_right_outer** | [**Coordinate**](Coordinate.md) |  | [optional] 
**mouth_left** | [**Coordinate**](Coordinate.md) |  | [optional] 
**mouth_right** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_left_alar_out_tip** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_left_alar_top** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_right_alar_out_tip** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_right_alar_top** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_root_left** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_root_right** | [**Coordinate**](Coordinate.md) |  | [optional] 
**nose_tip** | [**Coordinate**](Coordinate.md) |  | [optional] 
**pupil_left** | [**Coordinate**](Coordinate.md) |  | [optional] 
**pupil_right** | [**Coordinate**](Coordinate.md) |  | [optional] 
**under_lip_bottom** | [**Coordinate**](Coordinate.md) |  | [optional] 
**under_lip_top** | [**Coordinate**](Coordinate.md) |  | [optional] 
**upper_lip_bottom** | [**Coordinate**](Coordinate.md) |  | [optional] 
**upper_lip_top** | [**Coordinate**](Coordinate.md) |  | [optional] 

## Example

```python
from openapi_client.models.face_landmarks import FaceLandmarks

# TODO update the JSON string below
json = "{}"
# create an instance of FaceLandmarks from a JSON string
face_landmarks_instance = FaceLandmarks.from_json(json)
# print the JSON string representation of the object
print(FaceLandmarks.to_json())

# convert the object into a dict
face_landmarks_dict = face_landmarks_instance.to_dict()
# create an instance of FaceLandmarks from a dict
face_landmarks_from_dict = FaceLandmarks.from_dict(face_landmarks_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


