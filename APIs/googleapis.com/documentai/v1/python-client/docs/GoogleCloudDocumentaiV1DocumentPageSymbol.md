# GoogleCloudDocumentaiV1DocumentPageSymbol

A detected symbol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_symbol import GoogleCloudDocumentaiV1DocumentPageSymbol

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageSymbol from a JSON string
google_cloud_documentai_v1_document_page_symbol_instance = GoogleCloudDocumentaiV1DocumentPageSymbol.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageSymbol.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_symbol_dict = google_cloud_documentai_v1_document_page_symbol_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageSymbol from a dict
google_cloud_documentai_v1_document_page_symbol_from_dict = GoogleCloudDocumentaiV1DocumentPageSymbol.from_dict(google_cloud_documentai_v1_document_page_symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


