# GoogleCloudDatacatalogV1ImportEntriesResponse

Response message for long-running operation returned by the ImportEntries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_entries_count** | **str** | Number of entries deleted as a result of import operation. | [optional] 
**upserted_entries_count** | **str** | Cumulative number of entries created and entries updated as a result of import operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_import_entries_response import GoogleCloudDatacatalogV1ImportEntriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ImportEntriesResponse from a JSON string
google_cloud_datacatalog_v1_import_entries_response_instance = GoogleCloudDatacatalogV1ImportEntriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ImportEntriesResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_import_entries_response_dict = google_cloud_datacatalog_v1_import_entries_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ImportEntriesResponse from a dict
google_cloud_datacatalog_v1_import_entries_response_from_dict = GoogleCloudDatacatalogV1ImportEntriesResponse.from_dict(google_cloud_datacatalog_v1_import_entries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


