# GoogleDatastoreAdminV1ExportEntitiesMetadata

Metadata for ExportEntities operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common** | [**GoogleDatastoreAdminV1CommonMetadata**](GoogleDatastoreAdminV1CommonMetadata.md) |  | [optional] 
**entity_filter** | [**GoogleDatastoreAdminV1EntityFilter**](GoogleDatastoreAdminV1EntityFilter.md) |  | [optional] 
**output_url_prefix** | **str** | Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. | [optional] 
**progress_bytes** | [**GoogleDatastoreAdminV1Progress**](GoogleDatastoreAdminV1Progress.md) |  | [optional] 
**progress_entities** | [**GoogleDatastoreAdminV1Progress**](GoogleDatastoreAdminV1Progress.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_export_entities_metadata import GoogleDatastoreAdminV1ExportEntitiesMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ExportEntitiesMetadata from a JSON string
google_datastore_admin_v1_export_entities_metadata_instance = GoogleDatastoreAdminV1ExportEntitiesMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ExportEntitiesMetadata.to_json())

# convert the object into a dict
google_datastore_admin_v1_export_entities_metadata_dict = google_datastore_admin_v1_export_entities_metadata_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ExportEntitiesMetadata from a dict
google_datastore_admin_v1_export_entities_metadata_from_dict = GoogleDatastoreAdminV1ExportEntitiesMetadata.from_dict(google_datastore_admin_v1_export_entities_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


