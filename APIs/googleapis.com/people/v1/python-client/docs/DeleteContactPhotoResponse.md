# DeleteContactPhotoResponse

The response for deleting a contact's photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | [**Person**](Person.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_contact_photo_response import DeleteContactPhotoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteContactPhotoResponse from a JSON string
delete_contact_photo_response_instance = DeleteContactPhotoResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteContactPhotoResponse.to_json())

# convert the object into a dict
delete_contact_photo_response_dict = delete_contact_photo_response_instance.to_dict()
# create an instance of DeleteContactPhotoResponse from a dict
delete_contact_photo_response_from_dict = DeleteContactPhotoResponse.from_dict(delete_contact_photo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


