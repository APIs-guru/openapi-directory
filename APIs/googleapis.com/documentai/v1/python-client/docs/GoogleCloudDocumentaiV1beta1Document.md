# GoogleCloudDocumentaiV1beta1Document

Document represents the canonical document resource in Document AI. It is an interchange format that provides insights into documents and allows for collaboration between users and Document AI to iterate and optimize for quality.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Optional. Inline document content, represented as a stream of bytes. Note: As with all &#x60;bytes&#x60; fields, protobuffers use a pure binary representation, whereas JSON representations use base64. | [optional] 
**entities** | [**List[GoogleCloudDocumentaiV1beta1DocumentEntity]**](GoogleCloudDocumentaiV1beta1DocumentEntity.md) | A list of entities detected on Document.text. For document shards, entities in this list may cross shard boundaries. | [optional] 
**entity_relations** | [**List[GoogleCloudDocumentaiV1beta1DocumentEntityRelation]**](GoogleCloudDocumentaiV1beta1DocumentEntityRelation.md) | Placeholder. Relationship among Document.entities. | [optional] 
**error** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**mime_type** | **str** | An IANA published [media type (MIME type)](https://www.iana.org/assignments/media-types/media-types.xhtml). | [optional] 
**pages** | [**List[GoogleCloudDocumentaiV1beta1DocumentPage]**](GoogleCloudDocumentaiV1beta1DocumentPage.md) | Visual page layout for the Document. | [optional] 
**revisions** | [**List[GoogleCloudDocumentaiV1beta1DocumentRevision]**](GoogleCloudDocumentaiV1beta1DocumentRevision.md) | Placeholder. Revision history of this document. | [optional] 
**shard_info** | [**GoogleCloudDocumentaiV1beta1DocumentShardInfo**](GoogleCloudDocumentaiV1beta1DocumentShardInfo.md) |  | [optional] 
**text** | **str** | Optional. UTF-8 encoded text in reading order from the document. | [optional] 
**text_changes** | [**List[GoogleCloudDocumentaiV1beta1DocumentTextChange]**](GoogleCloudDocumentaiV1beta1DocumentTextChange.md) | Placeholder. A list of text corrections made to Document.text. This is usually used for annotating corrections to OCR mistakes. Text changes for a given revision may not overlap with each other. | [optional] 
**text_styles** | [**List[GoogleCloudDocumentaiV1beta1DocumentStyle]**](GoogleCloudDocumentaiV1beta1DocumentStyle.md) | Styles for the Document.text. | [optional] 
**uri** | **str** | Optional. Currently supports Google Cloud Storage URI of the form &#x60;gs://bucket_name/object_name&#x60;. Object versioning is not supported. For more information, refer to [Google Cloud Storage Request URIs](https://cloud.google.com/storage/docs/reference-uris). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta1_document import GoogleCloudDocumentaiV1beta1Document

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta1Document from a JSON string
google_cloud_documentai_v1beta1_document_instance = GoogleCloudDocumentaiV1beta1Document.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta1Document.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta1_document_dict = google_cloud_documentai_v1beta1_document_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta1Document from a dict
google_cloud_documentai_v1beta1_document_from_dict = GoogleCloudDocumentaiV1beta1Document.from_dict(google_cloud_documentai_v1beta1_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


