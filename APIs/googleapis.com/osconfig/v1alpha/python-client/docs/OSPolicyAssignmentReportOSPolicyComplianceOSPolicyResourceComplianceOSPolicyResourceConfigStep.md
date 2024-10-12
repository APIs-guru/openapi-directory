# OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep

Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution. | [optional] 
**type** | **str** | Configuration step type. | [optional] 

## Example

```python
from openapi_client.models.os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step import OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep from a JSON string
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step_instance = OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep.from_json(json)
# print the JSON string representation of the object
print(OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep.to_json())

# convert the object into a dict
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step_dict = os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step_instance.to_dict()
# create an instance of OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep from a dict
os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step_from_dict = OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep.from_dict(os_policy_assignment_report_os_policy_compliance_os_policy_resource_compliance_os_policy_resource_config_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


