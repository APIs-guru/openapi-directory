# DiskEncryptionKeyInfo

Disk Encryption Key Information (BitLocker Encryption Key (BEK) on Windows).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_resource_arm_id** | **str** | The KeyVault resource ARM id for secret. | [optional] 
**secret_identifier** | **str** | The secret url / identifier. | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_key_info import DiskEncryptionKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionKeyInfo from a JSON string
disk_encryption_key_info_instance = DiskEncryptionKeyInfo.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionKeyInfo.to_json())

# convert the object into a dict
disk_encryption_key_info_dict = disk_encryption_key_info_instance.to_dict()
# create an instance of DiskEncryptionKeyInfo from a dict
disk_encryption_key_info_from_dict = DiskEncryptionKeyInfo.from_dict(disk_encryption_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


