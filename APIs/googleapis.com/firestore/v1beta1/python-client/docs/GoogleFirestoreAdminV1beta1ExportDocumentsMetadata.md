# GoogleFirestoreAdminV1beta1ExportDocumentsMetadata

Metadata for ExportDocuments operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids are being exported. | [optional] 
**end_time** | **str** | The time the operation ended, either successfully or otherwise. Unset if the operation is still active. | [optional] 
**operation_state** | **str** | The state of the export operation. | [optional] 
**output_uri_prefix** | **str** | Where the entities are being exported to. | [optional] 
**progress_bytes** | [**GoogleFirestoreAdminV1beta1Progress**](GoogleFirestoreAdminV1beta1Progress.md) |  | [optional] 
**progress_documents** | [**GoogleFirestoreAdminV1beta1Progress**](GoogleFirestoreAdminV1beta1Progress.md) |  | [optional] 
**start_time** | **str** | The time that work began on the operation. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_export_documents_metadata import GoogleFirestoreAdminV1beta1ExportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsMetadata from a JSON string
google_firestore_admin_v1beta1_export_documents_metadata_instance = GoogleFirestoreAdminV1beta1ExportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1ExportDocumentsMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_export_documents_metadata_dict = google_firestore_admin_v1beta1_export_documents_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsMetadata from a dict
google_firestore_admin_v1beta1_export_documents_metadata_from_dict = GoogleFirestoreAdminV1beta1ExportDocumentsMetadata.from_dict(google_firestore_admin_v1beta1_export_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


