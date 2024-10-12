# VaultUsage

Usages of a vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | Current value of usage. | [optional] 
**limit** | **int** | Limit of usage. | [optional] 
**name** | [**NameInfo**](NameInfo.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time of usage. | [optional] 
**quota_period** | **str** | Quota period of usage. | [optional] 
**unit** | **str** | Unit of the usage. | [optional] 

## Example

```python
from openapi_client.models.vault_usage import VaultUsage

# TODO update the JSON string below
json = "{}"
# create an instance of VaultUsage from a JSON string
vault_usage_instance = VaultUsage.from_json(json)
# print the JSON string representation of the object
print(VaultUsage.to_json())

# convert the object into a dict
vault_usage_dict = vault_usage_instance.to_dict()
# create an instance of VaultUsage from a dict
vault_usage_from_dict = VaultUsage.from_dict(vault_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


