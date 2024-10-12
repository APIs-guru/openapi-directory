# MessageAttemptExhaustedEventData


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
from openapi_client.models.message_attempt_exhausted_event_data import MessageAttemptExhaustedEventData

# TODO update the JSON string below
json = "{}"
# create an instance of MessageAttemptExhaustedEventData from a JSON string
message_attempt_exhausted_event_data_instance = MessageAttemptExhaustedEventData.from_json(json)
# print the JSON string representation of the object
print(MessageAttemptExhaustedEventData.to_json())

# convert the object into a dict
message_attempt_exhausted_event_data_dict = message_attempt_exhausted_event_data_instance.to_dict()
# create an instance of MessageAttemptExhaustedEventData from a dict
message_attempt_exhausted_event_data_from_dict = MessageAttemptExhaustedEventData.from_dict(message_attempt_exhausted_event_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


