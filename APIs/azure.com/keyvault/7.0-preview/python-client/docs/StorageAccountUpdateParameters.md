# StorageAccountUpdateParameters

The storage account update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key_name** | **str** | The current active storage account key name. | [optional] 
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**auto_regenerate_key** | **bool** | whether keyvault should manage the storage account for the user. | [optional] 
**regeneration_period** | **str** | The key regeneration time duration specified in ISO-8601 format. | [optional] 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.storage_account_update_parameters import StorageAccountUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountUpdateParameters from a JSON string
storage_account_update_parameters_instance = StorageAccountUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountUpdateParameters.to_json())

# convert the object into a dict
storage_account_update_parameters_dict = storage_account_update_parameters_instance.to_dict()
# create an instance of StorageAccountUpdateParameters from a dict
storage_account_update_parameters_from_dict = StorageAccountUpdateParameters.from_dict(storage_account_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


