# GooglePrivacyDlpV2Schedule

Schedule for inspect job triggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recurrence_period_duration** | **str** | With this option a job is started on a regular periodic basis. For example: every day (86400 seconds). A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs. This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_schedule import GooglePrivacyDlpV2Schedule

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Schedule from a JSON string
google_privacy_dlp_v2_schedule_instance = GooglePrivacyDlpV2Schedule.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Schedule.to_json())

# convert the object into a dict
google_privacy_dlp_v2_schedule_dict = google_privacy_dlp_v2_schedule_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Schedule from a dict
google_privacy_dlp_v2_schedule_from_dict = GooglePrivacyDlpV2Schedule.from_dict(google_privacy_dlp_v2_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


