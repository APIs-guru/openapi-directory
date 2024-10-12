# GoogleFirestoreAdminV1beta1ImportDocumentsRequest

The request for FirestoreAdmin.ImportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids to import. Unspecified means all collections included in the import. | [optional] 
**input_uri_prefix** | **str** | Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta1.ExportDocumentsResponse.output_uri_prefix. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_import_documents_request import GoogleFirestoreAdminV1beta1ImportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1ImportDocumentsRequest from a JSON string
google_firestore_admin_v1beta1_import_documents_request_instance = GoogleFirestoreAdminV1beta1ImportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1ImportDocumentsRequest.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_import_documents_request_dict = google_firestore_admin_v1beta1_import_documents_request_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1ImportDocumentsRequest from a dict
google_firestore_admin_v1beta1_import_documents_request_from_dict = GoogleFirestoreAdminV1beta1ImportDocumentsRequest.from_dict(google_firestore_admin_v1beta1_import_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


