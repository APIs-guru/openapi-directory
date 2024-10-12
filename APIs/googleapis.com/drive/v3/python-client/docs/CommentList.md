# CommentList

A list of comments on a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | [**List[Comment]**](Comment.md) | The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#commentList\&quot;&#x60;. | [optional] [default to 'drive#commentList']
**next_page_token** | **str** | The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 

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


