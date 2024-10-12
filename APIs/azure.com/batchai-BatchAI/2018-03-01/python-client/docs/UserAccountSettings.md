# UserAccountSettings

Settings for user account that gets created on each on the nodes of a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user_name** | **str** |  | 
**admin_user_password** | **str** |  | [optional] 
**admin_user_ssh_public_key** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_account_settings import UserAccountSettings

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccountSettings from a JSON string
user_account_settings_instance = UserAccountSettings.from_json(json)
# print the JSON string representation of the object
print(UserAccountSettings.to_json())

# convert the object into a dict
user_account_settings_dict = user_account_settings_instance.to_dict()
# create an instance of UserAccountSettings from a dict
user_account_settings_from_dict = UserAccountSettings.from_dict(user_account_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


