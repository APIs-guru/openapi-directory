# ConversationListTimestamp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | The time that the conversation was created | [optional] 

## Example

```python
from openapi_client.models.conversation_list_timestamp import ConversationListTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationListTimestamp from a JSON string
conversation_list_timestamp_instance = ConversationListTimestamp.from_json(json)
# print the JSON string representation of the object
print(ConversationListTimestamp.to_json())

# convert the object into a dict
conversation_list_timestamp_dict = conversation_list_timestamp_instance.to_dict()
# create an instance of ConversationListTimestamp from a dict
conversation_list_timestamp_from_dict = ConversationListTimestamp.from_dict(conversation_list_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


