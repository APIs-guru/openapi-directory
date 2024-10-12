# UpdateNetworkSwitchRoutingOspfRequestV3

OSPF v3 configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**areas** | [**List[UpdateNetworkSwitchRoutingOspfRequestAreasInner]**](UpdateNetworkSwitchRoutingOspfRequestAreasInner.md) | OSPF v3 areas | [optional] 
**dead_timer_in_seconds** | **int** | Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535 | [optional] 
**enabled** | **bool** | Boolean value to enable or disable V3 OSPF routing. OSPF V3 routing is disabled by default. | [optional] 
**hello_timer_in_seconds** | **int** | Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_routing_ospf_request_v3 import UpdateNetworkSwitchRoutingOspfRequestV3

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingOspfRequestV3 from a JSON string
update_network_switch_routing_ospf_request_v3_instance = UpdateNetworkSwitchRoutingOspfRequestV3.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingOspfRequestV3.to_json())

# convert the object into a dict
update_network_switch_routing_ospf_request_v3_dict = update_network_switch_routing_ospf_request_v3_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingOspfRequestV3 from a dict
update_network_switch_routing_ospf_request_v3_from_dict = UpdateNetworkSwitchRoutingOspfRequestV3.from_dict(update_network_switch_routing_ospf_request_v3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


