# GoogleCloudDocumentaiV1DocumentTextAnchor

Text reference indexing into the Document.text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Contains the content of the text span so that users do not have to look it up in the text_segments. It is always populated for formFields. | [optional] 
**text_segments** | [**List[GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment]**](GoogleCloudDocumentaiV1DocumentTextAnchorTextSegment.md) | The text segments from the Document.text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_text_anchor import GoogleCloudDocumentaiV1DocumentTextAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentTextAnchor from a JSON string
google_cloud_documentai_v1_document_text_anchor_instance = GoogleCloudDocumentaiV1DocumentTextAnchor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentTextAnchor.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_text_anchor_dict = google_cloud_documentai_v1_document_text_anchor_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentTextAnchor from a dict
google_cloud_documentai_v1_document_text_anchor_from_dict = GoogleCloudDocumentaiV1DocumentTextAnchor.from_dict(google_cloud_documentai_v1_document_text_anchor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


