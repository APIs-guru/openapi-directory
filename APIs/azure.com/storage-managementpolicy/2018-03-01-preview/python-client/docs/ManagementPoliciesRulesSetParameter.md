# ManagementPoliciesRulesSetParameter

The Storage Account ManagementPolicies Rules, in JSON format. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagementPoliciesRules**](ManagementPoliciesRules.md) |  | [optional] 

## Example

```python
from openapi_client.models.management_policies_rules_set_parameter import ManagementPoliciesRulesSetParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPoliciesRulesSetParameter from a JSON string
management_policies_rules_set_parameter_instance = ManagementPoliciesRulesSetParameter.from_json(json)
# print the JSON string representation of the object
print(ManagementPoliciesRulesSetParameter.to_json())

# convert the object into a dict
management_policies_rules_set_parameter_dict = management_policies_rules_set_parameter_instance.to_dict()
# create an instance of ManagementPoliciesRulesSetParameter from a dict
management_policies_rules_set_parameter_from_dict = ManagementPoliciesRulesSetParameter.from_dict(management_policies_rules_set_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


