# GoogleFirebaseFcmDataV1beta1MessageInsightPercents

Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority_lowered** | **float** | The percentage of accepted messages that had their priority lowered from high to normal. See [documentation for setting message priority](https://firebase.google.com/docs/cloud-messaging/android/message-priority). | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_message_insight_percents import GoogleFirebaseFcmDataV1beta1MessageInsightPercents

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1MessageInsightPercents from a JSON string
google_firebase_fcm_data_v1beta1_message_insight_percents_instance = GoogleFirebaseFcmDataV1beta1MessageInsightPercents.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1MessageInsightPercents.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_message_insight_percents_dict = google_firebase_fcm_data_v1beta1_message_insight_percents_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1MessageInsightPercents from a dict
google_firebase_fcm_data_v1beta1_message_insight_percents_from_dict = GoogleFirebaseFcmDataV1beta1MessageInsightPercents.from_dict(google_firebase_fcm_data_v1beta1_message_insight_percents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


