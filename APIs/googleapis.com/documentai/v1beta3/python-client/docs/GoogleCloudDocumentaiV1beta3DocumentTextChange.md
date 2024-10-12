# GoogleCloudDocumentaiV1beta3DocumentTextChange

This message is used for text changes aka. OCR corrections.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_text** | **str** | The text that replaces the text identified in the &#x60;text_anchor&#x60;. | [optional] 
**provenance** | [**List[GoogleCloudDocumentaiV1beta3DocumentProvenance]**](GoogleCloudDocumentaiV1beta3DocumentProvenance.md) | The history of this annotation. | [optional] 
**text_anchor** | [**GoogleCloudDocumentaiV1beta3DocumentTextAnchor**](GoogleCloudDocumentaiV1beta3DocumentTextAnchor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_text_change import GoogleCloudDocumentaiV1beta3DocumentTextChange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentTextChange from a JSON string
google_cloud_documentai_v1beta3_document_text_change_instance = GoogleCloudDocumentaiV1beta3DocumentTextChange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentTextChange.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_text_change_dict = google_cloud_documentai_v1beta3_document_text_change_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentTextChange from a dict
google_cloud_documentai_v1beta3_document_text_change_from_dict = GoogleCloudDocumentaiV1beta3DocumentTextChange.from_dict(google_cloud_documentai_v1beta3_document_text_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


