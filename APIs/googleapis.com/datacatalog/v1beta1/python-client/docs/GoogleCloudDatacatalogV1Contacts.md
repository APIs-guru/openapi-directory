# GoogleCloudDatacatalogV1Contacts

Contact people for the entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**people** | [**List[GoogleCloudDatacatalogV1ContactsPerson]**](GoogleCloudDatacatalogV1ContactsPerson.md) | The list of contact people for the entry. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_contacts import GoogleCloudDatacatalogV1Contacts

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1Contacts from a JSON string
google_cloud_datacatalog_v1_contacts_instance = GoogleCloudDatacatalogV1Contacts.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1Contacts.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_contacts_dict = google_cloud_datacatalog_v1_contacts_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1Contacts from a dict
google_cloud_datacatalog_v1_contacts_from_dict = GoogleCloudDatacatalogV1Contacts.from_dict(google_cloud_datacatalog_v1_contacts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


