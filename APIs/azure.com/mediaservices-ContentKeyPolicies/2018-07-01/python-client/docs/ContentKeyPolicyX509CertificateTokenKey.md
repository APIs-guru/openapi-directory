# ContentKeyPolicyX509CertificateTokenKey

Specifies a certificate for token validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_body** | **bytearray** | The raw data field of a certificate in PKCS 12 format (X509Certificate2 in .NET) | 

## Example

```python
from openapi_client.models.content_key_policy_x509_certificate_token_key import ContentKeyPolicyX509CertificateTokenKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyX509CertificateTokenKey from a JSON string
content_key_policy_x509_certificate_token_key_instance = ContentKeyPolicyX509CertificateTokenKey.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyX509CertificateTokenKey.to_json())

# convert the object into a dict
content_key_policy_x509_certificate_token_key_dict = content_key_policy_x509_certificate_token_key_instance.to_dict()
# create an instance of ContentKeyPolicyX509CertificateTokenKey from a dict
content_key_policy_x509_certificate_token_key_from_dict = ContentKeyPolicyX509CertificateTokenKey.from_dict(content_key_policy_x509_certificate_token_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


