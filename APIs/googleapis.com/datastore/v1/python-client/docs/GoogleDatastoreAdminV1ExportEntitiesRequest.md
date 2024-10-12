# GoogleDatastoreAdminV1ExportEntitiesRequest

The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_filter** | [**GoogleDatastoreAdminV1EntityFilter**](GoogleDatastoreAdminV1EntityFilter.md) |  | [optional] 
**labels** | **Dict[str, str]** | Client-assigned labels. | [optional] 
**output_url_prefix** | **str** | Required. Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: &#x60;gs://BUCKET_NAME[/NAMESPACE_PATH]&#x60;, where &#x60;BUCKET_NAME&#x60; is the name of the Cloud Storage bucket and &#x60;NAMESPACE_PATH&#x60; is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. | [optional] 

## Example

```python
from openapi_client.models.google_datastore_admin_v1_export_entities_request import GoogleDatastoreAdminV1ExportEntitiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDatastoreAdminV1ExportEntitiesRequest from a JSON string
google_datastore_admin_v1_export_entities_request_instance = GoogleDatastoreAdminV1ExportEntitiesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleDatastoreAdminV1ExportEntitiesRequest.to_json())

# convert the object into a dict
google_datastore_admin_v1_export_entities_request_dict = google_datastore_admin_v1_export_entities_request_instance.to_dict()
# create an instance of GoogleDatastoreAdminV1ExportEntitiesRequest from a dict
google_datastore_admin_v1_export_entities_request_from_dict = GoogleDatastoreAdminV1ExportEntitiesRequest.from_dict(google_datastore_admin_v1_export_entities_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


