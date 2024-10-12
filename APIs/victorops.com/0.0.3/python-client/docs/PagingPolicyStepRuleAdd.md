# PagingPolicyStepRuleAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | [optional] 
**type** | [**NotificationType**](NotificationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.paging_policy_step_rule_add import PagingPolicyStepRuleAdd

# TODO update the JSON string below
json = "{}"
# create an instance of PagingPolicyStepRuleAdd from a JSON string
paging_policy_step_rule_add_instance = PagingPolicyStepRuleAdd.from_json(json)
# print the JSON string representation of the object
print(PagingPolicyStepRuleAdd.to_json())

# convert the object into a dict
paging_policy_step_rule_add_dict = paging_policy_step_rule_add_instance.to_dict()
# create an instance of PagingPolicyStepRuleAdd from a dict
paging_policy_step_rule_add_from_dict = PagingPolicyStepRuleAdd.from_dict(paging_policy_step_rule_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


