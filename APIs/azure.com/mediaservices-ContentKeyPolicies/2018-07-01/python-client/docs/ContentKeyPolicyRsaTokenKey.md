# ContentKeyPolicyRsaTokenKey

Specifies a RSA key for token validation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exponent** | **bytearray** | The RSA Parameter exponent | 
**modulus** | **bytearray** | The RSA Parameter modulus | 

## Example

```python
from openapi_client.models.content_key_policy_rsa_token_key import ContentKeyPolicyRsaTokenKey

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyRsaTokenKey from a JSON string
content_key_policy_rsa_token_key_instance = ContentKeyPolicyRsaTokenKey.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyRsaTokenKey.to_json())

# convert the object into a dict
content_key_policy_rsa_token_key_dict = content_key_policy_rsa_token_key_instance.to_dict()
# create an instance of ContentKeyPolicyRsaTokenKey from a dict
content_key_policy_rsa_token_key_from_dict = ContentKeyPolicyRsaTokenKey.from_dict(content_key_policy_rsa_token_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


