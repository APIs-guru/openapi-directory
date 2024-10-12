# GoogleDatastoreAdminV1MigrationProgressEvent

An event signifying the start of a new step in a [migration from Cloud Datastore to Cloud Firestore in Datastore mode](https://cloud.google.com/datastore/docs/upgrade-to-firestore).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prepare_step_details** | [**GoogleDatastoreAdminV1PrepareStepDetails**](GoogleDatastoreAdminV1PrepareStepDetails.md) |  | [optional] 
**redirect_writes_step_details** | [**GoogleDatastoreAdminV1RedirectWritesStepDetails**](GoogleDatastoreAdminV1RedirectWritesStepDetails.md) |  | [optional] 
**step** | **str** | The step that is starting. An event with step set to &#x60;START&#x60; indicates that the migration has been reverted back to the initial pre-migration state. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_migration_progress_event import GoogleDatastoreAdminV1MigrationProgressEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1MigrationProgressEvent from a JSON string
google_datastore_admin_v1_migration_progress_event_instance = GoogleDatastoreAdminV1MigrationProgressEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1MigrationProgressEvent.to_json())

# convert the object into a dict
google_datastore_admin_v1_migration_progress_event_dict = google_datastore_admin_v1_migration_progress_event_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1MigrationProgressEvent from a dict
google_datastore_admin_v1_migration_progress_event_from_dict = GoogleDatastoreAdminV1MigrationProgressEvent.from_dict(google_datastore_admin_v1_migration_progress_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


