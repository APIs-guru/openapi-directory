# GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow

A row of table cells.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cells** | [**List[GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell]**](GoogleCloudDocumentaiV1beta2DocumentPageTableTableCell.md) | Cells that make up this row. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_table_table_row import GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow from a JSON string
google_cloud_documentai_v1beta2_document_page_table_table_row_instance = GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_table_table_row_dict = google_cloud_documentai_v1beta2_document_page_table_table_row_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow from a dict
google_cloud_documentai_v1beta2_document_page_table_table_row_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageTableTableRow.from_dict(google_cloud_documentai_v1beta2_document_page_table_table_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


