# AsymmetricEncryptedSecret

Represent the secrets intended for encryption with asymmetric key pair.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_algorithm** | **str** | The algorithm used to encrypt \&quot;Value\&quot;. | 
**encryption_cert_thumbprint** | **str** | Thumbprint certificate that was used to encrypt \&quot;Value\&quot;. If the value in unencrypted, it will be null. | [optional] 
**value** | **str** | The value of the secret. | 

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


