# CopyOtherContactToMyContactsGroupRequest

A request to copy an \"Other contact\" to my contacts group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_mask** | **str** | Required. A field mask to restrict which fields are copied into the new contact. Valid values are: * emailAddresses * names * phoneNumbers | [optional] 
**read_mask** | **str** | Optional. A field mask to restrict which fields on the person are returned. Multiple fields can be specified by separating them with commas. Defaults to the copy mask with metadata and membership fields if not set. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined | [optional] 
**sources** | **List[str]** | Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. | [optional] 

## Example

```python
from openapi_client.models.copy_other_contact_to_my_contacts_group_request import CopyOtherContactToMyContactsGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CopyOtherContactToMyContactsGroupRequest from a JSON string
copy_other_contact_to_my_contacts_group_request_instance = CopyOtherContactToMyContactsGroupRequest.from_json(json)
# print the JSON string representation of the object
print(CopyOtherContactToMyContactsGroupRequest.to_json())

# convert the object into a dict
copy_other_contact_to_my_contacts_group_request_dict = copy_other_contact_to_my_contacts_group_request_instance.to_dict()
# create an instance of CopyOtherContactToMyContactsGroupRequest from a dict
copy_other_contact_to_my_contacts_group_request_from_dict = CopyOtherContactToMyContactsGroupRequest.from_dict(copy_other_contact_to_my_contacts_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


