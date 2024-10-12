# GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment

A text segment in the Document.text. The indices may be out of bounds which indicate that the text extends into another document shard for large sharded documents. See ShardInfo.text_offset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **str** | TextSegment half open end UTF-8 char index in the Document.text. | [optional] 
**start_index** | **str** | TextSegment start UTF-8 char index in the Document.text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_text_anchor_text_segment import GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment from a JSON string
google_cloud_documentai_v1beta2_document_text_anchor_text_segment_instance = GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_text_anchor_text_segment_dict = google_cloud_documentai_v1beta2_document_text_anchor_text_segment_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment from a dict
google_cloud_documentai_v1beta2_document_text_anchor_text_segment_from_dict = GoogleCloudDocumentaiV1beta2DocumentTextAnchorTextSegment.from_dict(google_cloud_documentai_v1beta2_document_text_anchor_text_segment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


