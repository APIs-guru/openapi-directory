# NotificationChannelDescriptor

A description of a notification channel. The descriptor includes the properties of the channel and the set of labels or fields that must be specified to configure channels of a given type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A human-readable description of the notification channel type. The description may include a description of the properties of the channel and pointers to external documentation. | [optional] 
**display_name** | **str** | A human-readable name for the notification channel type. This form of the name is suitable for a user interface. | [optional] 
**labels** | [**List[LabelDescriptor]**](LabelDescriptor.md) | The set of labels that must be defined to identify a particular channel of the corresponding type. Each label includes a description for how that field should be populated. | [optional] 
**launch_stage** | **str** | The product launch stage for channels of this type. | [optional] 
**name** | **str** | The full REST resource name for this descriptor. The format is: projects/[PROJECT_ID_OR_NUMBER]/notificationChannelDescriptors/[TYPE] In the above, [TYPE] is the value of the type field. | [optional] 
**supported_tiers** | **List[str]** | The tiers that support this notification channel; the project service tier must be one of the supported_tiers. | [optional] 
**type** | **str** | The type of notification channel, such as \&quot;email\&quot; and \&quot;sms\&quot;. To view the full list of channels, see Channel descriptors (https://cloud.google.com/monitoring/alerts/using-channels-api#ncd). Notification channel types are globally unique. | [optional] 

## Example

```python
from openapi_client.models.notification_channel_descriptor import NotificationChannelDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationChannelDescriptor from a JSON string
notification_channel_descriptor_instance = NotificationChannelDescriptor.from_json(json)
# print the JSON string representation of the object
print(NotificationChannelDescriptor.to_json())

# convert the object into a dict
notification_channel_descriptor_dict = notification_channel_descriptor_instance.to_dict()
# create an instance of NotificationChannelDescriptor from a dict
notification_channel_descriptor_from_dict = NotificationChannelDescriptor.from_dict(notification_channel_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


