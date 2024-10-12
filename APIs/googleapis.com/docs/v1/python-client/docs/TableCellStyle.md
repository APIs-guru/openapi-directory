# TableCellStyle

The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**border_bottom** | [**TableCellBorder**](TableCellBorder.md) |  | [optional] 
**border_left** | [**TableCellBorder**](TableCellBorder.md) |  | [optional] 
**border_right** | [**TableCellBorder**](TableCellBorder.md) |  | [optional] 
**border_top** | [**TableCellBorder**](TableCellBorder.md) |  | [optional] 
**column_span** | **int** | The column span of the cell. This property is read-only. | [optional] 
**content_alignment** | **str** | The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor. | [optional] 
**padding_bottom** | [**Dimension**](Dimension.md) |  | [optional] 
**padding_left** | [**Dimension**](Dimension.md) |  | [optional] 
**padding_right** | [**Dimension**](Dimension.md) |  | [optional] 
**padding_top** | [**Dimension**](Dimension.md) |  | [optional] 
**row_span** | **int** | The row span of the cell. This property is read-only. | [optional] 

## Example

```python
from openapi_client.models.table_cell_style import TableCellStyle

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellStyle from a JSON string
table_cell_style_instance = TableCellStyle.from_json(json)
# print the JSON string representation of the object
print(TableCellStyle.to_json())

# convert the object into a dict
table_cell_style_dict = table_cell_style_instance.to_dict()
# create an instance of TableCellStyle from a dict
table_cell_style_from_dict = TableCellStyle.from_dict(table_cell_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


