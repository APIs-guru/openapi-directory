# OSPolicyAssignmentReportOSPolicyCompliance

Compliance data for an OS policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_state** | **str** | The compliance state of the OS policy. | [optional] 
**compliance_state_reason** | **str** | The reason for the OS policy to be in an unknown compliance state. This field is always populated when &#x60;compliance_state&#x60; is &#x60;UNKNOWN&#x60;. If populated, the field can contain one of the following values: * &#x60;vm-not-running&#x60;: The VM was not running. * &#x60;os-policies-not-supported-by-agent&#x60;: The version of the OS Config agent running on the VM does not support running OS policies. * &#x60;no-agent-detected&#x60;: The OS Config agent is not detected for the VM. * &#x60;resource-execution-errors&#x60;: The OS Config agent encountered errors while executing one or more resources in the policy. See &#x60;os_policy_resource_compliances&#x60; for details. * &#x60;task-timeout&#x60;: The task sent to the agent to apply the policy timed out. * &#x60;unexpected-agent-state&#x60;: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * &#x60;internal-service-errors&#x60;: Internal service errors were encountered while attempting to apply the policy. | [optional] 
**os_policy_id** | **str** | The OS policy id | [optional] 
**os_policy_resource_compliances** | [**List[OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance]**](OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance.md) | Compliance data for each resource within the policy that is applied to the VM. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_report_os_policy_compliance import OSPolicyAssignmentReportOSPolicyCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentReportOSPolicyCompliance from a JSON string
os_policy_assignment_report_os_policy_compliance_instance = OSPolicyAssignmentReportOSPolicyCompliance.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentReportOSPolicyCompliance.to_json())

# convert the object into a dict
os_policy_assignment_report_os_policy_compliance_dict = os_policy_assignment_report_os_policy_compliance_instance.to_dict()
# create an instance of OSPolicyAssignmentReportOSPolicyCompliance from a dict
os_policy_assignment_report_os_policy_compliance_from_dict = OSPolicyAssignmentReportOSPolicyCompliance.from_dict(os_policy_assignment_report_os_policy_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


