# VirtualNetworkGatewayPropertiesFormat

VirtualNetworkGateway properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_active** | **bool** | ActiveActive flag | [optional] 
**bgp_settings** | [**BgpSettings**](BgpSettings.md) |  | [optional] 
**enable_bgp** | **bool** | Whether BGP is enabled for this virtual network gateway or not. | [optional] 
**gateway_default_site** | [**VirtualNetworkGatewayConnectionPropertiesFormatPeer**](VirtualNetworkGatewayConnectionPropertiesFormatPeer.md) |  | [optional] 
**gateway_type** | **str** | The type of this virtual network gateway. Possible values are: &#39;Vpn&#39; and &#39;ExpressRoute&#39;. | [optional] 
**ip_configurations** | [**List[VirtualNetworkGatewayIPConfiguration]**](VirtualNetworkGatewayIPConfiguration.md) | IP configurations for virtual network gateway. | [optional] 
**provisioning_state** | **str** | The provisioning state of the VirtualNetworkGateway resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the VirtualNetworkGateway resource. | [optional] 
**sku** | [**VirtualNetworkGatewaySku**](VirtualNetworkGatewaySku.md) |  | [optional] 
**vpn_client_configuration** | [**VpnClientConfiguration**](VpnClientConfiguration.md) |  | [optional] 
**vpn_type** | **str** | The type of this virtual network gateway. Possible values are: &#39;PolicyBased&#39; and &#39;RouteBased&#39;. | [optional] 

## Example

```python
from openapi_client.models.virtual_network_gateway_properties_format import VirtualNetworkGatewayPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkGatewayPropertiesFormat from a JSON string
virtual_network_gateway_properties_format_instance = VirtualNetworkGatewayPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkGatewayPropertiesFormat.to_json())

# convert the object into a dict
virtual_network_gateway_properties_format_dict = virtual_network_gateway_properties_format_instance.to_dict()
# create an instance of VirtualNetworkGatewayPropertiesFormat from a dict
virtual_network_gateway_properties_format_from_dict = VirtualNetworkGatewayPropertiesFormat.from_dict(virtual_network_gateway_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


