# JitNetworkAccessPolicyInitiateVirtualMachine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of the virtual machine that is linked to this policy | 
**ports** | [**List[JitNetworkAccessPolicyInitiatePort]**](JitNetworkAccessPolicyInitiatePort.md) | The ports to open for the resource with the &#x60;id&#x60; | 

## Example

```python
from openapi_client.models.jit_network_access_policy_initiate_virtual_machine import JitNetworkAccessPolicyInitiateVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicyInitiateVirtualMachine from a JSON string
jit_network_access_policy_initiate_virtual_machine_instance = JitNetworkAccessPolicyInitiateVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicyInitiateVirtualMachine.to_json())

# convert the object into a dict
jit_network_access_policy_initiate_virtual_machine_dict = jit_network_access_policy_initiate_virtual_machine_instance.to_dict()
# create an instance of JitNetworkAccessPolicyInitiateVirtualMachine from a dict
jit_network_access_policy_initiate_virtual_machine_from_dict = JitNetworkAccessPolicyInitiateVirtualMachine.from_dict(jit_network_access_policy_initiate_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


