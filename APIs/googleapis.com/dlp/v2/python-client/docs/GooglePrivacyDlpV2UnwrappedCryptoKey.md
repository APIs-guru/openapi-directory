# GooglePrivacyDlpV2UnwrappedCryptoKey

Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **bytearray** | Required. A 128/192/256 bit key. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_unwrapped_crypto_key import GooglePrivacyDlpV2UnwrappedCryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UnwrappedCryptoKey from a JSON string
google_privacy_dlp_v2_unwrapped_crypto_key_instance = GooglePrivacyDlpV2UnwrappedCryptoKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UnwrappedCryptoKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_unwrapped_crypto_key_dict = google_privacy_dlp_v2_unwrapped_crypto_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UnwrappedCryptoKey from a dict
google_privacy_dlp_v2_unwrapped_crypto_key_from_dict = GooglePrivacyDlpV2UnwrappedCryptoKey.from_dict(google_privacy_dlp_v2_unwrapped_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


