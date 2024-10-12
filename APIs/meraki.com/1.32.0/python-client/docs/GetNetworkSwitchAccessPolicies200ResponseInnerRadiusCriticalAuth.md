# GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth

Critical auth settings for when authentication is rejected by the RADIUS server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_vlan_id** | **int** | VLAN that clients who use data will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth | [optional] 
**suspend_port_bounce** | **bool** | Enable to suspend port bounce when RADIUS servers are unreachable | [optional] 
**voice_vlan_id** | **int** | VLAN that clients who use voice will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_policies200_response_inner_radius_critical_auth import GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth from a JSON string
get_network_switch_access_policies200_response_inner_radius_critical_auth_instance = GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth.to_json())

# convert the object into a dict
get_network_switch_access_policies200_response_inner_radius_critical_auth_dict = get_network_switch_access_policies200_response_inner_radius_critical_auth_instance.to_dict()
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth from a dict
get_network_switch_access_policies200_response_inner_radius_critical_auth_from_dict = GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth.from_dict(get_network_switch_access_policies200_response_inner_radius_critical_auth_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


