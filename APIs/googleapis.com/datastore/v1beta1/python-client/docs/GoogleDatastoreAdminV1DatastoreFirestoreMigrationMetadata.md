# GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata

Metadata for Datastore to Firestore migration operations. The DatastoreFirestoreMigration operation is not started by the end-user via an explicit \"creation\" method. This is an intentional deviation from the LRO design pattern. This singleton resource can be accessed at: \"projects/{project_id}/operations/datastore-firestore-migration\"

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration_state** | **str** | The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. | [optional] 
**migration_step** | **str** | The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_datastore_firestore_migration_metadata import GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata from a JSON string
google_datastore_admin_v1_datastore_firestore_migration_metadata_instance = GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata.to_json())

# convert the object into a dict
google_datastore_admin_v1_datastore_firestore_migration_metadata_dict = google_datastore_admin_v1_datastore_firestore_migration_metadata_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata from a dict
google_datastore_admin_v1_datastore_firestore_migration_metadata_from_dict = GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata.from_dict(google_datastore_admin_v1_datastore_firestore_migration_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


