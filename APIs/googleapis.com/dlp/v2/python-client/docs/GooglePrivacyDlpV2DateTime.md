# GooglePrivacyDlpV2DateTime

Message for a date time object. e.g. 2018-01-01, 5th August.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**day_of_week** | **str** | Day of week | [optional] 
**time** | [**GoogleTypeTimeOfDay**](GoogleTypeTimeOfDay.md) |  | [optional] 
**time_zone** | [**GooglePrivacyDlpV2TimeZone**](GooglePrivacyDlpV2TimeZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_date_time import GooglePrivacyDlpV2DateTime

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DateTime from a JSON string
google_privacy_dlp_v2_date_time_instance = GooglePrivacyDlpV2DateTime.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DateTime.to_json())

# convert the object into a dict
google_privacy_dlp_v2_date_time_dict = google_privacy_dlp_v2_date_time_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DateTime from a dict
google_privacy_dlp_v2_date_time_from_dict = GooglePrivacyDlpV2DateTime.from_dict(google_privacy_dlp_v2_date_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


