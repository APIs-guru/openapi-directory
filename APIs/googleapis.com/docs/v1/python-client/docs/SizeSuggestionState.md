# SizeSuggestionState

A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height_suggested** | **bool** | Indicates if there was a suggested change to height. | [optional] 
**width_suggested** | **bool** | Indicates if there was a suggested change to width. | [optional] 

## Example

```python
from openapi_client.models.size_suggestion_state import SizeSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of SizeSuggestionState from a JSON string
size_suggestion_state_instance = SizeSuggestionState.from_json(json)
# print the JSON string representation of the object
print(SizeSuggestionState.to_json())

# convert the object into a dict
size_suggestion_state_dict = size_suggestion_state_instance.to_dict()
# create an instance of SizeSuggestionState from a dict
size_suggestion_state_from_dict = SizeSuggestionState.from_dict(size_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


