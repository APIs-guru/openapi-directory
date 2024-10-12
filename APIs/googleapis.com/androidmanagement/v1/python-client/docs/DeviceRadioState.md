# DeviceRadioState

Controls for device radio settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airplane_mode_state** | **str** | Controls whether airplane mode can be toggled by the user or not. | [optional] 
**cellular_two_g_state** | **str** | Controls whether cellular 2G setting can be toggled by the user or not. | [optional] 
**minimum_wifi_security_level** | **str** | The minimum required security level of Wi-Fi networks that the device can connect to. | [optional] 
**ultra_wideband_state** | **str** | Controls the state of the ultra wideband setting and whether the user can toggle it on or off. | [optional] 
**wifi_state** | **str** | Controls current state of Wi-Fi and if user can change its state. | [optional] 

## Example

```python
from openapi_client.models.device_radio_state import DeviceRadioState

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRadioState from a JSON string
device_radio_state_instance = DeviceRadioState.from_json(json)
# print the JSON string representation of the object
print(DeviceRadioState.to_json())

# convert the object into a dict
device_radio_state_dict = device_radio_state_instance.to_dict()
# create an instance of DeviceRadioState from a dict
device_radio_state_from_dict = DeviceRadioState.from_dict(device_radio_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


