# GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ike_version** | **str** | [optional] The IKE version to be used for the IPsec VPN peer configuration. Defaults to &#39;1&#39; when omitted. | [optional] [default to '1']
**ipsec_policies** | [**GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInnerIpsecPolicies**](GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInnerIpsecPolicies.md) |  | [optional] 
**ipsec_policies_preset** | **str** | One of the following available presets: &#39;default&#39;, &#39;aws&#39;, &#39;azure&#39;. If this is provided, the &#39;ipsecPolicies&#39; parameter is ignored. | [optional] 
**local_id** | **str** | [optional] The local ID is used to identify the MX to the peer. This will apply to all MXs this peer applies to. | [optional] 
**name** | **str** | The name of the VPN peer | [optional] 
**network_tags** | **List[str]** | A list of network tags that will connect with this peer. Use [&#39;all&#39;] for all networks. Use [&#39;none&#39;] for no networks. If not included, the default is [&#39;all&#39;]. | [optional] 
**private_subnets** | **List[str]** | The list of the private subnets of the VPN peer | [optional] 
**public_ip** | **str** | [optional] The public IP of the VPN peer | [optional] 
**remote_id** | **str** | [optional] The remote ID is used to identify the connecting VPN peer. This can either be a valid IPv4 Address, FQDN or User FQDN. | [optional] 
**secret** | **str** | The shared secret with the VPN peer | [optional] 

## Example

```python
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner import GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner from a JSON string
get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner_instance = GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner.to_json())

# convert the object into a dict
get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner_dict = get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner_instance.to_dict()
# create an instance of GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner from a dict
get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner_from_dict = GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner.from_dict(get_organization_appliance_vpn_third_party_vpn_peers200_response_peers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


