# ShadingSuggestionState

A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color_suggested** | **bool** | Indicates if there was a suggested change to the Shading. | [optional] 

## Example

```python
from openapi_client.models.shading_suggestion_state import ShadingSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of ShadingSuggestionState from a JSON string
shading_suggestion_state_instance = ShadingSuggestionState.from_json(json)
# print the JSON string representation of the object
print(ShadingSuggestionState.to_json())

# convert the object into a dict
shading_suggestion_state_dict = shading_suggestion_state_instance.to_dict()
# create an instance of ShadingSuggestionState from a dict
shading_suggestion_state_from_dict = ShadingSuggestionState.from_dict(shading_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


