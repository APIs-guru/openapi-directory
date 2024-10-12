# NestingLevelSuggestionState

A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bullet_alignment_suggested** | **bool** | Indicates if there was a suggested change to bullet_alignment. | [optional] 
**glyph_format_suggested** | **bool** | Indicates if there was a suggested change to glyph_format. | [optional] 
**glyph_symbol_suggested** | **bool** | Indicates if there was a suggested change to glyph_symbol. | [optional] 
**glyph_type_suggested** | **bool** | Indicates if there was a suggested change to glyph_type. | [optional] 
**indent_first_line_suggested** | **bool** | Indicates if there was a suggested change to indent_first_line. | [optional] 
**indent_start_suggested** | **bool** | Indicates if there was a suggested change to indent_start. | [optional] 
**start_number_suggested** | **bool** | Indicates if there was a suggested change to start_number. | [optional] 
**text_style_suggestion_state** | [**TextStyleSuggestionState**](TextStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.nesting_level_suggestion_state import NestingLevelSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of NestingLevelSuggestionState from a JSON string
nesting_level_suggestion_state_instance = NestingLevelSuggestionState.from_json(json)
# print the JSON string representation of the object
print(NestingLevelSuggestionState.to_json())

# convert the object into a dict
nesting_level_suggestion_state_dict = nesting_level_suggestion_state_instance.to_dict()
# create an instance of NestingLevelSuggestionState from a dict
nesting_level_suggestion_state_from_dict = NestingLevelSuggestionState.from_dict(nesting_level_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


