# KioskCustomization

Settings controlling the behavior of a device in kiosk mode. To enable kiosk mode, set kioskCustomLauncherEnabled to true or specify an app in the policy with installType KIOSK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_settings** | **str** | Specifies whether the Settings app is allowed in kiosk mode. | [optional] 
**power_button_actions** | **str** | Sets the behavior of a device in kiosk mode when a user presses and holds (long-presses) the Power button. | [optional] 
**status_bar** | **str** | Specifies whether system info and notifications are disabled in kiosk mode. | [optional] 
**system_error_warnings** | **str** | Specifies whether system error dialogs for crashed or unresponsive apps are blocked in kiosk mode. When blocked, the system will force-stop the app as if the user chooses the \&quot;close app\&quot; option on the UI. | [optional] 
**system_navigation** | **str** | Specifies which navigation features are enabled (e.g. Home, Overview buttons) in kiosk mode. | [optional] 

## Example

```python
from openapi_client.models.kiosk_customization import KioskCustomization

# TODO update the JSON string below
json = "{}"
# create an instance of KioskCustomization from a JSON string
kiosk_customization_instance = KioskCustomization.from_json(json)
# print the JSON string representation of the object
print(KioskCustomization.to_json())

# convert the object into a dict
kiosk_customization_dict = kiosk_customization_instance.to_dict()
# create an instance of KioskCustomization from a dict
kiosk_customization_from_dict = KioskCustomization.from_dict(kiosk_customization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


