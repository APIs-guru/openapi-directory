# GetNetworkApplianceSingleLan200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_ip** | **str** | The local IP of the appliance on the single LAN | [optional] 
**ipv6** | [**GetNetworkApplianceSingleLan200ResponseIpv6**](GetNetworkApplianceSingleLan200ResponseIpv6.md) |  | [optional] 
**mandatory_dhcp** | [**GetNetworkApplianceSingleLan200ResponseMandatoryDhcp**](GetNetworkApplianceSingleLan200ResponseMandatoryDhcp.md) |  | [optional] 
**subnet** | **str** | The subnet of the single LAN | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_single_lan200_response import GetNetworkApplianceSingleLan200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkApplianceSingleLan200Response from a JSON string
get_network_appliance_single_lan200_response_instance = GetNetworkApplianceSingleLan200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkApplianceSingleLan200Response.to_json())

# convert the object into a dict
get_network_appliance_single_lan200_response_dict = get_network_appliance_single_lan200_response_instance.to_dict()
# create an instance of GetNetworkApplianceSingleLan200Response from a dict
get_network_appliance_single_lan200_response_from_dict = GetNetworkApplianceSingleLan200Response.from_dict(get_network_appliance_single_lan200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


