# CommentReplyList

A list of replies to a comment on a file in Google Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[CommentReply]**](CommentReply.md) | The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | This is always &#x60;drive#commentReplyList&#x60;. | [optional] [default to 'drive#commentReplyList']
**next_link** | **str** | A link to the next page of replies. | [optional] 
**next_page_token** | **str** | The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.comment_reply_list import CommentReplyList

# TODO update the JSON string below
json = "{}"
# create an instance of CommentReplyList from a JSON string
comment_reply_list_instance = CommentReplyList.from_json(json)
# print the JSON string representation of the object
print(CommentReplyList.to_json())

# convert the object into a dict
comment_reply_list_dict = comment_reply_list_instance.to_dict()
# create an instance of CommentReplyList from a dict
comment_reply_list_from_dict = CommentReplyList.from_dict(comment_reply_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


