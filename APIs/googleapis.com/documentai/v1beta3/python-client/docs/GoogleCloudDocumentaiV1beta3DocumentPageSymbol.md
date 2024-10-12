# GoogleCloudDocumentaiV1beta3DocumentPageSymbol

A detected symbol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta3DocumentPageLayout**](GoogleCloudDocumentaiV1beta3DocumentPageLayout.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_symbol import GoogleCloudDocumentaiV1beta3DocumentPageSymbol

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageSymbol from a JSON string
google_cloud_documentai_v1beta3_document_page_symbol_instance = GoogleCloudDocumentaiV1beta3DocumentPageSymbol.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageSymbol.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_symbol_dict = google_cloud_documentai_v1beta3_document_page_symbol_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageSymbol from a dict
google_cloud_documentai_v1beta3_document_page_symbol_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageSymbol.from_dict(google_cloud_documentai_v1beta3_document_page_symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


