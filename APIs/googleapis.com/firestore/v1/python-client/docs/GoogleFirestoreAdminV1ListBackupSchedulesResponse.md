# GoogleFirestoreAdminV1ListBackupSchedulesResponse

The response for FirestoreAdmin.ListBackupSchedules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_schedules** | [**List[GoogleFirestoreAdminV1BackupSchedule]**](GoogleFirestoreAdminV1BackupSchedule.md) | List of all backup schedules. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_list_backup_schedules_response import GoogleFirestoreAdminV1ListBackupSchedulesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ListBackupSchedulesResponse from a JSON string
google_firestore_admin_v1_list_backup_schedules_response_instance = GoogleFirestoreAdminV1ListBackupSchedulesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ListBackupSchedulesResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1_list_backup_schedules_response_dict = google_firestore_admin_v1_list_backup_schedules_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ListBackupSchedulesResponse from a dict
google_firestore_admin_v1_list_backup_schedules_response_from_dict = GoogleFirestoreAdminV1ListBackupSchedulesResponse.from_dict(google_firestore_admin_v1_list_backup_schedules_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


