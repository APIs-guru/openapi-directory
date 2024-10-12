# CreateNetworkApplianceVlan201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_ip** | **str** | The local IP of the appliance on the VLAN | [optional] 
**cidr** | **str** | CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN. | [optional] 
**group_policy_id** | **str** | The id of the desired group policy to apply to the VLAN | [optional] 
**id** | **str** | The VLAN ID of the VLAN | [optional] 
**interface_id** | **str** | The interface ID of the VLAN | [optional] 
**ipv6** | [**GetNetworkApplianceVlans200ResponseInnerIpv6**](GetNetworkApplianceVlans200ResponseInnerIpv6.md) |  | [optional] 
**mandatory_dhcp** | [**GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp**](GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp.md) |  | [optional] 
**mask** | **int** | Mask used for the subnet of all bound to the template networks. Applicable only for template network. | [optional] 
**name** | **str** | The name of the VLAN | [optional] 
**subnet** | **str** | The subnet of the VLAN | [optional] 
**template_vlan_type** | **str** | Type of subnetting of the VLAN. Applicable only for template network. | [optional] [default to 'same']

## Example

```python
from openapi_client.models.create_network_appliance_vlan201_response import CreateNetworkApplianceVlan201Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkApplianceVlan201Response from a JSON string
create_network_appliance_vlan201_response_instance = CreateNetworkApplianceVlan201Response.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkApplianceVlan201Response.to_json())

# convert the object into a dict
create_network_appliance_vlan201_response_dict = create_network_appliance_vlan201_response_instance.to_dict()
# create an instance of CreateNetworkApplianceVlan201Response from a dict
create_network_appliance_vlan201_response_from_dict = CreateNetworkApplianceVlan201Response.from_dict(create_network_appliance_vlan201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


