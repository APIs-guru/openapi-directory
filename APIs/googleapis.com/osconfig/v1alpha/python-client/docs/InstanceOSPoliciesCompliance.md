# InstanceOSPoliciesCompliance

This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_state** | **str** | Output only. Detailed compliance state of the VM. This field is populated only when compliance state is &#x60;UNKNOWN&#x60;. It may contain one of the following values: * &#x60;no-compliance-data&#x60;: Compliance data is not available for this VM. * &#x60;no-agent-detected&#x60;: OS Config agent is not detected for this VM. * &#x60;config-not-supported-by-agent&#x60;: The version of the OS Config agent running on this VM does not support configuration management. * &#x60;inactive&#x60;: VM is not running. * &#x60;internal-service-errors&#x60;: There were internal service errors encountered while enforcing compliance. * &#x60;agent-errors&#x60;: OS config agent encountered errors while enforcing compliance. | [optional] [readonly] 
**detailed_state_reason** | **str** | Output only. The reason for the &#x60;detailed_state&#x60; of the VM (if any). | [optional] [readonly] 
**instance** | **str** | Output only. The Compute Engine VM instance name. | [optional] [readonly] 
**last_compliance_check_time** | **str** | Output only. Timestamp of the last compliance check for the VM. | [optional] [readonly] 
**last_compliance_run_id** | **str** | Output only. Unique identifier for the last compliance run. This id will be logged by the OS config agent during a compliance run and can be used for debugging and tracing purpose. | [optional] [readonly] 
**name** | **str** | Output only. The &#x60;InstanceOSPoliciesCompliance&#x60; API resource name. Format: &#x60;projects/{project_number}/locations/{location}/instanceOSPoliciesCompliances/{instance_id}&#x60; | [optional] [readonly] 
**os_policy_compliances** | [**List[InstanceOSPoliciesComplianceOSPolicyCompliance]**](InstanceOSPoliciesComplianceOSPolicyCompliance.md) | Output only. Compliance data for each &#x60;OSPolicy&#x60; that is applied to the VM. | [optional] [readonly] 
**state** | **str** | Output only. Compliance state of the VM. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_os_policies_compliance import InstanceOSPoliciesCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceOSPoliciesCompliance from a JSON string
instance_os_policies_compliance_instance = InstanceOSPoliciesCompliance.from_json(json)
# print the JSON string representation of the object
print(InstanceOSPoliciesCompliance.to_json())

# convert the object into a dict
instance_os_policies_compliance_dict = instance_os_policies_compliance_instance.to_dict()
# create an instance of InstanceOSPoliciesCompliance from a dict
instance_os_policies_compliance_from_dict = InstanceOSPoliciesCompliance.from_dict(instance_os_policies_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


