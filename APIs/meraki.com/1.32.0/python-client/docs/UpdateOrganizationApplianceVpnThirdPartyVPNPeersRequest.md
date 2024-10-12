# UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**peers** | [**List[UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequestPeersInner]**](UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequestPeersInner.md) | The list of VPN peers | 

## Example

```python
from openapi_client.models.update_organization_appliance_vpn_third_party_vpn_peers_request import UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest from a JSON string
update_organization_appliance_vpn_third_party_vpn_peers_request_instance = UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.to_json())

# convert the object into a dict
update_organization_appliance_vpn_third_party_vpn_peers_request_dict = update_organization_appliance_vpn_third_party_vpn_peers_request_instance.to_dict()
# create an instance of UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest from a dict
update_organization_appliance_vpn_third_party_vpn_peers_request_from_dict = UpdateOrganizationApplianceVpnThirdPartyVPNPeersRequest.from_dict(update_organization_appliance_vpn_third_party_vpn_peers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


