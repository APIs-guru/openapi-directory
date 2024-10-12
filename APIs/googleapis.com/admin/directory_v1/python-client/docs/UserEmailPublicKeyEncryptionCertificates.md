# UserEmailPublicKeyEncryptionCertificates

Public Key Encryption Certificates. Current limit: 1 per email address, and 5 per user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | X.509 encryption certificate in &#x60;PEM&#x60; format. Must only be an end-entity (leaf) certificate. | [optional] 
**is_default** | **bool** | Whether this is the default certificate for the given email address. | [optional] 
**state** | **str** | Denotes the certificate&#39;s state in its lifecycle. Possible values are &#x60;not_yet_validated&#x60;, &#x60;valid&#x60;, &#x60;invalid&#x60;, &#x60;expired&#x60;, and &#x60;revoked&#x60;. | [optional] 

## Example

```python
from openapi_client.models.user_email_public_key_encryption_certificates import UserEmailPublicKeyEncryptionCertificates

# TODO update the JSON string below
json = "{}"
# create an instance of UserEmailPublicKeyEncryptionCertificates from a JSON string
user_email_public_key_encryption_certificates_instance = UserEmailPublicKeyEncryptionCertificates.from_json(json)
# print the JSON string representation of the object
print(UserEmailPublicKeyEncryptionCertificates.to_json())

# convert the object into a dict
user_email_public_key_encryption_certificates_dict = user_email_public_key_encryption_certificates_instance.to_dict()
# create an instance of UserEmailPublicKeyEncryptionCertificates from a dict
user_email_public_key_encryption_certificates_from_dict = UserEmailPublicKeyEncryptionCertificates.from_dict(user_email_public_key_encryption_certificates_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


