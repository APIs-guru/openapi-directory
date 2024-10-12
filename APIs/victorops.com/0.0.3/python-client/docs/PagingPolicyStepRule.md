# PagingPolicyStepRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**Contact**](Contact.md) |  | [optional] 
**index** | **float** |  | [optional] 
**type** | [**NotificationType**](NotificationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.paging_policy_step_rule import PagingPolicyStepRule

# TODO update the JSON string below
json = "{}"
# create an instance of PagingPolicyStepRule from a JSON string
paging_policy_step_rule_instance = PagingPolicyStepRule.from_json(json)
# print the JSON string representation of the object
print(PagingPolicyStepRule.to_json())

# convert the object into a dict
paging_policy_step_rule_dict = paging_policy_step_rule_instance.to_dict()
# create an instance of PagingPolicyStepRule from a dict
paging_policy_step_rule_from_dict = PagingPolicyStepRule.from_dict(paging_policy_step_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


