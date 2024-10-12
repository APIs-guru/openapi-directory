# SuggestedPositionedObjectProperties

A suggested change to PositionedObjectProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**positioned_object_properties** | [**PositionedObjectProperties**](PositionedObjectProperties.md) |  | [optional] 
**positioned_object_properties_suggestion_state** | [**PositionedObjectPropertiesSuggestionState**](PositionedObjectPropertiesSuggestionState.md) |  | [optional] 

## Example

```python
from openapi_client.models.suggested_positioned_object_properties import SuggestedPositionedObjectProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SuggestedPositionedObjectProperties from a JSON string
suggested_positioned_object_properties_instance = SuggestedPositionedObjectProperties.from_json(json)
# print the JSON string representation of the object
print(SuggestedPositionedObjectProperties.to_json())

# convert the object into a dict
suggested_positioned_object_properties_dict = suggested_positioned_object_properties_instance.to_dict()
# create an instance of SuggestedPositionedObjectProperties from a dict
suggested_positioned_object_properties_from_dict = SuggestedPositionedObjectProperties.from_dict(suggested_positioned_object_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


