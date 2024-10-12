# GooglePrivacyDlpV2CharacterMaskConfig

Partially mask a string by replacing a given number of characters with a fixed character. Masking can start from the beginning or end of the string. This can be used on data of any type (numbers, longs, and so on) and when de-identifying structured data we'll attempt to preserve the original data's type. (This allows you to take a long like 123 and modify it to a string like **3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**characters_to_ignore** | [**List[GooglePrivacyDlpV2CharsToIgnore]**](GooglePrivacyDlpV2CharsToIgnore.md) | When masking a string, items in this list will be skipped when replacing characters. For example, if the input string is &#x60;555-555-5555&#x60; and you instruct Cloud DLP to skip &#x60;-&#x60; and mask 5 characters with &#x60;*&#x60;, Cloud DLP returns &#x60;***-**5-5555&#x60;. | [optional] 
**masking_character** | **str** | Character to use to mask the sensitive values—for example, &#x60;*&#x60; for an alphabetic string such as a name, or &#x60;0&#x60; for a numeric string such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to &#x60;*&#x60; for strings, and &#x60;0&#x60; for digits. | [optional] 
**number_to_mask** | **int** | Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally. If &#x60;number_to_mask&#x60; is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values: - &#x60;masking_character&#x60; is &#x60;*&#x60; - &#x60;number_to_mask&#x60; is &#x60;-4&#x60; - &#x60;reverse_order&#x60; is &#x60;false&#x60; - &#x60;CharsToIgnore&#x60; includes &#x60;-&#x60; - Input string is &#x60;1234-5678-9012-3456&#x60; The resulting de-identified string is &#x60;****-****-****-3456&#x60;. Cloud DLP masks all but the last four characters. If &#x60;reverse_order&#x60; is &#x60;true&#x60;, all but the first four characters are masked as &#x60;1234-****-****-****&#x60;. | [optional] 
**reverse_order** | **bool** | Mask characters in reverse order. For example, if &#x60;masking_character&#x60; is &#x60;0&#x60;, &#x60;number_to_mask&#x60; is &#x60;14&#x60;, and &#x60;reverse_order&#x60; is &#x60;false&#x60;, then the input string &#x60;1234-5678-9012-3456&#x60; is masked as &#x60;00000000000000-3456&#x60;. If &#x60;masking_character&#x60; is &#x60;*&#x60;, &#x60;number_to_mask&#x60; is &#x60;3&#x60;, and &#x60;reverse_order&#x60; is &#x60;true&#x60;, then the string &#x60;12345&#x60; is masked as &#x60;12***&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_character_mask_config import GooglePrivacyDlpV2CharacterMaskConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CharacterMaskConfig from a JSON string
google_privacy_dlp_v2_character_mask_config_instance = GooglePrivacyDlpV2CharacterMaskConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CharacterMaskConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_character_mask_config_dict = google_privacy_dlp_v2_character_mask_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CharacterMaskConfig from a dict
google_privacy_dlp_v2_character_mask_config_from_dict = GooglePrivacyDlpV2CharacterMaskConfig.from_dict(google_privacy_dlp_v2_character_mask_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


