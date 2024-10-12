# GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp

Mandatory DHCP will enforce that clients connecting to this VLAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable Mandatory DHCP on VLAN. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_vlans200_response_inner_mandatory_dhcp import GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp from a JSON string
get_network_appliance_vlans200_response_inner_mandatory_dhcp_instance = GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp.to_json())

# convert the object into a dict
get_network_appliance_vlans200_response_inner_mandatory_dhcp_dict = get_network_appliance_vlans200_response_inner_mandatory_dhcp_instance.to_dict()
# create an instance of GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp from a dict
get_network_appliance_vlans200_response_inner_mandatory_dhcp_from_dict = GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp.from_dict(get_network_appliance_vlans200_response_inner_mandatory_dhcp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


