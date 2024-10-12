# UpdateNetworkApplianceVlanRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appliance_ip** | **str** | The local IP of the appliance on the VLAN | [optional] 
**cidr** | **str** | CIDR of the pool of subnets. Applicable only for template network. Each network bound to the template will automatically pick a subnet from this pool to build its own VLAN. | [optional] 
**dhcp_boot_filename** | **str** | DHCP boot option for boot filename | [optional] 
**dhcp_boot_next_server** | **str** | DHCP boot option to direct boot clients to the server to load the boot file from | [optional] 
**dhcp_boot_options_enabled** | **bool** | Use DHCP boot options specified in other properties | [optional] 
**dhcp_handling** | **str** | The appliance&#39;s handling of DHCP requests on this VLAN. One of: &#39;Run a DHCP server&#39;, &#39;Relay DHCP to another server&#39; or &#39;Do not respond to DHCP requests&#39; | [optional] 
**dhcp_lease_time** | **str** | The term of DHCP leases if the appliance is running a DHCP server on this VLAN. One of: &#39;30 minutes&#39;, &#39;1 hour&#39;, &#39;4 hours&#39;, &#39;12 hours&#39;, &#39;1 day&#39; or &#39;1 week&#39; | [optional] 
**dhcp_options** | [**List[GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner]**](GetNetworkApplianceVlans200ResponseInnerDhcpOptionsInner.md) | The list of DHCP options that will be included in DHCP responses. Each object in the list should have \&quot;code\&quot;, \&quot;type\&quot;, and \&quot;value\&quot; properties. | [optional] 
**dhcp_relay_server_ips** | **List[str]** | The IPs of the DHCP servers that DHCP requests should be relayed to | [optional] 
**dns_nameservers** | **str** | The DNS nameservers used for DHCP responses, either \&quot;upstream_dns\&quot;, \&quot;google_dns\&quot;, \&quot;opendns\&quot;, or a newline seperated string of IP addresses or domain names | [optional] 
**fixed_ip_assignments** | **object** | The DHCP fixed IP assignments on the VLAN. This should be an object that contains mappings from MAC addresses to objects that themselves each contain \&quot;ip\&quot; and \&quot;name\&quot; string fields. See the sample request/response for more details. | [optional] 
**group_policy_id** | **str** | The id of the desired group policy to apply to the VLAN | [optional] 
**ipv6** | [**UpdateNetworkApplianceSingleLanRequestIpv6**](UpdateNetworkApplianceSingleLanRequestIpv6.md) |  | [optional] 
**mandatory_dhcp** | [**GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp**](GetNetworkApplianceVlans200ResponseInnerMandatoryDhcp.md) |  | [optional] 
**mask** | **int** | Mask used for the subnet of all bound to the template networks. Applicable only for template network. | [optional] 
**name** | **str** | The name of the VLAN | [optional] 
**reserved_ip_ranges** | [**List[UpdateNetworkApplianceStaticRouteRequestReservedIpRangesInner]**](UpdateNetworkApplianceStaticRouteRequestReservedIpRangesInner.md) | The DHCP reserved IP ranges on the VLAN | [optional] 
**subnet** | **str** | The subnet of the VLAN | [optional] 
**template_vlan_type** | **str** | Type of subnetting of the VLAN. Applicable only for template network. | [optional] 
**vpn_nat_subnet** | **str** | The translated VPN subnet if VPN and VPN subnet translation are enabled on the VLAN | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_vlan_request import UpdateNetworkApplianceVlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceVlanRequest from a JSON string
update_network_appliance_vlan_request_instance = UpdateNetworkApplianceVlanRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceVlanRequest.to_json())

# convert the object into a dict
update_network_appliance_vlan_request_dict = update_network_appliance_vlan_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceVlanRequest from a dict
update_network_appliance_vlan_request_from_dict = UpdateNetworkApplianceVlanRequest.from_dict(update_network_appliance_vlan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


