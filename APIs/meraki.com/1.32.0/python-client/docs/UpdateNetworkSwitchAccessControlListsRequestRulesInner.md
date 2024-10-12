# UpdateNetworkSwitchAccessControlListsRequestRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Description of the rule (optional). | [optional] 
**dst_cidr** | **str** | Destination IP address (in IP or CIDR notation) or &#39;any&#39;. | 
**dst_port** | **str** | Destination port. Must be in the range of 1-65535 or &#39;any&#39;. Default is &#39;any&#39;. | [optional] 
**ip_version** | **str** | IP address version (must be &#39;any&#39;, &#39;ipv4&#39; or &#39;ipv6&#39;). Applicable only if network supports IPv6. Default value is &#39;ipv4&#39;. | [optional] 
**policy** | **str** | &#39;allow&#39; or &#39;deny&#39; traffic specified by this rule. | 
**protocol** | **str** | The type of protocol (must be &#39;tcp&#39;, &#39;udp&#39;, or &#39;any&#39;). | 
**src_cidr** | **str** | Source IP address (in IP or CIDR notation) or &#39;any&#39;. | 
**src_port** | **str** | Source port. Must be in the range  of 1-65535 or &#39;any&#39;. Default is &#39;any&#39;. | [optional] 
**vlan** | **str** | Incoming traffic VLAN. Must be in the range of 1-4095 or &#39;any&#39;. Default is &#39;any&#39;. | [optional] 

## Example

```python
from openapi_client.models.update_network_switch_access_control_lists_request_rules_inner import UpdateNetworkSwitchAccessControlListsRequestRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchAccessControlListsRequestRulesInner from a JSON string
update_network_switch_access_control_lists_request_rules_inner_instance = UpdateNetworkSwitchAccessControlListsRequestRulesInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchAccessControlListsRequestRulesInner.to_json())

# convert the object into a dict
update_network_switch_access_control_lists_request_rules_inner_dict = update_network_switch_access_control_lists_request_rules_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchAccessControlListsRequestRulesInner from a dict
update_network_switch_access_control_lists_request_rules_inner_from_dict = UpdateNetworkSwitchAccessControlListsRequestRulesInner.from_dict(update_network_switch_access_control_lists_request_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


