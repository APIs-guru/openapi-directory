# ManagementPolicyRule

An object that wraps the Lifecycle rule. Each rule is uniquely defined by name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | [**ManagementPolicyDefinition**](ManagementPolicyDefinition.md) |  | 
**enabled** | **bool** | Rule is enabled if set to true. | [optional] 
**name** | **str** | A rule name can contain any combination of alpha numeric characters. Rule name is case-sensitive. It must be unique within a policy. | 
**type** | **str** | The valid value is Lifecycle | 

## Example

```python
from openapi_client.models.management_policy_rule import ManagementPolicyRule

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicyRule from a JSON string
management_policy_rule_instance = ManagementPolicyRule.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicyRule.to_json())

# convert the object into a dict
management_policy_rule_dict = management_policy_rule_instance.to_dict()
# create an instance of ManagementPolicyRule from a dict
management_policy_rule_from_dict = ManagementPolicyRule.from_dict(management_policy_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


