# GoogleCloudDatacatalogV1ContactsPerson

A contact person for the entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**designation** | **str** | Designation of the person, for example, Data Steward. | [optional] 
**email** | **str** | Email of the person in the format of &#x60;john.doe@xyz&#x60;, &#x60;&#x60;, or &#x60;John Doe&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_contacts_person import GoogleCloudDatacatalogV1ContactsPerson

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ContactsPerson from a JSON string
google_cloud_datacatalog_v1_contacts_person_instance = GoogleCloudDatacatalogV1ContactsPerson.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ContactsPerson.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_contacts_person_dict = google_cloud_datacatalog_v1_contacts_person_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ContactsPerson from a dict
google_cloud_datacatalog_v1_contacts_person_from_dict = GoogleCloudDatacatalogV1ContactsPerson.from_dict(google_cloud_datacatalog_v1_contacts_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


