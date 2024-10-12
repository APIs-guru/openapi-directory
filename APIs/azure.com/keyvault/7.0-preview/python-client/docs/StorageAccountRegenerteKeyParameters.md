# StorageAccountRegenerteKeyParameters

The storage account key regenerate parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_name** | **str** | The storage account key name. | 

## Example

```python
from openapi_client.models.storage_account_regenerte_key_parameters import StorageAccountRegenerteKeyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountRegenerteKeyParameters from a JSON string
storage_account_regenerte_key_parameters_instance = StorageAccountRegenerteKeyParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountRegenerteKeyParameters.to_json())

# convert the object into a dict
storage_account_regenerte_key_parameters_dict = storage_account_regenerte_key_parameters_instance.to_dict()
# create an instance of StorageAccountRegenerteKeyParameters from a dict
storage_account_regenerte_key_parameters_from_dict = StorageAccountRegenerteKeyParameters.from_dict(storage_account_regenerte_key_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


