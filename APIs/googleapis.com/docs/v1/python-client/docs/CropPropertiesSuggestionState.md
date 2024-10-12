# CropPropertiesSuggestionState

A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle_suggested** | **bool** | Indicates if there was a suggested change to angle. | [optional] 
**offset_bottom_suggested** | **bool** | Indicates if there was a suggested change to offset_bottom. | [optional] 
**offset_left_suggested** | **bool** | Indicates if there was a suggested change to offset_left. | [optional] 
**offset_right_suggested** | **bool** | Indicates if there was a suggested change to offset_right. | [optional] 
**offset_top_suggested** | **bool** | Indicates if there was a suggested change to offset_top. | [optional] 

## Example

```python
from openapi_client.models.crop_properties_suggestion_state import CropPropertiesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of CropPropertiesSuggestionState from a JSON string
crop_properties_suggestion_state_instance = CropPropertiesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(CropPropertiesSuggestionState.to_json())

# convert the object into a dict
crop_properties_suggestion_state_dict = crop_properties_suggestion_state_instance.to_dict()
# create an instance of CropPropertiesSuggestionState from a dict
crop_properties_suggestion_state_from_dict = CropPropertiesSuggestionState.from_dict(crop_properties_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


