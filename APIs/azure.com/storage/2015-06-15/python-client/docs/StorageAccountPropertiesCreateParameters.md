# StorageAccountPropertiesCreateParameters

The parameters used to create the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | The sku name. Required for account creation; optional for update. Note that in older versions, sku name was called accountType. | 

## Example

```python
from openapi_client.models.storage_account_properties_create_parameters import StorageAccountPropertiesCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountPropertiesCreateParameters from a JSON string
storage_account_properties_create_parameters_instance = StorageAccountPropertiesCreateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountPropertiesCreateParameters.to_json())

# convert the object into a dict
storage_account_properties_create_parameters_dict = storage_account_properties_create_parameters_instance.to_dict()
# create an instance of StorageAccountPropertiesCreateParameters from a dict
storage_account_properties_create_parameters_from_dict = StorageAccountPropertiesCreateParameters.from_dict(storage_account_properties_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


