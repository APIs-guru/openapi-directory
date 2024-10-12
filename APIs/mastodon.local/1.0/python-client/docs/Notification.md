# Notification

Represents a notification of an event relevant to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**Account**](Account.md) |  | 
**created_at** | **datetime** | The timestamp of the notification. ISO 8601 Datetime. | 
**id** | **str** | The id of the notification in the database. Cast from an integer, but not guaranteed to be a number. | 
**status** | [**Status**](Status.md) |  | [optional] 
**type** | **str** | The type of event that resulted in the notification. | 

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


