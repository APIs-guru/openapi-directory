# Blog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_meta_data** | **str** | The JSON custom meta-data for the Blog. | [optional] 
**description** | **str** | The description of this blog. This is displayed underneath the title. | [optional] 
**id** | **str** | The identifier for this resource. | [optional] 
**kind** | **str** | The kind of this entry. Always blogger#blog. | [optional] 
**locale** | [**BlogLocale**](BlogLocale.md) |  | [optional] 
**name** | **str** | The name of this blog. This is displayed as the title. | [optional] 
**pages** | [**BlogPages**](BlogPages.md) |  | [optional] 
**posts** | [**BlogPosts**](BlogPosts.md) |  | [optional] 
**published** | **str** | RFC 3339 date-time when this blog was published. | [optional] 
**self_link** | **str** | The API REST URL to fetch this resource from. | [optional] 
**status** | **str** | The status of the blog. | [optional] 
**updated** | **str** | RFC 3339 date-time when this blog was last updated. | [optional] 
**url** | **str** | The URL where this blog is published. | [optional] 

## Example

```python
from openapi_client.models.blog import Blog

# TODO update the JSON string below
json = "{}"
# create an instance of Blog from a JSON string
blog_instance = Blog.from_json(json)
# print the JSON string representation of the object
print(Blog.to_json())

# convert the object into a dict
blog_dict = blog_instance.to_dict()
# create an instance of Blog from a dict
blog_from_dict = Blog.from_dict(blog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


