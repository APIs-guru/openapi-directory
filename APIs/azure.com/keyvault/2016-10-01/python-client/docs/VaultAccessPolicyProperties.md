# VaultAccessPolicyProperties

Properties of the vault access policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policies** | [**List[AccessPolicyEntry]**](AccessPolicyEntry.md) | An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault&#39;s tenant ID. | 

## Example

```python
from openapi_client.models.vault_access_policy_properties import VaultAccessPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultAccessPolicyProperties from a JSON string
vault_access_policy_properties_instance = VaultAccessPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(VaultAccessPolicyProperties.to_json())

# convert the object into a dict
vault_access_policy_properties_dict = vault_access_policy_properties_instance.to_dict()
# create an instance of VaultAccessPolicyProperties from a dict
vault_access_policy_properties_from_dict = VaultAccessPolicyProperties.from_dict(vault_access_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


