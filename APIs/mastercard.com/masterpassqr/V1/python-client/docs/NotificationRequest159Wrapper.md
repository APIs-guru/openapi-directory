# NotificationRequest159Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_request** | [**NotificationRequest159**](NotificationRequest159.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_request159_wrapper import NotificationRequest159Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRequest159Wrapper from a JSON string
notification_request159_wrapper_instance = NotificationRequest159Wrapper.from_json(json)
# print the JSON string representation of the object
print(NotificationRequest159Wrapper.to_json())

# convert the object into a dict
notification_request159_wrapper_dict = notification_request159_wrapper_instance.to_dict()
# create an instance of NotificationRequest159Wrapper from a dict
notification_request159_wrapper_from_dict = NotificationRequest159Wrapper.from_dict(notification_request159_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


