# BatchUpdateContactsRequest

A request to update a batch of contacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**Dict[str, Person]**](Person.md) | Required. A map of resource names to the person data to be updated. Allows up to 200 contacts in a single request. | [optional] 
**read_mask** | **str** | Required. A field mask to restrict which fields on each person are returned. Multiple fields can be specified by separating them with commas. If read mask is left empty, the post-mutate-get is skipped and no data will be returned in the response. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined | [optional] 
**sources** | **List[str]** | Optional. A mask of what source types to return. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. | [optional] 
**update_mask** | **str** | Required. A field mask to restrict which fields on the person are updated. Multiple fields can be specified by separating them with commas. All specified fields will be replaced, or cleared if left empty for each person. Valid values are: * addresses * biographies * birthdays * calendarUrls * clientData * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * relations * sipAddresses * urls * userDefined | [optional] 

## Example

```python
from openapi_client.models.batch_update_contacts_request import BatchUpdateContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateContactsRequest from a JSON string
batch_update_contacts_request_instance = BatchUpdateContactsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateContactsRequest.to_json())

# convert the object into a dict
batch_update_contacts_request_dict = batch_update_contacts_request_instance.to_dict()
# create an instance of BatchUpdateContactsRequest from a dict
batch_update_contacts_request_from_dict = BatchUpdateContactsRequest.from_dict(batch_update_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


