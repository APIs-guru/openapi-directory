# KmsWrappedCryptoKey

Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key** | **str** | Required. The resource name of the KMS CryptoKey to use for unwrapping. For example, &#x60;projects/{project_id}/locations/{location_id}/keyRings/{keyring}/cryptoKeys/{key}&#x60;. | [optional] 
**wrapped_key** | **bytearray** | Required. The wrapped data crypto key. | [optional] 

## Example

```python
from openapi_client.models.kms_wrapped_crypto_key import KmsWrappedCryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of KmsWrappedCryptoKey from a JSON string
kms_wrapped_crypto_key_instance = KmsWrappedCryptoKey.from_json(json)
# print the JSON string representation of the object
print(KmsWrappedCryptoKey.to_json())

# convert the object into a dict
kms_wrapped_crypto_key_dict = kms_wrapped_crypto_key_instance.to_dict()
# create an instance of KmsWrappedCryptoKey from a dict
kms_wrapped_crypto_key_from_dict = KmsWrappedCryptoKey.from_dict(kms_wrapped_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


