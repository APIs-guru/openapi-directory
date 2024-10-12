# JitNetworkAccessPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JitNetworkAccessPolicyProperties**](JitNetworkAccessPolicyProperties.md) |  | 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 
**kind** | **str** | Kind of the resource | [optional] 
**location** | **str** | Location where the resource is stored | [optional] [readonly] 

## Example

```python
from openapi_client.models.jit_network_access_policy import JitNetworkAccessPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPolicy from a JSON string
jit_network_access_policy_instance = JitNetworkAccessPolicy.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPolicy.to_json())

# convert the object into a dict
jit_network_access_policy_dict = jit_network_access_policy_instance.to_dict()
# create an instance of JitNetworkAccessPolicy from a dict
jit_network_access_policy_from_dict = JitNetworkAccessPolicy.from_dict(jit_network_access_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


