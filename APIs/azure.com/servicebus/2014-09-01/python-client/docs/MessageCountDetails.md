# MessageCountDetails

Message Count Details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_message_count** | **int** | Number of active messages in the queue, topic, or subscription. | [optional] [readonly] 
**dead_letter_message_count** | **int** | Number of messages that are dead lettered. | [optional] [readonly] 
**scheduled_message_count** | **int** | Number of scheduled messages. | [optional] [readonly] 
**transfer_dead_letter_message_count** | **int** | Number of messages transferred into dead letters. | [optional] [readonly] 
**transfer_message_count** | **int** | Number of messages transferred to another queue, topic, or subscription. | [optional] [readonly] 

## Example

```python
from openapi_client.models.message_count_details import MessageCountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MessageCountDetails from a JSON string
message_count_details_instance = MessageCountDetails.from_json(json)
# print the JSON string representation of the object
print(MessageCountDetails.to_json())

# convert the object into a dict
message_count_details_dict = message_count_details_instance.to_dict()
# create an instance of MessageCountDetails from a dict
message_count_details_from_dict = MessageCountDetails.from_dict(message_count_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


