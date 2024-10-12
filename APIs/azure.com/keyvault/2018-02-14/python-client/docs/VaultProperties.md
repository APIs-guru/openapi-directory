# VaultProperties

Properties of the vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_policies** | [**List[AccessPolicyEntry]**](AccessPolicyEntry.md) | An array of 0 to 16 identities that have access to the key vault. All identities in the array must use the same tenant ID as the key vault&#39;s tenant ID. When &#x60;createMode&#x60; is set to &#x60;recover&#x60;, access policies are not required. Otherwise, access policies are required. | [optional] 
**create_mode** | **str** | The vault&#39;s create mode to indicate whether the vault need to be recovered or not. | [optional] 
**enable_purge_protection** | **bool** | Property specifying whether protection against purge is enabled for this vault. Setting this property to true activates protection against purge for this vault and its content - only the Key Vault service may initiate a hard, irrecoverable deletion. The setting is effective only if soft delete is also enabled. Enabling this functionality is irreversible - that is, the property does not accept false as its value. | [optional] 
**enable_soft_delete** | **bool** | Property to specify whether the &#39;soft delete&#39; functionality is enabled for this key vault. It does not accept false value. | [optional] 
**enabled_for_deployment** | **bool** | Property to specify whether Azure Virtual Machines are permitted to retrieve certificates stored as secrets from the key vault. | [optional] 
**enabled_for_disk_encryption** | **bool** | Property to specify whether Azure Disk Encryption is permitted to retrieve secrets from the vault and unwrap keys. | [optional] 
**enabled_for_template_deployment** | **bool** | Property to specify whether Azure Resource Manager is permitted to retrieve secrets from the key vault. | [optional] 
**network_acls** | [**NetworkRuleSet**](NetworkRuleSet.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | 
**tenant_id** | **str** | The Azure Active Directory tenant ID that should be used for authenticating requests to the key vault. | 
**vault_uri** | **str** | The URI of the vault for performing operations on keys and secrets. | [optional] 

## Example

```python
from openapi_client.models.vault_properties import VaultProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultProperties from a JSON string
vault_properties_instance = VaultProperties.from_json(json)
# print the JSON string representation of the object
print(VaultProperties.to_json())

# convert the object into a dict
vault_properties_dict = vault_properties_instance.to_dict()
# create an instance of VaultProperties from a dict
vault_properties_from_dict = VaultProperties.from_dict(vault_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


