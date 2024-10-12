# GoogleFirebaseFcmDataV1beta1MessageOutcomePercents

Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delivered** | **float** | The percentage of all accepted messages that were successfully delivered to the device. | [optional] 
**dropped_app_force_stopped** | **float** | The percentage of accepted messages that were dropped because the application was force stopped on the device at the time of delivery and retries were unsuccessful. | [optional] 
**dropped_device_inactive** | **float** | The percentage of accepted messages that were dropped because the target device is inactive. FCM will drop messages if the target device is deemed inactive by our servers. If a device does reconnect, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. | [optional] 
**dropped_too_many_pending_messages** | **float** | The percentage of accepted messages that were dropped due to [too many undelivered non-collapsible messages](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_and_non-collapsible_messages). Specifically, each app instance can only have 100 pending messages stored on our servers for a device which is disconnected. When that device reconnects, those messages are delivered. When there are more than the maximum pending messages, we call [OnDeletedMessages()](https://firebase.google.com/docs/cloud-messaging/android/receive#override-ondeletedmessages) in our SDK instead of delivering the messages. | [optional] 
**pending** | **float** | The percentage of messages accepted on this day that were not dropped and not delivered, due to the device being disconnected (as of the end of the America/Los_Angeles day when the message was sent to FCM). A portion of these messages will be delivered the next day when the device connects but others may be destined to devices that ultimately never reconnect. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_message_outcome_percents import GoogleFirebaseFcmDataV1beta1MessageOutcomePercents

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1MessageOutcomePercents from a JSON string
google_firebase_fcm_data_v1beta1_message_outcome_percents_instance = GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_message_outcome_percents_dict = google_firebase_fcm_data_v1beta1_message_outcome_percents_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1MessageOutcomePercents from a dict
google_firebase_fcm_data_v1beta1_message_outcome_percents_from_dict = GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.from_dict(google_firebase_fcm_data_v1beta1_message_outcome_percents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


