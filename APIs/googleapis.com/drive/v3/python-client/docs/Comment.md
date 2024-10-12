# Comment

A comment on a file. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** | A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/drive/api/v3/manage-comments). | [optional] 
**author** | [**User**](User.md) |  | [optional] 
**content** | **str** | The plain text content of the comment. This field is used for setting the content, while &#x60;htmlContent&#x60; should be displayed. | [optional] 
**created_time** | **datetime** | The time at which the comment was created (RFC 3339 date-time). | [optional] 
**deleted** | **bool** | Output only. Whether the comment has been deleted. A deleted comment has no content. | [optional] 
**html_content** | **str** | Output only. The content of the comment with HTML formatting. | [optional] 
**id** | **str** | Output only. The ID of the comment. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#comment\&quot;&#x60;. | [optional] [default to 'drive#comment']
**modified_time** | **datetime** | The last time the comment or any of its replies was modified (RFC 3339 date-time). | [optional] 
**quoted_file_content** | [**CommentQuotedFileContent**](CommentQuotedFileContent.md) |  | [optional] 
**replies** | [**List[Reply]**](Reply.md) | Output only. The full list of replies to the comment in chronological order. | [optional] 
**resolved** | **bool** | Output only. Whether the comment has been resolved by one of its replies. | [optional] 

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


