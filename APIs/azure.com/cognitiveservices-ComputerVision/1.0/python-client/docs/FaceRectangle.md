# FaceRectangle

An object describing face rectangle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Height measured from the top-left point of the face. | [optional] 
**left** | **int** | X-coordinate of the top left point of the face. | [optional] 
**top** | **int** | Y-coordinate of the top left point of the face. | [optional] 
**width** | **int** | Width measured from the top-left point of the face. | [optional] 

## Example

```python
from openapi_client.models.face_rectangle import FaceRectangle

# TODO update the JSON string below
json = "{}"
# create an instance of FaceRectangle from a JSON string
face_rectangle_instance = FaceRectangle.from_json(json)
# print the JSON string representation of the object
print(FaceRectangle.to_json())

# convert the object into a dict
face_rectangle_dict = face_rectangle_instance.to_dict()
# create an instance of FaceRectangle from a dict
face_rectangle_from_dict = FaceRectangle.from_dict(face_rectangle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


