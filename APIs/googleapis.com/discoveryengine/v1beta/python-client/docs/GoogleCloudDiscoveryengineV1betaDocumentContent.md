# GoogleCloudDiscoveryengineV1betaDocumentContent

Unstructured data linked to this document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mime_type** | **str** | The MIME type of the content. Supported types: * &#x60;application/pdf&#x60; (PDF, only native PDFs are supported for now) * &#x60;text/html&#x60; (HTML) * &#x60;application/vnd.openxmlformats-officedocument.wordprocessingml.document&#x60; (DOCX) * &#x60;application/vnd.openxmlformats-officedocument.presentationml.presentation&#x60; (PPTX) * &#x60;text/plain&#x60; (TXT) See https://www.iana.org/assignments/media-types/media-types.xhtml. | [optional] 
**raw_bytes** | **bytearray** | The content represented as a stream of bytes. The maximum length is 1,000,000 bytes (1 MB / ~0.95 MiB). Note: As with all &#x60;bytes&#x60; fields, this field is represented as pure binary in Protocol Buffers and base64-encoded string in JSON. For example, &#x60;abc123!?$*&amp;()&#39;-&#x3D;@~&#x60; should be represented as &#x60;YWJjMTIzIT8kKiYoKSctPUB+&#x60; in JSON. See https://developers.google.com/protocol-buffers/docs/proto3#json. | [optional] 
**uri** | **str** | The URI of the content. Only Cloud Storage URIs (e.g. &#x60;gs://bucket-name/path/to/file&#x60;) are supported. The maximum file size is 2.5 MB for text-based formats, 100 MB for other formats. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_document_content import GoogleCloudDiscoveryengineV1betaDocumentContent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentContent from a JSON string
google_cloud_discoveryengine_v1beta_document_content_instance = GoogleCloudDiscoveryengineV1betaDocumentContent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaDocumentContent.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_document_content_dict = google_cloud_discoveryengine_v1beta_document_content_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaDocumentContent from a dict
google_cloud_discoveryengine_v1beta_document_content_from_dict = GoogleCloudDiscoveryengineV1betaDocumentContent.from_dict(google_cloud_discoveryengine_v1beta_document_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


