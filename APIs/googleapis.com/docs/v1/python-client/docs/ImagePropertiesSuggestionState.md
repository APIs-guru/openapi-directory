# ImagePropertiesSuggestionState

A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle_suggested** | **bool** | Indicates if there was a suggested change to angle. | [optional] 
**brightness_suggested** | **bool** | Indicates if there was a suggested change to brightness. | [optional] 
**content_uri_suggested** | **bool** | Indicates if there was a suggested change to content_uri. | [optional] 
**contrast_suggested** | **bool** | Indicates if there was a suggested change to contrast. | [optional] 
**crop_properties_suggestion_state** | [**CropPropertiesSuggestionState**](CropPropertiesSuggestionState.md) |  | [optional] 
**source_uri_suggested** | **bool** | Indicates if there was a suggested change to source_uri. | [optional] 
**transparency_suggested** | **bool** | Indicates if there was a suggested change to transparency. | [optional] 

## Example

```python
from openapi_client.models.image_properties_suggestion_state import ImagePropertiesSuggestionState

# TODO update the JSON string below
json = "{}"
# create an instance of ImagePropertiesSuggestionState from a JSON string
image_properties_suggestion_state_instance = ImagePropertiesSuggestionState.from_json(json)
# print the JSON string representation of the object
print(ImagePropertiesSuggestionState.to_json())

# convert the object into a dict
image_properties_suggestion_state_dict = image_properties_suggestion_state_instance.to_dict()
# create an instance of ImagePropertiesSuggestionState from a dict
image_properties_suggestion_state_from_dict = ImagePropertiesSuggestionState.from_dict(image_properties_suggestion_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


