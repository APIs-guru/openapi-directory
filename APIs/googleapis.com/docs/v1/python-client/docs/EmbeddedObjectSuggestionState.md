# EmbeddedObjectSuggestionState

A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description_suggested** | **bool** | Indicates if there was a suggested change to description. | [optional] 
**embedded_drawing_properties_suggestion_state** | **object** | A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there&#39;s a new suggested value. | [optional] 
**embedded_object_border_suggestion_state** | [**EmbeddedObjectBorderSuggestionState**](EmbeddedObjectBorderSuggestionState.md) |  | [optional] 
**image_properties_suggestion_state** | [**ImagePropertiesSuggestionState**](ImagePropertiesSuggestionState.md) |  | [optional] 
**linked_content_reference_suggestion_state** | [**LinkedContentReferenceSuggestionState**](LinkedContentReferenceSuggestionState.md) |  | [optional] 
**margin_bottom_suggested** | **bool** | Indicates if there was a suggested change to margin_bottom. | [optional] 
**margin_left_suggested** | **bool** | Indicates if there was a suggested change to margin_left. | [optional] 
**margin_right_suggested** | **bool** | Indicates if there was a suggested change to margin_right. | [optional] 
**margin_top_suggested** | **bool** | Indicates if there was a suggested change to margin_top. | [optional] 
**size_suggestion_state** | [**SizeSuggestionState**](SizeSuggestionState.md) |  | [optional] 
**title_suggested** | **bool** | Indicates if there was a suggested change to title. | [optional] 

## Example

```python
from openapi_client.models.embedded_object_suggestion_state import EmbeddedObjectSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedObjectSuggestionState from a JSON string
embedded_object_suggestion_state_instance = EmbeddedObjectSuggestionState.from_json(json)
# print the JSON string representation of the object
print(EmbeddedObjectSuggestionState.to_json())

# convert the object into a dict
embedded_object_suggestion_state_dict = embedded_object_suggestion_state_instance.to_dict()
# create an instance of EmbeddedObjectSuggestionState from a dict
embedded_object_suggestion_state_from_dict = EmbeddedObjectSuggestionState.from_dict(embedded_object_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


