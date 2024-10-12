# NotificationEvent

Details about a notification event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the event. | [optional] 
**id** | **int** | The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg). | [optional] 
**name** | **str** | The name of the event. | [optional] 
**template_event** | [**NotificationEvent**](NotificationEvent.md) | The template of the event. Only custom events configured by Jira administrators have template. | [optional] 

## Example

```python
from openapi_client.models.notification_event import NotificationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEvent from a JSON string
notification_event_instance = NotificationEvent.from_json(json)
# print the JSON string representation of the object
print(NotificationEvent.to_json())

# convert the object into a dict
notification_event_dict = notification_event_instance.to_dict()
# create an instance of NotificationEvent from a dict
notification_event_from_dict = NotificationEvent.from_dict(notification_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


