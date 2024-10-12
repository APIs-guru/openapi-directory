# PostUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of this entity. Always blogger#postUserInfo. | [optional] 
**post** | [**Post**](Post.md) |  | [optional] 
**post_user_info** | [**PostPerUserInfo**](PostPerUserInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_user_info import PostUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PostUserInfo from a JSON string
post_user_info_instance = PostUserInfo.from_json(json)
# print the JSON string representation of the object
print(PostUserInfo.to_json())

# convert the object into a dict
post_user_info_dict = post_user_info_instance.to_dict()
# create an instance of PostUserInfo from a dict
post_user_info_from_dict = PostUserInfo.from_dict(post_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


