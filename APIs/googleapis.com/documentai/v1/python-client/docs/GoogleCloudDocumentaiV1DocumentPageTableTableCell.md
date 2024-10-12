# GoogleCloudDocumentaiV1DocumentPageTableTableCell

A cell representation inside the table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**col_span** | **int** | How many columns this cell spans. | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**row_span** | **int** | How many rows this cell spans. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_table_table_cell import GoogleCloudDocumentaiV1DocumentPageTableTableCell

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageTableTableCell from a JSON string
google_cloud_documentai_v1_document_page_table_table_cell_instance = GoogleCloudDocumentaiV1DocumentPageTableTableCell.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageTableTableCell.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_table_table_cell_dict = google_cloud_documentai_v1_document_page_table_table_cell_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageTableTableCell from a dict
google_cloud_documentai_v1_document_page_table_table_cell_from_dict = GoogleCloudDocumentaiV1DocumentPageTableTableCell.from_dict(google_cloud_documentai_v1_document_page_table_table_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


