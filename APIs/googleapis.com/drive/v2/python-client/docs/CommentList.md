# CommentList

A list of comments on a file in Google Drive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Comment]**](Comment.md) | The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | This is always &#x60;drive#commentList&#x60;. | [optional] [default to 'drive#commentList']
**next_link** | **str** | A link to the next page of comments. | [optional] 
**next_page_token** | **str** | The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. | [optional] 
**self_link** | **str** | A link back to this list. | [optional] 

## Example

```python
from openapi_client.models.comment_list import CommentList

# TODO update the JSON string below
json = "{}"
# create an instance of CommentList from a JSON string
comment_list_instance = CommentList.from_json(json)
# print the JSON string representation of the object
print(CommentList.to_json())

# convert the object into a dict
comment_list_dict = comment_list_instance.to_dict()
# create an instance of CommentList from a dict
comment_list_from_dict = CommentList.from_dict(comment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


