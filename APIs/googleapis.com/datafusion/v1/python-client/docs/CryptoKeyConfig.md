# CryptoKeyConfig

The crypto key configuration. This field is used by the Customer-managed encryption keys (CMEK) feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_reference** | **str** | The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of &#x60;projects/*/locations/*/keyRings/*/cryptoKeys/*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.crypto_key_config import CryptoKeyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CryptoKeyConfig from a JSON string
crypto_key_config_instance = CryptoKeyConfig.from_json(json)
# print the JSON string representation of the object
print(CryptoKeyConfig.to_json())

# convert the object into a dict
crypto_key_config_dict = crypto_key_config_instance.to_dict()
# create an instance of CryptoKeyConfig from a dict
crypto_key_config_from_dict = CryptoKeyConfig.from_dict(crypto_key_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


