# TableCell

The contents and style of a cell in a Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[StructuralElement]**](StructuralElement.md) | The content of the cell. | [optional] 
**end_index** | **int** | The zero-based end index of this cell, exclusive, in UTF-16 code units. | [optional] 
**start_index** | **int** | The zero-based start index of this cell, in UTF-16 code units. | [optional] 
**suggested_deletion_ids** | **List[str]** | The suggested deletion IDs. If empty, then there are no suggested deletions of this content. | [optional] 
**suggested_insertion_ids** | **List[str]** | The suggested insertion IDs. A TableCell may have multiple insertion IDs if it&#39;s a nested suggested change. If empty, then this is not a suggested insertion. | [optional] 
**suggested_table_cell_style_changes** | [**Dict[str, SuggestedTableCellStyle]**](SuggestedTableCellStyle.md) | The suggested changes to the table cell style, keyed by suggestion ID. | [optional] 
**table_cell_style** | [**TableCellStyle**](TableCellStyle.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell import TableCell

# TODO update the JSON string below
json = "{}"
# create an instance of TableCell from a JSON string
table_cell_instance = TableCell.from_json(json)
# print the JSON string representation of the object
print(TableCell.to_json())

# convert the object into a dict
table_cell_dict = table_cell_instance.to_dict()
# create an instance of TableCell from a dict
table_cell_from_dict = TableCell.from_dict(table_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


