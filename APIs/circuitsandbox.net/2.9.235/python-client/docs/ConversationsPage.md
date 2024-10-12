# ConversationsPage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_list** | [**List[Conversation]**](Conversation.md) | List of conversations | [optional] 
**has_more** | **object** | Has more pages of conversations | [optional] 
**next_page_pointer** | **str** | Pointer to the next set page of conversations | [optional] 

## Example

```python
from openapi_client.models.conversations_page import ConversationsPage

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsPage from a JSON string
conversations_page_instance = ConversationsPage.from_json(json)
# print the JSON string representation of the object
print(ConversationsPage.to_json())

# convert the object into a dict
conversations_page_dict = conversations_page_instance.to_dict()
# create an instance of ConversationsPage from a dict
conversations_page_from_dict = ConversationsPage.from_dict(conversations_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


