# P2SVpnGatewayProperties

Parameters for P2SVpnGateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_routes** | [**P2SVpnGatewayPropertiesCustomRoutes**](P2SVpnGatewayPropertiesCustomRoutes.md) |  | [optional] 
**p2_s_vpn_server_configuration** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**virtual_hub** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 
**vpn_client_address_pool** | [**P2SVpnGatewayPropertiesCustomRoutes**](P2SVpnGatewayPropertiesCustomRoutes.md) |  | [optional] 
**vpn_client_connection_health** | [**VpnClientConnectionHealth**](VpnClientConnectionHealth.md) |  | [optional] 
**vpn_gateway_scale_unit** | **int** | The scale unit for this p2s vpn gateway. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_gateway_properties import P2SVpnGatewayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnGatewayProperties from a JSON string
p2_s_vpn_gateway_properties_instance = P2SVpnGatewayProperties.from_json(json)
# print the JSON string representation of the object
print(P2SVpnGatewayProperties.to_json())

# convert the object into a dict
p2_s_vpn_gateway_properties_dict = p2_s_vpn_gateway_properties_instance.to_dict()
# create an instance of P2SVpnGatewayProperties from a dict
p2_s_vpn_gateway_properties_from_dict = P2SVpnGatewayProperties.from_dict(p2_s_vpn_gateway_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


