# UpdateNetworkSwitchRoutingMulticastRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_settings** | [**UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings**](UpdateNetworkSwitchRoutingMulticastRequestDefaultSettings.md) |  | [optional] 
**overrides** | [**List[UpdateNetworkSwitchRoutingMulticastRequestOverridesInner]**](UpdateNetworkSwitchRoutingMulticastRequestOverridesInner.md) | Array of paired switches/stacks/profiles and corresponding multicast settings. An empty array will clear the multicast settings. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_routing_multicast_request import UpdateNetworkSwitchRoutingMulticastRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingMulticastRequest from a JSON string
update_network_switch_routing_multicast_request_instance = UpdateNetworkSwitchRoutingMulticastRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingMulticastRequest.to_json())

# convert the object into a dict
update_network_switch_routing_multicast_request_dict = update_network_switch_routing_multicast_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingMulticastRequest from a dict
update_network_switch_routing_multicast_request_from_dict = UpdateNetworkSwitchRoutingMulticastRequest.from_dict(update_network_switch_routing_multicast_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


