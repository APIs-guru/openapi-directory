# StorageAccountCreateParameters

The storage account create parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_key_name** | **str** | Current active storage account key name. | 
**attributes** | [**StorageAccountAttributes**](StorageAccountAttributes.md) |  | [optional] 
**auto_regenerate_key** | **bool** | whether keyvault should manage the storage account for the user. | 
**regeneration_period** | **str** | The key regeneration time duration specified in ISO-8601 format. | [optional] 
**resource_id** | **str** | Storage account resource id. | 
**tags** | **Dict[str, str]** | Application specific metadata in the form of key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.storage_account_create_parameters import StorageAccountCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountCreateParameters from a JSON string
storage_account_create_parameters_instance = StorageAccountCreateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountCreateParameters.to_json())

# convert the object into a dict
storage_account_create_parameters_dict = storage_account_create_parameters_instance.to_dict()
# create an instance of StorageAccountCreateParameters from a dict
storage_account_create_parameters_from_dict = StorageAccountCreateParameters.from_dict(storage_account_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


