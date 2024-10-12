# ApnsFcmOptions

Options for features provided by the FCM SDK for iOS.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_label** | **str** | Label associated with the message&#39;s analytics data. | [optional] 
**image** | **str** | Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image. | [optional] 

## Example

```python
from openapi_client.models.apns_fcm_options import ApnsFcmOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ApnsFcmOptions from a JSON string
apns_fcm_options_instance = ApnsFcmOptions.from_json(json)
# print the JSON string representation of the object
print(ApnsFcmOptions.to_json())

# convert the object into a dict
apns_fcm_options_dict = apns_fcm_options_instance.to_dict()
# create an instance of ApnsFcmOptions from a dict
apns_fcm_options_from_dict = ApnsFcmOptions.from_dict(apns_fcm_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


