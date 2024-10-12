# GoogleFirestoreAdminV1beta1ExportDocumentsRequest

The request for FirestoreAdmin.ExportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids to export. Unspecified means all collections. | [optional] 
**output_uri_prefix** | **str** | The output URI. Currently only supports Google Cloud Storage URIs of the form: &#x60;gs://BUCKET_NAME[/NAMESPACE_PATH]&#x60;, where &#x60;BUCKET_NAME&#x60; is the name of the Google Cloud Storage bucket and &#x60;NAMESPACE_PATH&#x60; is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1beta1_export_documents_request import GoogleFirestoreAdminV1beta1ExportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsRequest from a JSON string
google_firestore_admin_v1beta1_export_documents_request_instance = GoogleFirestoreAdminV1beta1ExportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1beta1ExportDocumentsRequest.to_json())

# convert the object into a dict
google_firestore_admin_v1beta1_export_documents_request_dict = google_firestore_admin_v1beta1_export_documents_request_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1beta1ExportDocumentsRequest from a dict
google_firestore_admin_v1beta1_export_documents_request_from_dict = GoogleFirestoreAdminV1beta1ExportDocumentsRequest.from_dict(google_firestore_admin_v1beta1_export_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


