# BatchCreateContactsRequest

A request to create a batch of contacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[ContactToCreate]**](ContactToCreate.md) | Required. The contact to create. Allows up to 200 contacts in a single request. | [optional] 
**read_mask** | **str** | Required. A field mask to restrict which fields on each person are returned in the response. Multiple fields can be specified by separating them with commas. If read mask is left empty, the post-mutate-get is skipped and no data will be returned in the response. Valid values are: * addresses * ageRanges * biographies * birthdays * calendarUrls * clientData * coverPhotos * emailAddresses * events * externalIds * genders * imClients * interests * locales * locations * memberships * metadata * miscKeywords * names * nicknames * occupations * organizations * phoneNumbers * photos * relations * sipAddresses * skills * urls * userDefined | [optional] 
**sources** | **List[str]** | Optional. A mask of what source types to return in the post mutate read. Defaults to READ_SOURCE_TYPE_CONTACT and READ_SOURCE_TYPE_PROFILE if not set. | [optional] 

## Example

```python
from openapi_client.models.batch_create_contacts_request import BatchCreateContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateContactsRequest from a JSON string
batch_create_contacts_request_instance = BatchCreateContactsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreateContactsRequest.to_json())

# convert the object into a dict
batch_create_contacts_request_dict = batch_create_contacts_request_instance.to_dict()
# create an instance of BatchCreateContactsRequest from a dict
batch_create_contacts_request_from_dict = BatchCreateContactsRequest.from_dict(batch_create_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


