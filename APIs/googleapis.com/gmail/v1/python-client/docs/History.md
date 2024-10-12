# History

A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The mailbox sequence ID. | [optional] 
**labels_added** | [**List[HistoryLabelAdded]**](HistoryLabelAdded.md) | Labels added to messages in this history record. | [optional] 
**labels_removed** | [**List[HistoryLabelRemoved]**](HistoryLabelRemoved.md) | Labels removed from messages in this history record. | [optional] 
**messages** | [**List[Message]**](Message.md) | List of messages changed in this history record. The fields for specific change types, such as &#x60;messagesAdded&#x60; may duplicate messages in this field. We recommend using the specific change-type fields instead of this. | [optional] 
**messages_added** | [**List[HistoryMessageAdded]**](HistoryMessageAdded.md) | Messages added to the mailbox in this history record. | [optional] 
**messages_deleted** | [**List[HistoryMessageDeleted]**](HistoryMessageDeleted.md) | Messages deleted (not Trashed) from the mailbox in this history record. | [optional] 

## Example

```python
from openapi_client.models.history import History

# TODO update the JSON string below
json = "{}"
# create an instance of History from a JSON string
history_instance = History.from_json(json)
# print the JSON string representation of the object
print(History.to_json())

# convert the object into a dict
history_dict = history_instance.to_dict()
# create an instance of History from a dict
history_from_dict = History.from_dict(history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


