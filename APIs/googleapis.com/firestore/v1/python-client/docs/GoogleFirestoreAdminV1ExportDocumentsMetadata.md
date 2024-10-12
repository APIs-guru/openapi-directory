# GoogleFirestoreAdminV1ExportDocumentsMetadata

Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids are being exported. | [optional] 
**end_time** | **str** | The time this operation completed. Will be unset if operation still in progress. | [optional] 
**namespace_ids** | **List[str]** | Which namespace ids are being exported. | [optional] 
**operation_state** | **str** | The state of the export operation. | [optional] 
**output_uri_prefix** | **str** | Where the documents are being exported to. | [optional] 
**progress_bytes** | [**GoogleFirestoreAdminV1Progress**](GoogleFirestoreAdminV1Progress.md) |  | [optional] 
**progress_documents** | [**GoogleFirestoreAdminV1Progress**](GoogleFirestoreAdminV1Progress.md) |  | [optional] 
**snapshot_time** | **str** | The timestamp that corresponds to the version of the database that is being exported. If unspecified, there are no guarantees about the consistency of the documents being exported. | [optional] 
**start_time** | **str** | The time this operation started. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_export_documents_metadata import GoogleFirestoreAdminV1ExportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ExportDocumentsMetadata from a JSON string
google_firestore_admin_v1_export_documents_metadata_instance = GoogleFirestoreAdminV1ExportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ExportDocumentsMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1_export_documents_metadata_dict = google_firestore_admin_v1_export_documents_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ExportDocumentsMetadata from a dict
google_firestore_admin_v1_export_documents_metadata_from_dict = GoogleFirestoreAdminV1ExportDocumentsMetadata.from_dict(google_firestore_admin_v1_export_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


