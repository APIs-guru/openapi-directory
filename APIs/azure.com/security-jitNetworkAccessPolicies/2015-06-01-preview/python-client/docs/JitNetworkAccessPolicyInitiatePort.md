# JitNetworkAccessPolicyInitiatePort


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_source_address_prefix** | **str** | Source of the allowed traffic. If omitted, the request will be for the source IP address of the initiate request. | [optional] 
**end_time_utc** | **datetime** | The time to close the request in UTC | 
**number** | **int** |  | 

## Example

```python
from openapi_client.models.jit_network_access_policy_initiate_port import JitNetworkAccessPolicyInitiatePort

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicyInitiatePort from a JSON string
jit_network_access_policy_initiate_port_instance = JitNetworkAccessPolicyInitiatePort.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicyInitiatePort.to_json())

# convert the object into a dict
jit_network_access_policy_initiate_port_dict = jit_network_access_policy_initiate_port_instance.to_dict()
# create an instance of JitNetworkAccessPolicyInitiatePort from a dict
jit_network_access_policy_initiate_port_from_dict = JitNetworkAccessPolicyInitiatePort.from_dict(jit_network_access_policy_initiate_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


