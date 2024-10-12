# JitRequestProperties

Information about JIT request properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_resource_id** | **str** | The parent application id. | 
**created_by** | [**ApplicationClientDetails**](ApplicationClientDetails.md) |  | [optional] 
**jit_authorization_policies** | [**List[JitAuthorizationPolicies]**](JitAuthorizationPolicies.md) | The JIT authorization policies. | 
**jit_request_state** | [**JitRequestState**](JitRequestState.md) |  | [optional] 
**jit_scheduling_policy** | [**JitSchedulingPolicy**](JitSchedulingPolicy.md) |  | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**publisher_tenant_id** | **str** | The publisher tenant id. | [optional] [readonly] 
**updated_by** | [**ApplicationClientDetails**](ApplicationClientDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.jit_request_properties import JitRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JitRequestProperties from a JSON string
jit_request_properties_instance = JitRequestProperties.from_json(json)
# print the JSON string representation of the object
print(JitRequestProperties.to_json())

# convert the object into a dict
jit_request_properties_dict = jit_request_properties_instance.to_dict()
# create an instance of JitRequestProperties from a dict
jit_request_properties_from_dict = JitRequestProperties.from_dict(jit_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


