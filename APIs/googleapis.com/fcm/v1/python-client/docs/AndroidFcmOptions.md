# AndroidFcmOptions

Options for features provided by the FCM SDK for Android.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_label** | **str** | Label associated with the message&#39;s analytics data. | [optional] 

## Example

```python
from openapi_client.models.android_fcm_options import AndroidFcmOptions

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidFcmOptions from a JSON string
android_fcm_options_instance = AndroidFcmOptions.from_json(json)
# print the JSON string representation of the object
print(AndroidFcmOptions.to_json())

# convert the object into a dict
android_fcm_options_dict = android_fcm_options_instance.to_dict()
# create an instance of AndroidFcmOptions from a dict
android_fcm_options_from_dict = AndroidFcmOptions.from_dict(android_fcm_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


