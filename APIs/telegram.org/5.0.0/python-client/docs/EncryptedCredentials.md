# EncryptedCredentials

Contains data required for decrypting and authenticating [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement). See the [Telegram Passport Documentation](https://core.telegram.org/passport#receiving-information) for a complete description of the data decryption and authentication processes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | Base64-encoded encrypted JSON-serialized data with unique user&#39;s payload, data hashes and secrets required for [EncryptedPassportElement](https://core.telegram.org/bots/api/#encryptedpassportelement) decryption and authentication | 
**hash** | **str** | Base64-encoded data hash for data authentication | 
**secret** | **str** | Base64-encoded secret, encrypted with the bot&#39;s public RSA key, required for data decryption | 

## Example

```python
from openapi_client.models.encrypted_credentials import EncryptedCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptedCredentials from a JSON string
encrypted_credentials_instance = EncryptedCredentials.from_json(json)
# print the JSON string representation of the object
print(EncryptedCredentials.to_json())

# convert the object into a dict
encrypted_credentials_dict = encrypted_credentials_instance.to_dict()
# create an instance of EncryptedCredentials from a dict
encrypted_credentials_from_dict = EncryptedCredentials.from_dict(encrypted_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


