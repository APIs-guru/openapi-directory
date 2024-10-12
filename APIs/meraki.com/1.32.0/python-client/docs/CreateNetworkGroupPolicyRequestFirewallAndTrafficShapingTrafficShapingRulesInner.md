# CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definitions** | [**List[UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner]**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerDefinitionsInner.md) |     A list of objects describing the definitions of your traffic shaping rule. At least one definition is required.  | 
**dscp_tag_value** | **int** |     The DSCP tag applied by your rule. null means &#39;Do not change DSCP tag&#39;.     For a list of possible tag values, use the trafficShaping/dscpTaggingOptions endpoint.  | [optional] 
**pcp_tag_value** | **int** |     The PCP tag applied by your rule. Can be 0 (lowest priority) through 7 (highest priority).     null means &#39;Do not set PCP tag&#39;.  | [optional] 
**per_client_bandwidth_limits** | [**UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInnerPerClientBandwidthLimits.md) |  | [optional] 
**priority** | **str** |     A string, indicating the priority level for packets bound to your rule.     Can be &#39;low&#39;, &#39;normal&#39; or &#39;high&#39;.  | [optional] 

## Example

```python
from openapi_client.models.create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner import CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner from a JSON string
create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner_instance = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner.to_json())

# convert the object into a dict
create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner_dict = create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner_instance.to_dict()
# create an instance of CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner from a dict
create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner_from_dict = CreateNetworkGroupPolicyRequestFirewallAndTrafficShapingTrafficShapingRulesInner.from_dict(create_network_group_policy_request_firewall_and_traffic_shaping_traffic_shaping_rules_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


