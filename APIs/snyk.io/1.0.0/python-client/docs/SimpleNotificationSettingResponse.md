# SimpleNotificationSettingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**inherited** | **bool** | Whether the setting was found on the requested context directly or inherited from a parent | [optional] 

## Example

```python
from openapi_client.models.simple_notification_setting_response import SimpleNotificationSettingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleNotificationSettingResponse from a JSON string
simple_notification_setting_response_instance = SimpleNotificationSettingResponse.from_json(json)
# print the JSON string representation of the object
print(SimpleNotificationSettingResponse.to_json())

# convert the object into a dict
simple_notification_setting_response_dict = simple_notification_setting_response_instance.to_dict()
# create an instance of SimpleNotificationSettingResponse from a dict
simple_notification_setting_response_from_dict = SimpleNotificationSettingResponse.from_dict(simple_notification_setting_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


