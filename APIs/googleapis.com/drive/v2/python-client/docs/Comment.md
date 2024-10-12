# Comment

A comment on a file in Google Drive. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** | A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Add comments and replies](https://developers.google.com/drive/api/v2/manage-comments). | [optional] 
**author** | [**User**](User.md) |  | [optional] 
**comment_id** | **str** | Output only. The ID of the comment. | [optional] 
**content** | **str** | The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment&#39;s content. | [optional] 
**context** | [**CommentContext**](CommentContext.md) |  | [optional] 
**created_date** | **datetime** | The date when this comment was first created. | [optional] 
**deleted** | **bool** | Output only. Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed. | [optional] 
**file_id** | **str** | Output only. The file which this comment is addressing. | [optional] 
**file_title** | **str** | Output only. The title of the file which this comment is addressing. | [optional] 
**html_content** | **str** | Output only. HTML formatted content for this comment. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#comment&#x60;. | [optional] [default to 'drive#comment']
**modified_date** | **datetime** | The date when this comment or any of its replies were last modified. | [optional] 
**replies** | [**List[CommentReply]**](CommentReply.md) | Output only. Replies to this post. | [optional] 
**self_link** | **str** | Output only. A link back to this comment. | [optional] 
**status** | **str** | Output only. The status of this comment. Status can be changed by posting a reply to a comment with the desired status. * &#x60;open&#x60; - The comment is still open. * &#x60;resolved&#x60; - The comment has been resolved by one of its replies. | [optional] 

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


