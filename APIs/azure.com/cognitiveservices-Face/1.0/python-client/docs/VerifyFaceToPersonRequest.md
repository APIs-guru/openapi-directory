# VerifyFaceToPersonRequest

Request body for face to person verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**face_id** | **str** | FaceId of the face, comes from Face - Detect | 
**large_person_group_id** | **str** | Using existing largePersonGroupId and personId for fast loading a specified person. largePersonGroupId is created in LargePersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time. | [optional] 
**person_group_id** | **str** | Using existing personGroupId and personId for fast loading a specified person. personGroupId is created in PersonGroup - Create. Parameter personGroupId and largePersonGroupId should not be provided at the same time. | [optional] 
**person_id** | **str** | Specify a certain person in a person group or a large person group. personId is created in PersonGroup Person - Create or LargePersonGroup Person - Create. | 

## Example

```python
from openapi_client.models.verify_face_to_person_request import VerifyFaceToPersonRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyFaceToPersonRequest from a JSON string
verify_face_to_person_request_instance = VerifyFaceToPersonRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyFaceToPersonRequest.to_json())

# convert the object into a dict
verify_face_to_person_request_dict = verify_face_to_person_request_instance.to_dict()
# create an instance of VerifyFaceToPersonRequest from a dict
verify_face_to_person_request_from_dict = VerifyFaceToPersonRequest.from_dict(verify_face_to_person_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


