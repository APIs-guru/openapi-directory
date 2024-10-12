# SuggestedInlineObjectProperties

A suggested change to InlineObjectProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline_object_properties** | [**InlineObjectProperties**](InlineObjectProperties.md) |  | [optional] 
**inline_object_properties_suggestion_state** | [**InlineObjectPropertiesSuggestionState**](InlineObjectPropertiesSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_inline_object_properties import SuggestedInlineObjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedInlineObjectProperties from a JSON string
suggested_inline_object_properties_instance = SuggestedInlineObjectProperties.from_json(json)
# print the JSON string representation of the object
print(SuggestedInlineObjectProperties.to_json())

# convert the object into a dict
suggested_inline_object_properties_dict = suggested_inline_object_properties_instance.to_dict()
# create an instance of SuggestedInlineObjectProperties from a dict
suggested_inline_object_properties_from_dict = SuggestedInlineObjectProperties.from_dict(suggested_inline_object_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


