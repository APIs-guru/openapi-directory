# OSPolicyAssignmentReport

A report of the OS policy assignment status for a given instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | **str** | The Compute Engine VM instance name. | [optional] 
**last_run_id** | **str** | Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs. | [optional] 
**name** | **str** | The &#x60;OSPolicyAssignmentReport&#x60; API resource name. Format: &#x60;projects/{project_number}/locations/{location}/instances/{instance_id}/osPolicyAssignments/{os_policy_assignment_id}/report&#x60; | [optional] 
**os_policy_assignment** | **str** | Reference to the &#x60;OSPolicyAssignment&#x60; API resource that the &#x60;OSPolicy&#x60; belongs to. Format: &#x60;projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}&#x60; | [optional] 
**os_policy_compliances** | [**List[OSPolicyAssignmentReportOSPolicyCompliance]**](OSPolicyAssignmentReportOSPolicyCompliance.md) | Compliance data for each &#x60;OSPolicy&#x60; that is applied to the VM. | [optional] 
**update_time** | **str** | Timestamp for when the report was last generated. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_report import OSPolicyAssignmentReport

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentReport from a JSON string
os_policy_assignment_report_instance = OSPolicyAssignmentReport.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentReport.to_json())

# convert the object into a dict
os_policy_assignment_report_dict = os_policy_assignment_report_instance.to_dict()
# create an instance of OSPolicyAssignmentReport from a dict
os_policy_assignment_report_from_dict = OSPolicyAssignmentReport.from_dict(os_policy_assignment_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


