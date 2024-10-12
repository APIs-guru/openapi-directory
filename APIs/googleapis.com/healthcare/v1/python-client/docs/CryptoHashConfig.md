# CryptoHashConfig

Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. Outputs a base64-encoded representation of the hashed output (for example, `L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=`).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key** | **bytearray** | An AES 128/192/256 bit key. Causes the hash to be computed based on this key. A default key is generated for each Deidentify operation and is used when neither &#x60;crypto_key&#x60; nor &#x60;kms_wrapped&#x60; is specified. Must not be set if &#x60;kms_wrapped&#x60; is set. | [optional] 
**kms_wrapped** | [**KmsWrappedCryptoKey**](KmsWrappedCryptoKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.crypto_hash_config import CryptoHashConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CryptoHashConfig from a JSON string
crypto_hash_config_instance = CryptoHashConfig.from_json(json)
# print the JSON string representation of the object
print(CryptoHashConfig.to_json())

# convert the object into a dict
crypto_hash_config_dict = crypto_hash_config_instance.to_dict()
# create an instance of CryptoHashConfig from a dict
crypto_hash_config_from_dict = CryptoHashConfig.from_dict(crypto_hash_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


