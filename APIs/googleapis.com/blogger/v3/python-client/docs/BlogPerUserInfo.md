# BlogPerUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_id** | **str** | ID of the Blog resource. | [optional] 
**has_admin_access** | **bool** | True if the user has Admin level access to the blog. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#blogPerUserInfo. | [optional] 
**photos_album_key** | **str** | The Photo Album Key for the user when adding photos to the blog. | [optional] 
**role** | **str** | Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER). | [optional] 
**user_id** | **str** | ID of the User. | [optional] 

## Example

```python
from openapi_client.models.blog_per_user_info import BlogPerUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BlogPerUserInfo from a JSON string
blog_per_user_info_instance = BlogPerUserInfo.from_json(json)
# print the JSON string representation of the object
print(BlogPerUserInfo.to_json())

# convert the object into a dict
blog_per_user_info_dict = blog_per_user_info_instance.to_dict()
# create an instance of BlogPerUserInfo from a dict
blog_per_user_info_from_dict = BlogPerUserInfo.from_dict(blog_per_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


