# JitAuthorizationPolicies

The JIT authorization policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The the principal id that will be granted JIT access. | 
**role_definition_id** | **str** | The role definition id that will be granted to the Principal. | 

## Example

```python
from openapi_client.models.jit_authorization_policies import JitAuthorizationPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of JitAuthorizationPolicies from a JSON string
jit_authorization_policies_instance = JitAuthorizationPolicies.from_json(json)
# print the JSON string representation of the object
print(JitAuthorizationPolicies.to_json())

# convert the object into a dict
jit_authorization_policies_dict = jit_authorization_policies_instance.to_dict()
# create an instance of JitAuthorizationPolicies from a dict
jit_authorization_policies_from_dict = JitAuthorizationPolicies.from_dict(jit_authorization_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


