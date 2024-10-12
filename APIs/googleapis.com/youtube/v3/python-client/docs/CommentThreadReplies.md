# CommentThreadReplies

Comments written in (direct or indirect) reply to the top level comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**List[Comment]**](Comment.md) | A limited number of replies. Unless the number of replies returned equals total_reply_count in the snippet the returned replies are only a subset of the total number of replies. | [optional] 

## Example

```python
from openapi_client.models.comment_thread_replies import CommentThreadReplies

# TODO update the JSON string below
json = "{}"
# create an instance of CommentThreadReplies from a JSON string
comment_thread_replies_instance = CommentThreadReplies.from_json(json)
# print the JSON string representation of the object
print(CommentThreadReplies.to_json())

# convert the object into a dict
comment_thread_replies_dict = comment_thread_replies_instance.to_dict()
# create an instance of CommentThreadReplies from a dict
comment_thread_replies_from_dict = CommentThreadReplies.from_dict(comment_thread_replies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


