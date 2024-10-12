# VirtualNetworkGatewayConnectionListEntityPropertiesFormat

VirtualNetworkGatewayConnection properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization_key** | **str** | The authorizationKey. | [optional] 
**connection_status** | **str** | Virtual network Gateway connection status. Possible values are &#39;Unknown&#39;, &#39;Connecting&#39;, &#39;Connected&#39; and &#39;NotConnected&#39;. | [optional] [readonly] 
**connection_type** | **str** | Gateway connection type. Possible values are: &#39;IPsec&#39;,&#39;Vnet2Vnet&#39;,&#39;ExpressRoute&#39;, and &#39;VPNClient. | 
**egress_bytes_transferred** | **int** | The egress bytes transferred in this connection. | [optional] [readonly] 
**enable_bgp** | **bool** | EnableBgp flag | [optional] 
**express_route_gateway_bypass** | **bool** | Bypass ExpressRoute Gateway for data forwarding | [optional] 
**ingress_bytes_transferred** | **int** | The ingress bytes transferred in this connection. | [optional] [readonly] 
**ipsec_policies** | [**List[IpsecPolicy]**](IpsecPolicy.md) | The IPSec Policies to be considered by this connection. | [optional] 
**local_network_gateway2** | [**VirtualNetworkConnectionGatewayReference**](VirtualNetworkConnectionGatewayReference.md) |  | [optional] 
**peer** | [**VirtualNetworkGatewayConnectionListEntityPropertiesFormatPeer**](VirtualNetworkGatewayConnectionListEntityPropertiesFormatPeer.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state of the VirtualNetworkGatewayConnection resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the VirtualNetworkGatewayConnection resource. | [optional] 
**routing_weight** | **int** | The routing weight. | [optional] 
**shared_key** | **str** | The IPSec shared key. | [optional] 
**tunnel_connection_status** | [**List[TunnelConnectionHealth]**](TunnelConnectionHealth.md) | Collection of all tunnels&#39; connection health status. | [optional] [readonly] 
**use_policy_based_traffic_selectors** | **bool** | Enable policy-based traffic selectors. | [optional] 
**virtual_network_gateway1** | [**VirtualNetworkConnectionGatewayReference**](VirtualNetworkConnectionGatewayReference.md) |  | 
**virtual_network_gateway2** | [**VirtualNetworkConnectionGatewayReference**](VirtualNetworkConnectionGatewayReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_connection_list_entity_properties_format import VirtualNetworkGatewayConnectionListEntityPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayConnectionListEntityPropertiesFormat from a JSON string
virtual_network_gateway_connection_list_entity_properties_format_instance = VirtualNetworkGatewayConnectionListEntityPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayConnectionListEntityPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_connection_list_entity_properties_format_dict = virtual_network_gateway_connection_list_entity_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayConnectionListEntityPropertiesFormat from a dict
virtual_network_gateway_connection_list_entity_properties_format_from_dict = VirtualNetworkGatewayConnectionListEntityPropertiesFormat.from_dict(virtual_network_gateway_connection_list_entity_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


