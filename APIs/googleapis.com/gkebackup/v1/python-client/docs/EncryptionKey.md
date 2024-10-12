# EncryptionKey

Defined a customer managed encryption key that will be used to encrypt Backup artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_kms_encryption_key** | **str** | Optional. Google Cloud KMS encryption key. Format: &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60; | [optional] 

## Example

```python
from openapi_client.models.encryption_key import EncryptionKey

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionKey from a JSON string
encryption_key_instance = EncryptionKey.from_json(json)
# print the JSON string representation of the object
print(EncryptionKey.to_json())

# convert the object into a dict
encryption_key_dict = encryption_key_instance.to_dict()
# create an instance of EncryptionKey from a dict
encryption_key_from_dict = EncryptionKey.from_dict(encryption_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


