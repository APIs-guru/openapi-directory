# GooglePrivacyDlpV2KmsWrappedCryptoKey

Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/sensitive-data-protection/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crypto_key_name** | **str** | Required. The resource name of the KMS CryptoKey to use for unwrapping. | [optional] 
**wrapped_key** | **bytearray** | Required. The wrapped data crypto key. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_kms_wrapped_crypto_key import GooglePrivacyDlpV2KmsWrappedCryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KmsWrappedCryptoKey from a JSON string
google_privacy_dlp_v2_kms_wrapped_crypto_key_instance = GooglePrivacyDlpV2KmsWrappedCryptoKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KmsWrappedCryptoKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_kms_wrapped_crypto_key_dict = google_privacy_dlp_v2_kms_wrapped_crypto_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KmsWrappedCryptoKey from a dict
google_privacy_dlp_v2_kms_wrapped_crypto_key_from_dict = GooglePrivacyDlpV2KmsWrappedCryptoKey.from_dict(google_privacy_dlp_v2_kms_wrapped_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


