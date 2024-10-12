# VaultPatchParameters

Parameters for creating or updating a vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultPatchProperties**](VaultPatchProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags that will be assigned to the key vault.  | [optional] 

## Example

```python
from openapi_client.models.vault_patch_parameters import VaultPatchParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VaultPatchParameters from a JSON string
vault_patch_parameters_instance = VaultPatchParameters.from_json(json)
# print the JSON string representation of the object
print(VaultPatchParameters.to_json())

# convert the object into a dict
vault_patch_parameters_dict = vault_patch_parameters_instance.to_dict()
# create an instance of VaultPatchParameters from a dict
vault_patch_parameters_from_dict = VaultPatchParameters.from_dict(vault_patch_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


