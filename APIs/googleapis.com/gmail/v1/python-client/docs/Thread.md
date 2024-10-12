# Thread

A collection of messages representing a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history_id** | **str** | The ID of the last history record that modified this thread. | [optional] 
**id** | **str** | The unique ID of the thread. | [optional] 
**messages** | [**List[Message]**](Message.md) | The list of messages in the thread. | [optional] 
**snippet** | **str** | A short part of the message text. | [optional] 

## Example

```python
from openapi_client.models.thread import Thread

# TODO update the JSON string below
json = "{}"
# create an instance of Thread from a JSON string
thread_instance = Thread.from_json(json)
# print the JSON string representation of the object
print(Thread.to_json())

# convert the object into a dict
thread_dict = thread_instance.to_dict()
# create an instance of Thread from a dict
thread_from_dict = Thread.from_dict(thread_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


