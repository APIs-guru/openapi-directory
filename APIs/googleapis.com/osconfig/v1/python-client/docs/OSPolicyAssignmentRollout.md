# OSPolicyAssignmentRollout

Message to configure the rollout at the zonal level for the OS policy assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_budget** | [**FixedOrPercent**](FixedOrPercent.md) |  | [optional] 
**min_wait_duration** | **str** | Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the &#x60;disruption_budget&#x60; at least until this duration of time has passed after configuration changes are applied. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_rollout import OSPolicyAssignmentRollout

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentRollout from a JSON string
os_policy_assignment_rollout_instance = OSPolicyAssignmentRollout.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentRollout.to_json())

# convert the object into a dict
os_policy_assignment_rollout_dict = os_policy_assignment_rollout_instance.to_dict()
# create an instance of OSPolicyAssignmentRollout from a dict
os_policy_assignment_rollout_from_dict = OSPolicyAssignmentRollout.from_dict(os_policy_assignment_rollout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


