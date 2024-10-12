# NotificationResponse162Wrapper

Contains the details of the response message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_response** | [**NotificationResponse162**](NotificationResponse162.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_response162_wrapper import NotificationResponse162Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationResponse162Wrapper from a JSON string
notification_response162_wrapper_instance = NotificationResponse162Wrapper.from_json(json)
# print the JSON string representation of the object
print(NotificationResponse162Wrapper.to_json())

# convert the object into a dict
notification_response162_wrapper_dict = notification_response162_wrapper_instance.to_dict()
# create an instance of NotificationResponse162Wrapper from a dict
notification_response162_wrapper_from_dict = NotificationResponse162Wrapper.from_dict(notification_response162_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


