# PostPerUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blog_id** | **str** | ID of the Blog that the post resource belongs to. | [optional] 
**has_edit_access** | **bool** | True if the user has Author level access to the post. | [optional] 
**kind** | **str** | The kind of this entity. Always blogger#postPerUserInfo. | [optional] 
**post_id** | **str** | ID of the Post resource. | [optional] 
**user_id** | **str** | ID of the User. | [optional] 

## Example

```python
from openapi_client.models.post_per_user_info import PostPerUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PostPerUserInfo from a JSON string
post_per_user_info_instance = PostPerUserInfo.from_json(json)
# print the JSON string representation of the object
print(PostPerUserInfo.to_json())

# convert the object into a dict
post_per_user_info_dict = post_per_user_info_instance.to_dict()
# create an instance of PostPerUserInfo from a dict
post_per_user_info_from_dict = PostPerUserInfo.from_dict(post_per_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


