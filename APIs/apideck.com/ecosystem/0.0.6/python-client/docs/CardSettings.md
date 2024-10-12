# CardSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** |  | [optional] 
**border_color** | **str** |  | [optional] 
**border_radius** | **str** |  | [optional] 
**border_size** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**columns** | **int** |  | [optional] 
**description_lines** | **int** |  | [optional] 
**icon_border_radius** | **str** |  | [optional] 
**icon_shadow_enabled** | **bool** |  | [optional] 
**icon_size** | **int** |  | [optional] 
**shadow_enabled** | **bool** |  | [optional] 
**show_action** | **bool** |  | [optional] 
**show_badges** | **bool** |  | [optional] 
**show_category** | **bool** |  | [optional] 
**show_description** | **bool** |  | [optional] 
**style** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.card_settings import CardSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CardSettings from a JSON string
card_settings_instance = CardSettings.from_json(json)
# print the JSON string representation of the object
print(CardSettings.to_json())

# convert the object into a dict
card_settings_dict = card_settings_instance.to_dict()
# create an instance of CardSettings from a dict
card_settings_from_dict = CardSettings.from_dict(card_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


