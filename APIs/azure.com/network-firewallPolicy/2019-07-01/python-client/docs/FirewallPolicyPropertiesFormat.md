# FirewallPolicyPropertiesFormat

Firewall Policy definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_policy** | [**FirewallPolicyPropertiesFormatBasePolicy**](FirewallPolicyPropertiesFormatBasePolicy.md) |  | [optional] 
**child_policies** | [**List[FirewallPolicyPropertiesFormatBasePolicy]**](FirewallPolicyPropertiesFormatBasePolicy.md) | List of references to Child Firewall Policies. | [optional] [readonly] 
**firewalls** | [**List[FirewallPolicyPropertiesFormatBasePolicy]**](FirewallPolicyPropertiesFormatBasePolicy.md) | List of references to Azure Firewalls that this Firewall Policy is associated with. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**rule_groups** | [**List[FirewallPolicyPropertiesFormatBasePolicy]**](FirewallPolicyPropertiesFormatBasePolicy.md) | List of references to FirewallPolicyRuleGroups. | [optional] [readonly] 
**threat_intel_mode** | **str** | The operation mode for Threat Intel. | [optional] 

## Example

```python
from openapi_client.models.firewall_policy_properties_format import FirewallPolicyPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of FirewallPolicyPropertiesFormat from a JSON string
firewall_policy_properties_format_instance = FirewallPolicyPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(FirewallPolicyPropertiesFormat.to_json())

# convert the object into a dict
firewall_policy_properties_format_dict = firewall_policy_properties_format_instance.to_dict()
# create an instance of FirewallPolicyPropertiesFormat from a dict
firewall_policy_properties_format_from_dict = FirewallPolicyPropertiesFormat.from_dict(firewall_policy_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


