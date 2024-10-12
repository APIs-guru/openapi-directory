# GoogleFirestoreAdminV1RestoreDatabaseMetadata

Metadata for the long-running operation from the RestoreDatabase request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | The name of the backup restoring from. | [optional] 
**database** | **str** | The name of the database being restored to. | [optional] 
**end_time** | **str** | The time the restore finished, unset for ongoing restores. | [optional] 
**operation_state** | **str** | The operation state of the restore. | [optional] 
**progress_percentage** | [**GoogleFirestoreAdminV1Progress**](GoogleFirestoreAdminV1Progress.md) |  | [optional] 
**start_time** | **str** | The time the restore was started. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_restore_database_metadata import GoogleFirestoreAdminV1RestoreDatabaseMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1RestoreDatabaseMetadata from a JSON string
google_firestore_admin_v1_restore_database_metadata_instance = GoogleFirestoreAdminV1RestoreDatabaseMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1RestoreDatabaseMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1_restore_database_metadata_dict = google_firestore_admin_v1_restore_database_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1RestoreDatabaseMetadata from a dict
google_firestore_admin_v1_restore_database_metadata_from_dict = GoogleFirestoreAdminV1RestoreDatabaseMetadata.from_dict(google_firestore_admin_v1_restore_database_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


