# GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Public IP address of the RADIUS server | [optional] 
**port** | **int** | UDP port that the RADIUS server listens on for access requests | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_policies200_response_inner_radius_servers_inner import GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner from a JSON string
get_network_switch_access_policies200_response_inner_radius_servers_inner_instance = GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner.to_json())

# convert the object into a dict
get_network_switch_access_policies200_response_inner_radius_servers_inner_dict = get_network_switch_access_policies200_response_inner_radius_servers_inner_instance.to_dict()
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner from a dict
get_network_switch_access_policies200_response_inner_radius_servers_inner_from_dict = GetNetworkSwitchAccessPolicies200ResponseInnerRadiusServersInner.from_dict(get_network_switch_access_policies200_response_inner_radius_servers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


