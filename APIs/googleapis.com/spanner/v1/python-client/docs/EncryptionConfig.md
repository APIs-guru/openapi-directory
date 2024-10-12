# EncryptionConfig

Encryption configuration for a Cloud Spanner database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_key_name** | **str** | The Cloud KMS key to be used for encrypting and decrypting the database. Values are of the form &#x60;projects//locations//keyRings//cryptoKeys/&#x60;. | [optional] 

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


