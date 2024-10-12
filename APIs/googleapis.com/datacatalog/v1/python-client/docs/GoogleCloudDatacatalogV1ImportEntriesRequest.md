# GoogleCloudDatacatalogV1ImportEntriesRequest

Request message for ImportEntries method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_bucket_path** | **str** | Path to a Cloud Storage bucket that contains a dump ready for ingestion. | [optional] 
**job_id** | **str** | Optional. (Optional) Dataplex task job id, if specified will be used as part of ImportEntries LRO ID | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_import_entries_request import GoogleCloudDatacatalogV1ImportEntriesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ImportEntriesRequest from a JSON string
google_cloud_datacatalog_v1_import_entries_request_instance = GoogleCloudDatacatalogV1ImportEntriesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ImportEntriesRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_import_entries_request_dict = google_cloud_datacatalog_v1_import_entries_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ImportEntriesRequest from a dict
google_cloud_datacatalog_v1_import_entries_request_from_dict = GoogleCloudDatacatalogV1ImportEntriesRequest.from_dict(google_cloud_datacatalog_v1_import_entries_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


