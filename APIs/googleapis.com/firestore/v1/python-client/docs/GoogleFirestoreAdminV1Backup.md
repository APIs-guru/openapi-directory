# GoogleFirestoreAdminV1Backup

A Backup of a Cloud Firestore Database. The backup contains all documents and index configurations for the given database at a specific point in time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Output only. Name of the Firestore database that the backup is from. Format is &#x60;projects/{project}/databases/{database}&#x60;. | [optional] [readonly] 
**database_uid** | **str** | Output only. The system-generated UUID4 for the Firestore database that the backup is from. | [optional] [readonly] 
**expire_time** | **str** | Output only. The timestamp at which this backup expires. | [optional] [readonly] 
**name** | **str** | Output only. The unique resource name of the Backup. Format is &#x60;projects/{project}/locations/{location}/backups/{backup}&#x60;. | [optional] [readonly] 
**snapshot_time** | **str** | Output only. The backup contains an externally consistent copy of the database at this time. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the backup. | [optional] [readonly] 
**stats** | [**GoogleFirestoreAdminV1Stats**](GoogleFirestoreAdminV1Stats.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_backup import GoogleFirestoreAdminV1Backup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1Backup from a JSON string
google_firestore_admin_v1_backup_instance = GoogleFirestoreAdminV1Backup.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1Backup.to_json())

# convert the object into a dict
google_firestore_admin_v1_backup_dict = google_firestore_admin_v1_backup_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1Backup from a dict
google_firestore_admin_v1_backup_from_dict = GoogleFirestoreAdminV1Backup.from_dict(google_firestore_admin_v1_backup_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


