# PolicyAssignment

The policy assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the policy assignment. | [optional] 
**name** | **str** | The name of the policy assignment. | [optional] 
**properties** | [**PolicyAssignmentProperties**](PolicyAssignmentProperties.md) |  | [optional] 
**type** | **str** | The type of the policy assignment. | [optional] 

## Example

```python
from openapi_client.models.policy_assignment import PolicyAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyAssignment from a JSON string
policy_assignment_instance = PolicyAssignment.from_json(json)
# print the JSON string representation of the object
print(PolicyAssignment.to_json())

# convert the object into a dict
policy_assignment_dict = policy_assignment_instance.to_dict()
# create an instance of PolicyAssignment from a dict
policy_assignment_from_dict = PolicyAssignment.from_dict(policy_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


