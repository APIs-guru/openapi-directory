# OwnUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banned** | **bool** |  | 
**channel_mutes** | [**List[ChannelMute]**](ChannelMute.md) |  | 
**created_at** | **datetime** |  | 
**deactivated_at** | **datetime** |  | [optional] 
**deleted_at** | **datetime** |  | [optional] 
**devices** | [**List[Device]**](Device.md) |  | 
**id** | **str** |  | 
**invisible** | **bool** |  | [optional] 
**language** | **str** |  | 
**last_active** | **datetime** |  | [optional] 
**latest_hidden_channels** | **List[str]** |  | [optional] 
**mutes** | [**List[UserMute]**](UserMute.md) |  | 
**online** | **bool** |  | 
**push_notifications** | [**PushNotificationSettings**](PushNotificationSettings.md) |  | [optional] 
**role** | **str** |  | 
**teams** | **List[str]** |  | [optional] 
**total_unread_count** | **int** |  | 
**unread_channels** | **int** |  | 
**unread_count** | **int** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.own_user import OwnUser

# TODO update the JSON string below
json = "{}"
# create an instance of OwnUser from a JSON string
own_user_instance = OwnUser.from_json(json)
# print the JSON string representation of the object
print(OwnUser.to_json())

# convert the object into a dict
own_user_dict = own_user_instance.to_dict()
# create an instance of OwnUser from a dict
own_user_from_dict = OwnUser.from_dict(own_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


