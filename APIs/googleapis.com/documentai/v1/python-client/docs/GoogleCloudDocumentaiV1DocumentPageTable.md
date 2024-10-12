# GoogleCloudDocumentaiV1DocumentPageTable

A table representation similar to HTML table structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_rows** | [**List[GoogleCloudDocumentaiV1DocumentPageTableTableRow]**](GoogleCloudDocumentaiV1DocumentPageTableTableRow.md) | Body rows of the table. | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**header_rows** | [**List[GoogleCloudDocumentaiV1DocumentPageTableTableRow]**](GoogleCloudDocumentaiV1DocumentPageTableTableRow.md) | Header rows of the table. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1DocumentProvenance**](GoogleCloudDocumentaiV1DocumentProvenance.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_table import GoogleCloudDocumentaiV1DocumentPageTable

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageTable from a JSON string
google_cloud_documentai_v1_document_page_table_instance = GoogleCloudDocumentaiV1DocumentPageTable.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageTable.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_table_dict = google_cloud_documentai_v1_document_page_table_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageTable from a dict
google_cloud_documentai_v1_document_page_table_from_dict = GoogleCloudDocumentaiV1DocumentPageTable.from_dict(google_cloud_documentai_v1_document_page_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


