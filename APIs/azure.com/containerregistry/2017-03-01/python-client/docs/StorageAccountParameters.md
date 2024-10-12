# StorageAccountParameters

The parameters of a storage account for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | The access key to the storage account. | 
**name** | **str** | The name of the storage account. | 

## Example

```python
from openapi_client.models.storage_account_parameters import StorageAccountParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountParameters from a JSON string
storage_account_parameters_instance = StorageAccountParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountParameters.to_json())

# convert the object into a dict
storage_account_parameters_dict = storage_account_parameters_instance.to_dict()
# create an instance of StorageAccountParameters from a dict
storage_account_parameters_from_dict = StorageAccountParameters.from_dict(storage_account_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


