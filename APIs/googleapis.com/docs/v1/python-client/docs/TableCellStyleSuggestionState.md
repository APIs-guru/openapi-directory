# TableCellStyleSuggestionState

A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color_suggested** | **bool** | Indicates if there was a suggested change to background_color. | [optional] 
**border_bottom_suggested** | **bool** | Indicates if there was a suggested change to border_bottom. | [optional] 
**border_left_suggested** | **bool** | Indicates if there was a suggested change to border_left. | [optional] 
**border_right_suggested** | **bool** | Indicates if there was a suggested change to border_right. | [optional] 
**border_top_suggested** | **bool** | Indicates if there was a suggested change to border_top. | [optional] 
**column_span_suggested** | **bool** | Indicates if there was a suggested change to column_span. | [optional] 
**content_alignment_suggested** | **bool** | Indicates if there was a suggested change to content_alignment. | [optional] 
**padding_bottom_suggested** | **bool** | Indicates if there was a suggested change to padding_bottom. | [optional] 
**padding_left_suggested** | **bool** | Indicates if there was a suggested change to padding_left. | [optional] 
**padding_right_suggested** | **bool** | Indicates if there was a suggested change to padding_right. | [optional] 
**padding_top_suggested** | **bool** | Indicates if there was a suggested change to padding_top. | [optional] 
**row_span_suggested** | **bool** | Indicates if there was a suggested change to row_span. | [optional] 

## Example

```python
from openapi_client.models.table_cell_style_suggestion_state import TableCellStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of TableCellStyleSuggestionState from a JSON string
table_cell_style_suggestion_state_instance = TableCellStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(TableCellStyleSuggestionState.to_json())

# convert the object into a dict
table_cell_style_suggestion_state_dict = table_cell_style_suggestion_state_instance.to_dict()
# create an instance of TableCellStyleSuggestionState from a dict
table_cell_style_suggestion_state_from_dict = TableCellStyleSuggestionState.from_dict(table_cell_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


