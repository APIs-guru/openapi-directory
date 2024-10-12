# JitNetworkAccessRequestVirtualMachine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID of the virtual machine that is linked to this policy | 
**ports** | [**List[JitNetworkAccessRequestPort]**](JitNetworkAccessRequestPort.md) | The ports that were opened for the virtual machine | 

## Example

```python
from openapi_client.models.jit_network_access_request_virtual_machine import JitNetworkAccessRequestVirtualMachine

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessRequestVirtualMachine from a JSON string
jit_network_access_request_virtual_machine_instance = JitNetworkAccessRequestVirtualMachine.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessRequestVirtualMachine.to_json())

# convert the object into a dict
jit_network_access_request_virtual_machine_dict = jit_network_access_request_virtual_machine_instance.to_dict()
# create an instance of JitNetworkAccessRequestVirtualMachine from a dict
jit_network_access_request_virtual_machine_from_dict = JitNetworkAccessRequestVirtualMachine.from_dict(jit_network_access_request_virtual_machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


