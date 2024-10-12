# PolicyViolationInfo

Information related to policy violations for this request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org_policy_violation_info** | [**OrgPolicyViolationInfo**](OrgPolicyViolationInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_violation_info import PolicyViolationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyViolationInfo from a JSON string
policy_violation_info_instance = PolicyViolationInfo.from_json(json)
# print the JSON string representation of the object
print(PolicyViolationInfo.to_json())

# convert the object into a dict
policy_violation_info_dict = policy_violation_info_instance.to_dict()
# create an instance of PolicyViolationInfo from a dict
policy_violation_info_from_dict = PolicyViolationInfo.from_dict(policy_violation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


