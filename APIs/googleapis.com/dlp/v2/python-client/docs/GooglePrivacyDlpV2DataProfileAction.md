# GooglePrivacyDlpV2DataProfileAction

A task to execute when a data profile has been generated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_data** | [**GooglePrivacyDlpV2Export**](GooglePrivacyDlpV2Export.md) |  | [optional] 
**pub_sub_notification** | [**GooglePrivacyDlpV2PubSubNotification**](GooglePrivacyDlpV2PubSubNotification.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_profile_action import GooglePrivacyDlpV2DataProfileAction

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataProfileAction from a JSON string
google_privacy_dlp_v2_data_profile_action_instance = GooglePrivacyDlpV2DataProfileAction.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataProfileAction.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_profile_action_dict = google_privacy_dlp_v2_data_profile_action_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataProfileAction from a dict
google_privacy_dlp_v2_data_profile_action_from_dict = GooglePrivacyDlpV2DataProfileAction.from_dict(google_privacy_dlp_v2_data_profile_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


