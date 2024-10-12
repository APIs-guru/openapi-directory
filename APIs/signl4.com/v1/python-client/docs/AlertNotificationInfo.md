# AlertNotificationInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**channel_type** | [**AlertNotificationInfoChannelType**](AlertNotificationInfoChannelType.md) |  | [optional] 
**device_name** | **str** |  | [optional] 
**last_update** | **datetime** |  | [optional] 
**message_status** | [**AlertNotificationInfoMessageStatus**](AlertNotificationInfoMessageStatus.md) |  | [optional] 
**user_id** | **str** |  | [optional] 
**user_status** | [**AlertNotificationInfoUserStatus**](AlertNotificationInfoUserStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_notification_info import AlertNotificationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AlertNotificationInfo from a JSON string
alert_notification_info_instance = AlertNotificationInfo.from_json(json)
# print the JSON string representation of the object
print(AlertNotificationInfo.to_json())

# convert the object into a dict
alert_notification_info_dict = alert_notification_info_instance.to_dict()
# create an instance of AlertNotificationInfo from a dict
alert_notification_info_from_dict = AlertNotificationInfo.from_dict(alert_notification_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


