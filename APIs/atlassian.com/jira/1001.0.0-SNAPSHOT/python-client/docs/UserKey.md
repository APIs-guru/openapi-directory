# UserKey

List of user account IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Returns *unknown* if the record is deleted and corrupted, for example, as the result of a server import. | [optional] 
**key** | **str** | This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. | [optional] 

## Example

```python
from openapi_client.models.user_key import UserKey

# TODO update the JSON string below
json = "{}"
# create an instance of UserKey from a JSON string
user_key_instance = UserKey.from_json(json)
# print the JSON string representation of the object
print(UserKey.to_json())

# convert the object into a dict
user_key_dict = user_key_instance.to_dict()
# create an instance of UserKey from a dict
user_key_from_dict = UserKey.from_dict(user_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


