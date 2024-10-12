# JitNetworkAccessPoliciesListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**JitNetworkAccessPoliciesListDefaultResponseError**](JitNetworkAccessPoliciesListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.jit_network_access_policies_list_default_response import JitNetworkAccessPoliciesListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JitNetworkAccessPoliciesListDefaultResponse from a JSON string
jit_network_access_policies_list_default_response_instance = JitNetworkAccessPoliciesListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(JitNetworkAccessPoliciesListDefaultResponse.to_json())

# convert the object into a dict
jit_network_access_policies_list_default_response_dict = jit_network_access_policies_list_default_response_instance.to_dict()
# create an instance of JitNetworkAccessPoliciesListDefaultResponse from a dict
jit_network_access_policies_list_default_response_from_dict = JitNetworkAccessPoliciesListDefaultResponse.from_dict(jit_network_access_policies_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


