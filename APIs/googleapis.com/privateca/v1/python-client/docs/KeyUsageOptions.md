# KeyUsageOptions

KeyUsage.KeyUsageOptions corresponds to the key usage values described in https://tools.ietf.org/html/rfc5280#section-4.2.1.3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cert_sign** | **bool** | The key may be used to sign certificates. | [optional] 
**content_commitment** | **bool** | The key may be used for cryptographic commitments. Note that this may also be referred to as \&quot;non-repudiation\&quot;. | [optional] 
**crl_sign** | **bool** | The key may be used sign certificate revocation lists. | [optional] 
**data_encipherment** | **bool** | The key may be used to encipher data. | [optional] 
**decipher_only** | **bool** | The key may be used to decipher only. | [optional] 
**digital_signature** | **bool** | The key may be used for digital signatures. | [optional] 
**encipher_only** | **bool** | The key may be used to encipher only. | [optional] 
**key_agreement** | **bool** | The key may be used in a key agreement protocol. | [optional] 
**key_encipherment** | **bool** | The key may be used to encipher other keys. | [optional] 

## Example

```python
from openapi_client.models.key_usage_options import KeyUsageOptions

# TODO update the JSON string below
json = "{}"
# create an instance of KeyUsageOptions from a JSON string
key_usage_options_instance = KeyUsageOptions.from_json(json)
# print the JSON string representation of the object
print(KeyUsageOptions.to_json())

# convert the object into a dict
key_usage_options_dict = key_usage_options_instance.to_dict()
# create an instance of KeyUsageOptions from a dict
key_usage_options_from_dict = KeyUsageOptions.from_dict(key_usage_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


