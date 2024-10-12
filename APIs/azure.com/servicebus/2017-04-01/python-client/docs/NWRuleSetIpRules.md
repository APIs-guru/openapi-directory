# NWRuleSetIpRules

Description of NetWorkRuleSet - IpRules resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The IP Filter Action | [optional] [default to 'Allow']
**ip_mask** | **str** | IP Mask | [optional] 

## Example

```python
from openapi_client.models.nw_rule_set_ip_rules import NWRuleSetIpRules

# TODO update the JSON string below
json = "{}"
# create an instance of NWRuleSetIpRules from a JSON string
nw_rule_set_ip_rules_instance = NWRuleSetIpRules.from_json(json)
# print the JSON string representation of the object
print(NWRuleSetIpRules.to_json())

# convert the object into a dict
nw_rule_set_ip_rules_dict = nw_rule_set_ip_rules_instance.to_dict()
# create an instance of NWRuleSetIpRules from a dict
nw_rule_set_ip_rules_from_dict = NWRuleSetIpRules.from_dict(nw_rule_set_ip_rules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


