# VaultUsageList

Usage for vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[VaultUsage]**](VaultUsage.md) | The list of usages for the given vault. | [optional] 

## Example

```python
from openapi_client.models.vault_usage_list import VaultUsageList

# TODO update the JSON string below
json = "{}"
# create an instance of VaultUsageList from a JSON string
vault_usage_list_instance = VaultUsageList.from_json(json)
# print the JSON string representation of the object
print(VaultUsageList.to_json())

# convert the object into a dict
vault_usage_list_dict = vault_usage_list_instance.to_dict()
# create an instance of VaultUsageList from a dict
vault_usage_list_from_dict = VaultUsageList.from_dict(vault_usage_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


