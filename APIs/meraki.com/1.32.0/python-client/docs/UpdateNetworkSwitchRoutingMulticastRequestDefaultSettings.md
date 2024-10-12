# UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings

Default multicast setting for entire network. IGMP snooping and Flood unknown multicast traffic settings are enabled by default.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flood_unknown_multicast_traffic_enabled** | **bool** | Flood unknown multicast traffic setting for entire network | [optional] 
**igmp_snooping_enabled** | **bool** | IGMP snooping setting for entire network | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_routing_multicast_request_default_settings import UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings from a JSON string
update_network_switch_routing_multicast_request_default_settings_instance = UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings.to_json())

# convert the object into a dict
update_network_switch_routing_multicast_request_default_settings_dict = update_network_switch_routing_multicast_request_default_settings_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings from a dict
update_network_switch_routing_multicast_request_default_settings_from_dict = UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings.from_dict(update_network_switch_routing_multicast_request_default_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


