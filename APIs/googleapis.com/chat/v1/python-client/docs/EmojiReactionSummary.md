# EmojiReactionSummary

The number of people who reacted to a message with a specific emoji.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emoji** | [**Emoji**](Emoji.md) |  | [optional] 
**reaction_count** | **int** | The total number of reactions using the associated emoji. | [optional] 

## Example

```python
from openapi_client.models.emoji_reaction_summary import EmojiReactionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of EmojiReactionSummary from a JSON string
emoji_reaction_summary_instance = EmojiReactionSummary.from_json(json)
# print the JSON string representation of the object
print(EmojiReactionSummary.to_json())

# convert the object into a dict
emoji_reaction_summary_dict = emoji_reaction_summary_instance.to_dict()
# create an instance of EmojiReactionSummary from a dict
emoji_reaction_summary_from_dict = EmojiReactionSummary.from_dict(emoji_reaction_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


