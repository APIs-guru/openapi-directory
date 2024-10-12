# VpnGatewayInfo

For display only. Metadata associated with a Compute Engine VPN gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a VPN gateway. | [optional] 
**ip_address** | **str** | IP address of the VPN gateway. | [optional] 
**network_uri** | **str** | URI of a Compute Engine network where the VPN gateway is configured. | [optional] 
**region** | **str** | Name of a Google Cloud region where this VPN gateway is configured. | [optional] 
**uri** | **str** | URI of a VPN gateway. | [optional] 
**vpn_tunnel_uri** | **str** | A VPN tunnel that is associated with this VPN gateway. There may be multiple VPN tunnels configured on a VPN gateway, and only the one relevant to the test is displayed. | [optional] 

## Example

```python
from openapi_client.models.vpn_gateway_info import VpnGatewayInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VpnGatewayInfo from a JSON string
vpn_gateway_info_instance = VpnGatewayInfo.from_json(json)
# print the JSON string representation of the object
print(VpnGatewayInfo.to_json())

# convert the object into a dict
vpn_gateway_info_dict = vpn_gateway_info_instance.to_dict()
# create an instance of VpnGatewayInfo from a dict
vpn_gateway_info_from_dict = VpnGatewayInfo.from_dict(vpn_gateway_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


