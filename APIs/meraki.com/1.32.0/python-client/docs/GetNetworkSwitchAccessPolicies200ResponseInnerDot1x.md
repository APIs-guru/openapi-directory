# GetNetworkSwitchAccessPolicies200ResponseInnerDot1x

802.1x Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_direction** | **str** | Supports either &#39;both&#39; or &#39;inbound&#39;. Set to &#39;inbound&#39; to allow unauthorized egress on the switchport. Set to &#39;both&#39; to control both traffic directions with authorization. Defaults to &#39;both&#39; | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_policies200_response_inner_dot1x import GetNetworkSwitchAccessPolicies200ResponseInnerDot1x

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerDot1x from a JSON string
get_network_switch_access_policies200_response_inner_dot1x_instance = GetNetworkSwitchAccessPolicies200ResponseInnerDot1x.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessPolicies200ResponseInnerDot1x.to_json())

# convert the object into a dict
get_network_switch_access_policies200_response_inner_dot1x_dict = get_network_switch_access_policies200_response_inner_dot1x_instance.to_dict()
# create an instance of GetNetworkSwitchAccessPolicies200ResponseInnerDot1x from a dict
get_network_switch_access_policies200_response_inner_dot1x_from_dict = GetNetworkSwitchAccessPolicies200ResponseInnerDot1x.from_dict(get_network_switch_access_policies200_response_inner_dot1x_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


