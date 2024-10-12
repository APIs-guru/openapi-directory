# VaultCreateOrUpdateParameters

Parameters for creating or updating a vault

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The supported Azure location where the key vault should be created. | 
**properties** | [**VaultProperties**](VaultProperties.md) |  | 
**tags** | **Dict[str, str]** | The tags that will be assigned to the key vault.  | [optional] 

## Example

```python
from openapi_client.models.vault_create_or_update_parameters import VaultCreateOrUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VaultCreateOrUpdateParameters from a JSON string
vault_create_or_update_parameters_instance = VaultCreateOrUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(VaultCreateOrUpdateParameters.to_json())

# convert the object into a dict
vault_create_or_update_parameters_dict = vault_create_or_update_parameters_instance.to_dict()
# create an instance of VaultCreateOrUpdateParameters from a dict
vault_create_or_update_parameters_from_dict = VaultCreateOrUpdateParameters.from_dict(vault_create_or_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


