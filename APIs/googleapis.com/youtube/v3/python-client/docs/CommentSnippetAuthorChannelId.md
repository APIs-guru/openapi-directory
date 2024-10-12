# CommentSnippetAuthorChannelId

The id of the author's YouTube channel, if any.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.comment_snippet_author_channel_id import CommentSnippetAuthorChannelId

# TODO update the JSON string below
json = "{}"
# create an instance of CommentSnippetAuthorChannelId from a JSON string
comment_snippet_author_channel_id_instance = CommentSnippetAuthorChannelId.from_json(json)
# print the JSON string representation of the object
print(CommentSnippetAuthorChannelId.to_json())

# convert the object into a dict
comment_snippet_author_channel_id_dict = comment_snippet_author_channel_id_instance.to_dict()
# create an instance of CommentSnippetAuthorChannelId from a dict
comment_snippet_author_channel_id_from_dict = CommentSnippetAuthorChannelId.from_dict(comment_snippet_author_channel_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


