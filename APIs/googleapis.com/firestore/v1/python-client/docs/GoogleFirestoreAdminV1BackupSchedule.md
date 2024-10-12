# GoogleFirestoreAdminV1BackupSchedule

A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time. | [optional] [readonly] 
**daily_recurrence** | **object** | Represent a recurring schedule that runs at a specific time every day. The time zone is UTC. | [optional] 
**name** | **str** | Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is &#x60;projects/{project}/databases/{database}/backupSchedules/{backup_schedule}&#x60; | [optional] [readonly] 
**retention** | **str** | At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. | [optional] 
**update_time** | **str** | Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time. | [optional] [readonly] 
**weekly_recurrence** | [**GoogleFirestoreAdminV1WeeklyRecurrence**](GoogleFirestoreAdminV1WeeklyRecurrence.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_backup_schedule import GoogleFirestoreAdminV1BackupSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1BackupSchedule from a JSON string
google_firestore_admin_v1_backup_schedule_instance = GoogleFirestoreAdminV1BackupSchedule.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1BackupSchedule.to_json())

# convert the object into a dict
google_firestore_admin_v1_backup_schedule_dict = google_firestore_admin_v1_backup_schedule_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1BackupSchedule from a dict
google_firestore_admin_v1_backup_schedule_from_dict = GoogleFirestoreAdminV1BackupSchedule.from_dict(google_firestore_admin_v1_backup_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


