# GoogleCloudDatacatalogV1ImportEntriesMetadata

Metadata message for long-running operation returned by the ImportEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Status]**](Status.md) | Partial errors that are encountered during the ImportEntries operation. There is no guarantee that all the encountered errors are reported. However, if no errors are reported, it means that no errors were encountered. | [optional] 
**state** | **str** | State of the import operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_import_entries_metadata import GoogleCloudDatacatalogV1ImportEntriesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ImportEntriesMetadata from a JSON string
google_cloud_datacatalog_v1_import_entries_metadata_instance = GoogleCloudDatacatalogV1ImportEntriesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ImportEntriesMetadata.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_import_entries_metadata_dict = google_cloud_datacatalog_v1_import_entries_metadata_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ImportEntriesMetadata from a dict
google_cloud_datacatalog_v1_import_entries_metadata_from_dict = GoogleCloudDatacatalogV1ImportEntriesMetadata.from_dict(google_cloud_datacatalog_v1_import_entries_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


