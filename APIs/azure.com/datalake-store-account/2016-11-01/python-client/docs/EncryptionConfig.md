# EncryptionConfig

The encryption configuration for the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_meta_info** | [**KeyVaultMetaInfo**](KeyVaultMetaInfo.md) |  | [optional] 
**type** | **str** | The type of encryption configuration being used. Currently the only supported types are &#39;UserManaged&#39; and &#39;ServiceManaged&#39;. | 

## Example

```python
from openapi_client.models.encryption_config import EncryptionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionConfig from a JSON string
encryption_config_instance = EncryptionConfig.from_json(json)
# print the JSON string representation of the object
print(EncryptionConfig.to_json())

# convert the object into a dict
encryption_config_dict = encryption_config_instance.to_dict()
# create an instance of EncryptionConfig from a dict
encryption_config_from_dict = EncryptionConfig.from_dict(encryption_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


