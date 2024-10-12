# GoogleDatastoreAdminV1ImportEntitiesMetadata

Metadata for ImportEntities operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**GoogleDatastoreAdminV1CommonMetadata**](GoogleDatastoreAdminV1CommonMetadata.md) |  | [optional] 
**entity_filter** | [**GoogleDatastoreAdminV1EntityFilter**](GoogleDatastoreAdminV1EntityFilter.md) |  | [optional] 
**input_url** | **str** | The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. | [optional] 
**progress_bytes** | [**GoogleDatastoreAdminV1Progress**](GoogleDatastoreAdminV1Progress.md) |  | [optional] 
**progress_entities** | [**GoogleDatastoreAdminV1Progress**](GoogleDatastoreAdminV1Progress.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_import_entities_metadata import GoogleDatastoreAdminV1ImportEntitiesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ImportEntitiesMetadata from a JSON string
google_datastore_admin_v1_import_entities_metadata_instance = GoogleDatastoreAdminV1ImportEntitiesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ImportEntitiesMetadata.to_json())

# convert the object into a dict
google_datastore_admin_v1_import_entities_metadata_dict = google_datastore_admin_v1_import_entities_metadata_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ImportEntitiesMetadata from a dict
google_datastore_admin_v1_import_entities_metadata_from_dict = GoogleDatastoreAdminV1ImportEntitiesMetadata.from_dict(google_datastore_admin_v1_import_entities_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


