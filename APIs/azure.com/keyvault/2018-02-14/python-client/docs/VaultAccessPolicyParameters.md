# VaultAccessPolicyParameters

Parameters for updating the access policy in a vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id of the access policy. | [optional] [readonly] 
**location** | **str** | The resource type of the access policy. | [optional] [readonly] 
**name** | **str** | The resource name of the access policy. | [optional] [readonly] 
**properties** | [**VaultAccessPolicyProperties**](VaultAccessPolicyProperties.md) |  | 
**type** | **str** | The resource name of the access policy. | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault_access_policy_parameters import VaultAccessPolicyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VaultAccessPolicyParameters from a JSON string
vault_access_policy_parameters_instance = VaultAccessPolicyParameters.from_json(json)
# print the JSON string representation of the object
print(VaultAccessPolicyParameters.to_json())

# convert the object into a dict
vault_access_policy_parameters_dict = vault_access_policy_parameters_instance.to_dict()
# create an instance of VaultAccessPolicyParameters from a dict
vault_access_policy_parameters_from_dict = VaultAccessPolicyParameters.from_dict(vault_access_policy_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


