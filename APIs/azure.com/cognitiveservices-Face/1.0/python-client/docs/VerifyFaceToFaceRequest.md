# VerifyFaceToFaceRequest

Request body for face to face verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_id1** | **str** | FaceId of the first face, comes from Face - Detect | 
**face_id2** | **str** | FaceId of the second face, comes from Face - Detect | 

## Example

```python
from openapi_client.models.verify_face_to_face_request import VerifyFaceToFaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyFaceToFaceRequest from a JSON string
verify_face_to_face_request_instance = VerifyFaceToFaceRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyFaceToFaceRequest.to_json())

# convert the object into a dict
verify_face_to_face_request_dict = verify_face_to_face_request_instance.to_dict()
# create an instance of VerifyFaceToFaceRequest from a dict
verify_face_to_face_request_from_dict = VerifyFaceToFaceRequest.from_dict(verify_face_to_face_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


