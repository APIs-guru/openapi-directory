# GetNetworkAppliancePorts200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policy** | **str** | The name of the policy. Only applicable to Access ports. | [optional] 
**allowed_vlans** | **str** | Comma-delimited list of the VLAN ID&#39;s allowed on the port, or &#39;all&#39; to permit all VLAN&#39;s on the port. | [optional] 
**drop_untagged_traffic** | **bool** | Whether the trunk port can drop all untagged traffic. | [optional] 
**enabled** | **bool** | The status of the port | [optional] 
**number** | **int** | Number of the port | [optional] 
**type** | **str** | The type of the port: &#39;access&#39; or &#39;trunk&#39;. | [optional] 
**vlan** | **int** | Native VLAN when the port is in Trunk mode. Access VLAN when the port is in Access mode. | [optional] 

## Example

```python
from openapi_client.models.get_network_appliance_ports200_response_inner import GetNetworkAppliancePorts200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkAppliancePorts200ResponseInner from a JSON string
get_network_appliance_ports200_response_inner_instance = GetNetworkAppliancePorts200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkAppliancePorts200ResponseInner.to_json())

# convert the object into a dict
get_network_appliance_ports200_response_inner_dict = get_network_appliance_ports200_response_inner_instance.to_dict()
# create an instance of GetNetworkAppliancePorts200ResponseInner from a dict
get_network_appliance_ports200_response_inner_from_dict = GetNetworkAppliancePorts200ResponseInner.from_dict(get_network_appliance_ports200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


