# CommentPost

Data about the post containing this comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the post containing this comment. | [optional] 

## Example

```python
from openapi_client.models.comment_post import CommentPost

# TODO update the JSON string below
json = "{}"
# create an instance of CommentPost from a JSON string
comment_post_instance = CommentPost.from_json(json)
# print the JSON string representation of the object
print(CommentPost.to_json())

# convert the object into a dict
comment_post_dict = comment_post_instance.to_dict()
# create an instance of CommentPost from a dict
comment_post_from_dict = CommentPost.from_dict(comment_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


