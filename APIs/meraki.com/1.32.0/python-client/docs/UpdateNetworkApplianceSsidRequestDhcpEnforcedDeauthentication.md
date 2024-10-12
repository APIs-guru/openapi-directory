# UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication

DHCP Enforced Deauthentication enables the disassociation of wireless clients in addition to Mandatory DHCP. This param is only valid on firmware versions >= MX 17.0 where the associated LAN has Mandatory DHCP Enabled 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable DCHP Enforced Deauthentication on the SSID. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_ssid_request_dhcp_enforced_deauthentication import UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication from a JSON string
update_network_appliance_ssid_request_dhcp_enforced_deauthentication_instance = UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication.to_json())

# convert the object into a dict
update_network_appliance_ssid_request_dhcp_enforced_deauthentication_dict = update_network_appliance_ssid_request_dhcp_enforced_deauthentication_instance.to_dict()
# create an instance of UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication from a dict
update_network_appliance_ssid_request_dhcp_enforced_deauthentication_from_dict = UpdateNetworkApplianceSsidRequestDhcpEnforcedDeauthentication.from_dict(update_network_appliance_ssid_request_dhcp_enforced_deauthentication_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


