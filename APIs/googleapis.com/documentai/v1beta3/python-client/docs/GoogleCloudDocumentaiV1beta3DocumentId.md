# GoogleCloudDocumentaiV1beta3DocumentId

Document Identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_managed_doc_id** | [**GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId**](GoogleCloudDocumentaiV1beta3DocumentIdGCSManagedDocumentId.md) |  | [optional] 
**revision_ref** | [**GoogleCloudDocumentaiV1beta3RevisionRef**](GoogleCloudDocumentaiV1beta3RevisionRef.md) |  | [optional] 
**unmanaged_doc_id** | [**GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId**](GoogleCloudDocumentaiV1beta3DocumentIdUnmanagedDocumentId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_id import GoogleCloudDocumentaiV1beta3DocumentId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentId from a JSON string
google_cloud_documentai_v1beta3_document_id_instance = GoogleCloudDocumentaiV1beta3DocumentId.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentId.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_id_dict = google_cloud_documentai_v1beta3_document_id_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentId from a dict
google_cloud_documentai_v1beta3_document_id_from_dict = GoogleCloudDocumentaiV1beta3DocumentId.from_dict(google_cloud_documentai_v1beta3_document_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


