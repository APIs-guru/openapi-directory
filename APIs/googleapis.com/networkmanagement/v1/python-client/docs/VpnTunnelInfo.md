# VpnTunnelInfo

For display only. Metadata associated with a Compute Engine VPN tunnel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a VPN tunnel. | [optional] 
**network_uri** | **str** | URI of a Compute Engine network where the VPN tunnel is configured. | [optional] 
**region** | **str** | Name of a Google Cloud region where this VPN tunnel is configured. | [optional] 
**remote_gateway** | **str** | URI of a VPN gateway at remote end of the tunnel. | [optional] 
**remote_gateway_ip** | **str** | Remote VPN gateway&#39;s IP address. | [optional] 
**routing_type** | **str** | Type of the routing policy. | [optional] 
**source_gateway** | **str** | URI of the VPN gateway at local end of the tunnel. | [optional] 
**source_gateway_ip** | **str** | Local VPN gateway&#39;s IP address. | [optional] 
**uri** | **str** | URI of a VPN tunnel. | [optional] 

## Example

```python
from openapi_client.models.vpn_tunnel_info import VpnTunnelInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VpnTunnelInfo from a JSON string
vpn_tunnel_info_instance = VpnTunnelInfo.from_json(json)
# print the JSON string representation of the object
print(VpnTunnelInfo.to_json())

# convert the object into a dict
vpn_tunnel_info_dict = vpn_tunnel_info_instance.to_dict()
# create an instance of VpnTunnelInfo from a dict
vpn_tunnel_info_from_dict = VpnTunnelInfo.from_dict(vpn_tunnel_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


