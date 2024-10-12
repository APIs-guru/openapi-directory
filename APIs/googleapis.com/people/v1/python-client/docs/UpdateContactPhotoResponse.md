# UpdateContactPhotoResponse

The response for updating a contact's photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person** | [**Person**](Person.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_contact_photo_response import UpdateContactPhotoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateContactPhotoResponse from a JSON string
update_contact_photo_response_instance = UpdateContactPhotoResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateContactPhotoResponse.to_json())

# convert the object into a dict
update_contact_photo_response_dict = update_contact_photo_response_instance.to_dict()
# create an instance of UpdateContactPhotoResponse from a dict
update_contact_photo_response_from_dict = UpdateContactPhotoResponse.from_dict(update_contact_photo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


