# CommentInReplyTo

Data about the comment this is in reply to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identified of the parent of this comment. | [optional] 

## Example

```python
from openapi_client.models.comment_in_reply_to import CommentInReplyTo

# TODO update the JSON string below
json = "{}"
# create an instance of CommentInReplyTo from a JSON string
comment_in_reply_to_instance = CommentInReplyTo.from_json(json)
# print the JSON string representation of the object
print(CommentInReplyTo.to_json())

# convert the object into a dict
comment_in_reply_to_dict = comment_in_reply_to_instance.to_dict()
# create an instance of CommentInReplyTo from a dict
comment_in_reply_to_from_dict = CommentInReplyTo.from_dict(comment_in_reply_to_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


