# AzureManagedRuleSet

Describes azure managed provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_group_overrides** | [**List[AzureManagedOverrideRuleGroup]**](AzureManagedOverrideRuleGroup.md) | List of azure managed provider override configuration (optional) | [optional] 

## Example

```python
from openapi_client.models.azure_managed_rule_set import AzureManagedRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of AzureManagedRuleSet from a JSON string
azure_managed_rule_set_instance = AzureManagedRuleSet.from_json(json)
# print the JSON string representation of the object
print(AzureManagedRuleSet.to_json())

# convert the object into a dict
azure_managed_rule_set_dict = azure_managed_rule_set_instance.to_dict()
# create an instance of AzureManagedRuleSet from a dict
azure_managed_rule_set_from_dict = AzureManagedRuleSet.from_dict(azure_managed_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


