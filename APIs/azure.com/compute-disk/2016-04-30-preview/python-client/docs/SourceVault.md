# SourceVault

The vault id is an Azure Resource Manager Resource id in the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.source_vault import SourceVault

# TODO update the JSON string below
json = "{}"
# create an instance of SourceVault from a JSON string
source_vault_instance = SourceVault.from_json(json)
# print the JSON string representation of the object
print(SourceVault.to_json())

# convert the object into a dict
source_vault_dict = source_vault_instance.to_dict()
# create an instance of SourceVault from a dict
source_vault_from_dict = SourceVault.from_dict(source_vault_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


