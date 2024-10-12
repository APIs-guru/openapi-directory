# NotificationRequest163Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_request** | [**NotificationRequest163**](NotificationRequest163.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_request163_wrapper import NotificationRequest163Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRequest163Wrapper from a JSON string
notification_request163_wrapper_instance = NotificationRequest163Wrapper.from_json(json)
# print the JSON string representation of the object
print(NotificationRequest163Wrapper.to_json())

# convert the object into a dict
notification_request163_wrapper_dict = notification_request163_wrapper_instance.to_dict()
# create an instance of NotificationRequest163Wrapper from a dict
notification_request163_wrapper_from_dict = NotificationRequest163Wrapper.from_dict(notification_request163_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


