# VpnGatewayProperties

Parameters for VpnGateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bgp_settings** | [**VpnGatewayPropertiesBgpSettings**](VpnGatewayPropertiesBgpSettings.md) |  | [optional] 
**connections** | [**List[VpnConnection]**](VpnConnection.md) | List of all vpn connections to the gateway. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**virtual_hub** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 
**vpn_gateway_scale_unit** | **int** | The scale unit for this vpn gateway. | [optional] 

## Example

```python
from openapi_client.models.vpn_gateway_properties import VpnGatewayProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VpnGatewayProperties from a JSON string
vpn_gateway_properties_instance = VpnGatewayProperties.from_json(json)
# print the JSON string representation of the object
print(VpnGatewayProperties.to_json())

# convert the object into a dict
vpn_gateway_properties_dict = vpn_gateway_properties_instance.to_dict()
# create an instance of VpnGatewayProperties from a dict
vpn_gateway_properties_from_dict = VpnGatewayProperties.from_dict(vpn_gateway_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


