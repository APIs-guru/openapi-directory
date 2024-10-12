# BlogUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog** | [**Blog**](Blog.md) |  | [optional] 
**blog_user_info** | [**BlogPerUserInfo**](BlogPerUserInfo.md) |  | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#blogUserInfo. | [optional] 

## Example

```python
from openapi_client.models.blog_user_info import BlogUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BlogUserInfo from a JSON string
blog_user_info_instance = BlogUserInfo.from_json(json)
# print the JSON string representation of the object
print(BlogUserInfo.to_json())

# convert the object into a dict
blog_user_info_dict = blog_user_info_instance.to_dict()
# create an instance of BlogUserInfo from a dict
blog_user_info_from_dict = BlogUserInfo.from_dict(blog_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


