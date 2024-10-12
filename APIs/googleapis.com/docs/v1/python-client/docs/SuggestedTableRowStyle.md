# SuggestedTableRowStyle

A suggested change to a TableRowStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table_row_style** | [**TableRowStyle**](TableRowStyle.md) |  | [optional] 
**table_row_style_suggestion_state** | [**TableRowStyleSuggestionState**](TableRowStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_table_row_style import SuggestedTableRowStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedTableRowStyle from a JSON string
suggested_table_row_style_instance = SuggestedTableRowStyle.from_json(json)
# print the JSON string representation of the object
print(SuggestedTableRowStyle.to_json())

# convert the object into a dict
suggested_table_row_style_dict = suggested_table_row_style_instance.to_dict()
# create an instance of SuggestedTableRowStyle from a dict
suggested_table_row_style_from_dict = SuggestedTableRowStyle.from_dict(suggested_table_row_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


