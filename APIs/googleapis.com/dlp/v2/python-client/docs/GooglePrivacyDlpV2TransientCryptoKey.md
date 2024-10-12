# GooglePrivacyDlpV2TransientCryptoKey

Use this to have a random data crypto key generated. It will be discarded after the request finishes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate &#x60;TransientCryptoKey&#x60; protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated). | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transient_crypto_key import GooglePrivacyDlpV2TransientCryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransientCryptoKey from a JSON string
google_privacy_dlp_v2_transient_crypto_key_instance = GooglePrivacyDlpV2TransientCryptoKey.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransientCryptoKey.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transient_crypto_key_dict = google_privacy_dlp_v2_transient_crypto_key_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransientCryptoKey from a dict
google_privacy_dlp_v2_transient_crypto_key_from_dict = GooglePrivacyDlpV2TransientCryptoKey.from_dict(google_privacy_dlp_v2_transient_crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


