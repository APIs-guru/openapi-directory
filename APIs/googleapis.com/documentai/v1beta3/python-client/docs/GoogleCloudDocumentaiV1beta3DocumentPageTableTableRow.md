# GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow

A row of table cells.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell]**](GoogleCloudDocumentaiV1beta3DocumentPageTableTableCell.md) | Cells that make up this row. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_table_table_row import GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow from a JSON string
google_cloud_documentai_v1beta3_document_page_table_table_row_instance = GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_table_table_row_dict = google_cloud_documentai_v1beta3_document_page_table_table_row_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow from a dict
google_cloud_documentai_v1beta3_document_page_table_table_row_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageTableTableRow.from_dict(google_cloud_documentai_v1beta3_document_page_table_table_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


