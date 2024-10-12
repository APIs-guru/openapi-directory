# GetNotificationChannelVerificationCodeRequest

The GetNotificationChannelVerificationCode request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expire_time** | **str** | The desired expiration time. If specified, the API will guarantee that the returned code will not be valid after the specified timestamp; however, the API cannot guarantee that the returned code will be valid for at least as long as the requested time (the API puts an upper bound on the amount of time for which a code may be valid). If omitted, a default expiration will be used, which may be less than the max permissible expiration (so specifying an expiration may extend the code&#39;s lifetime over omitting an expiration, even though the API does impose an upper limit on the maximum expiration that is permitted). | [optional] 

## Example

```python
from openapi_client.models.get_notification_channel_verification_code_request import GetNotificationChannelVerificationCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetNotificationChannelVerificationCodeRequest from a JSON string
get_notification_channel_verification_code_request_instance = GetNotificationChannelVerificationCodeRequest.from_json(json)
# print the JSON string representation of the object
print(GetNotificationChannelVerificationCodeRequest.to_json())

# convert the object into a dict
get_notification_channel_verification_code_request_dict = get_notification_channel_verification_code_request_instance.to_dict()
# create an instance of GetNotificationChannelVerificationCodeRequest from a dict
get_notification_channel_verification_code_request_from_dict = GetNotificationChannelVerificationCodeRequest.from_dict(get_notification_channel_verification_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


