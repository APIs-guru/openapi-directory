# GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig

Replaces an identifier with a surrogate using Format Preserving Encryption (FPE) with the FFX mode of operation; however when used in the `ReidentifyContent` API method, it serves the opposite function by reversing the surrogate back into the original identifier. The identifier must be encoded as ASCII. For a given crypto key and context, the same identifier will be replaced with the same surrogate. Identifiers must be at least two characters long. In the case that the identifier is the empty string, it will be skipped. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization to learn more. Note: We recommend using CryptoDeterministicConfig for all use cases which do not require preserving the input alphabet space and size, plus warrant referential integrity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_alphabet** | **str** | Common alphabets. | [optional] 
**context** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**crypto_key** | [**GooglePrivacyDlpV2CryptoKey**](GooglePrivacyDlpV2CryptoKey.md) |  | [optional] 
**custom_alphabet** | **str** | This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range [2, 95]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is: 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~&#x60;!@#$%^&amp;*()_-+&#x3D;{[}]|\\:;\&quot;&#39;&lt;,&gt;.?/ | [optional] 
**radix** | **int** | The native way to select the alphabet. Must be in the range [2, 95]. | [optional] 
**surrogate_info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_crypto_replace_ffx_fpe_config import GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig from a JSON string
google_privacy_dlp_v2_crypto_replace_ffx_fpe_config_instance = GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_crypto_replace_ffx_fpe_config_dict = google_privacy_dlp_v2_crypto_replace_ffx_fpe_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig from a dict
google_privacy_dlp_v2_crypto_replace_ffx_fpe_config_from_dict = GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.from_dict(google_privacy_dlp_v2_crypto_replace_ffx_fpe_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


