# CellFormat

The format of a cell.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | [**Color**](Color.md) |  | [optional] 
**background_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**borders** | [**Borders**](Borders.md) |  | [optional] 
**horizontal_alignment** | **str** | The horizontal alignment of the value in the cell. | [optional] 
**hyperlink_display_type** | **str** | If one exists, how a hyperlink should be displayed in the cell. | [optional] 
**number_format** | [**NumberFormat**](NumberFormat.md) |  | [optional] 
**padding** | [**Padding**](Padding.md) |  | [optional] 
**text_direction** | **str** | The direction of the text in the cell. | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**text_rotation** | [**TextRotation**](TextRotation.md) |  | [optional] 
**vertical_alignment** | **str** | The vertical alignment of the value in the cell. | [optional] 
**wrap_strategy** | **str** | The wrap strategy for the value in the cell. | [optional] 

## Example

```python
from openapi_client.models.cell_format import CellFormat

# TODO update the JSON string below
json = "{}"
# create an instance of CellFormat from a JSON string
cell_format_instance = CellFormat.from_json(json)
# print the JSON string representation of the object
print(CellFormat.to_json())

# convert the object into a dict
cell_format_dict = cell_format_instance.to_dict()
# create an instance of CellFormat from a dict
cell_format_from_dict = CellFormat.from_dict(cell_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


