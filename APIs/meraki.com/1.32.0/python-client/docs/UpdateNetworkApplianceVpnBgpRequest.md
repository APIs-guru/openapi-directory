# UpdateNetworkApplianceVpnBgpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_number** | **int** | An Autonomous System Number (ASN) is required if you are to run BGP and peer with another BGP Speaker outside of the Auto VPN domain. This ASN will be applied to the entire Auto VPN domain. The entire 4-byte ASN range is supported. So, the ASN must be an integer between 1 and 4294967295. When absent, this field is not updated. If no value exists then it defaults to 64512. | [optional] 
**enabled** | **bool** | Boolean value to enable or disable the BGP configuration. When BGP is enabled, the asNumber (ASN) will be autopopulated with the preconfigured ASN at other Hubs or a default value if there is no ASN configured. | 
**ibgp_hold_timer** | **int** | The IBGP holdtimer in seconds. The IBGP holdtimer must be an integer between 12 and 240. When absent, this field is not updated. If no value exists then it defaults to 240. | [optional] 
**neighbors** | [**List[UpdateNetworkApplianceVpnBgpRequestNeighborsInner]**](UpdateNetworkApplianceVpnBgpRequestNeighborsInner.md) | List of BGP neighbors. This list replaces the existing set of neighbors. When absent, this field is not updated. | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vpn_bgp_request import UpdateNetworkApplianceVpnBgpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVpnBgpRequest from a JSON string
update_network_appliance_vpn_bgp_request_instance = UpdateNetworkApplianceVpnBgpRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVpnBgpRequest.to_json())

# convert the object into a dict
update_network_appliance_vpn_bgp_request_dict = update_network_appliance_vpn_bgp_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceVpnBgpRequest from a dict
update_network_appliance_vpn_bgp_request_from_dict = UpdateNetworkApplianceVpnBgpRequest.from_dict(update_network_appliance_vpn_bgp_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


