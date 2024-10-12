# StorageAccountRegenerateKeyParameters

The parameters used to regenerate the storage account key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** |  | 

## Example

```python
from openapi_client.models.storage_account_regenerate_key_parameters import StorageAccountRegenerateKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountRegenerateKeyParameters from a JSON string
storage_account_regenerate_key_parameters_instance = StorageAccountRegenerateKeyParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountRegenerateKeyParameters.to_json())

# convert the object into a dict
storage_account_regenerate_key_parameters_dict = storage_account_regenerate_key_parameters_instance.to_dict()
# create an instance of StorageAccountRegenerateKeyParameters from a dict
storage_account_regenerate_key_parameters_from_dict = StorageAccountRegenerateKeyParameters.from_dict(storage_account_regenerate_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


