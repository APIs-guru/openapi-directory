# UpdateNetworkApplianceSingleLanRequestIpv6

IPv6 configuration on the VLAN

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Enable IPv6 on VLAN. | [optional] 
**prefix_assignments** | [**List[UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner]**](UpdateNetworkApplianceSingleLanRequestIpv6PrefixAssignmentsInner.md) | Prefix assignments on the VLAN | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_single_lan_request_ipv6 import UpdateNetworkApplianceSingleLanRequestIpv6

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceSingleLanRequestIpv6 from a JSON string
update_network_appliance_single_lan_request_ipv6_instance = UpdateNetworkApplianceSingleLanRequestIpv6.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceSingleLanRequestIpv6.to_json())

# convert the object into a dict
update_network_appliance_single_lan_request_ipv6_dict = update_network_appliance_single_lan_request_ipv6_instance.to_dict()
# create an instance of UpdateNetworkApplianceSingleLanRequestIpv6 from a dict
update_network_appliance_single_lan_request_ipv6_from_dict = UpdateNetworkApplianceSingleLanRequestIpv6.from_dict(update_network_appliance_single_lan_request_ipv6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


