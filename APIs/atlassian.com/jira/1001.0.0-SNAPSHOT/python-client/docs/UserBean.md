# UserBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
**active** | **bool** | Whether the user is active. | [optional] 
**avatar_urls** | [**UserBeanAvatarUrls**](UserBeanAvatarUrls.md) | The avatars of the user. | [optional] 
**display_name** | **str** | The display name of the user. Depending on the user’s privacy setting, this may return an alternative value. | [optional] 
**key** | **str** | This property is deprecated in favor of &#x60;accountId&#x60; because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The key of the user. | [optional] 
**name** | **str** | This property is deprecated in favor of &#x60;accountId&#x60; because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The username of the user. | [optional] 
**var_self** | **str** | The URL of the user. | [optional] 

## Example

```python
from openapi_client.models.user_bean import UserBean

# TODO update the JSON string below
json = "{}"
# create an instance of UserBean from a JSON string
user_bean_instance = UserBean.from_json(json)
# print the JSON string representation of the object
print(UserBean.to_json())

# convert the object into a dict
user_bean_dict = user_bean_instance.to_dict()
# create an instance of UserBean from a dict
user_bean_from_dict = UserBean.from_dict(user_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


