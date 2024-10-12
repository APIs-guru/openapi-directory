# UsersettingsNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_my_interests** | [**UsersettingsNotificationMatchMyInterests**](UsersettingsNotificationMatchMyInterests.md) |  | [optional] 
**more_from_authors** | [**UsersettingsNotificationMatchMyInterests**](UsersettingsNotificationMatchMyInterests.md) |  | [optional] 
**more_from_series** | [**UsersettingsNotificationMatchMyInterests**](UsersettingsNotificationMatchMyInterests.md) |  | [optional] 
**price_drop** | [**UsersettingsNotificationMatchMyInterests**](UsersettingsNotificationMatchMyInterests.md) |  | [optional] 
**reward_expirations** | [**UsersettingsNotificationMatchMyInterests**](UsersettingsNotificationMatchMyInterests.md) |  | [optional] 

## Example

```python
from openapi_client.models.usersettings_notification import UsersettingsNotification

# TODO update the JSON string below
json = "{}"
# create an instance of UsersettingsNotification from a JSON string
usersettings_notification_instance = UsersettingsNotification.from_json(json)
# print the JSON string representation of the object
print(UsersettingsNotification.to_json())

# convert the object into a dict
usersettings_notification_dict = usersettings_notification_instance.to_dict()
# create an instance of UsersettingsNotification from a dict
usersettings_notification_from_dict = UsersettingsNotification.from_dict(usersettings_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


