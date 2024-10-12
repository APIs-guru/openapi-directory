# EncryptionInfo

Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_status** | [**Status**](Status.md) |  | [optional] 
**encryption_type** | **str** | Output only. The type of encryption used to protect this resource. | [optional] [readonly] 
**kms_key_version** | **str** | Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table. | [optional] [readonly] 

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


