# GooglePrivacyDlpV2CryptoKey

This is a data encryption key (DEK) (as opposed to a key encryption key (KEK) stored by Cloud Key Management Service (Cloud KMS). When using Cloud KMS to wrap or unwrap a DEK, be sure to set an appropriate IAM policy on the KEK to ensure an attacker cannot unwrap the DEK.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kms_wrapped** | [**GooglePrivacyDlpV2KmsWrappedCryptoKey**](GooglePrivacyDlpV2KmsWrappedCryptoKey.md) |  | [optional] 
**transient** | [**GooglePrivacyDlpV2TransientCryptoKey**](GooglePrivacyDlpV2TransientCryptoKey.md) |  | [optional] 
**unwrapped** | [**GooglePrivacyDlpV2UnwrappedCryptoKey**](GooglePrivacyDlpV2UnwrappedCryptoKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_crypto_key import GooglePrivacyDlpV2CryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CryptoKey from a JSON string
google_privacy_dlp_v2_crypto_key_instance = GooglePrivacyDlpV2CryptoKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CryptoKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_crypto_key_dict = google_privacy_dlp_v2_crypto_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CryptoKey from a dict
google_privacy_dlp_v2_crypto_key_from_dict = GooglePrivacyDlpV2CryptoKey.from_dict(google_privacy_dlp_v2_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


