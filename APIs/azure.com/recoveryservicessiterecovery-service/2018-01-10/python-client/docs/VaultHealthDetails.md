# VaultHealthDetails

Vault health details definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultHealthProperties**](VaultHealthProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault_health_details import VaultHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VaultHealthDetails from a JSON string
vault_health_details_instance = VaultHealthDetails.from_json(json)
# print the JSON string representation of the object
print(VaultHealthDetails.to_json())

# convert the object into a dict
vault_health_details_dict = vault_health_details_instance.to_dict()
# create an instance of VaultHealthDetails from a dict
vault_health_details_from_dict = VaultHealthDetails.from_dict(vault_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


