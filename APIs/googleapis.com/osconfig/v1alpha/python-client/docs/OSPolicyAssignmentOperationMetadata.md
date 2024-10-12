# OSPolicyAssignmentOperationMetadata

OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_method** | **str** | The OS policy assignment API method. | [optional] 
**os_policy_assignment** | **str** | Reference to the &#x60;OSPolicyAssignment&#x60; API resource. Format: &#x60;projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}&#x60; | [optional] 
**rollout_start_time** | **str** | Rollout start time | [optional] 
**rollout_state** | **str** | State of the rollout | [optional] 
**rollout_update_time** | **str** | Rollout update time | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_operation_metadata import OSPolicyAssignmentOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentOperationMetadata from a JSON string
os_policy_assignment_operation_metadata_instance = OSPolicyAssignmentOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentOperationMetadata.to_json())

# convert the object into a dict
os_policy_assignment_operation_metadata_dict = os_policy_assignment_operation_metadata_instance.to_dict()
# create an instance of OSPolicyAssignmentOperationMetadata from a dict
os_policy_assignment_operation_metadata_from_dict = OSPolicyAssignmentOperationMetadata.from_dict(os_policy_assignment_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


