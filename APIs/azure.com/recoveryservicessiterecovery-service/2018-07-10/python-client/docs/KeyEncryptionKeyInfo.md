# KeyEncryptionKeyInfo

Key Encryption Key (KEK) information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_identifier** | **str** | The key url / identifier. | [optional] 
**key_vault_resource_arm_id** | **str** | The KeyVault resource ARM id for key. | [optional] 

## Example

```python
from openapi_client.models.key_encryption_key_info import KeyEncryptionKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of KeyEncryptionKeyInfo from a JSON string
key_encryption_key_info_instance = KeyEncryptionKeyInfo.from_json(json)
# print the JSON string representation of the object
print(KeyEncryptionKeyInfo.to_json())

# convert the object into a dict
key_encryption_key_info_dict = key_encryption_key_info_instance.to_dict()
# create an instance of KeyEncryptionKeyInfo from a dict
key_encryption_key_info_from_dict = KeyEncryptionKeyInfo.from_dict(key_encryption_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


