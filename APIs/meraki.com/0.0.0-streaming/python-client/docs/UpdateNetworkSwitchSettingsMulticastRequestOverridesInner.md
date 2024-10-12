# UpdateNetworkSwitchSettingsMulticastRequestOverridesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flood_unknown_multicast_traffic_enabled** | **bool** | Flood unknown multicast traffic setting for switches, switch stacks or switch profiles | 
**igmp_snooping_enabled** | **bool** | IGMP snooping setting for switches, switch stacks or switch profiles | 
**stacks** | **List[str]** | List of switch stack ids for non-template network | [optional] 
**switch_profiles** | **List[str]** | List of switch profiles ids for template network | [optional] 
**switches** | **List[str]** | List of switch serials for non-template network | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_settings_multicast_request_overrides_inner import UpdateNetworkSwitchSettingsMulticastRequestOverridesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchSettingsMulticastRequestOverridesInner from a JSON string
update_network_switch_settings_multicast_request_overrides_inner_instance = UpdateNetworkSwitchSettingsMulticastRequestOverridesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchSettingsMulticastRequestOverridesInner.to_json())

# convert the object into a dict
update_network_switch_settings_multicast_request_overrides_inner_dict = update_network_switch_settings_multicast_request_overrides_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchSettingsMulticastRequestOverridesInner from a dict
update_network_switch_settings_multicast_request_overrides_inner_from_dict = UpdateNetworkSwitchSettingsMulticastRequestOverridesInner.from_dict(update_network_switch_settings_multicast_request_overrides_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


