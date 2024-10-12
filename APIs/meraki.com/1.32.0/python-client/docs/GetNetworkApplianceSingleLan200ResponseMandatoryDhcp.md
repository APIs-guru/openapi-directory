# GetNetworkApplianceSingleLan200ResponseMandatoryDhcp

Mandatory DHCP will enforce that clients connecting to this single LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable Mandatory DHCP on single LAN. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_single_lan200_response_mandatory_dhcp import GetNetworkApplianceSingleLan200ResponseMandatoryDhcp

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSingleLan200ResponseMandatoryDhcp from a JSON string
get_network_appliance_single_lan200_response_mandatory_dhcp_instance = GetNetworkApplianceSingleLan200ResponseMandatoryDhcp.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSingleLan200ResponseMandatoryDhcp.to_json())

# convert the object into a dict
get_network_appliance_single_lan200_response_mandatory_dhcp_dict = get_network_appliance_single_lan200_response_mandatory_dhcp_instance.to_dict()
# create an instance of GetNetworkApplianceSingleLan200ResponseMandatoryDhcp from a dict
get_network_appliance_single_lan200_response_mandatory_dhcp_from_dict = GetNetworkApplianceSingleLan200ResponseMandatoryDhcp.from_dict(get_network_appliance_single_lan200_response_mandatory_dhcp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


