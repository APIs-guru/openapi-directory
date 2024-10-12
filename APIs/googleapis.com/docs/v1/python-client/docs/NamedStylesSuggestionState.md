# NamedStylesSuggestionState

The suggestion state of a NamedStyles message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**styles_suggestion_states** | [**List[NamedStyleSuggestionState]**](NamedStyleSuggestionState.md) | A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion. | [optional] 

## Example

```python
from openapi_client.models.named_styles_suggestion_state import NamedStylesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of NamedStylesSuggestionState from a JSON string
named_styles_suggestion_state_instance = NamedStylesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(NamedStylesSuggestionState.to_json())

# convert the object into a dict
named_styles_suggestion_state_dict = named_styles_suggestion_state_instance.to_dict()
# create an instance of NamedStylesSuggestionState from a dict
named_styles_suggestion_state_from_dict = NamedStylesSuggestionState.from_dict(named_styles_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


