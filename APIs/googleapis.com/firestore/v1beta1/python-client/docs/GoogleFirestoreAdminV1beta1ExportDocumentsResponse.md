# GoogleFirestoreAdminV1beta1ExportDocumentsResponse

Returned in the google.longrunning.Operation response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri_prefix** | **str** | Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_export_documents_response import GoogleFirestoreAdminV1beta1ExportDocumentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsResponse from a JSON string
google_firestore_admin_v1beta1_export_documents_response_instance = GoogleFirestoreAdminV1beta1ExportDocumentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1ExportDocumentsResponse.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_export_documents_response_dict = google_firestore_admin_v1beta1_export_documents_response_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsResponse from a dict
google_firestore_admin_v1beta1_export_documents_response_from_dict = GoogleFirestoreAdminV1beta1ExportDocumentsResponse.from_dict(google_firestore_admin_v1beta1_export_documents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


