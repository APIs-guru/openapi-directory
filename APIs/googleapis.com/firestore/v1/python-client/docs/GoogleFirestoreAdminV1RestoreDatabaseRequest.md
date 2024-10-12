# GoogleFirestoreAdminV1RestoreDatabaseRequest

The request message for FirestoreAdmin.RestoreDatabase.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup** | **str** | Backup to restore from. Must be from the same project as the parent. Format is: &#x60;projects/{project_id}/locations/{location}/backups/{backup}&#x60; | [optional] 
**database_id** | **str** | Required. The ID to use for the database, which will become the final component of the database&#39;s resource name. This database id must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. \&quot;(default)\&quot; database id is also valid. | [optional] 
**database_snapshot** | [**GoogleFirestoreAdminV1DatabaseSnapshot**](GoogleFirestoreAdminV1DatabaseSnapshot.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_restore_database_request import GoogleFirestoreAdminV1RestoreDatabaseRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1RestoreDatabaseRequest from a JSON string
google_firestore_admin_v1_restore_database_request_instance = GoogleFirestoreAdminV1RestoreDatabaseRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1RestoreDatabaseRequest.to_json())

# convert the object into a dict
google_firestore_admin_v1_restore_database_request_dict = google_firestore_admin_v1_restore_database_request_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1RestoreDatabaseRequest from a dict
google_firestore_admin_v1_restore_database_request_from_dict = GoogleFirestoreAdminV1RestoreDatabaseRequest.from_dict(google_firestore_admin_v1_restore_database_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


