# NotificationListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**NotificationListByServiceDefaultResponseError**](NotificationListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.notification_list_by_service_default_response import NotificationListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationListByServiceDefaultResponse from a JSON string
notification_list_by_service_default_response_instance = NotificationListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationListByServiceDefaultResponse.to_json())

# convert the object into a dict
notification_list_by_service_default_response_dict = notification_list_by_service_default_response_instance.to_dict()
# create an instance of NotificationListByServiceDefaultResponse from a dict
notification_list_by_service_default_response_from_dict = NotificationListByServiceDefaultResponse.from_dict(notification_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


