# EncryptionInfo

A description of how user IDs are encrypted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_entity_id** | **str** | The encryption entity ID. This should match the encryption configuration for ad serving or Data Transfer. | [optional] 
**encryption_entity_type** | **str** | The encryption entity type. This should match the encryption configuration for ad serving or Data Transfer. | [optional] 
**encryption_source** | **str** | Describes whether the encrypted cookie was received from ad serving (the %m macro) or from Data Transfer. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#encryptionInfo\&quot;. | [optional] 

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


