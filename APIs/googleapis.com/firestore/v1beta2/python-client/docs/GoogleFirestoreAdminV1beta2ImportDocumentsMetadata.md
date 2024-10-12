# GoogleFirestoreAdminV1beta2ImportDocumentsMetadata

Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids are being imported. | [optional] 
**end_time** | **str** | The time this operation completed. Will be unset if operation still in progress. | [optional] 
**input_uri_prefix** | **str** | The location of the documents being imported. | [optional] 
**operation_state** | **str** | The state of the import operation. | [optional] 
**progress_bytes** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**progress_documents** | [**GoogleFirestoreAdminV1beta2Progress**](GoogleFirestoreAdminV1beta2Progress.md) |  | [optional] 
**start_time** | **str** | The time this operation started. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta2_import_documents_metadata import GoogleFirestoreAdminV1beta2ImportDocumentsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta2ImportDocumentsMetadata from a JSON string
google_firestore_admin_v1beta2_import_documents_metadata_instance = GoogleFirestoreAdminV1beta2ImportDocumentsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta2ImportDocumentsMetadata.to_json())

# convert the object into a dict
google_firestore_admin_v1beta2_import_documents_metadata_dict = google_firestore_admin_v1beta2_import_documents_metadata_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta2ImportDocumentsMetadata from a dict
google_firestore_admin_v1beta2_import_documents_metadata_from_dict = GoogleFirestoreAdminV1beta2ImportDocumentsMetadata.from_dict(google_firestore_admin_v1beta2_import_documents_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


