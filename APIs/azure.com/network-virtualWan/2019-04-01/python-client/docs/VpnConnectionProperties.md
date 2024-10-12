# VpnConnectionProperties

Parameters for VpnConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_bandwidth** | **int** | Expected bandwidth in MBPS. | [optional] 
**connection_status** | [**VpnConnectionStatus**](VpnConnectionStatus.md) |  | [optional] 
**egress_bytes_transferred** | **int** | Egress bytes transferred. | [optional] [readonly] 
**enable_bgp** | **bool** | EnableBgp flag. | [optional] 
**enable_internet_security** | **bool** | Enable internet security. | [optional] 
**enable_rate_limiting** | **bool** | EnableBgp flag. | [optional] 
**ingress_bytes_transferred** | **int** | Ingress bytes transferred. | [optional] [readonly] 
**ipsec_policies** | [**List[P2SVpnServerConfigurationPropertiesVpnClientIpsecPoliciesInner]**](P2SVpnServerConfigurationPropertiesVpnClientIpsecPoliciesInner.md) | The IPSec Policies to be considered by this connection. | [optional] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**remote_vpn_site** | [**HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork**](HubVirtualNetworkConnectionPropertiesRemoteVirtualNetwork.md) |  | [optional] 
**routing_weight** | **int** | Routing weight for vpn connection. | [optional] 
**shared_key** | **str** | SharedKey for the vpn connection. | [optional] 
**use_local_azure_ip_address** | **bool** | Use local azure ip to initiate connection. | [optional] 
**use_policy_based_traffic_selectors** | **bool** | Enable policy-based traffic selectors. | [optional] 
**vpn_connection_protocol_type** | **str** | Gateway connection protocol. | [optional] 

## Example

```python
from openapi_client.models.vpn_connection_properties import VpnConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VpnConnectionProperties from a JSON string
vpn_connection_properties_instance = VpnConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(VpnConnectionProperties.to_json())

# convert the object into a dict
vpn_connection_properties_dict = vpn_connection_properties_instance.to_dict()
# create an instance of VpnConnectionProperties from a dict
vpn_connection_properties_from_dict = VpnConnectionProperties.from_dict(vpn_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


