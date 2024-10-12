# GooglePrivacyDlpV2DataProfilePubSubMessage

Pub/Sub topic message for a DataProfileAction.PubSubNotification event. To receive a message of protocol buffer schema type, convert the message data to an object of this proto class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **str** | The event that caused the Pub/Sub message to be sent. | [optional] 
**profile** | [**GooglePrivacyDlpV2TableDataProfile**](GooglePrivacyDlpV2TableDataProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_profile_pub_sub_message import GooglePrivacyDlpV2DataProfilePubSubMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataProfilePubSubMessage from a JSON string
google_privacy_dlp_v2_data_profile_pub_sub_message_instance = GooglePrivacyDlpV2DataProfilePubSubMessage.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataProfilePubSubMessage.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_profile_pub_sub_message_dict = google_privacy_dlp_v2_data_profile_pub_sub_message_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataProfilePubSubMessage from a dict
google_privacy_dlp_v2_data_profile_pub_sub_message_from_dict = GooglePrivacyDlpV2DataProfilePubSubMessage.from_dict(google_privacy_dlp_v2_data_profile_pub_sub_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


