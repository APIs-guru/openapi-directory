# SuggestedParagraphStyle

A suggested change to a ParagraphStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paragraph_style** | [**ParagraphStyle**](ParagraphStyle.md) |  | [optional] 
**paragraph_style_suggestion_state** | [**ParagraphStyleSuggestionState**](ParagraphStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_paragraph_style import SuggestedParagraphStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedParagraphStyle from a JSON string
suggested_paragraph_style_instance = SuggestedParagraphStyle.from_json(json)
# print the JSON string representation of the object
print(SuggestedParagraphStyle.to_json())

# convert the object into a dict
suggested_paragraph_style_dict = suggested_paragraph_style_instance.to_dict()
# create an instance of SuggestedParagraphStyle from a dict
suggested_paragraph_style_from_dict = SuggestedParagraphStyle.from_dict(suggested_paragraph_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


