# UserPickerUser

A user found in a search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. | [optional] 
**avatar_url** | **str** | The avatar URL of the user. | [optional] 
**display_name** | **str** | The display name of the user. Depending on the user’s privacy setting, this may be returned as null. | [optional] 
**html** | **str** | The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag. | [optional] 
**key** | **str** | This property is no longer available. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 
**name** | **str** | This property is no longer available . See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

## Example

```python
from openapi_client.models.user_picker_user import UserPickerUser

# TODO update the JSON string below
json = "{}"
# create an instance of UserPickerUser from a JSON string
user_picker_user_instance = UserPickerUser.from_json(json)
# print the JSON string representation of the object
print(UserPickerUser.to_json())

# convert the object into a dict
user_picker_user_dict = user_picker_user_instance.to_dict()
# create an instance of UserPickerUser from a dict
user_picker_user_from_dict = UserPickerUser.from_dict(user_picker_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


