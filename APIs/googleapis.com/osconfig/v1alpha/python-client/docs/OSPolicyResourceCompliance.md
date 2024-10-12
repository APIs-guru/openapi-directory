# OSPolicyResourceCompliance

Compliance data for an OS policy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_steps** | [**List[OSPolicyResourceConfigStep]**](OSPolicyResourceConfigStep.md) | Ordered list of configuration steps taken by the agent for the OS policy resource. | [optional] 
**exec_resource_output** | [**OSPolicyResourceComplianceExecResourceOutput**](OSPolicyResourceComplianceExecResourceOutput.md) |  | [optional] 
**os_policy_resource_id** | **str** | The id of the OS policy resource. | [optional] 
**state** | **str** | Compliance state of the OS policy resource. | [optional] 

## Example

```python
from openapi_client.models.os_policy_resource_compliance import OSPolicyResourceCompliance

# TODO update the JSON string below
json = "{}"
# create an instance of OSPolicyResourceCompliance from a JSON string
os_policy_resource_compliance_instance = OSPolicyResourceCompliance.from_json(json)
# print the JSON string representation of the object
print(OSPolicyResourceCompliance.to_json())

# convert the object into a dict
os_policy_resource_compliance_dict = os_policy_resource_compliance_instance.to_dict()
# create an instance of OSPolicyResourceCompliance from a dict
os_policy_resource_compliance_from_dict = OSPolicyResourceCompliance.from_dict(os_policy_resource_compliance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


