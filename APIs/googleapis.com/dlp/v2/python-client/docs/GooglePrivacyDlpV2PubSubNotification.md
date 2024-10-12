# GooglePrivacyDlpV2PubSubNotification

Send a Pub/Sub message into the given Pub/Sub topic to connect other systems to data profile generation. The message payload data will be the byte serialization of `DataProfilePubSubMessage`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail_of_message** | **str** | How much data to include in the Pub/Sub message. If the user wishes to limit the size of the message, they can use resource_name and fetch the profile fields they wish to. Per table profile (not per column). | [optional] 
**event** | **str** | The type of event that triggers a Pub/Sub. At most one &#x60;PubSubNotification&#x60; per EventType is permitted. | [optional] 
**pubsub_condition** | [**GooglePrivacyDlpV2DataProfilePubSubCondition**](GooglePrivacyDlpV2DataProfilePubSubCondition.md) |  | [optional] 
**topic** | **str** | Cloud Pub/Sub topic to send notifications to. Format is projects/{project}/topics/{topic}. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_pub_sub_notification import GooglePrivacyDlpV2PubSubNotification

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PubSubNotification from a JSON string
google_privacy_dlp_v2_pub_sub_notification_instance = GooglePrivacyDlpV2PubSubNotification.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PubSubNotification.to_json())

# convert the object into a dict
google_privacy_dlp_v2_pub_sub_notification_dict = google_privacy_dlp_v2_pub_sub_notification_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PubSubNotification from a dict
google_privacy_dlp_v2_pub_sub_notification_from_dict = GooglePrivacyDlpV2PubSubNotification.from_dict(google_privacy_dlp_v2_pub_sub_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


