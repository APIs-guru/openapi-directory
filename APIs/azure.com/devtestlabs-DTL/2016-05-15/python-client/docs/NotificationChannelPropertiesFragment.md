# NotificationChannelPropertiesFragment

Properties of a schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of notification. | [optional] 
**events** | [**List[EventFragment]**](EventFragment.md) | The list of event for which this notification is enabled. | [optional] 
**provisioning_state** | **str** | The provisioning status of the resource. | [optional] 
**unique_identifier** | **str** | The unique immutable identifier of a resource (Guid). | [optional] 
**web_hook_url** | **str** | The webhook URL to send notifications to. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_properties_fragment import NotificationChannelPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelPropertiesFragment from a JSON string
notification_channel_properties_fragment_instance = NotificationChannelPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelPropertiesFragment.to_json())

# convert the object into a dict
notification_channel_properties_fragment_dict = notification_channel_properties_fragment_instance.to_dict()
# create an instance of NotificationChannelPropertiesFragment from a dict
notification_channel_properties_fragment_from_dict = NotificationChannelPropertiesFragment.from_dict(notification_channel_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


