# GoogleFirestoreAdminV1Stats

Backup specific statistics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_count** | **str** | Output only. The total number of documents contained in the backup. | [optional] [readonly] 
**index_count** | **str** | Output only. The total number of index entries contained in the backup. | [optional] [readonly] 
**size_bytes** | **str** | Output only. Summation of the size of all documents and index entries in the backup, measured in bytes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_stats import GoogleFirestoreAdminV1Stats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1Stats from a JSON string
google_firestore_admin_v1_stats_instance = GoogleFirestoreAdminV1Stats.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1Stats.to_json())

# convert the object into a dict
google_firestore_admin_v1_stats_dict = google_firestore_admin_v1_stats_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1Stats from a dict
google_firestore_admin_v1_stats_from_dict = GoogleFirestoreAdminV1Stats.from_dict(google_firestore_admin_v1_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


