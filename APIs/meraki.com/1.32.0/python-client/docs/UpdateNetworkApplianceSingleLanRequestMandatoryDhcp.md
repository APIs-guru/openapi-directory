# UpdateNetworkApplianceSingleLanRequestMandatoryDhcp

Mandatory DHCP will enforce that clients connecting to this LAN must use the IP address assigned by the DHCP server. Clients who use a static IP address won't be able to associate. Only available on firmware versions 17.0 and above

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable Mandatory DHCP on LAN. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_single_lan_request_mandatory_dhcp import UpdateNetworkApplianceSingleLanRequestMandatoryDhcp

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSingleLanRequestMandatoryDhcp from a JSON string
update_network_appliance_single_lan_request_mandatory_dhcp_instance = UpdateNetworkApplianceSingleLanRequestMandatoryDhcp.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSingleLanRequestMandatoryDhcp.to_json())

# convert the object into a dict
update_network_appliance_single_lan_request_mandatory_dhcp_dict = update_network_appliance_single_lan_request_mandatory_dhcp_instance.to_dict()
# create an instance of UpdateNetworkApplianceSingleLanRequestMandatoryDhcp from a dict
update_network_appliance_single_lan_request_mandatory_dhcp_from_dict = UpdateNetworkApplianceSingleLanRequestMandatoryDhcp.from_dict(update_network_appliance_single_lan_request_mandatory_dhcp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


