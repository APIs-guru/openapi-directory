# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerio_configuration** | **object** |  | [optional] 
**notification_type** | [**NotificationType**](NotificationType.md) |  | 
**send_on_failure** | **bool** |  | [default to True]
**send_on_success** | **bool** |  | [default to False]
**slack_configuration** | [**SlackNotificationConfiguration**](SlackNotificationConfiguration.md) |  | [optional] 

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


