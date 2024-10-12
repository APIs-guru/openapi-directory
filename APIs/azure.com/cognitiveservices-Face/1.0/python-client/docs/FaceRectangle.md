# FaceRectangle

A rectangle within which a face can be found

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the rectangle, in pixels. | 
**left** | **int** | The distance from the left edge if the image to the left edge of the rectangle, in pixels. | 
**top** | **int** | The distance from the top edge if the image to the top edge of the rectangle, in pixels. | 
**width** | **int** | The width of the rectangle, in pixels. | 

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


