# SendWorkerMessagesRequest

A request for sending worker messages to the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. | [optional] 
**worker_messages** | [**List[WorkerMessage]**](WorkerMessage.md) | The WorkerMessages to send. | [optional] 

## Example

```python
from openapi_client.models.send_worker_messages_request import SendWorkerMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendWorkerMessagesRequest from a JSON string
send_worker_messages_request_instance = SendWorkerMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(SendWorkerMessagesRequest.to_json())

# convert the object into a dict
send_worker_messages_request_dict = send_worker_messages_request_instance.to_dict()
# create an instance of SendWorkerMessagesRequest from a dict
send_worker_messages_request_from_dict = SendWorkerMessagesRequest.from_dict(send_worker_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


