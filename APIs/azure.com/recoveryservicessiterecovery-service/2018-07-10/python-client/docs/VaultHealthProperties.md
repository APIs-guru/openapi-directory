# VaultHealthProperties

class to define the health summary of the Vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers_health** | [**ResourceHealthSummary**](ResourceHealthSummary.md) |  | [optional] 
**fabrics_health** | [**ResourceHealthSummary**](ResourceHealthSummary.md) |  | [optional] 
**protected_items_health** | [**ResourceHealthSummary**](ResourceHealthSummary.md) |  | [optional] 
**vault_errors** | [**List[HealthError]**](HealthError.md) | The list of errors on the vault. | [optional] 

## Example

```python
from openapi_client.models.vault_health_properties import VaultHealthProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VaultHealthProperties from a JSON string
vault_health_properties_instance = VaultHealthProperties.from_json(json)
# print the JSON string representation of the object
print(VaultHealthProperties.to_json())

# convert the object into a dict
vault_health_properties_dict = vault_health_properties_instance.to_dict()
# create an instance of VaultHealthProperties from a dict
vault_health_properties_from_dict = VaultHealthProperties.from_dict(vault_health_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


