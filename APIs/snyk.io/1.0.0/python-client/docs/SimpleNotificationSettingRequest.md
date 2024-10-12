# SimpleNotificationSettingRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 

## Example

```python
from openapi_client.models.simple_notification_setting_request import SimpleNotificationSettingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleNotificationSettingRequest from a JSON string
simple_notification_setting_request_instance = SimpleNotificationSettingRequest.from_json(json)
# print the JSON string representation of the object
print(SimpleNotificationSettingRequest.to_json())

# convert the object into a dict
simple_notification_setting_request_dict = simple_notification_setting_request_instance.to_dict()
# create an instance of SimpleNotificationSettingRequest from a dict
simple_notification_setting_request_from_dict = SimpleNotificationSettingRequest.from_dict(simple_notification_setting_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


