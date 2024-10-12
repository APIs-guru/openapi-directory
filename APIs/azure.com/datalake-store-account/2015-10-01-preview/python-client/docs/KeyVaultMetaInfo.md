# KeyVaultMetaInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key_name** | **str** | The name of the user managed encryption key. | [optional] 
**encryption_key_version** | **str** | The version of the user managed encryption key. | [optional] 
**key_vault_resource_id** | **str** | The resource identifier for the user managed Key Vault being used to encrypt. | [optional] 

## Example

```python
from openapi_client.models.key_vault_meta_info import KeyVaultMetaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultMetaInfo from a JSON string
key_vault_meta_info_instance = KeyVaultMetaInfo.from_json(json)
# print the JSON string representation of the object
print(KeyVaultMetaInfo.to_json())

# convert the object into a dict
key_vault_meta_info_dict = key_vault_meta_info_instance.to_dict()
# create an instance of KeyVaultMetaInfo from a dict
key_vault_meta_info_from_dict = KeyVaultMetaInfo.from_dict(key_vault_meta_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


