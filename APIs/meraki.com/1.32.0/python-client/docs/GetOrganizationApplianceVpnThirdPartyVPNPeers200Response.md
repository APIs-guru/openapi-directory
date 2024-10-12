# GetOrganizationApplianceVpnThirdPartyVPNPeers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peers** | [**List[GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner]**](GetOrganizationApplianceVpnThirdPartyVPNPeers200ResponsePeersInner.md) | The list of VPN peers | [optional] 

## Example

```python
from openapi_client.models.get_organization_appliance_vpn_third_party_vpn_peers200_response import GetOrganizationApplianceVpnThirdPartyVPNPeers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationApplianceVpnThirdPartyVPNPeers200Response from a JSON string
get_organization_appliance_vpn_third_party_vpn_peers200_response_instance = GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.to_json())

# convert the object into a dict
get_organization_appliance_vpn_third_party_vpn_peers200_response_dict = get_organization_appliance_vpn_third_party_vpn_peers200_response_instance.to_dict()
# create an instance of GetOrganizationApplianceVpnThirdPartyVPNPeers200Response from a dict
get_organization_appliance_vpn_third_party_vpn_peers200_response_from_dict = GetOrganizationApplianceVpnThirdPartyVPNPeers200Response.from_dict(get_organization_appliance_vpn_third_party_vpn_peers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


