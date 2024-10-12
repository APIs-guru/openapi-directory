# StorageAccountUpdateParameters

The parameters to update on the account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**StorageAccountPropertiesUpdateParameters**](StorageAccountPropertiesUpdateParameters.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

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


