# SendWorkerMessagesResponse

The response to the worker messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**worker_message_responses** | [**List[WorkerMessageResponse]**](WorkerMessageResponse.md) | The servers response to the worker messages. | [optional] 

## Example

```python
from openapi_client.models.send_worker_messages_response import SendWorkerMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SendWorkerMessagesResponse from a JSON string
send_worker_messages_response_instance = SendWorkerMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(SendWorkerMessagesResponse.to_json())

# convert the object into a dict
send_worker_messages_response_dict = send_worker_messages_response_instance.to_dict()
# create an instance of SendWorkerMessagesResponse from a dict
send_worker_messages_response_from_dict = SendWorkerMessagesResponse.from_dict(send_worker_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


