# GooglePrivacyDlpV2RequestedOptions

Snapshot of the inspection configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_config** | [**GooglePrivacyDlpV2InspectJobConfig**](GooglePrivacyDlpV2InspectJobConfig.md) |  | [optional] 
**snapshot_inspect_template** | [**GooglePrivacyDlpV2InspectTemplate**](GooglePrivacyDlpV2InspectTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_requested_options import GooglePrivacyDlpV2RequestedOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RequestedOptions from a JSON string
google_privacy_dlp_v2_requested_options_instance = GooglePrivacyDlpV2RequestedOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RequestedOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_requested_options_dict = google_privacy_dlp_v2_requested_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RequestedOptions from a dict
google_privacy_dlp_v2_requested_options_from_dict = GooglePrivacyDlpV2RequestedOptions.from_dict(google_privacy_dlp_v2_requested_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


