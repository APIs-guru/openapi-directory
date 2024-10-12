# UserBlogs

The container of blogs for this user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**self_link** | **str** | The URL of the Blogs for this user. | [optional] 

## Example

```python
from openapi_client.models.user_blogs import UserBlogs

# TODO update the JSON string below
json = "{}"
# create an instance of UserBlogs from a JSON string
user_blogs_instance = UserBlogs.from_json(json)
# print the JSON string representation of the object
print(UserBlogs.to_json())

# convert the object into a dict
user_blogs_dict = user_blogs_instance.to_dict()
# create an instance of UserBlogs from a dict
user_blogs_from_dict = UserBlogs.from_dict(user_blogs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


