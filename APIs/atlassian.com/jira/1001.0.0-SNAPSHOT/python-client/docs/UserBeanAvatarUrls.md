# UserBeanAvatarUrls


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_16x16** | **str** | The URL of the user&#39;s 16x16 pixel avatar. | [optional] 
**var_24x24** | **str** | The URL of the user&#39;s 24x24 pixel avatar. | [optional] 
**var_32x32** | **str** | The URL of the user&#39;s 32x32 pixel avatar. | [optional] 
**var_48x48** | **str** | The URL of the user&#39;s 48x48 pixel avatar. | [optional] 

## Example

```python
from openapi_client.models.user_bean_avatar_urls import UserBeanAvatarUrls

# TODO update the JSON string below
json = "{}"
# create an instance of UserBeanAvatarUrls from a JSON string
user_bean_avatar_urls_instance = UserBeanAvatarUrls.from_json(json)
# print the JSON string representation of the object
print(UserBeanAvatarUrls.to_json())

# convert the object into a dict
user_bean_avatar_urls_dict = user_bean_avatar_urls_instance.to_dict()
# create an instance of UserBeanAvatarUrls from a dict
user_bean_avatar_urls_from_dict = UserBeanAvatarUrls.from_dict(user_bean_avatar_urls_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


