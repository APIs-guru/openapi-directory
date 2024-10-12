# CryptoKeyVersionTemplate

A CryptoKeyVersionTemplate specifies the properties to use when creating a new CryptoKeyVersion, either manually with CreateCryptoKeyVersion or automatically as a result of auto-rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Required. Algorithm to use when creating a CryptoKeyVersion based on this template. For backwards compatibility, GOOGLE_SYMMETRIC_ENCRYPTION is implied if both this field is omitted and CryptoKey.purpose is ENCRYPT_DECRYPT. | [optional] 
**protection_level** | **str** | ProtectionLevel to use when creating a CryptoKeyVersion based on this template. Immutable. Defaults to SOFTWARE. | [optional] 

## Example

```python
from openapi_client.models.crypto_key_version_template import CryptoKeyVersionTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of CryptoKeyVersionTemplate from a JSON string
crypto_key_version_template_instance = CryptoKeyVersionTemplate.from_json(json)
# print the JSON string representation of the object
print(CryptoKeyVersionTemplate.to_json())

# convert the object into a dict
crypto_key_version_template_dict = crypto_key_version_template_instance.to_dict()
# create an instance of CryptoKeyVersionTemplate from a dict
crypto_key_version_template_from_dict = CryptoKeyVersionTemplate.from_dict(crypto_key_version_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


