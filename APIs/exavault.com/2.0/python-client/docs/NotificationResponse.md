# NotificationResponse

Response object for notifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Notification**](Notification.md) |  | [optional] 
**included** | [**List[NotificationCollectionResponseIncludedInner]**](NotificationCollectionResponseIncludedInner.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 

## Example

```python
from openapi_client.models.notification_response import NotificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationResponse from a JSON string
notification_response_instance = NotificationResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationResponse.to_json())

# convert the object into a dict
notification_response_dict = notification_response_instance.to_dict()
# create an instance of NotificationResponse from a dict
notification_response_from_dict = NotificationResponse.from_dict(notification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


