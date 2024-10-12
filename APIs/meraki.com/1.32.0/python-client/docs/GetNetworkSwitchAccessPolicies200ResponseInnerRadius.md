# GetNetworkSwitchAccessPolicies200ResponseInnerRadius

Object for RADIUS Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical_auth** | [**GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth**](GetNetworkSwitchAccessPolicies200ResponseInnerRadiusCriticalAuth.md) |  | [optional] 
**failed_auth_vlan_id** | **int** | VLAN that clients will be placed on when RADIUS authentication fails. Will be null if hostMode is Multi-Auth | [optional] 
**re_authentication_interval** | **int** | Re-authentication period in seconds. Will be null if hostMode is Multi-Auth | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_policies200_response_inner_radius import GetNetworkSwitchAccessPolicies200ResponseInnerRadius

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadius from a JSON string
get_network_switch_access_policies200_response_inner_radius_instance = GetNetworkSwitchAccessPolicies200ResponseInnerRadius.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessPolicies200ResponseInnerRadius.to_json())

# convert the object into a dict
get_network_switch_access_policies200_response_inner_radius_dict = get_network_switch_access_policies200_response_inner_radius_instance.to_dict()
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadius from a dict
get_network_switch_access_policies200_response_inner_radius_from_dict = GetNetworkSwitchAccessPolicies200ResponseInnerRadius.from_dict(get_network_switch_access_policies200_response_inner_radius_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


