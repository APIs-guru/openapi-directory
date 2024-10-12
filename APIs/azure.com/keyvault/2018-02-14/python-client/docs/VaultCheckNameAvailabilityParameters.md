# VaultCheckNameAvailabilityParameters

The parameters used to check the availability of the vault name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The vault name. | 
**type** | **str** | The type of resource, Microsoft.KeyVault/vaults | 

## Example

```python
from openapi_client.models.vault_check_name_availability_parameters import VaultCheckNameAvailabilityParameters

# TODO update the JSON string below
json = "{}"
# create an instance of VaultCheckNameAvailabilityParameters from a JSON string
vault_check_name_availability_parameters_instance = VaultCheckNameAvailabilityParameters.from_json(json)
# print the JSON string representation of the object
print(VaultCheckNameAvailabilityParameters.to_json())

# convert the object into a dict
vault_check_name_availability_parameters_dict = vault_check_name_availability_parameters_instance.to_dict()
# create an instance of VaultCheckNameAvailabilityParameters from a dict
vault_check_name_availability_parameters_from_dict = VaultCheckNameAvailabilityParameters.from_dict(vault_check_name_availability_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


