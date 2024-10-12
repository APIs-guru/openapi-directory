# BlogPosts

The container of posts in this blog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Post]**](Post.md) | The List of Posts for this Blog. | [optional] 
**self_link** | **str** | The URL of the container for posts in this blog. | [optional] 
**total_items** | **int** | The count of posts in this blog. | [optional] 

## Example

```python
from openapi_client.models.blog_posts import BlogPosts

# TODO update the JSON string below
json = "{}"
# create an instance of BlogPosts from a JSON string
blog_posts_instance = BlogPosts.from_json(json)
# print the JSON string representation of the object
print(BlogPosts.to_json())

# convert the object into a dict
blog_posts_dict = blog_posts_instance.to_dict()
# create an instance of BlogPosts from a dict
blog_posts_from_dict = BlogPosts.from_dict(blog_posts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


