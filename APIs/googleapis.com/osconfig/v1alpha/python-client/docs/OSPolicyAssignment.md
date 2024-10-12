# OSPolicyAssignment

OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline** | **bool** | Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of &#x60;true&#x60; for this field. | [optional] [readonly] 
**deleted** | **bool** | Output only. Indicates that this revision deletes the OS policy assignment. | [optional] [readonly] 
**description** | **str** | OS policy assignment description. Length of the description is limited to 1024 characters. | [optional] 
**etag** | **str** | The etag for this OS policy assignment. If this is provided on update, it must match the server&#39;s etag. | [optional] 
**instance_filter** | [**OSPolicyAssignmentInstanceFilter**](OSPolicyAssignmentInstanceFilter.md) |  | [optional] 
**name** | **str** | Resource name. Format: &#x60;projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}&#x60; This field is ignored when you create an OS policy assignment. | [optional] 
**os_policies** | [**List[OSPolicy]**](OSPolicy.md) | Required. List of OS policies to be applied to the VMs. | [optional] 
**reconciling** | **bool** | Output only. Indicates that reconciliation is in progress for the revision. This value is &#x60;true&#x60; when the &#x60;rollout_state&#x60; is one of: * IN_PROGRESS * CANCELLING | [optional] [readonly] 
**revision_create_time** | **str** | Output only. The timestamp that the revision was created. | [optional] [readonly] 
**revision_id** | **str** | Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment | [optional] [readonly] 
**rollout** | [**OSPolicyAssignmentRollout**](OSPolicyAssignmentRollout.md) |  | [optional] 
**rollout_state** | **str** | Output only. OS policy assignment rollout state | [optional] [readonly] 
**uid** | **str** | Output only. Server generated unique id for the OS policy assignment resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.os_policy_assignment import OSPolicyAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignment from a JSON string
os_policy_assignment_instance = OSPolicyAssignment.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignment.to_json())

# convert the object into a dict
os_policy_assignment_dict = os_policy_assignment_instance.to_dict()
# create an instance of OSPolicyAssignment from a dict
os_policy_assignment_from_dict = OSPolicyAssignment.from_dict(os_policy_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


