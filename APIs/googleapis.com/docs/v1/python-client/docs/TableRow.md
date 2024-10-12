# TableRow

The contents and style of a row in a Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The zero-based end index of this row, exclusive, in UTF-16 code units. | [optional] 
**start_index** | **int** | The zero-based start index of this row, in UTF-16 code units. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A TableRow may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_table_row_style_changes** | [**Dict[str, SuggestedTableRowStyle]**](SuggestedTableRowStyle.md) | The suggested style changes to this row, keyed by suggestion ID. | [optional] 
**table_cells** | [**List[TableCell]**](TableCell.md) | The contents and style of each cell in this row. It&#39;s possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table. | [optional] 
**table_row_style** | [**TableRowStyle**](TableRowStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_row import TableRow

# TODO update the JSON string below
json = "{}"
# create an instance of TableRow from a JSON string
table_row_instance = TableRow.from_json(json)
# print the JSON string representation of the object
print(TableRow.to_json())

# convert the object into a dict
table_row_dict = table_row_instance.to_dict()
# create an instance of TableRow from a dict
table_row_from_dict = TableRow.from_dict(table_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


