# GooglePrivacyDlpV2CryptoHashConfig

Pseudonymization method that generates surrogates via cryptographic hashing. Uses SHA-256. The key size must be either 32 or 64 bytes. Outputs a base64 encoded representation of the hashed output (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=). Currently, only string and integer values can be hashed. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key** | [**GooglePrivacyDlpV2CryptoKey**](GooglePrivacyDlpV2CryptoKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_crypto_hash_config import GooglePrivacyDlpV2CryptoHashConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CryptoHashConfig from a JSON string
google_privacy_dlp_v2_crypto_hash_config_instance = GooglePrivacyDlpV2CryptoHashConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CryptoHashConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_crypto_hash_config_dict = google_privacy_dlp_v2_crypto_hash_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CryptoHashConfig from a dict
google_privacy_dlp_v2_crypto_hash_config_from_dict = GooglePrivacyDlpV2CryptoHashConfig.from_dict(google_privacy_dlp_v2_crypto_hash_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


