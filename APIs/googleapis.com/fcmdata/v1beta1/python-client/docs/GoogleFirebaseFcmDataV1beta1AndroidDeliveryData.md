# GoogleFirebaseFcmDataV1beta1AndroidDeliveryData

Message delivery data for a given date, app, and analytics label combination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_label** | **str** | The analytics label associated with the messages sent. All messages sent without an analytics label will be grouped together in a single entry. | [optional] 
**app_id** | **str** | The app ID to which the messages were sent. | [optional] 
**data** | [**GoogleFirebaseFcmDataV1beta1Data**](GoogleFirebaseFcmDataV1beta1Data.md) |  | [optional] 
**var_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_android_delivery_data import GoogleFirebaseFcmDataV1beta1AndroidDeliveryData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1AndroidDeliveryData from a JSON string
google_firebase_fcm_data_v1beta1_android_delivery_data_instance = GoogleFirebaseFcmDataV1beta1AndroidDeliveryData.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1AndroidDeliveryData.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_android_delivery_data_dict = google_firebase_fcm_data_v1beta1_android_delivery_data_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1AndroidDeliveryData from a dict
google_firebase_fcm_data_v1beta1_android_delivery_data_from_dict = GoogleFirebaseFcmDataV1beta1AndroidDeliveryData.from_dict(google_firebase_fcm_data_v1beta1_android_delivery_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


