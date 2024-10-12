# UpdateNetworkSwitchRoutingOspfRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**areas** | [**List[UpdateNetworkSwitchRoutingOspfRequestAreasInner]**](UpdateNetworkSwitchRoutingOspfRequestAreasInner.md) | OSPF areas | [optional] 
**dead_timer_in_seconds** | **int** | Time interval to determine when the peer will be declared inactive/dead. Value must be between 1 and 65535 | [optional] 
**enabled** | **bool** | Boolean value to enable or disable OSPF routing. OSPF routing is disabled by default. | [optional] 
**hello_timer_in_seconds** | **int** | Time interval in seconds at which hello packet will be sent to OSPF neighbors to maintain connectivity. Value must be between 1 and 255. Default is 10 seconds. | [optional] 
**md5_authentication_enabled** | **bool** | Boolean value to enable or disable MD5 authentication. MD5 authentication is disabled by default. | [optional] 
**md5_authentication_key** | [**UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey**](UpdateNetworkSwitchRoutingOspfRequestMd5AuthenticationKey.md) |  | [optional] 
**v3** | [**UpdateNetworkSwitchRoutingOspfRequestV3**](UpdateNetworkSwitchRoutingOspfRequestV3.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_routing_ospf_request import UpdateNetworkSwitchRoutingOspfRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingOspfRequest from a JSON string
update_network_switch_routing_ospf_request_instance = UpdateNetworkSwitchRoutingOspfRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingOspfRequest.to_json())

# convert the object into a dict
update_network_switch_routing_ospf_request_dict = update_network_switch_routing_ospf_request_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingOspfRequest from a dict
update_network_switch_routing_ospf_request_from_dict = UpdateNetworkSwitchRoutingOspfRequest.from_dict(update_network_switch_routing_ospf_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


