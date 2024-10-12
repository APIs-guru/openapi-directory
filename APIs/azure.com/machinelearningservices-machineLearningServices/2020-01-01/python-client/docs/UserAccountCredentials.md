# UserAccountCredentials

Settings for user account that gets created on each on the nodes of a compute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_user_name** | **str** | Name of the administrator user account which can be used to SSH to nodes. | 
**admin_user_password** | **str** | Password of the administrator user account. | [optional] 
**admin_user_ssh_public_key** | **str** | SSH public key of the administrator user account. | [optional] 

## Example

```python
from openapi_client.models.user_account_credentials import UserAccountCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of UserAccountCredentials from a JSON string
user_account_credentials_instance = UserAccountCredentials.from_json(json)
# print the JSON string representation of the object
print(UserAccountCredentials.to_json())

# convert the object into a dict
user_account_credentials_dict = user_account_credentials_instance.to_dict()
# create an instance of UserAccountCredentials from a dict
user_account_credentials_from_dict = UserAccountCredentials.from_dict(user_account_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


