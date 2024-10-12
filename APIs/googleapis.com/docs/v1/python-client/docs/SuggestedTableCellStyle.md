# SuggestedTableCellStyle

A suggested change to a TableCellStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_cell_style** | [**TableCellStyle**](TableCellStyle.md) |  | [optional] 
**table_cell_style_suggestion_state** | [**TableCellStyleSuggestionState**](TableCellStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_table_cell_style import SuggestedTableCellStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedTableCellStyle from a JSON string
suggested_table_cell_style_instance = SuggestedTableCellStyle.from_json(json)
# print the JSON string representation of the object
print(SuggestedTableCellStyle.to_json())

# convert the object into a dict
suggested_table_cell_style_dict = suggested_table_cell_style_instance.to_dict()
# create an instance of SuggestedTableCellStyle from a dict
suggested_table_cell_style_from_dict = SuggestedTableCellStyle.from_dict(suggested_table_cell_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


