# PostBlog

Data about the blog containing this Post.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the Blog that contains this Post. | [optional] 

## Example

```python
from openapi_client.models.post_blog import PostBlog

# TODO update the JSON string below
json = "{}"
# create an instance of PostBlog from a JSON string
post_blog_instance = PostBlog.from_json(json)
# print the JSON string representation of the object
print(PostBlog.to_json())

# convert the object into a dict
post_blog_dict = post_blog_instance.to_dict()
# create an instance of PostBlog from a dict
post_blog_from_dict = PostBlog.from_dict(post_blog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


