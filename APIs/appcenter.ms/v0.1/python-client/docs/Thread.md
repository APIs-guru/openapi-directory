# Thread

a thread representation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crashed** | **bool** | True if this thread crashed | [optional] 
**exception** | [**Exception**](Exception.md) |  | [optional] 
**frames** | [**List[ExceptionFramesInner]**](ExceptionFramesInner.md) | frames of that thread | 
**platform** | **str** | SDK/Platform this thread is beeing generated from | [optional] 
**relevant** | **bool** | Shows if a thread is relevant or not. Is false if all frames are non relevant, otherwise true | [optional] 
**title** | **str** | name of the thread | 

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


