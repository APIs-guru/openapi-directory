# Notification

A subscription to receive Google PubSub notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_attributes** | **Dict[str, str]** | An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription. | [optional] 
**etag** | **str** | HTTP 1.1 Entity tag for this subscription notification. | [optional] 
**event_types** | **List[str]** | If present, only send notifications about listed event types. If empty, sent notifications for all event types. | [optional] 
**id** | **str** | The ID of the notification. | [optional] 
**kind** | **str** | The kind of item this is. For notifications, this is always storage#notification. | [optional] [default to 'storage#notification']
**object_name_prefix** | **str** | If present, only apply this notification configuration to object names that begin with this prefix. | [optional] 
**payload_format** | **str** | The desired content of the Payload. | [optional] [default to 'JSON_API_V1']
**self_link** | **str** | The canonical URL of this notification. | [optional] 
**topic** | **str** | The Cloud PubSub topic to which this subscription publishes. Formatted as: &#39;//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}&#39; | [optional] 

## Example

```python
from openapi_client.models.notification import Notification

# TODO update the JSON string below
json = "{}"
# create an instance of Notification from a JSON string
notification_instance = Notification.from_json(json)
# print the JSON string representation of the object
print(Notification.to_json())

# convert the object into a dict
notification_dict = notification_instance.to_dict()
# create an instance of Notification from a dict
notification_from_dict = Notification.from_dict(notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


