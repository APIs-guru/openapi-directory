# PositionedObjectPropertiesSuggestionState

A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded_object_suggestion_state** | [**EmbeddedObjectSuggestionState**](EmbeddedObjectSuggestionState.md) |  | [optional] 
**positioning_suggestion_state** | [**PositionedObjectPositioningSuggestionState**](PositionedObjectPositioningSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.positioned_object_properties_suggestion_state import PositionedObjectPropertiesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of PositionedObjectPropertiesSuggestionState from a JSON string
positioned_object_properties_suggestion_state_instance = PositionedObjectPropertiesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(PositionedObjectPropertiesSuggestionState.to_json())

# convert the object into a dict
positioned_object_properties_suggestion_state_dict = positioned_object_properties_suggestion_state_instance.to_dict()
# create an instance of PositionedObjectPropertiesSuggestionState from a dict
positioned_object_properties_suggestion_state_from_dict = PositionedObjectPropertiesSuggestionState.from_dict(positioned_object_properties_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


