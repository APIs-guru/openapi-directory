# GooglePrivacyDlpV2PrimitiveTransformation

A rule for transforming a value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucketing_config** | [**GooglePrivacyDlpV2BucketingConfig**](GooglePrivacyDlpV2BucketingConfig.md) |  | [optional] 
**character_mask_config** | [**GooglePrivacyDlpV2CharacterMaskConfig**](GooglePrivacyDlpV2CharacterMaskConfig.md) |  | [optional] 
**crypto_deterministic_config** | [**GooglePrivacyDlpV2CryptoDeterministicConfig**](GooglePrivacyDlpV2CryptoDeterministicConfig.md) |  | [optional] 
**crypto_hash_config** | [**GooglePrivacyDlpV2CryptoHashConfig**](GooglePrivacyDlpV2CryptoHashConfig.md) |  | [optional] 
**crypto_replace_ffx_fpe_config** | [**GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig**](GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig.md) |  | [optional] 
**date_shift_config** | [**GooglePrivacyDlpV2DateShiftConfig**](GooglePrivacyDlpV2DateShiftConfig.md) |  | [optional] 
**fixed_size_bucketing_config** | [**GooglePrivacyDlpV2FixedSizeBucketingConfig**](GooglePrivacyDlpV2FixedSizeBucketingConfig.md) |  | [optional] 
**redact_config** | **object** | Redact a given value. For example, if used with an &#x60;InfoTypeTransformation&#x60; transforming PHONE_NUMBER, and input &#39;My phone number is 206-555-0123&#39;, the output would be &#39;My phone number is &#39;. | [optional] 
**replace_config** | [**GooglePrivacyDlpV2ReplaceValueConfig**](GooglePrivacyDlpV2ReplaceValueConfig.md) |  | [optional] 
**replace_dictionary_config** | [**GooglePrivacyDlpV2ReplaceDictionaryConfig**](GooglePrivacyDlpV2ReplaceDictionaryConfig.md) |  | [optional] 
**replace_with_info_type_config** | **object** | Replace each matching finding with the name of the info_type. | [optional] 
**time_part_config** | [**GooglePrivacyDlpV2TimePartConfig**](GooglePrivacyDlpV2TimePartConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_primitive_transformation import GooglePrivacyDlpV2PrimitiveTransformation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PrimitiveTransformation from a JSON string
google_privacy_dlp_v2_primitive_transformation_instance = GooglePrivacyDlpV2PrimitiveTransformation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PrimitiveTransformation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_primitive_transformation_dict = google_privacy_dlp_v2_primitive_transformation_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PrimitiveTransformation from a dict
google_privacy_dlp_v2_primitive_transformation_from_dict = GooglePrivacyDlpV2PrimitiveTransformation.from_dict(google_privacy_dlp_v2_primitive_transformation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


