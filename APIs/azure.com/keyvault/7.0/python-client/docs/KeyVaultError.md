# KeyVaultError

The key vault error exception.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Error**](Error.md) |  | [optional] 

## Example

```python
from openapi_client.models.key_vault_error import KeyVaultError

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVaultError from a JSON string
key_vault_error_instance = KeyVaultError.from_json(json)
# print the JSON string representation of the object
print(KeyVaultError.to_json())

# convert the object into a dict
key_vault_error_dict = key_vault_error_instance.to_dict()
# create an instance of KeyVaultError from a dict
key_vault_error_from_dict = KeyVaultError.from_dict(key_vault_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


