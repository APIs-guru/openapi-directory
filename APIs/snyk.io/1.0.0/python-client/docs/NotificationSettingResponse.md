# NotificationSettingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether notifications should be sent | 
**issue_severity** | **str** | The severity levels of issues to send notifications for (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 
**issue_type** | **str** | Filter the types of issue to include in notifications (only applicable for &#x60;new-remediations-vulnerabilities&#x60; notificationType) | 
**inherited** | **bool** | Whether the setting was found on the requested context directly or inherited from a parent | [optional] 

## Example

```python
from openapi_client.models.notification_setting_response import NotificationSettingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingResponse from a JSON string
notification_setting_response_instance = NotificationSettingResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingResponse.to_json())

# convert the object into a dict
notification_setting_response_dict = notification_setting_response_instance.to_dict()
# create an instance of NotificationSettingResponse from a dict
notification_setting_response_from_dict = NotificationSettingResponse.from_dict(notification_setting_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


