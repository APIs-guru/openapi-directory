# UpdateContactPhotoRequest

A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**person_fields** | **str** | Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to empty if not set, which will skip the post mutate get. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined | [optional] 
**photo_bytes** | **bytearray** | Required. Raw photo bytes | [optional] 
**sources** | **List[str]** | Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. | [optional] 

## Example

```python
from openapi_client.models.update_contact_photo_request import UpdateContactPhotoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateContactPhotoRequest from a JSON string
update_contact_photo_request_instance = UpdateContactPhotoRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateContactPhotoRequest.to_json())

# convert the object into a dict
update_contact_photo_request_dict = update_contact_photo_request_instance.to_dict()
# create an instance of UpdateContactPhotoRequest from a dict
update_contact_photo_request_from_dict = UpdateContactPhotoRequest.from_dict(update_contact_photo_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


