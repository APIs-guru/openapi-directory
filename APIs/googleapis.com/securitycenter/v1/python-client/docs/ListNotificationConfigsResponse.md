# ListNotificationConfigsResponse

Response message for listing notification configs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results. | [optional] 
**notification_configs** | [**List[NotificationConfig]**](NotificationConfig.md) | Notification configs belonging to the requested parent. | [optional] 

## Example

```python
from openapi_client.models.list_notification_configs_response import ListNotificationConfigsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNotificationConfigsResponse from a JSON string
list_notification_configs_response_instance = ListNotificationConfigsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNotificationConfigsResponse.to_json())

# convert the object into a dict
list_notification_configs_response_dict = list_notification_configs_response_instance.to_dict()
# create an instance of ListNotificationConfigsResponse from a dict
list_notification_configs_response_from_dict = ListNotificationConfigsResponse.from_dict(list_notification_configs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


