# GooglePrivacyDlpV2ValueFrequency

A value of a field, including its frequency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | How many times the value is contained in the field. | [optional] 
**value** | [**GooglePrivacyDlpV2Value**](GooglePrivacyDlpV2Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_value_frequency import GooglePrivacyDlpV2ValueFrequency

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ValueFrequency from a JSON string
google_privacy_dlp_v2_value_frequency_instance = GooglePrivacyDlpV2ValueFrequency.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ValueFrequency.to_json())

# convert the object into a dict
google_privacy_dlp_v2_value_frequency_dict = google_privacy_dlp_v2_value_frequency_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ValueFrequency from a dict
google_privacy_dlp_v2_value_frequency_from_dict = GooglePrivacyDlpV2ValueFrequency.from_dict(google_privacy_dlp_v2_value_frequency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


