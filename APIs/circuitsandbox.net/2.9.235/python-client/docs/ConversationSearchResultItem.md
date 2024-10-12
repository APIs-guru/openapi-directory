# ConversationSearchResultItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conv_id** | **str** | The ID of the conversation to which the matching items belong. | [optional] 
**item_ids** | **List[str]** | The conversation items which contain the search result. The list maybe empty in case a hit was found for the conversation related data like topic or participants. | [optional] 

## Example

```python
from openapi_client.models.conversation_search_result_item import ConversationSearchResultItem

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationSearchResultItem from a JSON string
conversation_search_result_item_instance = ConversationSearchResultItem.from_json(json)
# print the JSON string representation of the object
print(ConversationSearchResultItem.to_json())

# convert the object into a dict
conversation_search_result_item_dict = conversation_search_result_item_instance.to_dict()
# create an instance of ConversationSearchResultItem from a dict
conversation_search_result_item_from_dict = ConversationSearchResultItem.from_dict(conversation_search_result_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


