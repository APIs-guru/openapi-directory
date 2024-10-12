# ListNotificationChannelDescriptorsResponse

The ListNotificationChannelDescriptors response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_descriptors** | [**List[NotificationChannelDescriptor]**](NotificationChannelDescriptor.md) | The monitored resource descriptors supported for the specified project, optionally filtered. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more results that match the request. Use the value in the page_token field in a subsequent request to fetch the next set of results. If empty, all results have been returned. | [optional] 

## Example

```python
from openapi_client.models.list_notification_channel_descriptors_response import ListNotificationChannelDescriptorsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNotificationChannelDescriptorsResponse from a JSON string
list_notification_channel_descriptors_response_instance = ListNotificationChannelDescriptorsResponse.from_json(json)
# print the JSON string representation of the object
print(ListNotificationChannelDescriptorsResponse.to_json())

# convert the object into a dict
list_notification_channel_descriptors_response_dict = list_notification_channel_descriptors_response_instance.to_dict()
# create an instance of ListNotificationChannelDescriptorsResponse from a dict
list_notification_channel_descriptors_response_from_dict = ListNotificationChannelDescriptorsResponse.from_dict(list_notification_channel_descriptors_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


