# PostAReplyForACommentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | [optional] 
**spoiler** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.post_a_reply_for_a_comment_request import PostAReplyForACommentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostAReplyForACommentRequest from a JSON string
post_a_reply_for_a_comment_request_instance = PostAReplyForACommentRequest.from_json(json)
# print the JSON string representation of the object
print(PostAReplyForACommentRequest.to_json())

# convert the object into a dict
post_a_reply_for_a_comment_request_dict = post_a_reply_for_a_comment_request_instance.to_dict()
# create an instance of PostAReplyForACommentRequest from a dict
post_a_reply_for_a_comment_request_from_dict = PostAReplyForACommentRequest.from_dict(post_a_reply_for_a_comment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


