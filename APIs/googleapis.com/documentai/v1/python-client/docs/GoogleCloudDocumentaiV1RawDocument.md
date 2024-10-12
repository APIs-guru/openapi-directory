# GoogleCloudDocumentaiV1RawDocument

Payload message of raw document content (bytes).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Inline document content. | [optional] 
**display_name** | **str** | The display name of the document, it supports all Unicode characters except the following: &#x60;*&#x60;, &#x60;?&#x60;, &#x60;[&#x60;, &#x60;]&#x60;, &#x60;%&#x60;, &#x60;{&#x60;, &#x60;}&#x60;,&#x60;&#39;&#x60;, &#x60;\\\&quot;&#x60;, &#x60;,&#x60; &#x60;~&#x60;, &#x60;&#x3D;&#x60; and &#x60;:&#x60; are reserved. If not specified, a default ID is generated. | [optional] 
**mime_type** | **str** | An IANA MIME type (RFC6838) indicating the nature and format of the content. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_raw_document import GoogleCloudDocumentaiV1RawDocument

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1RawDocument from a JSON string
google_cloud_documentai_v1_raw_document_instance = GoogleCloudDocumentaiV1RawDocument.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1RawDocument.to_json())

# convert the object into a dict
google_cloud_documentai_v1_raw_document_dict = google_cloud_documentai_v1_raw_document_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1RawDocument from a dict
google_cloud_documentai_v1_raw_document_from_dict = GoogleCloudDocumentaiV1RawDocument.from_dict(google_cloud_documentai_v1_raw_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


