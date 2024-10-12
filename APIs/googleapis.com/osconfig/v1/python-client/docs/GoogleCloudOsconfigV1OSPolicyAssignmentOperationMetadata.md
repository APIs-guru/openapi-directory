# GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata

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
from openapi_client.models.google_cloud_osconfig_v1_os_policy_assignment_operation_metadata import GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata from a JSON string
google_cloud_osconfig_v1_os_policy_assignment_operation_metadata_instance = GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata.to_json())

# convert the object into a dict
google_cloud_osconfig_v1_os_policy_assignment_operation_metadata_dict = google_cloud_osconfig_v1_os_policy_assignment_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata from a dict
google_cloud_osconfig_v1_os_policy_assignment_operation_metadata_from_dict = GoogleCloudOsconfigV1OSPolicyAssignmentOperationMetadata.from_dict(google_cloud_osconfig_v1_os_policy_assignment_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


