# InstanceOSPoliciesComplianceOSPolicyCompliance

Compliance data for an OS policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_policy_assignment** | **str** | Reference to the &#x60;OSPolicyAssignment&#x60; API resource that the &#x60;OSPolicy&#x60; belongs to. Format: &#x60;projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}&#x60; | [optional] 
**os_policy_id** | **str** | The OS policy id | [optional] 
**os_policy_resource_compliances** | [**List[OSPolicyResourceCompliance]**](OSPolicyResourceCompliance.md) | Compliance data for each &#x60;OSPolicyResource&#x60; that is applied to the VM. | [optional] 
**state** | **str** | Compliance state of the OS policy. | [optional] 

## Example

```python
from openapi_client.models.instance_os_policies_compliance_os_policy_compliance import InstanceOSPoliciesComplianceOSPolicyCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceOSPoliciesComplianceOSPolicyCompliance from a JSON string
instance_os_policies_compliance_os_policy_compliance_instance = InstanceOSPoliciesComplianceOSPolicyCompliance.from_json(json)
# print the JSON string representation of the object
print(InstanceOSPoliciesComplianceOSPolicyCompliance.to_json())

# convert the object into a dict
instance_os_policies_compliance_os_policy_compliance_dict = instance_os_policies_compliance_os_policy_compliance_instance.to_dict()
# create an instance of InstanceOSPoliciesComplianceOSPolicyCompliance from a dict
instance_os_policies_compliance_os_policy_compliance_from_dict = InstanceOSPoliciesComplianceOSPolicyCompliance.from_dict(instance_os_policies_compliance_os_policy_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


