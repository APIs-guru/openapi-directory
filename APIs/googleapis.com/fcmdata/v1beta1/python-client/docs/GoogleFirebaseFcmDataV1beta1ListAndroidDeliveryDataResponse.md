# GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse

Response message for ListAndroidDeliveryData.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_delivery_data** | [**List[GoogleFirebaseFcmDataV1beta1AndroidDeliveryData]**](GoogleFirebaseFcmDataV1beta1AndroidDeliveryData.md) | The delivery data for the provided app. There will be one entry per combination of app, date, and analytics label. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_firebase_fcm_data_v1beta1_list_android_delivery_data_response import GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse from a JSON string
google_firebase_fcm_data_v1beta1_list_android_delivery_data_response_instance = GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse.to_json())

# convert the object into a dict
google_firebase_fcm_data_v1beta1_list_android_delivery_data_response_dict = google_firebase_fcm_data_v1beta1_list_android_delivery_data_response_instance.to_dict()
# create an instance of GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse from a dict
google_firebase_fcm_data_v1beta1_list_android_delivery_data_response_from_dict = GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse.from_dict(google_firebase_fcm_data_v1beta1_list_android_delivery_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


