# GooglePrivacyDlpV2DateShiftConfig

Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/sensitive-data-protection/docs/concepts-date-shifting to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 
**crypto_key** | [**GooglePrivacyDlpV2CryptoKey**](GooglePrivacyDlpV2CryptoKey.md) |  | [optional] 
**lower_bound_days** | **int** | Required. For example, -5 means shift date to at most 5 days back in the past. | [optional] 
**upper_bound_days** | **int** | Required. Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction. For example, 3 means shift date to at most 3 days into the future. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_date_shift_config import GooglePrivacyDlpV2DateShiftConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DateShiftConfig from a JSON string
google_privacy_dlp_v2_date_shift_config_instance = GooglePrivacyDlpV2DateShiftConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DateShiftConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_date_shift_config_dict = google_privacy_dlp_v2_date_shift_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DateShiftConfig from a dict
google_privacy_dlp_v2_date_shift_config_from_dict = GooglePrivacyDlpV2DateShiftConfig.from_dict(google_privacy_dlp_v2_date_shift_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


