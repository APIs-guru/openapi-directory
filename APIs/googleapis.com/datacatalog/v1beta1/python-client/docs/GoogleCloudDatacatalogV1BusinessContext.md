# GoogleCloudDatacatalogV1BusinessContext

Business Context of the entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**GoogleCloudDatacatalogV1Contacts**](GoogleCloudDatacatalogV1Contacts.md) |  | [optional] 
**entry_overview** | [**GoogleCloudDatacatalogV1EntryOverview**](GoogleCloudDatacatalogV1EntryOverview.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_business_context import GoogleCloudDatacatalogV1BusinessContext

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1BusinessContext from a JSON string
google_cloud_datacatalog_v1_business_context_instance = GoogleCloudDatacatalogV1BusinessContext.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1BusinessContext.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_business_context_dict = google_cloud_datacatalog_v1_business_context_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1BusinessContext from a dict
google_cloud_datacatalog_v1_business_context_from_dict = GoogleCloudDatacatalogV1BusinessContext.from_dict(google_cloud_datacatalog_v1_business_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


