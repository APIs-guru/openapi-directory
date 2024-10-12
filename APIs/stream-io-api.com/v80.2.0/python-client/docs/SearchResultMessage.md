# SearchResultMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | 
**before_message_send_failed** | **bool** |  | [optional] 
**channel** | [**ChannelResponse**](ChannelResponse.md) |  | [optional] 
**cid** | **str** |  | 
**command** | **str** |  | [optional] 
**created_at** | **datetime** |  | 
**deleted_at** | **datetime** |  | [optional] 
**html** | **str** |  | 
**i18n** | **Dict[str, str]** |  | [optional] 
**id** | **str** |  | 
**image_labels** | **Dict[str, List[str]]** |  | [optional] 
**latest_reactions** | [**List[Reaction]**](Reaction.md) |  | 
**mentioned_users** | [**List[UserObject]**](UserObject.md) |  | 
**mml** | **str** |  | [optional] 
**own_reactions** | [**List[Reaction]**](Reaction.md) |  | 
**parent_id** | **str** |  | [optional] 
**pin_expires** | **datetime** |  | [optional] 
**pinned** | **bool** |  | 
**pinned_at** | **datetime** |  | [optional] 
**pinned_by** | [**UserObject**](UserObject.md) |  | [optional] 
**quoted_message** | [**Message**](Message.md) |  | [optional] 
**quoted_message_id** | **str** |  | [optional] 
**reaction_counts** | **Dict[str, int]** |  | 
**reaction_scores** | **Dict[str, int]** |  | 
**reply_count** | **int** |  | 
**shadowed** | **bool** |  | 
**show_in_channel** | **bool** |  | [optional] 
**silent** | **bool** |  | 
**text** | **str** |  | 
**thread_participants** | [**List[UserObject]**](UserObject.md) |  | [optional] 
**type** | **str** |  | 
**updated_at** | **datetime** |  | 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_result_message import SearchResultMessage

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResultMessage from a JSON string
search_result_message_instance = SearchResultMessage.from_json(json)
# print the JSON string representation of the object
print(SearchResultMessage.to_json())

# convert the object into a dict
search_result_message_dict = search_result_message_instance.to_dict()
# create an instance of SearchResultMessage from a dict
search_result_message_from_dict = SearchResultMessage.from_dict(search_result_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


