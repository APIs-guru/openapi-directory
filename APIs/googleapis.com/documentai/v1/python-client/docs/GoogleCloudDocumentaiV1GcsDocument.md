# GoogleCloudDocumentaiV1GcsDocument

Specifies a document stored on Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_uri** | **str** | The Cloud Storage object uri. | [optional] 
**mime_type** | **str** | An IANA MIME type (RFC6838) of the content. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_gcs_document import GoogleCloudDocumentaiV1GcsDocument

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1GcsDocument from a JSON string
google_cloud_documentai_v1_gcs_document_instance = GoogleCloudDocumentaiV1GcsDocument.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1GcsDocument.to_json())

# convert the object into a dict
google_cloud_documentai_v1_gcs_document_dict = google_cloud_documentai_v1_gcs_document_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1GcsDocument from a dict
google_cloud_documentai_v1_gcs_document_from_dict = GoogleCloudDocumentaiV1GcsDocument.from_dict(google_cloud_documentai_v1_gcs_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


