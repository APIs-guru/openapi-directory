# ParagraphStyleSuggestionState

A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alignment_suggested** | **bool** | Indicates if there was a suggested change to alignment. | [optional] 
**avoid_widow_and_orphan_suggested** | **bool** | Indicates if there was a suggested change to avoid_widow_and_orphan. | [optional] 
**border_between_suggested** | **bool** | Indicates if there was a suggested change to border_between. | [optional] 
**border_bottom_suggested** | **bool** | Indicates if there was a suggested change to border_bottom. | [optional] 
**border_left_suggested** | **bool** | Indicates if there was a suggested change to border_left. | [optional] 
**border_right_suggested** | **bool** | Indicates if there was a suggested change to border_right. | [optional] 
**border_top_suggested** | **bool** | Indicates if there was a suggested change to border_top. | [optional] 
**direction_suggested** | **bool** | Indicates if there was a suggested change to direction. | [optional] 
**heading_id_suggested** | **bool** | Indicates if there was a suggested change to heading_id. | [optional] 
**indent_end_suggested** | **bool** | Indicates if there was a suggested change to indent_end. | [optional] 
**indent_first_line_suggested** | **bool** | Indicates if there was a suggested change to indent_first_line. | [optional] 
**indent_start_suggested** | **bool** | Indicates if there was a suggested change to indent_start. | [optional] 
**keep_lines_together_suggested** | **bool** | Indicates if there was a suggested change to keep_lines_together. | [optional] 
**keep_with_next_suggested** | **bool** | Indicates if there was a suggested change to keep_with_next. | [optional] 
**line_spacing_suggested** | **bool** | Indicates if there was a suggested change to line_spacing. | [optional] 
**named_style_type_suggested** | **bool** | Indicates if there was a suggested change to named_style_type. | [optional] 
**page_break_before_suggested** | **bool** | Indicates if there was a suggested change to page_break_before. | [optional] 
**shading_suggestion_state** | [**ShadingSuggestionState**](ShadingSuggestionState.md) |  | [optional] 
**space_above_suggested** | **bool** | Indicates if there was a suggested change to space_above. | [optional] 
**space_below_suggested** | **bool** | Indicates if there was a suggested change to space_below. | [optional] 
**spacing_mode_suggested** | **bool** | Indicates if there was a suggested change to spacing_mode. | [optional] 

## Example

```python
from openapi_client.models.paragraph_style_suggestion_state import ParagraphStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of ParagraphStyleSuggestionState from a JSON string
paragraph_style_suggestion_state_instance = ParagraphStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(ParagraphStyleSuggestionState.to_json())

# convert the object into a dict
paragraph_style_suggestion_state_dict = paragraph_style_suggestion_state_instance.to_dict()
# create an instance of ParagraphStyleSuggestionState from a dict
paragraph_style_suggestion_state_from_dict = ParagraphStyleSuggestionState.from_dict(paragraph_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


