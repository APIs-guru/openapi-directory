# SimilarFace

Response body for find similar face operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | A number ranging from 0 to 1 indicating a level of confidence associated with a property. | 
**face_id** | **str** | FaceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call | [optional] 
**persisted_face_id** | **str** | PersistedFaceId of candidate face when find by faceListId. persistedFaceId in face list is persisted and will not expire. As showed in below response | [optional] 

## Example

```python
from openapi_client.models.similar_face import SimilarFace

# TODO update the JSON string below
json = "{}"
# create an instance of SimilarFace from a JSON string
similar_face_instance = SimilarFace.from_json(json)
# print the JSON string representation of the object
print(SimilarFace.to_json())

# convert the object into a dict
similar_face_dict = similar_face_instance.to_dict()
# create an instance of SimilarFace from a dict
similar_face_from_dict = SimilarFace.from_dict(similar_face_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


