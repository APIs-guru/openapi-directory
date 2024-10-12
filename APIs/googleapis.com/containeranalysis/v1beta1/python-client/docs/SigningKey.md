# SigningKey

This defines the format used to record keys used in the software supply chain. An in-toto link is attested using one or more keys defined in the in-toto layout. An example of this is: { \"key_id\": \"776a00e29f3559e0141b3b096f696abc6cfb0c657ab40f441132b345b0...\", \"key_type\": \"rsa\", \"public_key_value\": \"-----BEGIN PUBLIC KEY-----\\nMIIBojANBgkqhkiG9w0B...\", \"key_scheme\": \"rsassa-pss-sha256\" } The format for in-toto's key definition can be found in section 4.2 of the in-toto specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | key_id is an identifier for the signing key. | [optional] 
**key_scheme** | **str** | This field contains the corresponding signature scheme. Eg: \&quot;rsassa-pss-sha256\&quot;. | [optional] 
**key_type** | **str** | This field identifies the specific signing method. Eg: \&quot;rsa\&quot;, \&quot;ed25519\&quot;, and \&quot;ecdsa\&quot;. | [optional] 
**public_key_value** | **str** | This field contains the actual public key. | [optional] 

## Example

```python
from openapi_client.models.signing_key import SigningKey

# TODO update the JSON string below
json = "{}"
# create an instance of SigningKey from a JSON string
signing_key_instance = SigningKey.from_json(json)
# print the JSON string representation of the object
print(SigningKey.to_json())

# convert the object into a dict
signing_key_dict = signing_key_instance.to_dict()
# create an instance of SigningKey from a dict
signing_key_from_dict = SigningKey.from_dict(signing_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


