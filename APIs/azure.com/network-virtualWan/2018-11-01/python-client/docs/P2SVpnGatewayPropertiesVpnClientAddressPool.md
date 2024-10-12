# P2SVpnGatewayPropertiesVpnClientAddressPool

AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | A list of address blocks reserved for this virtual network in CIDR notation. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_gateway_properties_vpn_client_address_pool import P2SVpnGatewayPropertiesVpnClientAddressPool

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnGatewayPropertiesVpnClientAddressPool from a JSON string
p2_s_vpn_gateway_properties_vpn_client_address_pool_instance = P2SVpnGatewayPropertiesVpnClientAddressPool.from_json(json)
# print the JSON string representation of the object
print(P2SVpnGatewayPropertiesVpnClientAddressPool.to_json())

# convert the object into a dict
p2_s_vpn_gateway_properties_vpn_client_address_pool_dict = p2_s_vpn_gateway_properties_vpn_client_address_pool_instance.to_dict()
# create an instance of P2SVpnGatewayPropertiesVpnClientAddressPool from a dict
p2_s_vpn_gateway_properties_vpn_client_address_pool_from_dict = P2SVpnGatewayPropertiesVpnClientAddressPool.from_dict(p2_s_vpn_gateway_properties_vpn_client_address_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


