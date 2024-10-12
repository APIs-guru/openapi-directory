# GoogleCloudDocumentaiV1DocumentPageParagraph

A collection of lines that a human would perceive as a paragraph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1DocumentProvenance**](GoogleCloudDocumentaiV1DocumentProvenance.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_paragraph import GoogleCloudDocumentaiV1DocumentPageParagraph

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageParagraph from a JSON string
google_cloud_documentai_v1_document_page_paragraph_instance = GoogleCloudDocumentaiV1DocumentPageParagraph.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageParagraph.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_paragraph_dict = google_cloud_documentai_v1_document_page_paragraph_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageParagraph from a dict
google_cloud_documentai_v1_document_page_paragraph_from_dict = GoogleCloudDocumentaiV1DocumentPageParagraph.from_dict(google_cloud_documentai_v1_document_page_paragraph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


