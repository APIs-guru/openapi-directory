# BackgroundSuggestionState

A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color_suggested** | **bool** | Indicates whether the current background color has been modified in this suggestion. | [optional] 

## Example

```python
from openapi_client.models.background_suggestion_state import BackgroundSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of BackgroundSuggestionState from a JSON string
background_suggestion_state_instance = BackgroundSuggestionState.from_json(json)
# print the JSON string representation of the object
print(BackgroundSuggestionState.to_json())

# convert the object into a dict
background_suggestion_state_dict = background_suggestion_state_instance.to_dict()
# create an instance of BackgroundSuggestionState from a dict
background_suggestion_state_from_dict = BackgroundSuggestionState.from_dict(background_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


