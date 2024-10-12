# BlogList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_user_infos** | [**List[BlogUserInfo]**](BlogUserInfo.md) | Admin level list of blog per-user information. | [optional] 
**items** | [**List[Blog]**](Blog.md) | The list of Blogs this user has Authorship or Admin rights over. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#blogList. | [optional] 

## Example

```python
from openapi_client.models.blog_list import BlogList

# TODO update the JSON string below
json = "{}"
# create an instance of BlogList from a JSON string
blog_list_instance = BlogList.from_json(json)
# print the JSON string representation of the object
print(BlogList.to_json())

# convert the object into a dict
blog_list_dict = blog_list_instance.to_dict()
# create an instance of BlogList from a dict
blog_list_from_dict = BlogList.from_dict(blog_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


