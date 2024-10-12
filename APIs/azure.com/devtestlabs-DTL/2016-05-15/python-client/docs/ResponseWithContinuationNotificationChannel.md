# ResponseWithContinuationNotificationChannel

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[NotificationChannel]**](NotificationChannel.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_notification_channel import ResponseWithContinuationNotificationChannel

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationNotificationChannel from a JSON string
response_with_continuation_notification_channel_instance = ResponseWithContinuationNotificationChannel.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationNotificationChannel.to_json())

# convert the object into a dict
response_with_continuation_notification_channel_dict = response_with_continuation_notification_channel_instance.to_dict()
# create an instance of ResponseWithContinuationNotificationChannel from a dict
response_with_continuation_notification_channel_from_dict = ResponseWithContinuationNotificationChannel.from_dict(response_with_continuation_notification_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


