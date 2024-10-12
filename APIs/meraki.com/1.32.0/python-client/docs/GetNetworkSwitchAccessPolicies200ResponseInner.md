# GetNetworkSwitchAccessPolicies200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policy_type** | **str** | Access Type of the policy. Automatically &#39;Hybrid authentication&#39; when hostMode is &#39;Multi-Domain&#39;. | [optional] 
**dot1x** | [**GetNetworkSwitchAccessPolicies200ResponseInnerDot1x**](GetNetworkSwitchAccessPolicies200ResponseInnerDot1x.md) |  | [optional] 
**guest_port_bouncing** | **bool** | If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers | [optional] 
**guest_vlan_id** | **int** | ID for the guest VLAN allow unauthorized devices access to limited network resources | [optional] 
**host_mode** | **str** | Choose the Host Mode for the access policy. | [optional] 
**increase_access_speed** | **bool** | Enabling this option will make switches execute 802.1X and MAC-bypass authentication simultaneously so that clients authenticate faster. Only required when accessPolicyType is &#39;Hybrid Authentication. | [optional] 
**name** | **str** | Name of the access policy | [optional] 
**radius** | [**GetNetworkSwitchAccessPolicies200ResponseInnerRadius**](GetNetworkSwitchAccessPolicies200ResponseInnerRadius.md) |  | [optional] 
**radius_accounting_enabled** | **bool** | Enable to send start, interim-update and stop messages to a configured RADIUS accounting server for tracking connected clients | [optional] 
**radius_accounting_servers** | [**List[GetNetworkSwitchAccessPolicies200ResponseInnerRadiusAccountingServersInner]**](GetNetworkSwitchAccessPolicies200ResponseInnerRadiusAccountingServersInner.md) | List of RADIUS accounting servers to require connecting devices to authenticate against before granting network access | [optional] 
**radius_coa_support_enabled** | **bool** | Change of authentication for RADIUS re-authentication and disconnection | [optional] 
**radius_group_attribute** | **str** | Acceptable values are &#x60;\&quot;\&quot;&#x60; for None, or &#x60;\&quot;11\&quot;&#x60; for Group Policies ACL | [optional] 
**radius_servers** | [**List[GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner]**](GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner.md) | List of RADIUS servers to require connecting devices to authenticate against before granting network access | [optional] 
**radius_testing_enabled** | **bool** | If enabled, Meraki devices will periodically send access-request messages to these RADIUS servers | [optional] 
**url_redirect_walled_garden_enabled** | **bool** | Enable to restrict access for clients to a response_objectific set of IP addresses or hostnames prior to authentication | [optional] 
**url_redirect_walled_garden_ranges** | **List[str]** | IP address ranges, in CIDR notation, to restrict access for clients to a specific set of IP addresses or hostnames prior to authentication | [optional] 
**voice_vlan_clients** | **bool** | CDP/LLDP capable voice clients will be able to use this VLAN. Automatically true when hostMode is &#39;Multi-Domain&#39;. | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_policies200_response_inner import GetNetworkSwitchAccessPolicies200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInner from a JSON string
get_network_switch_access_policies200_response_inner_instance = GetNetworkSwitchAccessPolicies200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessPolicies200ResponseInner.to_json())

# convert the object into a dict
get_network_switch_access_policies200_response_inner_dict = get_network_switch_access_policies200_response_inner_instance.to_dict()
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInner from a dict
get_network_switch_access_policies200_response_inner_from_dict = GetNetworkSwitchAccessPolicies200ResponseInner.from_dict(get_network_switch_access_policies200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


