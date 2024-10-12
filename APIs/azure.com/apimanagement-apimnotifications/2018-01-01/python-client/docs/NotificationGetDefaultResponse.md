# NotificationGetDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**NotificationGetDefaultResponseError**](NotificationGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_get_default_response import NotificationGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationGetDefaultResponse from a JSON string
notification_get_default_response_instance = NotificationGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationGetDefaultResponse.to_json())

# convert the object into a dict
notification_get_default_response_dict = notification_get_default_response_instance.to_dict()
# create an instance of NotificationGetDefaultResponse from a dict
notification_get_default_response_from_dict = NotificationGetDefaultResponse.from_dict(notification_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


