# UpdateNetworkApplianceSingleLanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_ip** | **str** | The appliance IP address of the single LAN | [optional] 
**ipv6** | [**UpdateNetworkApplianceSingleLanRequestIpv6**](UpdateNetworkApplianceSingleLanRequestIpv6.md) |  | [optional] 
**mandatory_dhcp** | [**UpdateNetworkApplianceSingleLanRequestMandatoryDhcp**](UpdateNetworkApplianceSingleLanRequestMandatoryDhcp.md) |  | [optional] 
**subnet** | **str** | The subnet of the single LAN configuration | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_single_lan_request import UpdateNetworkApplianceSingleLanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSingleLanRequest from a JSON string
update_network_appliance_single_lan_request_instance = UpdateNetworkApplianceSingleLanRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSingleLanRequest.to_json())

# convert the object into a dict
update_network_appliance_single_lan_request_dict = update_network_appliance_single_lan_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceSingleLanRequest from a dict
update_network_appliance_single_lan_request_from_dict = UpdateNetworkApplianceSingleLanRequest.from_dict(update_network_appliance_single_lan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


