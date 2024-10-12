# TextStyleSuggestionState

A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color_suggested** | **bool** | Indicates if there was a suggested change to background_color. | [optional] 
**baseline_offset_suggested** | **bool** | Indicates if there was a suggested change to baseline_offset. | [optional] 
**bold_suggested** | **bool** | Indicates if there was a suggested change to bold. | [optional] 
**font_size_suggested** | **bool** | Indicates if there was a suggested change to font_size. | [optional] 
**foreground_color_suggested** | **bool** | Indicates if there was a suggested change to foreground_color. | [optional] 
**italic_suggested** | **bool** | Indicates if there was a suggested change to italic. | [optional] 
**link_suggested** | **bool** | Indicates if there was a suggested change to link. | [optional] 
**small_caps_suggested** | **bool** | Indicates if there was a suggested change to small_caps. | [optional] 
**strikethrough_suggested** | **bool** | Indicates if there was a suggested change to strikethrough. | [optional] 
**underline_suggested** | **bool** | Indicates if there was a suggested change to underline. | [optional] 
**weighted_font_family_suggested** | **bool** | Indicates if there was a suggested change to weighted_font_family. | [optional] 

## Example

```python
from openapi_client.models.text_style_suggestion_state import TextStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of TextStyleSuggestionState from a JSON string
text_style_suggestion_state_instance = TextStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(TextStyleSuggestionState.to_json())

# convert the object into a dict
text_style_suggestion_state_dict = text_style_suggestion_state_instance.to_dict()
# create an instance of TextStyleSuggestionState from a dict
text_style_suggestion_state_from_dict = TextStyleSuggestionState.from_dict(text_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


