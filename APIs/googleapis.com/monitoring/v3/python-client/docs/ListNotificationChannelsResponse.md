# ListNotificationChannelsResponse

The ListNotificationChannels response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. | [optional] 
**notification_channels** | [**List[NotificationChannel]**](NotificationChannel.md) | The notification channels defined for the specified project. | [optional] 
**total_size** | **int** | The total number of notification channels in all pages. This number is only an estimate, and may change in subsequent pages. https://aip.dev/158 | [optional] 

## Example

```python
from openapi_client.models.list_notification_channels_response import ListNotificationChannelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNotificationChannelsResponse from a JSON string
list_notification_channels_response_instance = ListNotificationChannelsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNotificationChannelsResponse.to_json())

# convert the object into a dict
list_notification_channels_response_dict = list_notification_channels_response_instance.to_dict()
# create an instance of ListNotificationChannelsResponse from a dict
list_notification_channels_response_from_dict = ListNotificationChannelsResponse.from_dict(list_notification_channels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


