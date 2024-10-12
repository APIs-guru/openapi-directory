# GoogleCloudDatacatalogV1TaggedEntry

Wrapper containing Entry and information about Tags that should and should not be attached to it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absent_tags** | [**List[GoogleCloudDatacatalogV1Tag]**](GoogleCloudDatacatalogV1Tag.md) | Optional. Tags that should be deleted from the Data Catalog. Caller should populate template name and column only. | [optional] 
**present_tags** | [**List[GoogleCloudDatacatalogV1Tag]**](GoogleCloudDatacatalogV1Tag.md) | Optional. Tags that should be ingested into the Data Catalog. Caller should populate template name, column and fields. | [optional] 
**v1_entry** | [**GoogleCloudDatacatalogV1Entry**](GoogleCloudDatacatalogV1Entry.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_tagged_entry import GoogleCloudDatacatalogV1TaggedEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1TaggedEntry from a JSON string
google_cloud_datacatalog_v1_tagged_entry_instance = GoogleCloudDatacatalogV1TaggedEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1TaggedEntry.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_tagged_entry_dict = google_cloud_datacatalog_v1_tagged_entry_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1TaggedEntry from a dict
google_cloud_datacatalog_v1_tagged_entry_from_dict = GoogleCloudDatacatalogV1TaggedEntry.from_dict(google_cloud_datacatalog_v1_tagged_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


