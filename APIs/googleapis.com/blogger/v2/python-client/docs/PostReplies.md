# PostReplies

The container of comments on this Post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Comment]**](Comment.md) | The List of Comments for this Post. | [optional] 
**self_link** | **str** | The URL of the comments on this post. | [optional] 
**total_items** | **str** | The count of comments on this post. | [optional] 

## Example

```python
from openapi_client.models.post_replies import PostReplies

# TODO update the JSON string below
json = "{}"
# create an instance of PostReplies from a JSON string
post_replies_instance = PostReplies.from_json(json)
# print the JSON string representation of the object
print(PostReplies.to_json())

# convert the object into a dict
post_replies_dict = post_replies_instance.to_dict()
# create an instance of PostReplies from a dict
post_replies_from_dict = PostReplies.from_dict(post_replies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


