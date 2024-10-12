# GooglePrivacyDlpV2TimePartConfig

For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a portion of the value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**part_to_extract** | **str** | The part of the time to keep. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_time_part_config import GooglePrivacyDlpV2TimePartConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TimePartConfig from a JSON string
google_privacy_dlp_v2_time_part_config_instance = GooglePrivacyDlpV2TimePartConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TimePartConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_time_part_config_dict = google_privacy_dlp_v2_time_part_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TimePartConfig from a dict
google_privacy_dlp_v2_time_part_config_from_dict = GooglePrivacyDlpV2TimePartConfig.from_dict(google_privacy_dlp_v2_time_part_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


