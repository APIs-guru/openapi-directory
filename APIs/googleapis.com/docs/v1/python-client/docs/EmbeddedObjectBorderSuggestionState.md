# EmbeddedObjectBorderSuggestionState

A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_suggested** | **bool** | Indicates if there was a suggested change to color. | [optional] 
**dash_style_suggested** | **bool** | Indicates if there was a suggested change to dash_style. | [optional] 
**property_state_suggested** | **bool** | Indicates if there was a suggested change to property_state. | [optional] 
**width_suggested** | **bool** | Indicates if there was a suggested change to width. | [optional] 

## Example

```python
from openapi_client.models.embedded_object_border_suggestion_state import EmbeddedObjectBorderSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedObjectBorderSuggestionState from a JSON string
embedded_object_border_suggestion_state_instance = EmbeddedObjectBorderSuggestionState.from_json(json)
# print the JSON string representation of the object
print(EmbeddedObjectBorderSuggestionState.to_json())

# convert the object into a dict
embedded_object_border_suggestion_state_dict = embedded_object_border_suggestion_state_instance.to_dict()
# create an instance of EmbeddedObjectBorderSuggestionState from a dict
embedded_object_border_suggestion_state_from_dict = EmbeddedObjectBorderSuggestionState.from_dict(embedded_object_border_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


