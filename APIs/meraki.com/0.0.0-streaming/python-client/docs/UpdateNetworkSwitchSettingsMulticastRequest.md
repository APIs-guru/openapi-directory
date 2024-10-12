# UpdateNetworkSwitchSettingsMulticastRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_settings** | [**UpdateNetworkSwitchSettingsMulticastRequestDefaultSettings**](UpdateNetworkSwitchSettingsMulticastRequestDefaultSettings.md) |  | [optional] 
**overrides** | [**List[UpdateNetworkSwitchSettingsMulticastRequestOverridesInner]**](UpdateNetworkSwitchSettingsMulticastRequestOverridesInner.md) | Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_settings_multicast_request import UpdateNetworkSwitchSettingsMulticastRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchSettingsMulticastRequest from a JSON string
update_network_switch_settings_multicast_request_instance = UpdateNetworkSwitchSettingsMulticastRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchSettingsMulticastRequest.to_json())

# convert the object into a dict
update_network_switch_settings_multicast_request_dict = update_network_switch_settings_multicast_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchSettingsMulticastRequest from a dict
update_network_switch_settings_multicast_request_from_dict = UpdateNetworkSwitchSettingsMulticastRequest.from_dict(update_network_switch_settings_multicast_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


