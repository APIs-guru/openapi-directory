# EncryptionInfo

Encryption information for a Cloud Spanner database or backup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_status** | [**Status**](Status.md) |  | [optional] 
**encryption_type** | **str** | Output only. The type of encryption. | [optional] [readonly] 
**kms_key_version** | **str** | Output only. A Cloud KMS key version that is being used to protect the database or backup. | [optional] [readonly] 

## Example

```python
from openapi_client.models.encryption_info import EncryptionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionInfo from a JSON string
encryption_info_instance = EncryptionInfo.from_json(json)
# print the JSON string representation of the object
print(EncryptionInfo.to_json())

# convert the object into a dict
encryption_info_dict = encryption_info_instance.to_dict()
# create an instance of EncryptionInfo from a dict
encryption_info_from_dict = EncryptionInfo.from_dict(encryption_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


