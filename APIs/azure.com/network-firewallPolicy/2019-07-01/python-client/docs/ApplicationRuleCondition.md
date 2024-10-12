# ApplicationRuleCondition

Rule condition of type application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_addresses** | **List[str]** | List of destination IP addresses or Service Tags. | [optional] 
**fqdn_tags** | **List[str]** | List of FQDN Tags for this rule condition. | [optional] 
**protocols** | [**List[FirewallPolicyRuleConditionApplicationProtocol]**](FirewallPolicyRuleConditionApplicationProtocol.md) | Array of Application Protocols. | [optional] 
**source_addresses** | **List[str]** | List of source IP addresses for this rule. | [optional] 
**target_fqdns** | **List[str]** | List of FQDNs for this rule condition. | [optional] 

## Example

```python
from openapi_client.models.application_rule_condition import ApplicationRuleCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationRuleCondition from a JSON string
application_rule_condition_instance = ApplicationRuleCondition.from_json(json)
# print the JSON string representation of the object
print(ApplicationRuleCondition.to_json())

# convert the object into a dict
application_rule_condition_dict = application_rule_condition_instance.to_dict()
# create an instance of ApplicationRuleCondition from a dict
application_rule_condition_from_dict = ApplicationRuleCondition.from_dict(application_rule_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


