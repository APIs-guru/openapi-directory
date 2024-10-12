# NotificationChannel

A notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationChannelProperties**](NotificationChannelProperties.md) |  | 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_channel import NotificationChannel

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannel from a JSON string
notification_channel_instance = NotificationChannel.from_json(json)
# print the JSON string representation of the object
print(NotificationChannel.to_json())

# convert the object into a dict
notification_channel_dict = notification_channel_instance.to_dict()
# create an instance of NotificationChannel from a dict
notification_channel_from_dict = NotificationChannel.from_dict(notification_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


