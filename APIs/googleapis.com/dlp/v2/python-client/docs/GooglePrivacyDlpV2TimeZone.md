# GooglePrivacyDlpV2TimeZone

Time zone of the date time object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offset_minutes** | **int** | Set only if the offset can be determined. Positive for time ahead of UTC. E.g. For \&quot;UTC-9\&quot;, this value is -540. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_time_zone import GooglePrivacyDlpV2TimeZone

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TimeZone from a JSON string
google_privacy_dlp_v2_time_zone_instance = GooglePrivacyDlpV2TimeZone.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TimeZone.to_json())

# convert the object into a dict
google_privacy_dlp_v2_time_zone_dict = google_privacy_dlp_v2_time_zone_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TimeZone from a dict
google_privacy_dlp_v2_time_zone_from_dict = GooglePrivacyDlpV2TimeZone.from_dict(google_privacy_dlp_v2_time_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


