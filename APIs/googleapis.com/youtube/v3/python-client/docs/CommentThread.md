# CommentThread

A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Etag of this resource. | [optional] 
**id** | **str** | The ID that YouTube uses to uniquely identify the comment thread. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;youtube#commentThread\&quot;. | [optional] [default to 'youtube#commentThread']
**replies** | [**CommentThreadReplies**](CommentThreadReplies.md) |  | [optional] 
**snippet** | [**CommentThreadSnippet**](CommentThreadSnippet.md) |  | [optional] 

## Example

```python
from openapi_client.models.comment_thread import CommentThread

# TODO update the JSON string below
json = "{}"
# create an instance of CommentThread from a JSON string
comment_thread_instance = CommentThread.from_json(json)
# print the JSON string representation of the object
print(CommentThread.to_json())

# convert the object into a dict
comment_thread_dict = comment_thread_instance.to_dict()
# create an instance of CommentThread from a dict
comment_thread_from_dict = CommentThread.from_dict(comment_thread_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


