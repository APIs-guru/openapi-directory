# UpdateACommentOrReplyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | [optional] 
**spoiler** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.update_a_comment_or_reply_request import UpdateACommentOrReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateACommentOrReplyRequest from a JSON string
update_a_comment_or_reply_request_instance = UpdateACommentOrReplyRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateACommentOrReplyRequest.to_json())

# convert the object into a dict
update_a_comment_or_reply_request_dict = update_a_comment_or_reply_request_instance.to_dict()
# create an instance of UpdateACommentOrReplyRequest from a dict
update_a_comment_or_reply_request_from_dict = UpdateACommentOrReplyRequest.from_dict(update_a_comment_or_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


