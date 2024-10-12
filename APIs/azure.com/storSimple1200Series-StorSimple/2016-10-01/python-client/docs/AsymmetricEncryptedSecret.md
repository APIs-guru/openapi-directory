# AsymmetricEncryptedSecret

This class can be used as the Type for any secret entity represented as Password, CertThumbprint, Algorithm. This class is intended to be used when the secret is encrypted with an asymmetric key pair. The encryptionAlgorithm field is mainly for future usage to potentially allow different entities encrypted using different algorithms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | Algorithm used to encrypt \&quot;Value\&quot; | 
**encryption_certificate_thumbprint** | **str** | Thumbprint certificate that was used to encrypt \&quot;Value\&quot; | [optional] 
**value** | **str** | The value of the secret itself. If the secret is in plaintext then EncryptionAlgorithm will be none and EncryptionCertThumbprint will be null. | 

## Example

```python
from openapi_client.models.asymmetric_encrypted_secret import AsymmetricEncryptedSecret

# TODO update the JSON string below
json = "{}"
# create an instance of AsymmetricEncryptedSecret from a JSON string
asymmetric_encrypted_secret_instance = AsymmetricEncryptedSecret.from_json(json)
# print the JSON string representation of the object
print(AsymmetricEncryptedSecret.to_json())

# convert the object into a dict
asymmetric_encrypted_secret_dict = asymmetric_encrypted_secret_instance.to_dict()
# create an instance of AsymmetricEncryptedSecret from a dict
asymmetric_encrypted_secret_from_dict = AsymmetricEncryptedSecret.from_dict(asymmetric_encrypted_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


