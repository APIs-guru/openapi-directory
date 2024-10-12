# CommentThreadSnippet

Basic details about a comment thread.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_reply** | **bool** | Whether the current viewer of the thread can reply to it. This is viewer specific - other viewers may see a different value for this field. | [optional] 
**channel_id** | **str** | The YouTube channel the comments in the thread refer to or the channel with the video the comments refer to. If video_id isn&#39;t set the comments refer to the channel itself. | [optional] 
**is_public** | **bool** | Whether the thread (and therefore all its comments) is visible to all YouTube users. | [optional] 
**top_level_comment** | [**Comment**](Comment.md) |  | [optional] 
**total_reply_count** | **int** | The total number of replies (not including the top level comment). | [optional] 
**video_id** | **str** | The ID of the video the comments refer to, if any. No video_id implies a channel discussion comment. | [optional] 

## Example

```python
from openapi_client.models.comment_thread_snippet import CommentThreadSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of CommentThreadSnippet from a JSON string
comment_thread_snippet_instance = CommentThreadSnippet.from_json(json)
# print the JSON string representation of the object
print(CommentThreadSnippet.to_json())

# convert the object into a dict
comment_thread_snippet_dict = comment_thread_snippet_instance.to_dict()
# create an instance of CommentThreadSnippet from a dict
comment_thread_snippet_from_dict = CommentThreadSnippet.from_dict(comment_thread_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


