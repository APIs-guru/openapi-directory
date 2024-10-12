# OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance

Compliance data for an OS policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compliance_state** | **str** | The compliance state of the resource. | [optional] 
**compliance_state_reason** | **str** | A reason for the resource to be in the given compliance state. This field is always populated when &#x60;compliance_state&#x60; is &#x60;UNKNOWN&#x60;. The following values are supported when &#x60;compliance_state &#x3D;&#x3D; UNKNOWN&#x60; * &#x60;execution-errors&#x60;: Errors were encountered by the agent while executing the resource and the compliance state couldn&#39;t be determined. * &#x60;execution-skipped-by-agent&#x60;: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * &#x60;os-policy-execution-attempt-failed&#x60;: The execution of the OS policy containing this resource failed and the compliance state couldn&#39;t be determined. | [optional] 
**config_steps** | [**List[OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep]**](OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep.md) | Ordered list of configuration completed by the agent for the OS policy resource. | [optional] 
**exec_resource_output** | [**OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput**](OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput.md) |  | [optional] 
**os_policy_resource_id** | **str** | The ID of the OS policy resource. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance import OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance from a JSON string
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_instance = OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance.to_json())

# convert the object into a dict
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_dict = os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_instance.to_dict()
# create an instance of OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance from a dict
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_from_dict = OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance.from_dict(os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


