# MessageAttemptFailingEventData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | 
**app_uid** | **str** | Optional unique identifier for the application | [optional] 
**endpoint_id** | **str** |  | 
**last_attempt** | [**MessageAttemptFailedData**](MessageAttemptFailedData.md) |  | 
**msg_event_id** | **str** | Optional unique identifier for the message | [optional] 
**msg_id** | **str** |  | 

## Example

```python
from openapi_client.models.message_attempt_failing_event_data import MessageAttemptFailingEventData

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptFailingEventData from a JSON string
message_attempt_failing_event_data_instance = MessageAttemptFailingEventData.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptFailingEventData.to_json())

# convert the object into a dict
message_attempt_failing_event_data_dict = message_attempt_failing_event_data_instance.to_dict()
# create an instance of MessageAttemptFailingEventData from a dict
message_attempt_failing_event_data_from_dict = MessageAttemptFailingEventData.from_dict(message_attempt_failing_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


