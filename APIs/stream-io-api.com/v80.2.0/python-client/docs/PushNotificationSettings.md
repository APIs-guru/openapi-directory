# PushNotificationSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**disabled_until** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.push_notification_settings import PushNotificationSettings

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationSettings from a JSON string
push_notification_settings_instance = PushNotificationSettings.from_json(json)
# print the JSON string representation of the object
print(PushNotificationSettings.to_json())

# convert the object into a dict
push_notification_settings_dict = push_notification_settings_instance.to_dict()
# create an instance of PushNotificationSettings from a dict
push_notification_settings_from_dict = PushNotificationSettings.from_dict(push_notification_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


