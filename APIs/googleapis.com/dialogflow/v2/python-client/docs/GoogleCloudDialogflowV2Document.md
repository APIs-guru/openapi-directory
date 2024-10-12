# GoogleCloudDialogflowV2Document

A knowledge document to be used by a KnowledgeBase. For more information, see the [knowledge base guide](https://cloud.google.com/dialogflow/docs/how/knowledge-bases). Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_uri** | **str** | The URI where the file content is located. For documents stored in Google Cloud Storage, these URIs must have the form &#x60;gs:///&#x60;. NOTE: External URLs must correspond to public webpages, i.e., they must be indexed by Google Search. In particular, URLs for showing documents in Google Cloud Storage (i.e. the URL in your browser) are not supported. Instead use the &#x60;gs://&#x60; format URI described above. | [optional] 
**display_name** | **str** | Required. The display name of the document. The name must be 1024 bytes or less; otherwise, the creation request fails. | [optional] 
**enable_auto_reload** | **bool** | Optional. If true, we try to automatically reload the document every day (at a time picked by the system). If false or unspecified, we don&#39;t try to automatically reload the document. Currently you can only enable automatic reload for documents sourced from a public url, see &#x60;source&#x60; field for the source types. Reload status can be tracked in &#x60;latest_reload_status&#x60;. If a reload fails, we will keep the document unchanged. If a reload fails with internal errors, the system will try to reload the document on the next day. If a reload fails with non-retriable errors (e.g. PERMISSION_DENIED), the system will not try to reload the document anymore. You need to manually reload the document successfully by calling &#x60;ReloadDocument&#x60; and clear the errors. | [optional] 
**knowledge_types** | **List[str]** | Required. The knowledge type of document content. | [optional] 
**latest_reload_status** | [**GoogleCloudDialogflowV2DocumentReloadStatus**](GoogleCloudDialogflowV2DocumentReloadStatus.md) |  | [optional] 
**metadata** | **Dict[str, str]** | Optional. Metadata for the document. The metadata supports arbitrary key-value pairs. Suggested use cases include storing a document&#39;s title, an external URL distinct from the document&#39;s content_uri, etc. The max size of a &#x60;key&#x60; or a &#x60;value&#x60; of the metadata is 1024 bytes. | [optional] 
**mime_type** | **str** | Required. The MIME type of this document. | [optional] 
**name** | **str** | Optional. The document resource name. The name must be empty when creating a document. Format: &#x60;projects//locations//knowledgeBases//documents/&#x60;. | [optional] 
**raw_content** | **bytearray** | The raw content of the document. This field is only permitted for EXTRACTIVE_QA and FAQ knowledge types. | [optional] 
**state** | **str** | Output only. The current state of the document. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_document import GoogleCloudDialogflowV2Document

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Document from a JSON string
google_cloud_dialogflow_v2_document_instance = GoogleCloudDialogflowV2Document.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Document.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_document_dict = google_cloud_dialogflow_v2_document_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Document from a dict
google_cloud_dialogflow_v2_document_from_dict = GoogleCloudDialogflowV2Document.from_dict(google_cloud_dialogflow_v2_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


