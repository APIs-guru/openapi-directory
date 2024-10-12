# GetNotificationChannelVerificationCodeResponse

The GetNotificationChannelVerificationCode request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The verification code, which may be used to verify other channels that have an equivalent identity (i.e. other channels of the same type with the same fingerprint such as other email channels with the same email address or other sms channels with the same number). | [optional] 
**expire_time** | **str** | The expiration time associated with the code that was returned. If an expiration was provided in the request, this is the minimum of the requested expiration in the request and the max permitted expiration. | [optional] 

## Example

```python
from openapi_client.models.get_notification_channel_verification_code_response import GetNotificationChannelVerificationCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetNotificationChannelVerificationCodeResponse from a JSON string
get_notification_channel_verification_code_response_instance = GetNotificationChannelVerificationCodeResponse.from_json(json)
# print the JSON string representation of the object
print(GetNotificationChannelVerificationCodeResponse.to_json())

# convert the object into a dict
get_notification_channel_verification_code_response_dict = get_notification_channel_verification_code_response_instance.to_dict()
# create an instance of GetNotificationChannelVerificationCodeResponse from a dict
get_notification_channel_verification_code_response_from_dict = GetNotificationChannelVerificationCodeResponse.from_dict(get_notification_channel_verification_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


