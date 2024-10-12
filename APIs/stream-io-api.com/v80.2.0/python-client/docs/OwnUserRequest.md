# OwnUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned** | **bool** |  | [optional] 
**channel_mutes** | [**List[ChannelMuteRequest]**](ChannelMuteRequest.md) |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**deactivated_at** | **datetime** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**devices** | [**List[DeviceRequest]**](DeviceRequest.md) |  | [optional] 
**id** | **str** |  | [optional] 
**invisible** | **bool** |  | [optional] 
**language** | **str** |  | [optional] 
**last_active** | **datetime** |  | [optional] 
**latest_hidden_channels** | **List[str]** |  | [optional] 
**mutes** | [**List[UserMuteRequest]**](UserMuteRequest.md) |  | [optional] 
**online** | **bool** |  | [optional] 
**push_notifications** | [**PushNotificationSettingsRequest**](PushNotificationSettingsRequest.md) |  | [optional] 
**role** | **str** |  | [optional] 
**teams** | **List[str]** |  | [optional] 
**total_unread_count** | **int** |  | [optional] 
**unread_channels** | **int** |  | [optional] 
**unread_count** | **int** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.own_user_request import OwnUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OwnUserRequest from a JSON string
own_user_request_instance = OwnUserRequest.from_json(json)
# print the JSON string representation of the object
print(OwnUserRequest.to_json())

# convert the object into a dict
own_user_request_dict = own_user_request_instance.to_dict()
# create an instance of OwnUserRequest from a dict
own_user_request_from_dict = OwnUserRequest.from_dict(own_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


