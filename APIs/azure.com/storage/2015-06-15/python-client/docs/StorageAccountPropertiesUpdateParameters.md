# StorageAccountPropertiesUpdateParameters

The parameters used when updating a storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | The account type. Note that StandardZRS and PremiumLRS accounts cannot be changed to other account types, and other account types cannot be changed to StandardZRS or PremiumLRS. | [optional] 
**custom_domain** | [**CustomDomain**](CustomDomain.md) |  | [optional] 

## Example

```python
from openapi_client.models.storage_account_properties_update_parameters import StorageAccountPropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountPropertiesUpdateParameters from a JSON string
storage_account_properties_update_parameters_instance = StorageAccountPropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(StorageAccountPropertiesUpdateParameters.to_json())

# convert the object into a dict
storage_account_properties_update_parameters_dict = storage_account_properties_update_parameters_instance.to_dict()
# create an instance of StorageAccountPropertiesUpdateParameters from a dict
storage_account_properties_update_parameters_from_dict = StorageAccountPropertiesUpdateParameters.from_dict(storage_account_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


