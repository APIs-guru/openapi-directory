# ListPropertiesSuggestionState

A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nesting_levels_suggestion_states** | [**List[NestingLevelSuggestionState]**](NestingLevelSuggestionState.md) | A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first. | [optional] 

## Example

```python
from openapi_client.models.list_properties_suggestion_state import ListPropertiesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of ListPropertiesSuggestionState from a JSON string
list_properties_suggestion_state_instance = ListPropertiesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(ListPropertiesSuggestionState.to_json())

# convert the object into a dict
list_properties_suggestion_state_dict = list_properties_suggestion_state_instance.to_dict()
# create an instance of ListPropertiesSuggestionState from a dict
list_properties_suggestion_state_from_dict = ListPropertiesSuggestionState.from_dict(list_properties_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


