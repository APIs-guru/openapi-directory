# Comment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**CommentAuthor**](CommentAuthor.md) |  | [optional] 
**blog** | [**CommentBlog**](CommentBlog.md) |  | [optional] 
**content** | **str** | The actual content of the comment. May include HTML markup. | [optional] 
**id** | **str** | The identifier for this resource. | [optional] 
**in_reply_to** | [**CommentInReplyTo**](CommentInReplyTo.md) |  | [optional] 
**kind** | **str** | The kind of this entry. Always blogger#comment. | [optional] 
**post** | [**CommentPost**](CommentPost.md) |  | [optional] 
**published** | **str** | RFC 3339 date-time when this comment was published. | [optional] 
**self_link** | **str** | The API REST URL to fetch this resource from. | [optional] 
**status** | **str** | The status of the comment (only populated for admin users). | [optional] 
**updated** | **str** | RFC 3339 date-time when this comment was last updated. | [optional] 

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


