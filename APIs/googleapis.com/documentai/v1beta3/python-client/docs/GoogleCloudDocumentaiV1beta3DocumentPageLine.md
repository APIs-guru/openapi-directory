# GoogleCloudDocumentaiV1beta3DocumentPageLine

A collection of tokens that a human would perceive as a line. Does not cross column boundaries, can be horizontal, vertical, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta3DocumentPageLayout**](GoogleCloudDocumentaiV1beta3DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta3DocumentProvenance**](GoogleCloudDocumentaiV1beta3DocumentProvenance.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_line import GoogleCloudDocumentaiV1beta3DocumentPageLine

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageLine from a JSON string
google_cloud_documentai_v1beta3_document_page_line_instance = GoogleCloudDocumentaiV1beta3DocumentPageLine.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageLine.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_line_dict = google_cloud_documentai_v1beta3_document_page_line_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageLine from a dict
google_cloud_documentai_v1beta3_document_page_line_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageLine.from_dict(google_cloud_documentai_v1beta3_document_page_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


