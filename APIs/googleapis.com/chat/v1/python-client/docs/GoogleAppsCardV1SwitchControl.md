# GoogleAppsCardV1SwitchControl

Either a toggle-style switch or a checkbox inside a `decoratedText` widget. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): Only supported in the `decoratedText` widget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_type** | **str** | How the switch appears in the user interface. [Google Workspace Add-ons and Chat apps](https://developers.google.com/workspace/extend): | [optional] 
**name** | **str** | The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 
**on_change_action** | [**GoogleAppsCardV1Action**](GoogleAppsCardV1Action.md) |  | [optional] 
**selected** | **bool** | When &#x60;true&#x60;, the switch is selected. | [optional] 
**value** | **str** | The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/ui/read-form-data). | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_switch_control import GoogleAppsCardV1SwitchControl

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1SwitchControl from a JSON string
google_apps_card_v1_switch_control_instance = GoogleAppsCardV1SwitchControl.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1SwitchControl.to_json())

# convert the object into a dict
google_apps_card_v1_switch_control_dict = google_apps_card_v1_switch_control_instance.to_dict()
# create an instance of GoogleAppsCardV1SwitchControl from a dict
google_apps_card_v1_switch_control_from_dict = GoogleAppsCardV1SwitchControl.from_dict(google_apps_card_v1_switch_control_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


