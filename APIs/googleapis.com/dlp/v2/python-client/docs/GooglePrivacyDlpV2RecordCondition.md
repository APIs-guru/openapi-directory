# GooglePrivacyDlpV2RecordCondition

A condition for determining whether a transformation should be applied to a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expressions** | [**GooglePrivacyDlpV2Expressions**](GooglePrivacyDlpV2Expressions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_condition import GooglePrivacyDlpV2RecordCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordCondition from a JSON string
google_privacy_dlp_v2_record_condition_instance = GooglePrivacyDlpV2RecordCondition.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordCondition.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_condition_dict = google_privacy_dlp_v2_record_condition_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordCondition from a dict
google_privacy_dlp_v2_record_condition_from_dict = GooglePrivacyDlpV2RecordCondition.from_dict(google_privacy_dlp_v2_record_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


