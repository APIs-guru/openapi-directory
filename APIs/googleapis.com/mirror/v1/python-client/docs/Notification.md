# Notification

A notification delivered by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | **str** | The collection that generated the notification. | [optional] 
**item_id** | **str** | The ID of the item that generated the notification. | [optional] 
**operation** | **str** | The type of operation that generated the notification. | [optional] 
**user_actions** | [**List[UserAction]**](UserAction.md) | A list of actions taken by the user that triggered the notification. | [optional] 
**user_token** | **str** | The user token provided by the service when it subscribed for notifications. | [optional] 
**verify_token** | **str** | The secret verify token provided by the service when it subscribed for notifications. | [optional] 

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


