# PolicySetResult

Result of a policy set evaluation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_error** | **bool** | A value indicating whether this policy set evaluation has discovered violations. | [optional] 
**policy_violations** | [**List[PolicyViolation]**](PolicyViolation.md) | The list of policy violations. | [optional] 

## Example

```python
from openapi_client.models.policy_set_result import PolicySetResult

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySetResult from a JSON string
policy_set_result_instance = PolicySetResult.from_json(json)
# print the JSON string representation of the object
print(PolicySetResult.to_json())

# convert the object into a dict
policy_set_result_dict = policy_set_result_instance.to_dict()
# create an instance of PolicySetResult from a dict
policy_set_result_from_dict = PolicySetResult.from_dict(policy_set_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


