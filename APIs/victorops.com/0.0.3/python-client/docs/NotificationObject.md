# NotificationObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | [**NotificationDescription**](NotificationDescription.md) |  | [optional] 
**type** | [**NotificationType**](NotificationType.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_object import NotificationObject

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationObject from a JSON string
notification_object_instance = NotificationObject.from_json(json)
# print the JSON string representation of the object
print(NotificationObject.to_json())

# convert the object into a dict
notification_object_dict = notification_object_instance.to_dict()
# create an instance of NotificationObject from a dict
notification_object_from_dict = NotificationObject.from_dict(notification_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


