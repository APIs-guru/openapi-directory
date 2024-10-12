# UserSecretStore

Properties of a user's secret store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_id** | **str** | The ID of the user&#39;s Key vault. | [optional] 
**key_vault_uri** | **str** | The URI of the user&#39;s Key vault. | [optional] 

## Example

```python
from openapi_client.models.user_secret_store import UserSecretStore

# TODO update the JSON string below
json = "{}"
# create an instance of UserSecretStore from a JSON string
user_secret_store_instance = UserSecretStore.from_json(json)
# print the JSON string representation of the object
print(UserSecretStore.to_json())

# convert the object into a dict
user_secret_store_dict = user_secret_store_instance.to_dict()
# create an instance of UserSecretStore from a dict
user_secret_store_from_dict = UserSecretStore.from_dict(user_secret_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


