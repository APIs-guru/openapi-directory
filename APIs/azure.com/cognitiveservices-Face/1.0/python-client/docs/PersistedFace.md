# PersistedFace

PersonFace object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**persisted_face_id** | **str** | The persistedFaceId of the target face, which is persisted and will not expire. Different from faceId created by Face - Detect and will expire in 24 hours after the detection call. | 
**user_data** | **str** | User-provided data attached to the face. The size limit is 1KB. | [optional] 

## Example

```python
from openapi_client.models.persisted_face import PersistedFace

# TODO update the JSON string below
json = "{}"
# create an instance of PersistedFace from a JSON string
persisted_face_instance = PersistedFace.from_json(json)
# print the JSON string representation of the object
print(PersistedFace.to_json())

# convert the object into a dict
persisted_face_dict = persisted_face_instance.to_dict()
# create an instance of PersistedFace from a dict
persisted_face_from_dict = PersistedFace.from_dict(persisted_face_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


