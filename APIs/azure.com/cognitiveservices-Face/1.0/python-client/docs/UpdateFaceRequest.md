# UpdateFaceRequest

Request to update face data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_data** | **str** | User-provided data attached to the face. The size limit is 1KB. | [optional] 

## Example

```python
from openapi_client.models.update_face_request import UpdateFaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateFaceRequest from a JSON string
update_face_request_instance = UpdateFaceRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateFaceRequest.to_json())

# convert the object into a dict
update_face_request_dict = update_face_request_instance.to_dict()
# create an instance of UpdateFaceRequest from a dict
update_face_request_from_dict = UpdateFaceRequest.from_dict(update_face_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


