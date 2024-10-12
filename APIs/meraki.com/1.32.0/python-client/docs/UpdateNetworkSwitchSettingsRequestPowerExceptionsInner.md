# UpdateNetworkSwitchSettingsRequestPowerExceptionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**power_type** | **str** | Per switch exception (combined, redundant, useNetworkSetting) | 
**serial** | **str** | Serial number of the switch | 

## Example

```python
from openapi_client.models.update_network_switch_settings_request_power_exceptions_inner import UpdateNetworkSwitchSettingsRequestPowerExceptionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchSettingsRequestPowerExceptionsInner from a JSON string
update_network_switch_settings_request_power_exceptions_inner_instance = UpdateNetworkSwitchSettingsRequestPowerExceptionsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchSettingsRequestPowerExceptionsInner.to_json())

# convert the object into a dict
update_network_switch_settings_request_power_exceptions_inner_dict = update_network_switch_settings_request_power_exceptions_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchSettingsRequestPowerExceptionsInner from a dict
update_network_switch_settings_request_power_exceptions_inner_from_dict = UpdateNetworkSwitchSettingsRequestPowerExceptionsInner.from_dict(update_network_switch_settings_request_power_exceptions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


