# InlineObjectPropertiesSuggestionState

A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded_object_suggestion_state** | [**EmbeddedObjectSuggestionState**](EmbeddedObjectSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.inline_object_properties_suggestion_state import InlineObjectPropertiesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of InlineObjectPropertiesSuggestionState from a JSON string
inline_object_properties_suggestion_state_instance = InlineObjectPropertiesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(InlineObjectPropertiesSuggestionState.to_json())

# convert the object into a dict
inline_object_properties_suggestion_state_dict = inline_object_properties_suggestion_state_instance.to_dict()
# create an instance of InlineObjectPropertiesSuggestionState from a dict
inline_object_properties_suggestion_state_from_dict = InlineObjectPropertiesSuggestionState.from_dict(inline_object_properties_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


