# GoogleDatastoreAdminV1ImportEntitiesRequest

The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_filter** | [**GoogleDatastoreAdminV1EntityFilter**](GoogleDatastoreAdminV1EntityFilter.md) |  | [optional] 
**input_url** | **str** | Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: &#x60;gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE&#x60;, where &#x60;BUCKET_NAME&#x60; is the name of the Cloud Storage bucket, &#x60;NAMESPACE_PATH&#x60; is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and &#x60;OVERALL_EXPORT_METADATA_FILE&#x60; is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1.ExportEntitiesResponse.output_url. | [optional] 
**labels** | **Dict[str, str]** | Client-assigned labels. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_import_entities_request import GoogleDatastoreAdminV1ImportEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ImportEntitiesRequest from a JSON string
google_datastore_admin_v1_import_entities_request_instance = GoogleDatastoreAdminV1ImportEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ImportEntitiesRequest.to_json())

# convert the object into a dict
google_datastore_admin_v1_import_entities_request_dict = google_datastore_admin_v1_import_entities_request_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ImportEntitiesRequest from a dict
google_datastore_admin_v1_import_entities_request_from_dict = GoogleDatastoreAdminV1ImportEntitiesRequest.from_dict(google_datastore_admin_v1_import_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


