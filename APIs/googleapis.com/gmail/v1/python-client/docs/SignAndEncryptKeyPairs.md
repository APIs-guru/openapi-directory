# SignAndEncryptKeyPairs

The configuration of a CSE identity that uses different key pairs for signing and encryption.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key_pair_id** | **str** | The ID of the CseKeyPair that encrypts signed outgoing mail. | [optional] 
**signing_key_pair_id** | **str** | The ID of the CseKeyPair that signs outgoing mail. | [optional] 

## Example

```python
from openapi_client.models.sign_and_encrypt_key_pairs import SignAndEncryptKeyPairs

# TODO update the JSON string below
json = "{}"
# create an instance of SignAndEncryptKeyPairs from a JSON string
sign_and_encrypt_key_pairs_instance = SignAndEncryptKeyPairs.from_json(json)
# print the JSON string representation of the object
print(SignAndEncryptKeyPairs.to_json())

# convert the object into a dict
sign_and_encrypt_key_pairs_dict = sign_and_encrypt_key_pairs_instance.to_dict()
# create an instance of SignAndEncryptKeyPairs from a dict
sign_and_encrypt_key_pairs_from_dict = SignAndEncryptKeyPairs.from_dict(sign_and_encrypt_key_pairs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


