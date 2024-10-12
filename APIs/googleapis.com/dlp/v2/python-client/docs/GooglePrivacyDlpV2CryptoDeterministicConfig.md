# GooglePrivacyDlpV2CryptoDeterministicConfig

Pseudonymization method that generates deterministic encryption for the given input. Outputs a base64 encoded representation of the encrypted output. Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**crypto_key** | [**GooglePrivacyDlpV2CryptoKey**](GooglePrivacyDlpV2CryptoKey.md) |  | [optional] 
**surrogate_info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_crypto_deterministic_config import GooglePrivacyDlpV2CryptoDeterministicConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CryptoDeterministicConfig from a JSON string
google_privacy_dlp_v2_crypto_deterministic_config_instance = GooglePrivacyDlpV2CryptoDeterministicConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CryptoDeterministicConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_crypto_deterministic_config_dict = google_privacy_dlp_v2_crypto_deterministic_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CryptoDeterministicConfig from a dict
google_privacy_dlp_v2_crypto_deterministic_config_from_dict = GooglePrivacyDlpV2CryptoDeterministicConfig.from_dict(google_privacy_dlp_v2_crypto_deterministic_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


