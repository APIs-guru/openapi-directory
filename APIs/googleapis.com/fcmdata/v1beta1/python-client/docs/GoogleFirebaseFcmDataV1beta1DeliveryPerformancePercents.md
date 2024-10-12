# GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents

Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delayed_device_doze** | **float** | The percentage of accepted messages that were delayed because the device was in doze mode. Only [normal priority messages](https://firebase.google.com/docs/cloud-messaging/concept-options#setting-the-priority-of-a-message) should be delayed due to doze mode. | [optional] 
**delayed_device_offline** | **float** | The percentage of accepted messages that were delayed because the target device was not connected at the time of sending. These messages were eventually delivered when the device reconnected. | [optional] 
**delayed_message_throttled** | **float** | The percentage of accepted messages that were delayed due to message throttling, such as [collapsible message throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#collapsible_throttling) or [maximum message rate throttling](https://firebase.google.com/docs/cloud-messaging/concept-options#device_throttling). | [optional] 
**delayed_user_stopped** | **float** | The percentage of accepted messages that were delayed because the intended device user-profile was [stopped](https://firebase.google.com/docs/cloud-messaging/android/receive#handling_messages) on the target device at the time of the send. The messages were eventually delivered when the user-profile was started again. | [optional] 
**delivered_no_delay** | **float** | The percentage of accepted messages that were delivered to the device without delay from the FCM system. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_delivery_performance_percents import GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents from a JSON string
google_firebase_fcm_data_v1beta1_delivery_performance_percents_instance = GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_delivery_performance_percents_dict = google_firebase_fcm_data_v1beta1_delivery_performance_percents_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents from a dict
google_firebase_fcm_data_v1beta1_delivery_performance_percents_from_dict = GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents.from_dict(google_firebase_fcm_data_v1beta1_delivery_performance_percents_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


