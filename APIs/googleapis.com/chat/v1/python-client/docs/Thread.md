# Thread

A thread in a Google Chat space. For example usage, see [Start or reply to a message thread](https://developers.google.com/chat/api/guides/v1/messages/create#create-message-thread). If you specify a thread when creating a message, you can set the [`messageReplyOption`](https://developers.google.com/chat/api/reference/rest/v1/spaces.messages/create#messagereplyoption) field to determine what happens if no matching thread is found.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of the thread. Example: &#x60;spaces/{space}/threads/{thread}&#x60; | [optional] 
**thread_key** | **str** | Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread &#x60;name&#x60; field instead. | [optional] 

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


