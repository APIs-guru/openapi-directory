# UpdateKeyVaultMetaInfo

The Key Vault update information used for user managed key rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key_version** | **str** | The version of the user managed encryption key to update through a key rotation. | [optional] 

## Example

```python
from openapi_client.models.update_key_vault_meta_info import UpdateKeyVaultMetaInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateKeyVaultMetaInfo from a JSON string
update_key_vault_meta_info_instance = UpdateKeyVaultMetaInfo.from_json(json)
# print the JSON string representation of the object
print(UpdateKeyVaultMetaInfo.to_json())

# convert the object into a dict
update_key_vault_meta_info_dict = update_key_vault_meta_info_instance.to_dict()
# create an instance of UpdateKeyVaultMetaInfo from a dict
update_key_vault_meta_info_from_dict = UpdateKeyVaultMetaInfo.from_dict(update_key_vault_meta_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


