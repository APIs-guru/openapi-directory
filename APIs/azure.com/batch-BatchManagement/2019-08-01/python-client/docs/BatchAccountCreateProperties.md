# BatchAccountCreateProperties

The properties of a Batch account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_storage** | [**AutoStorageBaseProperties**](AutoStorageBaseProperties.md) |  | [optional] 
**key_vault_reference** | [**KeyVaultReference**](KeyVaultReference.md) |  | [optional] 
**pool_allocation_mode** | [**PoolAllocationMode**](PoolAllocationMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_account_create_properties import BatchAccountCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAccountCreateProperties from a JSON string
batch_account_create_properties_instance = BatchAccountCreateProperties.from_json(json)
# print the JSON string representation of the object
print(BatchAccountCreateProperties.to_json())

# convert the object into a dict
batch_account_create_properties_dict = batch_account_create_properties_instance.to_dict()
# create an instance of BatchAccountCreateProperties from a dict
batch_account_create_properties_from_dict = BatchAccountCreateProperties.from_dict(batch_account_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


