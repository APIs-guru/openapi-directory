# OSPolicyResourceComplianceExecResourceOutput

ExecResource specific output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enforcement_output** | **bytearray** | Output from Enforcement phase output file (if run). Output size is limited to 100K bytes. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_compliance_exec_resource_output import OSPolicyResourceComplianceExecResourceOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceComplianceExecResourceOutput from a JSON string
os_policy_resource_compliance_exec_resource_output_instance = OSPolicyResourceComplianceExecResourceOutput.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceComplianceExecResourceOutput.to_json())

# convert the object into a dict
os_policy_resource_compliance_exec_resource_output_dict = os_policy_resource_compliance_exec_resource_output_instance.to_dict()
# create an instance of OSPolicyResourceComplianceExecResourceOutput from a dict
os_policy_resource_compliance_exec_resource_output_from_dict = OSPolicyResourceComplianceExecResourceOutput.from_dict(os_policy_resource_compliance_exec_resource_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


