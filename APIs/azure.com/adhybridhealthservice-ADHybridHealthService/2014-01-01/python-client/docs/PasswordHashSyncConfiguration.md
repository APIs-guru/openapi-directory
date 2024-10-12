# PasswordHashSyncConfiguration

The password has synchronization configuration settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Indicates if the password hash synchronization configuration settings is enabled. | [optional] 
**target** | **str** | The target. | [optional] 

## Example

```python
from openapi_client.models.password_hash_sync_configuration import PasswordHashSyncConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordHashSyncConfiguration from a JSON string
password_hash_sync_configuration_instance = PasswordHashSyncConfiguration.from_json(json)
# print the JSON string representation of the object
print(PasswordHashSyncConfiguration.to_json())

# convert the object into a dict
password_hash_sync_configuration_dict = password_hash_sync_configuration_instance.to_dict()
# create an instance of PasswordHashSyncConfiguration from a dict
password_hash_sync_configuration_from_dict = PasswordHashSyncConfiguration.from_dict(password_hash_sync_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


