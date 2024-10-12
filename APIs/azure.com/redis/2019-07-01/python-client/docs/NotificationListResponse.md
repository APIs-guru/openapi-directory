# NotificationListResponse

The response of listUpgradeNotifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of notifications. | [optional] [readonly] 
**value** | [**List[UpgradeNotification]**](UpgradeNotification.md) | List of all notifications. | [optional] 

## Example

```python
from openapi_client.models.notification_list_response import NotificationListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationListResponse from a JSON string
notification_list_response_instance = NotificationListResponse.from_json(json)
# print the JSON string representation of the object
print(NotificationListResponse.to_json())

# convert the object into a dict
notification_list_response_dict = notification_list_response_instance.to_dict()
# create an instance of NotificationListResponse from a dict
notification_list_response_from_dict = NotificationListResponse.from_dict(notification_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


