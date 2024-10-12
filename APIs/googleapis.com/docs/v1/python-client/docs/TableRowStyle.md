# TableRowStyle

Styles that apply to a table row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_row_height** | [**Dimension**](Dimension.md) |  | [optional] 
**prevent_overflow** | **bool** | Whether the row cannot overflow across page or column boundaries. | [optional] 
**table_header** | **bool** | Whether the row is a table header. | [optional] 

## Example

```python
from openapi_client.models.table_row_style import TableRowStyle

# TODO update the JSON string below
json = "{}"
# create an instance of TableRowStyle from a JSON string
table_row_style_instance = TableRowStyle.from_json(json)
# print the JSON string representation of the object
print(TableRowStyle.to_json())

# convert the object into a dict
table_row_style_dict = table_row_style_instance.to_dict()
# create an instance of TableRowStyle from a dict
table_row_style_from_dict = TableRowStyle.from_dict(table_row_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


