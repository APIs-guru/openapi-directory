# BlogPages

The container of pages in this blog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_link** | **str** | The URL of the container for pages in this blog. | [optional] 
**total_items** | **int** | The count of pages in this blog. | [optional] 

## Example

```python
from openapi_client.models.blog_pages import BlogPages

# TODO update the JSON string below
json = "{}"
# create an instance of BlogPages from a JSON string
blog_pages_instance = BlogPages.from_json(json)
# print the JSON string representation of the object
print(BlogPages.to_json())

# convert the object into a dict
blog_pages_dict = blog_pages_instance.to_dict()
# create an instance of BlogPages from a dict
blog_pages_from_dict = BlogPages.from_dict(blog_pages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


