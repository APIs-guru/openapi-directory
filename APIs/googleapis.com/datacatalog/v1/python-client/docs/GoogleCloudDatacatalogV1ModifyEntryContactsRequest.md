# GoogleCloudDatacatalogV1ModifyEntryContactsRequest

Request message for ModifyEntryContacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**GoogleCloudDatacatalogV1Contacts**](GoogleCloudDatacatalogV1Contacts.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_modify_entry_contacts_request import GoogleCloudDatacatalogV1ModifyEntryContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ModifyEntryContactsRequest from a JSON string
google_cloud_datacatalog_v1_modify_entry_contacts_request_instance = GoogleCloudDatacatalogV1ModifyEntryContactsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ModifyEntryContactsRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_modify_entry_contacts_request_dict = google_cloud_datacatalog_v1_modify_entry_contacts_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ModifyEntryContactsRequest from a dict
google_cloud_datacatalog_v1_modify_entry_contacts_request_from_dict = GoogleCloudDatacatalogV1ModifyEntryContactsRequest.from_dict(google_cloud_datacatalog_v1_modify_entry_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


