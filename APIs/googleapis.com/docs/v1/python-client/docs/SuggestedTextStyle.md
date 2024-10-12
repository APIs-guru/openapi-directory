# SuggestedTextStyle

A suggested change to a TextStyle.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_style** | [**TextStyle**](TextStyle.md) |  | [optional] 
**text_style_suggestion_state** | [**TextStyleSuggestionState**](TextStyleSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_text_style import SuggestedTextStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedTextStyle from a JSON string
suggested_text_style_instance = SuggestedTextStyle.from_json(json)
# print the JSON string representation of the object
print(SuggestedTextStyle.to_json())

# convert the object into a dict
suggested_text_style_dict = suggested_text_style_instance.to_dict()
# create an instance of SuggestedTextStyle from a dict
suggested_text_style_from_dict = SuggestedTextStyle.from_dict(suggested_text_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


