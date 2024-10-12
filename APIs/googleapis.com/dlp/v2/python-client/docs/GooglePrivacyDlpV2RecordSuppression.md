# GooglePrivacyDlpV2RecordSuppression

Configuration to suppress records whose suppression conditions evaluate to true.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | [**GooglePrivacyDlpV2RecordCondition**](GooglePrivacyDlpV2RecordCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_record_suppression import GooglePrivacyDlpV2RecordSuppression

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RecordSuppression from a JSON string
google_privacy_dlp_v2_record_suppression_instance = GooglePrivacyDlpV2RecordSuppression.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RecordSuppression.to_json())

# convert the object into a dict
google_privacy_dlp_v2_record_suppression_dict = google_privacy_dlp_v2_record_suppression_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RecordSuppression from a dict
google_privacy_dlp_v2_record_suppression_from_dict = GooglePrivacyDlpV2RecordSuppression.from_dict(google_privacy_dlp_v2_record_suppression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


