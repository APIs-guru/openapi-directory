# GoogleCloudDialogflowV2ImportDocumentTemplate

The template used for importing documents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**knowledge_types** | **List[str]** | Required. The knowledge type of document content. | [optional] 
**metadata** | **Dict[str, str]** | Metadata for the document. The metadata supports arbitrary key-value pairs. Suggested use cases include storing a document&#39;s title, an external URL distinct from the document&#39;s content_uri, etc. The max size of a &#x60;key&#x60; or a &#x60;value&#x60; of the metadata is 1024 bytes. | [optional] 
**mime_type** | **str** | Required. The MIME type of the document. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_import_document_template import GoogleCloudDialogflowV2ImportDocumentTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ImportDocumentTemplate from a JSON string
google_cloud_dialogflow_v2_import_document_template_instance = GoogleCloudDialogflowV2ImportDocumentTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ImportDocumentTemplate.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_import_document_template_dict = google_cloud_dialogflow_v2_import_document_template_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ImportDocumentTemplate from a dict
google_cloud_dialogflow_v2_import_document_template_from_dict = GoogleCloudDialogflowV2ImportDocumentTemplate.from_dict(google_cloud_dialogflow_v2_import_document_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


