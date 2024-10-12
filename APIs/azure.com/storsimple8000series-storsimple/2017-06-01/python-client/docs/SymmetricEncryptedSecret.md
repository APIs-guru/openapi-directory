# SymmetricEncryptedSecret

Represents the secrets encrypted using Symmetric Encryption Key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | The algorithm used to encrypt the \&quot;Value\&quot;. | 
**value** | **str** | The value of the secret itself. If the secret is in plaintext or null then EncryptionAlgorithm will be none. | 
**value_certificate_thumbprint** | **str** | The thumbprint of the cert that was used to encrypt \&quot;Value\&quot;. | [optional] 

## Example

```python
from openapi_client.models.symmetric_encrypted_secret import SymmetricEncryptedSecret

# TODO update the JSON string below
json = "{}"
# create an instance of SymmetricEncryptedSecret from a JSON string
symmetric_encrypted_secret_instance = SymmetricEncryptedSecret.from_json(json)
# print the JSON string representation of the object
print(SymmetricEncryptedSecret.to_json())

# convert the object into a dict
symmetric_encrypted_secret_dict = symmetric_encrypted_secret_instance.to_dict()
# create an instance of SymmetricEncryptedSecret from a dict
symmetric_encrypted_secret_from_dict = SymmetricEncryptedSecret.from_dict(symmetric_encrypted_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


