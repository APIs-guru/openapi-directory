# VpnSiteProperties

Parameters for VpnSite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_space** | [**P2SVpnGatewayPropertiesVpnClientAddressPool**](P2SVpnGatewayPropertiesVpnClientAddressPool.md) |  | [optional] 
**bgp_properties** | [**VpnGatewayPropertiesBgpSettings**](VpnGatewayPropertiesBgpSettings.md) |  | [optional] 
**device_properties** | [**DeviceProperties**](DeviceProperties.md) |  | [optional] 
**ip_address** | **str** | The ip-address for the vpn-site. | [optional] 
**is_security_site** | **bool** | IsSecuritySite flag | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**site_key** | **str** | The key for vpn-site that can be used for connections. | [optional] 
**virtual_wan** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.vpn_site_properties import VpnSiteProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VpnSiteProperties from a JSON string
vpn_site_properties_instance = VpnSiteProperties.from_json(json)
# print the JSON string representation of the object
print(VpnSiteProperties.to_json())

# convert the object into a dict
vpn_site_properties_dict = vpn_site_properties_instance.to_dict()
# create an instance of VpnSiteProperties from a dict
vpn_site_properties_from_dict = VpnSiteProperties.from_dict(vpn_site_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


