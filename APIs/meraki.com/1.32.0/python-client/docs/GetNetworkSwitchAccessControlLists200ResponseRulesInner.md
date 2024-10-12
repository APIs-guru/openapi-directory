# GetNetworkSwitchAccessControlLists200ResponseRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Description of the rule (optional) | [optional] 
**dst_cidr** | **str** | Destination IP address (in IP or CIDR notation) | [optional] 
**dst_port** | **str** | Destination port | [optional] 
**ip_version** | **str** | IP address version | [optional] 
**policy** | **str** | &#39;allow&#39; or &#39;deny&#39; traffic specified by this rule | [optional] 
**protocol** | **str** | The type of protocol | [optional] 
**src_cidr** | **str** | Source IP address (in IP or CIDR notation) | [optional] 
**src_port** | **str** | Source port | [optional] 
**vlan** | **str** | ncoming traffic VLAN | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_access_control_lists200_response_rules_inner import GetNetworkSwitchAccessControlLists200ResponseRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchAccessControlLists200ResponseRulesInner from a JSON string
get_network_switch_access_control_lists200_response_rules_inner_instance = GetNetworkSwitchAccessControlLists200ResponseRulesInner.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchAccessControlLists200ResponseRulesInner.to_json())

# convert the object into a dict
get_network_switch_access_control_lists200_response_rules_inner_dict = get_network_switch_access_control_lists200_response_rules_inner_instance.to_dict()
# create an instance of GetNetworkSwitchAccessControlLists200ResponseRulesInner from a dict
get_network_switch_access_control_lists200_response_rules_inner_from_dict = GetNetworkSwitchAccessControlLists200ResponseRulesInner.from_dict(get_network_switch_access_control_lists200_response_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


