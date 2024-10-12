# Request

A single update to apply to a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_footer** | [**CreateFooterRequest**](CreateFooterRequest.md) |  | [optional] 
**create_footnote** | [**CreateFootnoteRequest**](CreateFootnoteRequest.md) |  | [optional] 
**create_header** | [**CreateHeaderRequest**](CreateHeaderRequest.md) |  | [optional] 
**create_named_range** | [**CreateNamedRangeRequest**](CreateNamedRangeRequest.md) |  | [optional] 
**create_paragraph_bullets** | [**CreateParagraphBulletsRequest**](CreateParagraphBulletsRequest.md) |  | [optional] 
**delete_content_range** | [**DeleteContentRangeRequest**](DeleteContentRangeRequest.md) |  | [optional] 
**delete_footer** | [**DeleteFooterRequest**](DeleteFooterRequest.md) |  | [optional] 
**delete_header** | [**DeleteHeaderRequest**](DeleteHeaderRequest.md) |  | [optional] 
**delete_named_range** | [**DeleteNamedRangeRequest**](DeleteNamedRangeRequest.md) |  | [optional] 
**delete_paragraph_bullets** | [**DeleteParagraphBulletsRequest**](DeleteParagraphBulletsRequest.md) |  | [optional] 
**delete_positioned_object** | [**DeletePositionedObjectRequest**](DeletePositionedObjectRequest.md) |  | [optional] 
**delete_table_column** | [**DeleteTableColumnRequest**](DeleteTableColumnRequest.md) |  | [optional] 
**delete_table_row** | [**DeleteTableRowRequest**](DeleteTableRowRequest.md) |  | [optional] 
**insert_inline_image** | [**InsertInlineImageRequest**](InsertInlineImageRequest.md) |  | [optional] 
**insert_page_break** | [**InsertPageBreakRequest**](InsertPageBreakRequest.md) |  | [optional] 
**insert_section_break** | [**InsertSectionBreakRequest**](InsertSectionBreakRequest.md) |  | [optional] 
**insert_table** | [**InsertTableRequest**](InsertTableRequest.md) |  | [optional] 
**insert_table_column** | [**InsertTableColumnRequest**](InsertTableColumnRequest.md) |  | [optional] 
**insert_table_row** | [**InsertTableRowRequest**](InsertTableRowRequest.md) |  | [optional] 
**insert_text** | [**InsertTextRequest**](InsertTextRequest.md) |  | [optional] 
**merge_table_cells** | [**MergeTableCellsRequest**](MergeTableCellsRequest.md) |  | [optional] 
**pin_table_header_rows** | [**PinTableHeaderRowsRequest**](PinTableHeaderRowsRequest.md) |  | [optional] 
**replace_all_text** | [**ReplaceAllTextRequest**](ReplaceAllTextRequest.md) |  | [optional] 
**replace_image** | [**ReplaceImageRequest**](ReplaceImageRequest.md) |  | [optional] 
**replace_named_range_content** | [**ReplaceNamedRangeContentRequest**](ReplaceNamedRangeContentRequest.md) |  | [optional] 
**unmerge_table_cells** | [**UnmergeTableCellsRequest**](UnmergeTableCellsRequest.md) |  | [optional] 
**update_document_style** | [**UpdateDocumentStyleRequest**](UpdateDocumentStyleRequest.md) |  | [optional] 
**update_paragraph_style** | [**UpdateParagraphStyleRequest**](UpdateParagraphStyleRequest.md) |  | [optional] 
**update_section_style** | [**UpdateSectionStyleRequest**](UpdateSectionStyleRequest.md) |  | [optional] 
**update_table_cell_style** | [**UpdateTableCellStyleRequest**](UpdateTableCellStyleRequest.md) |  | [optional] 
**update_table_column_properties** | [**UpdateTableColumnPropertiesRequest**](UpdateTableColumnPropertiesRequest.md) |  | [optional] 
**update_table_row_style** | [**UpdateTableRowStyleRequest**](UpdateTableRowStyleRequest.md) |  | [optional] 
**update_text_style** | [**UpdateTextStyleRequest**](UpdateTextStyleRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


