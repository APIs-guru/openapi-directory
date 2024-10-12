# TableCellBorder

A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | [**OptionalColor**](OptionalColor.md) |  | [optional] 
**dash_style** | **str** | The dash style of the border. | [optional] 
**width** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_cell_border import TableCellBorder

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellBorder from a JSON string
table_cell_border_instance = TableCellBorder.from_json(json)
# print the JSON string representation of the object
print(TableCellBorder.to_json())

# convert the object into a dict
table_cell_border_dict = table_cell_border_instance.to_dict()
# create an instance of TableCellBorder from a dict
table_cell_border_from_dict = TableCellBorder.from_dict(table_cell_border_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


