# PopupWindowProperties

Popup Window Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | [**Size**](Size.md) |  | [optional] 
**offset** | [**OffsetPosition**](OffsetPosition.md) |  | [optional] 
**position_type** | **str** | Popup window position either centered or at specific coordinate. | [optional] 
**show_address_bar** | **bool** | Whether to display the browser address bar. | [optional] 
**show_menu_bar** | **bool** | Whether to display the browser menu bar. | [optional] 
**show_scroll_bar** | **bool** | Whether to display the browser scroll bar. | [optional] 
**show_status_bar** | **bool** | Whether to display the browser status bar. | [optional] 
**show_tool_bar** | **bool** | Whether to display the browser tool bar. | [optional] 
**title** | **str** | Title of popup window. | [optional] 

## Example

```python
from openapi_client.models.popup_window_properties import PopupWindowProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PopupWindowProperties from a JSON string
popup_window_properties_instance = PopupWindowProperties.from_json(json)
# print the JSON string representation of the object
print(PopupWindowProperties.to_json())

# convert the object into a dict
popup_window_properties_dict = popup_window_properties_instance.to_dict()
# create an instance of PopupWindowProperties from a dict
popup_window_properties_from_dict = PopupWindowProperties.from_dict(popup_window_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


