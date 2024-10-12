# UpdateEncryptionConfig

The encryption configuration used to update a user managed Key Vault key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_meta_info** | [**UpdateKeyVaultMetaInfo**](UpdateKeyVaultMetaInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_encryption_config import UpdateEncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateEncryptionConfig from a JSON string
update_encryption_config_instance = UpdateEncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(UpdateEncryptionConfig.to_json())

# convert the object into a dict
update_encryption_config_dict = update_encryption_config_instance.to_dict()
# create an instance of UpdateEncryptionConfig from a dict
update_encryption_config_from_dict = UpdateEncryptionConfig.from_dict(update_encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


