# CreateNetworkSwitchRoutingMulticastRendezvousPointRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interface_ip** | **str** | The IP address of the interface where the RP needs to be created. | 
**multicast_group** | **str** | &#39;Any&#39;, or the IP address of a multicast group | 

## Example

```python
from openapi_client.models.create_network_switch_routing_multicast_rendezvous_point_request import CreateNetworkSwitchRoutingMulticastRendezvousPointRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchRoutingMulticastRendezvousPointRequest from a JSON string
create_network_switch_routing_multicast_rendezvous_point_request_instance = CreateNetworkSwitchRoutingMulticastRendezvousPointRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchRoutingMulticastRendezvousPointRequest.to_json())

# convert the object into a dict
create_network_switch_routing_multicast_rendezvous_point_request_dict = create_network_switch_routing_multicast_rendezvous_point_request_instance.to_dict()
# create an instance of CreateNetworkSwitchRoutingMulticastRendezvousPointRequest from a dict
create_network_switch_routing_multicast_rendezvous_point_request_from_dict = CreateNetworkSwitchRoutingMulticastRendezvousPointRequest.from_dict(create_network_switch_routing_multicast_rendezvous_point_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


