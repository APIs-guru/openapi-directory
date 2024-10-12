# GoogleFirebaseFcmDataV1beta1Data

Data detailing messaging delivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count_messages_accepted** | **str** | Count of messages accepted by FCM intended to Android devices. The targeted device must have opted in to the collection of usage and diagnostic information. | [optional] 
**delivery_performance_percents** | [**GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents**](GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents.md) |  | [optional] 
**message_insight_percents** | [**GoogleFirebaseFcmDataV1beta1MessageInsightPercents**](GoogleFirebaseFcmDataV1beta1MessageInsightPercents.md) |  | [optional] 
**message_outcome_percents** | [**GoogleFirebaseFcmDataV1beta1MessageOutcomePercents**](GoogleFirebaseFcmDataV1beta1MessageOutcomePercents.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_data import GoogleFirebaseFcmDataV1beta1Data

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1Data from a JSON string
google_firebase_fcm_data_v1beta1_data_instance = GoogleFirebaseFcmDataV1beta1Data.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1Data.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_data_dict = google_firebase_fcm_data_v1beta1_data_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1Data from a dict
google_firebase_fcm_data_v1beta1_data_from_dict = GoogleFirebaseFcmDataV1beta1Data.from_dict(google_firebase_fcm_data_v1beta1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


