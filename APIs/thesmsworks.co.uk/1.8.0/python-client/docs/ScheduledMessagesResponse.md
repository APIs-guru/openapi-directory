# ScheduledMessagesResponse

details of a message scheduled to be sent at a specified date and time

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch** | **bool** | Describes whether the a batch of messages has been scheduled, or just a single message | [optional] 
**id** | **str** | The scheduled message ID | [optional] 
**message** | [**ScheduledMessagesResponseMessage**](ScheduledMessagesResponseMessage.md) |  | [optional] 
**status** | **str** | The status of the scheduled message (either &#39;SCHEDULED&#39;, &#39;PROCESSED&#39; or &#39;CANCELLED&#39;) | [optional] 

## Example

```python
from openapi_client.models.scheduled_messages_response import ScheduledMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduledMessagesResponse from a JSON string
scheduled_messages_response_instance = ScheduledMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduledMessagesResponse.to_json())

# convert the object into a dict
scheduled_messages_response_dict = scheduled_messages_response_instance.to_dict()
# create an instance of ScheduledMessagesResponse from a dict
scheduled_messages_response_from_dict = ScheduledMessagesResponse.from_dict(scheduled_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


