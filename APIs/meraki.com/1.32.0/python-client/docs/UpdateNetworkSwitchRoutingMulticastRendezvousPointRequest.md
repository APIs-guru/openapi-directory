# UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface_ip** | **str** | The IP address of the interface to use | 
**multicast_group** | **str** | &#39;Any&#39;, or the IP address of a multicast group | 

## Example

```python
from openapi_client.models.update_network_switch_routing_multicast_rendezvous_point_request import UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest from a JSON string
update_network_switch_routing_multicast_rendezvous_point_request_instance = UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.to_json())

# convert the object into a dict
update_network_switch_routing_multicast_rendezvous_point_request_dict = update_network_switch_routing_multicast_rendezvous_point_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest from a dict
update_network_switch_routing_multicast_rendezvous_point_request_from_dict = UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest.from_dict(update_network_switch_routing_multicast_rendezvous_point_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


