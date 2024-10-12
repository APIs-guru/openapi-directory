# Comment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | [**CommentActor**](CommentActor.md) |  | [optional] 
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**id** | **str** | The ID of this comment. | [optional] 
**in_reply_to** | [**List[CommentInReplyToInner]**](CommentInReplyToInner.md) | The activity this comment replied to. | [optional] 
**kind** | **str** | Identifies this resource as a comment. Value: \&quot;plus#comment\&quot;. | [optional] [default to 'plus#comment']
**object** | [**CommentObject**](CommentObject.md) |  | [optional] 
**plusoners** | [**CommentPlusoners**](CommentPlusoners.md) |  | [optional] 
**published** | **datetime** | The time at which this comment was initially published. Formatted as an RFC 3339 timestamp. | [optional] 
**self_link** | **str** | Link to this comment resource. | [optional] 
**updated** | **datetime** | The time at which this comment was last updated. Formatted as an RFC 3339 timestamp. | [optional] 
**verb** | **str** | This comment&#39;s verb, indicating what action was performed. Possible values are:   - \&quot;post\&quot; - Publish content to the stream. | [optional] [default to 'post']

## Example

```python
from openapi_client.models.comment import Comment

# TODO update the JSON string below
json = "{}"
# create an instance of Comment from a JSON string
comment_instance = Comment.from_json(json)
# print the JSON string representation of the object
print(Comment.to_json())

# convert the object into a dict
comment_dict = comment_instance.to_dict()
# create an instance of Comment from a dict
comment_from_dict = Comment.from_dict(comment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


