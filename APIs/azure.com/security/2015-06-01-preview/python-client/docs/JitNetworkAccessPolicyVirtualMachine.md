# JitNetworkAccessPolicyVirtualMachine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of the virtual machine that is linked to this policy | 
**ports** | [**List[JitNetworkAccessPortRule]**](JitNetworkAccessPortRule.md) | Port configurations for the virtual machine | 

## Example

```python
from openapi_client.models.jit_network_access_policy_virtual_machine import JitNetworkAccessPolicyVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicyVirtualMachine from a JSON string
jit_network_access_policy_virtual_machine_instance = JitNetworkAccessPolicyVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicyVirtualMachine.to_json())

# convert the object into a dict
jit_network_access_policy_virtual_machine_dict = jit_network_access_policy_virtual_machine_instance.to_dict()
# create an instance of JitNetworkAccessPolicyVirtualMachine from a dict
jit_network_access_policy_virtual_machine_from_dict = JitNetworkAccessPolicyVirtualMachine.from_dict(jit_network_access_policy_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


