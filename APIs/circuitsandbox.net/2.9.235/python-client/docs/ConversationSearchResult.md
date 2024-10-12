# ConversationSearchResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matching_conversations** | [**List[ConversationSearchResultItem]**](ConversationSearchResultItem.md) | A list of result items for conversations that match the search term. | [optional] 

## Example

```python
from openapi_client.models.conversation_search_result import ConversationSearchResult

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationSearchResult from a JSON string
conversation_search_result_instance = ConversationSearchResult.from_json(json)
# print the JSON string representation of the object
print(ConversationSearchResult.to_json())

# convert the object into a dict
conversation_search_result_dict = conversation_search_result_instance.to_dict()
# create an instance of ConversationSearchResult from a dict
conversation_search_result_from_dict = ConversationSearchResult.from_dict(conversation_search_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


