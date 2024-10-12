# MessageAttemptFailingEvent

Sent after a message has been failing for a few times. It's sent on the fourth failure. It complements `message.attempt.exhausted` which is sent after the last failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MessageAttemptFailingEventData**](MessageAttemptFailingEventData.md) |  | 
**type** | **str** |  | [optional] [default to 'message.attempt.failing']

## Example

```python
from openapi_client.models.message_attempt_failing_event import MessageAttemptFailingEvent

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptFailingEvent from a JSON string
message_attempt_failing_event_instance = MessageAttemptFailingEvent.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptFailingEvent.to_json())

# convert the object into a dict
message_attempt_failing_event_dict = message_attempt_failing_event_instance.to_dict()
# create an instance of MessageAttemptFailingEvent from a dict
message_attempt_failing_event_from_dict = MessageAttemptFailingEvent.from_dict(message_attempt_failing_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


