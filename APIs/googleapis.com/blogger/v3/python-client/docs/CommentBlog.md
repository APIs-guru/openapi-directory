# CommentBlog

Data about the blog containing this comment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the blog containing this comment. | [optional] 

## Example

```python
from openapi_client.models.comment_blog import CommentBlog

# TODO update the JSON string below
json = "{}"
# create an instance of CommentBlog from a JSON string
comment_blog_instance = CommentBlog.from_json(json)
# print the JSON string representation of the object
print(CommentBlog.to_json())

# convert the object into a dict
comment_blog_dict = comment_blog_instance.to_dict()
# create an instance of CommentBlog from a dict
comment_blog_from_dict = CommentBlog.from_dict(comment_blog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


