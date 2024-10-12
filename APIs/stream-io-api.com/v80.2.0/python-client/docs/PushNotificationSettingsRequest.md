# PushNotificationSettingsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** |  | [optional] 
**disabled_until** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.push_notification_settings_request import PushNotificationSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationSettingsRequest from a JSON string
push_notification_settings_request_instance = PushNotificationSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(PushNotificationSettingsRequest.to_json())

# convert the object into a dict
push_notification_settings_request_dict = push_notification_settings_request_instance.to_dict()
# create an instance of PushNotificationSettingsRequest from a dict
push_notification_settings_request_from_dict = PushNotificationSettingsRequest.from_dict(push_notification_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


