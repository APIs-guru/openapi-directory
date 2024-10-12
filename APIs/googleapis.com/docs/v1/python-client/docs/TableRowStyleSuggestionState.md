# TableRowStyleSuggestionState

A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_row_height_suggested** | **bool** | Indicates if there was a suggested change to min_row_height. | [optional] 

## Example

```python
from openapi_client.models.table_row_style_suggestion_state import TableRowStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of TableRowStyleSuggestionState from a JSON string
table_row_style_suggestion_state_instance = TableRowStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(TableRowStyleSuggestionState.to_json())

# convert the object into a dict
table_row_style_suggestion_state_dict = table_row_style_suggestion_state_instance.to_dict()
# create an instance of TableRowStyleSuggestionState from a dict
table_row_style_suggestion_state_from_dict = TableRowStyleSuggestionState.from_dict(table_row_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


