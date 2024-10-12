# NamedStyleSuggestionState

A suggestion state of a NamedStyle message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**named_style_type** | **str** | The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle. | [optional] 
**paragraph_style_suggestion_state** | [**ParagraphStyleSuggestionState**](ParagraphStyleSuggestionState.md) |  | [optional] 
**text_style_suggestion_state** | [**TextStyleSuggestionState**](TextStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.named_style_suggestion_state import NamedStyleSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of NamedStyleSuggestionState from a JSON string
named_style_suggestion_state_instance = NamedStyleSuggestionState.from_json(json)
# print the JSON string representation of the object
print(NamedStyleSuggestionState.to_json())

# convert the object into a dict
named_style_suggestion_state_dict = named_style_suggestion_state_instance.to_dict()
# create an instance of NamedStyleSuggestionState from a dict
named_style_suggestion_state_from_dict = NamedStyleSuggestionState.from_dict(named_style_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


