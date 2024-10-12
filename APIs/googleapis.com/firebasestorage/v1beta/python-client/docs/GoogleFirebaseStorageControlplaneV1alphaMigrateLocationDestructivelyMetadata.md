# GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata

Metadata for MigrateLocationDestructively LRO.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the LRO was created. | [optional] 
**last_update_time** | **str** | The time the LRO was last updated. | [optional] 
**state** | **str** | The current state of the migration. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata import GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata from a JSON string
google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata_instance = GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata.to_json())

# convert the object into a dict
google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata_dict = google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata_instance.to_dict()
# create an instance of GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata from a dict
google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata_from_dict = GoogleFirebaseStorageControlplaneV1alphaMigrateLocationDestructivelyMetadata.from_dict(google_firebase_storage_controlplane_v1alpha_migrate_location_destructively_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


