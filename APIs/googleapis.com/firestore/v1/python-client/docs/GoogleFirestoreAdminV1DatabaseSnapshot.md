# GoogleFirestoreAdminV1DatabaseSnapshot

A consistent snapshot of a database at a specific point in time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **str** | Required. A name of the form &#x60;projects/{project_id}/databases/{database_id}&#x60; | [optional] 
**snapshot_time** | **str** | Required. The timestamp at which the database snapshot is taken. The requested timestamp must be a whole minute within the PITR window. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_database_snapshot import GoogleFirestoreAdminV1DatabaseSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1DatabaseSnapshot from a JSON string
google_firestore_admin_v1_database_snapshot_instance = GoogleFirestoreAdminV1DatabaseSnapshot.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1DatabaseSnapshot.to_json())

# convert the object into a dict
google_firestore_admin_v1_database_snapshot_dict = google_firestore_admin_v1_database_snapshot_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1DatabaseSnapshot from a dict
google_firestore_admin_v1_database_snapshot_from_dict = GoogleFirestoreAdminV1DatabaseSnapshot.from_dict(google_firestore_admin_v1_database_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


