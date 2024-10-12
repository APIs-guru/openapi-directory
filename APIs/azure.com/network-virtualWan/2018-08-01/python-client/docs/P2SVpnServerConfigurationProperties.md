# P2SVpnServerConfigurationProperties

Parameters for P2SVpnServerConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] 
**name** | **str** | The name of the P2SVpnServerConfiguration that is unique within a VirtualWan in a resource group. This name can be used to access the resource along with Parent VirtualWan resource name. | [optional] 
**p2_s_vpn_gateways** | [**List[HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork]**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] [readonly] 
**p2_s_vpn_server_config_radius_client_root_certificates** | [**List[P2SVpnServerConfigRadiusClientRootCertificate]**](P2SVpnServerConfigRadiusClientRootCertificate.md) | Radius client root certificate of P2SVpnServerConfiguration. | [optional] 
**p2_s_vpn_server_config_radius_server_root_certificates** | [**List[P2SVpnServerConfigRadiusServerRootCertificate]**](P2SVpnServerConfigRadiusServerRootCertificate.md) | Radius Server root certificate of P2SVpnServerConfiguration. | [optional] 
**p2_s_vpn_server_config_vpn_client_revoked_certificates** | [**List[P2SVpnServerConfigVpnClientRevokedCertificate]**](P2SVpnServerConfigVpnClientRevokedCertificate.md) | VPN client revoked certificate of P2SVpnServerConfiguration. | [optional] 
**p2_s_vpn_server_config_vpn_client_root_certificates** | [**List[P2SVpnServerConfigVpnClientRootCertificate]**](P2SVpnServerConfigVpnClientRootCertificate.md) | VPN client root certificate of P2SVpnServerConfiguration. | [optional] 
**provisioning_state** | **str** | The provisioning state of the P2SVpnServerConfiguration resource. Possible values are: &#39;Updating&#39;, &#39;Deleting&#39;, and &#39;Failed&#39;. | [optional] [readonly] 
**radius_server_address** | **str** | The radius server address property of the P2SVpnServerConfiguration resource for point to site client connection. | [optional] 
**radius_server_secret** | **str** | The radius secret property of the P2SVpnServerConfiguration resource for point to site client connection. | [optional] 
**vpn_client_ipsec_policies** | [**List[P2SVpnServerConfigurationPropertiesVpnClientIpsecPoliciesInner]**](P2SVpnServerConfigurationPropertiesVpnClientIpsecPoliciesInner.md) | VpnClientIpsecPolicies for P2SVpnServerConfiguration. | [optional] 
**vpn_protocols** | **List[str]** | vpnProtocols for the P2SVpnServerConfiguration. | [optional] 

## Example

```python
from openapi_client.models.p2_s_vpn_server_configuration_properties import P2SVpnServerConfigurationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of P2SVpnServerConfigurationProperties from a JSON string
p2_s_vpn_server_configuration_properties_instance = P2SVpnServerConfigurationProperties.from_json(json)
# print the JSON string representation of the object
print(P2SVpnServerConfigurationProperties.to_json())

# convert the object into a dict
p2_s_vpn_server_configuration_properties_dict = p2_s_vpn_server_configuration_properties_instance.to_dict()
# create an instance of P2SVpnServerConfigurationProperties from a dict
p2_s_vpn_server_configuration_properties_from_dict = P2SVpnServerConfigurationProperties.from_dict(p2_s_vpn_server_configuration_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


