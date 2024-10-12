# UpdateNetworkApplianceTrafficShapingRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_rules_enabled** | **bool** | Whether default traffic shaping rules are enabled (true) or disabled (false). There are 4 default rules, which can be seen on your network&#39;s traffic shaping page. Note that default rules count against the rule limit of 8. | [optional] 
**rules** | [**List[UpdateNetworkApplianceTrafficShapingRulesRequestRulesInner]**](UpdateNetworkApplianceTrafficShapingRulesRequestRulesInner.md) |     An array of traffic shaping rules. Rules are applied in the order that     they are specified in. An empty list (or null) means no rules. Note that     you are allowed a maximum of 8 rules.  | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_traffic_shaping_rules_request import UpdateNetworkApplianceTrafficShapingRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequest from a JSON string
update_network_appliance_traffic_shaping_rules_request_instance = UpdateNetworkApplianceTrafficShapingRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceTrafficShapingRulesRequest.to_json())

# convert the object into a dict
update_network_appliance_traffic_shaping_rules_request_dict = update_network_appliance_traffic_shaping_rules_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceTrafficShapingRulesRequest from a dict
update_network_appliance_traffic_shaping_rules_request_from_dict = UpdateNetworkApplianceTrafficShapingRulesRequest.from_dict(update_network_appliance_traffic_shaping_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


