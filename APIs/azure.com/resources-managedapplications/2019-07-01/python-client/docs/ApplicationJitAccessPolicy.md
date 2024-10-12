# ApplicationJitAccessPolicy

Managed application Jit access policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jit_access_enabled** | **bool** | Whether the JIT access is enabled. | 
**jit_approval_mode** | [**JitApprovalMode**](JitApprovalMode.md) |  | [optional] 
**jit_approvers** | [**List[JitApproverDefinition]**](JitApproverDefinition.md) | The JIT approvers | [optional] 
**maximum_jit_access_duration** | **str** | The maximum duration JIT access is granted. This is an ISO8601 time period value. | [optional] 

## Example

```python
from openapi_client.models.application_jit_access_policy import ApplicationJitAccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationJitAccessPolicy from a JSON string
application_jit_access_policy_instance = ApplicationJitAccessPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationJitAccessPolicy.to_json())

# convert the object into a dict
application_jit_access_policy_dict = application_jit_access_policy_instance.to_dict()
# create an instance of ApplicationJitAccessPolicy from a dict
application_jit_access_policy_from_dict = ApplicationJitAccessPolicy.from_dict(application_jit_access_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


