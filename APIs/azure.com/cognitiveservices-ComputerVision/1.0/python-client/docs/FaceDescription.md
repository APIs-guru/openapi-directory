# FaceDescription

An object describing a face identified in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **int** | Possible age of the face. | [optional] 
**face_rectangle** | [**FaceRectangle**](FaceRectangle.md) |  | [optional] 
**gender** | **str** | Possible gender of the face. | [optional] 

## Example

```python
from openapi_client.models.face_description import FaceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of FaceDescription from a JSON string
face_description_instance = FaceDescription.from_json(json)
# print the JSON string representation of the object
print(FaceDescription.to_json())

# convert the object into a dict
face_description_dict = face_description_instance.to_dict()
# create an instance of FaceDescription from a dict
face_description_from_dict = FaceDescription.from_dict(face_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


