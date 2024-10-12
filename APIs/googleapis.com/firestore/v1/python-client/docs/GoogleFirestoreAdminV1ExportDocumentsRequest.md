# GoogleFirestoreAdminV1ExportDocumentsRequest

The request for FirestoreAdmin.ExportDocuments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_ids** | **List[str]** | Which collection ids to export. Unspecified means all collections. | [optional] 
**namespace_ids** | **List[str]** | An empty list represents all namespaces. This is the preferred usage for databases that don&#39;t use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn&#39;t want to include them. Each namespace in this list must be unique. | [optional] 
**output_uri_prefix** | **str** | The output URI. Currently only supports Google Cloud Storage URIs of the form: &#x60;gs://BUCKET_NAME[/NAMESPACE_PATH]&#x60;, where &#x60;BUCKET_NAME&#x60; is the name of the Google Cloud Storage bucket and &#x60;NAMESPACE_PATH&#x60; is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. | [optional] 
**snapshot_time** | **str** | The timestamp that corresponds to the version of the database to be exported. The timestamp must be in the past, rounded to the minute and not older than earliestVersionTime. If specified, then the exported documents will represent a consistent view of the database at the provided time. Otherwise, there are no guarantees about the consistency of the exported documents. | [optional] 

## Example

```python
from openapi_client.models.google_firestore_admin_v1_export_documents_request import GoogleFirestoreAdminV1ExportDocumentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirestoreAdminV1ExportDocumentsRequest from a JSON string
google_firestore_admin_v1_export_documents_request_instance = GoogleFirestoreAdminV1ExportDocumentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleFirestoreAdminV1ExportDocumentsRequest.to_json())

# convert the object into a dict
google_firestore_admin_v1_export_documents_request_dict = google_firestore_admin_v1_export_documents_request_instance.to_dict()
# create an instance of GoogleFirestoreAdminV1ExportDocumentsRequest from a dict
google_firestore_admin_v1_export_documents_request_from_dict = GoogleFirestoreAdminV1ExportDocumentsRequest.from_dict(google_firestore_admin_v1_export_documents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


