# NotificationSettingProperties

Model for properties of a NotificationSetting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_group_resource_ids** | **List[str]** | List of action group resource ids to be notified | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_setting_properties import NotificationSettingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSettingProperties from a JSON string
notification_setting_properties_instance = NotificationSettingProperties.from_json(json)
# print the JSON string representation of the object
print(NotificationSettingProperties.to_json())

# convert the object into a dict
notification_setting_properties_dict = notification_setting_properties_instance.to_dict()
# create an instance of NotificationSettingProperties from a dict
notification_setting_properties_from_dict = NotificationSettingProperties.from_dict(notification_setting_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


