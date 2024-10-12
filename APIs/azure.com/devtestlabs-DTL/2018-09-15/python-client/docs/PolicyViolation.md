# PolicyViolation

Policy violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the policy violation. | [optional] 
**message** | **str** | The message of the policy violation. | [optional] 

## Example

```python
from openapi_client.models.policy_violation import PolicyViolation

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyViolation from a JSON string
policy_violation_instance = PolicyViolation.from_json(json)
# print the JSON string representation of the object
print(PolicyViolation.to_json())

# convert the object into a dict
policy_violation_dict = policy_violation_instance.to_dict()
# create an instance of PolicyViolation from a dict
policy_violation_from_dict = PolicyViolation.from_dict(policy_violation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


