# JitNetworkAccessPolicyInitiateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**justification** | **str** | The justification for making the initiate request | [optional] 
**virtual_machines** | [**List[JitNetworkAccessPolicyInitiateVirtualMachine]**](JitNetworkAccessPolicyInitiateVirtualMachine.md) | A list of virtual machines &amp; ports to open access for | 

## Example

```python
from openapi_client.models.jit_network_access_policy_initiate_request import JitNetworkAccessPolicyInitiateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicyInitiateRequest from a JSON string
jit_network_access_policy_initiate_request_instance = JitNetworkAccessPolicyInitiateRequest.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicyInitiateRequest.to_json())

# convert the object into a dict
jit_network_access_policy_initiate_request_dict = jit_network_access_policy_initiate_request_instance.to_dict()
# create an instance of JitNetworkAccessPolicyInitiateRequest from a dict
jit_network_access_policy_initiate_request_from_dict = JitNetworkAccessPolicyInitiateRequest.from_dict(jit_network_access_policy_initiate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


