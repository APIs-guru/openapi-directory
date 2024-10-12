# VaultPatchProperties

Properties of the vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policies** | [**List[AccessPolicyEntry]**](AccessPolicyEntry.md) | An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault&#39;s tenant ID. | [optional] 
**create_mode** | **str** | The vault&#39;s create mode to indicate whether the vault need to be recovered or not. | [optional] 
**enable_purge_protection** | **bool** | Property specifying whether protection against purge is enabled for this vault; it is only effective if soft delete is also enabled. Once activated, the property may no longer be reset to false. | [optional] 
**enable_soft_delete** | **bool** | Property specifying whether recoverable deletion (&#39;soft&#39; delete) is enabled for this key vault. The property may not be set to false. | [optional] 
**enabled_for_deployment** | **bool** | Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. | [optional] 
**enabled_for_disk_encryption** | **bool** | Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. | [optional] 
**enabled_for_template_deployment** | **bool** | Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**tenant_id** | **str** | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | [optional] 

## Example

```python
from openapi_client.models.vault_patch_properties import VaultPatchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultPatchProperties from a JSON string
vault_patch_properties_instance = VaultPatchProperties.from_json(json)
# print the JSON string representation of the object
print(VaultPatchProperties.to_json())

# convert the object into a dict
vault_patch_properties_dict = vault_patch_properties_instance.to_dict()
# create an instance of VaultPatchProperties from a dict
vault_patch_properties_from_dict = VaultPatchProperties.from_dict(vault_patch_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


