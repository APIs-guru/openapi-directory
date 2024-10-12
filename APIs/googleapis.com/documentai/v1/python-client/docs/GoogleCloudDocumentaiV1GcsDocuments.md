# GoogleCloudDocumentaiV1GcsDocuments

Specifies a set of documents on Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[GoogleCloudDocumentaiV1GcsDocument]**](GoogleCloudDocumentaiV1GcsDocument.md) | The list of documents. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_gcs_documents import GoogleCloudDocumentaiV1GcsDocuments

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1GcsDocuments from a JSON string
google_cloud_documentai_v1_gcs_documents_instance = GoogleCloudDocumentaiV1GcsDocuments.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1GcsDocuments.to_json())

# convert the object into a dict
google_cloud_documentai_v1_gcs_documents_dict = google_cloud_documentai_v1_gcs_documents_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1GcsDocuments from a dict
google_cloud_documentai_v1_gcs_documents_from_dict = GoogleCloudDocumentaiV1GcsDocuments.from_dict(google_cloud_documentai_v1_gcs_documents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


