# DiskEncryptionInfo

Recovery disk encryption info (BEK and KEK).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_encryption_key_info** | [**DiskEncryptionKeyInfo**](DiskEncryptionKeyInfo.md) |  | [optional] 
**key_encryption_key_info** | [**KeyEncryptionKeyInfo**](KeyEncryptionKeyInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.disk_encryption_info import DiskEncryptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionInfo from a JSON string
disk_encryption_info_instance = DiskEncryptionInfo.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionInfo.to_json())

# convert the object into a dict
disk_encryption_info_dict = disk_encryption_info_instance.to_dict()
# create an instance of DiskEncryptionInfo from a dict
disk_encryption_info_from_dict = DiskEncryptionInfo.from_dict(disk_encryption_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


