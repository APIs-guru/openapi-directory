# JitNetworkAccessPolicyProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets the provisioning state of the Just-in-Time policy. | [optional] [readonly] 
**requests** | [**List[JitNetworkAccessRequest]**](JitNetworkAccessRequest.md) |  | [optional] 
**virtual_machines** | [**List[JitNetworkAccessPolicyVirtualMachine]**](JitNetworkAccessPolicyVirtualMachine.md) | Configurations for Microsoft.Compute/virtualMachines resource type. | 

## Example

```python
from openapi_client.models.jit_network_access_policy_properties import JitNetworkAccessPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicyProperties from a JSON string
jit_network_access_policy_properties_instance = JitNetworkAccessPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicyProperties.to_json())

# convert the object into a dict
jit_network_access_policy_properties_dict = jit_network_access_policy_properties_instance.to_dict()
# create an instance of JitNetworkAccessPolicyProperties from a dict
jit_network_access_policy_properties_from_dict = JitNetworkAccessPolicyProperties.from_dict(jit_network_access_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


