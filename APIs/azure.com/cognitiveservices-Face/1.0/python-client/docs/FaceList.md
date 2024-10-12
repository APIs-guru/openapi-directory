# FaceList

Face list object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_list_id** | **str** | FaceListId of the target face list. | 
**persisted_faces** | [**List[PersistedFace]**](PersistedFace.md) | An array of persisted faces within the face list or large face list. | [optional] 
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.face_list import FaceList

# TODO update the JSON string below
json = "{}"
# create an instance of FaceList from a JSON string
face_list_instance = FaceList.from_json(json)
# print the JSON string representation of the object
print(FaceList.to_json())

# convert the object into a dict
face_list_dict = face_list_instance.to_dict()
# create an instance of FaceList from a dict
face_list_from_dict = FaceList.from_dict(face_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


