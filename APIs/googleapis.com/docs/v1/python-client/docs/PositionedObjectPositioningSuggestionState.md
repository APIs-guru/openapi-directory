# PositionedObjectPositioningSuggestionState

A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout_suggested** | **bool** | Indicates if there was a suggested change to layout. | [optional] 
**left_offset_suggested** | **bool** | Indicates if there was a suggested change to left_offset. | [optional] 
**top_offset_suggested** | **bool** | Indicates if there was a suggested change to top_offset. | [optional] 

## Example

```python
from openapi_client.models.positioned_object_positioning_suggestion_state import PositionedObjectPositioningSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of PositionedObjectPositioningSuggestionState from a JSON string
positioned_object_positioning_suggestion_state_instance = PositionedObjectPositioningSuggestionState.from_json(json)
# print the JSON string representation of the object
print(PositionedObjectPositioningSuggestionState.to_json())

# convert the object into a dict
positioned_object_positioning_suggestion_state_dict = positioned_object_positioning_suggestion_state_instance.to_dict()
# create an instance of PositionedObjectPositioningSuggestionState from a dict
positioned_object_positioning_suggestion_state_from_dict = PositionedObjectPositioningSuggestionState.from_dict(positioned_object_positioning_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


