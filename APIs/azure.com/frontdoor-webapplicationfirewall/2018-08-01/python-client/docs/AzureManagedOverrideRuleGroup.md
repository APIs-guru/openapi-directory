# AzureManagedOverrideRuleGroup

Defines contents of a web application rule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Type of Actions | 
**rule_group_override** | **str** | Describes override rule group | 

## Example

```python
from openapi_client.models.azure_managed_override_rule_group import AzureManagedOverrideRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AzureManagedOverrideRuleGroup from a JSON string
azure_managed_override_rule_group_instance = AzureManagedOverrideRuleGroup.from_json(json)
# print the JSON string representation of the object
print(AzureManagedOverrideRuleGroup.to_json())

# convert the object into a dict
azure_managed_override_rule_group_dict = azure_managed_override_rule_group_instance.to_dict()
# create an instance of AzureManagedOverrideRuleGroup from a dict
azure_managed_override_rule_group_from_dict = AzureManagedOverrideRuleGroup.from_dict(azure_managed_override_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


