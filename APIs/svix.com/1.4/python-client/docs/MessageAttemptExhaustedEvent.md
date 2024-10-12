# MessageAttemptExhaustedEvent

Sent when a message delivery has failed (all of the retry attempts have been exhausted).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MessageAttemptExhaustedEventData**](MessageAttemptExhaustedEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'message.attempt.exhausted']

## Example

```python
from openapi_client.models.message_attempt_exhausted_event import MessageAttemptExhaustedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptExhaustedEvent from a JSON string
message_attempt_exhausted_event_instance = MessageAttemptExhaustedEvent.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptExhaustedEvent.to_json())

# convert the object into a dict
message_attempt_exhausted_event_dict = message_attempt_exhausted_event_instance.to_dict()
# create an instance of MessageAttemptExhaustedEvent from a dict
message_attempt_exhausted_event_from_dict = MessageAttemptExhaustedEvent.from_dict(message_attempt_exhausted_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


