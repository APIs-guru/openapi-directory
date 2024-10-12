# NotificationChannelFragment

A notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationChannelPropertiesFragment**](NotificationChannelPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_fragment import NotificationChannelFragment

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelFragment from a JSON string
notification_channel_fragment_instance = NotificationChannelFragment.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelFragment.to_json())

# convert the object into a dict
notification_channel_fragment_dict = notification_channel_fragment_instance.to_dict()
# create an instance of NotificationChannelFragment from a dict
notification_channel_fragment_from_dict = NotificationChannelFragment.from_dict(notification_channel_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


