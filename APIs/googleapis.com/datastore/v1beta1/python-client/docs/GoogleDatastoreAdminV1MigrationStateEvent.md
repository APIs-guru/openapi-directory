# GoogleDatastoreAdminV1MigrationStateEvent

An event signifying a change in state of a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **str** | The new state of the migration. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_migration_state_event import GoogleDatastoreAdminV1MigrationStateEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1MigrationStateEvent from a JSON string
google_datastore_admin_v1_migration_state_event_instance = GoogleDatastoreAdminV1MigrationStateEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1MigrationStateEvent.to_json())

# convert the object into a dict
google_datastore_admin_v1_migration_state_event_dict = google_datastore_admin_v1_migration_state_event_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1MigrationStateEvent from a dict
google_datastore_admin_v1_migration_state_event_from_dict = GoogleDatastoreAdminV1MigrationStateEvent.from_dict(google_datastore_admin_v1_migration_state_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


