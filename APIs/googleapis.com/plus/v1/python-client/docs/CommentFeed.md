# CommentFeed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**id** | **str** | The ID of this collection of comments. | [optional] 
**items** | [**List[Comment]**](Comment.md) | The comments in this page of results. | [optional] 
**kind** | **str** | Identifies this resource as a collection of comments. Value: \&quot;plus#commentFeed\&quot;. | [optional] [default to 'plus#commentFeed']
**next_link** | **str** | Link to the next page of activities. | [optional] 
**next_page_token** | **str** | The continuation token, which is used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 
**title** | **str** | The title of this collection of comments. | [optional] 
**updated** | **datetime** | The time at which this collection of comments was last updated. Formatted as an RFC 3339 timestamp. | [optional] 

## Example

```python
from openapi_client.models.comment_feed import CommentFeed

# TODO update the JSON string below
json = "{}"
# create an instance of CommentFeed from a JSON string
comment_feed_instance = CommentFeed.from_json(json)
# print the JSON string representation of the object
print(CommentFeed.to_json())

# convert the object into a dict
comment_feed_dict = comment_feed_instance.to_dict()
# create an instance of CommentFeed from a dict
comment_feed_from_dict = CommentFeed.from_dict(comment_feed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


