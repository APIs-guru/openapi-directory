# GoogleDatastoreAdminV1ExportEntitiesResponse

The response for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_url** | **str** | Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_export_entities_response import GoogleDatastoreAdminV1ExportEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ExportEntitiesResponse from a JSON string
google_datastore_admin_v1_export_entities_response_instance = GoogleDatastoreAdminV1ExportEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ExportEntitiesResponse.to_json())

# convert the object into a dict
google_datastore_admin_v1_export_entities_response_dict = google_datastore_admin_v1_export_entities_response_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ExportEntitiesResponse from a dict
google_datastore_admin_v1_export_entities_response_from_dict = GoogleDatastoreAdminV1ExportEntitiesResponse.from_dict(google_datastore_admin_v1_export_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


