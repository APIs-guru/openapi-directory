# VerifyNotificationChannelRequest

The VerifyNotificationChannel request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Required. The verification code that was delivered to the channel as a result of invoking the SendNotificationChannelVerificationCode API method or that was retrieved from a verified channel via GetNotificationChannelVerificationCode. For example, one might have \&quot;G-123456\&quot; or \&quot;TKNZGhhd2EyN3I1MnRnMjRv\&quot; (in general, one is only guaranteed that the code is valid UTF-8; one should not make any assumptions regarding the structure or format of the code). | [optional] 

## Example

```python
from openapi_client.models.verify_notification_channel_request import VerifyNotificationChannelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyNotificationChannelRequest from a JSON string
verify_notification_channel_request_instance = VerifyNotificationChannelRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyNotificationChannelRequest.to_json())

# convert the object into a dict
verify_notification_channel_request_dict = verify_notification_channel_request_instance.to_dict()
# create an instance of VerifyNotificationChannelRequest from a dict
verify_notification_channel_request_from_dict = VerifyNotificationChannelRequest.from_dict(verify_notification_channel_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


