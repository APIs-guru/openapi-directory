# CommentReply

A comment on a file in Google Drive. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**User**](User.md) |  | [optional] 
**content** | **str** | The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply&#39;s content. This field is required on inserts if no verb is specified (resolve/reopen). | [optional] 
**created_date** | **datetime** | The date when this reply was first created. | [optional] 
**deleted** | **bool** | Output only. Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed. | [optional] 
**html_content** | **str** | Output only. HTML formatted content for this reply. | [optional] 
**kind** | **str** | Output only. This is always &#x60;drive#commentReply&#x60;. | [optional] [default to 'drive#commentReply']
**modified_date** | **datetime** | The date when this reply was last modified. | [optional] 
**reply_id** | **str** | Output only. The ID of the reply. | [optional] 
**verb** | **str** | The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are: * &#x60;resolve&#x60; - To resolve a comment. * &#x60;reopen&#x60; - To reopen (un-resolve) a comment. | [optional] 

## Example

```python
from openapi_client.models.comment_reply import CommentReply

# TODO update the JSON string below
json = "{}"
# create an instance of CommentReply from a JSON string
comment_reply_instance = CommentReply.from_json(json)
# print the JSON string representation of the object
print(CommentReply.to_json())

# convert the object into a dict
comment_reply_dict = comment_reply_instance.to_dict()
# create an instance of CommentReply from a dict
comment_reply_from_dict = CommentReply.from_dict(comment_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


